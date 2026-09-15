import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HudCanvas3DProps {
  state: string;
  speaking: boolean;
  muted: boolean;
  audioLevel: number;
  assistantName: string;
  themeColor: string;
}

export default function HudCanvas3D({ state, speaking, muted, audioLevel, assistantName, themeColor }: HudCanvas3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animRef = useRef<number>(0);
  const ringsRef = useRef<THREE.Mesh[]>([]);
  const particlesRef = useRef<THREE.Points | null>(null);
  const coreRef = useRef<THREE.Mesh | null>(null);
  const stateRef = useRef({ state, speaking, muted, audioLevel, assistantName, themeColor });

  stateRef.current = { state, speaking, muted, audioLevel, assistantName, themeColor };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x00060a, 1);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Core sphere (glowing center)
    const coreGeo = new THREE.SphereGeometry(0.8, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.15,
      wireframe: false,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);
    coreRef.current = core;

    // Inner glow
    const glowGeo = new THREE.SphereGeometry(0.85, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    scene.add(glow);

    // Rings
    const rings: THREE.Mesh[] = [];
    const ringConfigs = [
      { radius: 1.5, tube: 0.02, color: 0x00d4ff, speed: 0.5, tiltX: 0.3, tiltY: 0 },
      { radius: 1.8, tube: 0.015, color: 0x007a99, speed: -0.3, tiltX: 0.6, tiltY: 0.4 },
      { radius: 2.1, tube: 0.01, color: 0x00d4ff, speed: 0.7, tiltX: -0.2, tiltY: 0.8 },
      { radius: 2.4, tube: 0.008, color: 0x1a5c7a, speed: -0.4, tiltX: 0.9, tiltY: -0.3 },
      { radius: 2.7, tube: 0.006, color: 0x0d3347, speed: 0.2, tiltX: -0.5, tiltY: 0.6 },
    ];

    ringConfigs.forEach((cfg) => {
      const geo = new THREE.TorusGeometry(cfg.radius, cfg.tube, 16, 100);
      const mat = new THREE.MeshBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: 0.7,
      });
      const ring = new THREE.Mesh(geo, mat);
      ring.rotation.x = cfg.tiltX;
      ring.rotation.y = cfg.tiltY;
      (ring as any)._speed = cfg.speed;
      (ring as any)._baseOpacity = 0.7;
      scene.add(ring);
      rings.push(ring);
    });
    ringsRef.current = rings;

    // Particles
    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.5 + Math.random() * 2;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const c = new THREE.Color(0x00d4ff);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // Animation
    const animate = () => {
      const { state: st, speaking: spk, muted: mt, audioLevel: amp } = stateRef.current;
      const t = performance.now() / 1000;

      // Core pulse
      if (core) {
        const scale = mt ? 0.8 : (spk ? 1.0 + amp * 0.3 : 1.0 + amp * 0.15);
        core.scale.setScalar(scale);
        (core.material as THREE.MeshBasicMaterial).opacity = mt ? 0.05 : (spk ? 0.2 + amp * 0.2 : 0.15);
        const color = mt ? 0xff3366 : (spk ? 0xff6b00 : 0x00d4ff);
        (core.material as THREE.MeshBasicMaterial).color.setHex(color);
      }

      // Ring rotation
      rings.forEach((ring, i) => {
        const speed = (ring as any)._speed;
        const speedMult = mt ? 0.2 : (spk ? 2.0 + amp * 3 : 1.0 + amp * 1.5);
        ring.rotation.z += speed * 0.01 * speedMult;
        ring.rotation.x += speed * 0.005 * speedMult;

        const baseOp = (ring as any)._baseOpacity;
        (ring.material as THREE.MeshBasicMaterial).opacity = mt ? baseOp * 0.3 : (spk ? baseOp + amp * 0.3 : baseOp);
      });

      // Particles
      if (particles) {
        particles.rotation.y += 0.001 * (spk ? 3 : 1);
        particles.rotation.x += 0.0005;
        const pos = particles.geometry.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const x = pos.getX(i);
          const y = pos.getY(i);
          const z = pos.getZ(i);
          const dist = Math.sqrt(x * x + y * y + z * z);
          const wave = Math.sin(t * 2 + dist * 2) * 0.01 * (spk ? 3 : 1);
          pos.setXYZ(i, x + wave, y + wave, z + wave);
        }
        pos.needsUpdate = true;
        (particles.material as THREE.PointsMaterial).opacity = mt ? 0.2 : (spk ? 0.6 + amp * 0.4 : 0.6);
      }

      // Camera subtle movement
      if (camera) {
        camera.position.x = Math.sin(t * 0.3) * 0.1;
        camera.position.y = Math.cos(t * 0.2) * 0.1;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    // Resize
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', handleResize);
      if (renderer && container) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach(m => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center">
          <div className="text-[14px] font-bold tracking-[0.3em] mb-2" style={{ color: muted ? '#ff3366' : '#00d4ff' }}>
            {assistantName}
          </div>
          <div className="text-[9px] tracking-wider" style={{
            color: state === 'LISTENING' ? '#00ff88' :
                   state === 'SPEAKING' ? '#ff6b00' :
                   state === 'THINKING' ? '#ffcc00' :
                   state === 'SLEEPING' ? '#3a8a9a' : '#00d4ff'
          }}>
            {muted ? '⊘ MUTED' : state}
          </div>
        </div>
      </div>
    </div>
  );
}
