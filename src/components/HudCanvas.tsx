import { useEffect, useRef, useCallback } from 'react';

interface HudCanvasProps {
  state: string;
  speaking: boolean;
  muted: boolean;
  audioLevel: number;
  assistantName: string;
}

export default function HudCanvas({ state, speaking, muted, audioLevel, assistantName }: HudCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const stateRef = useRef({ state, speaking, muted, audioLevel, assistantName });

  // Keep refs in sync
  stateRef.current = { state, speaking, muted, audioLevel, assistantName };

  const draw = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const { state: st, speaking: spk, muted: mt, audioLevel: amp } = stateRef.current;
    const W = width;
    const H = height;
    const cx = W / 2;
    const cy = H / 2;
    const fw = Math.min(W, H);
    const t = performance.now() / 1000;

    // Clear
    ctx.fillStyle = '#00060a';
    ctx.fillRect(0, 0, W, H);

    // Grid dots
    ctx.fillStyle = '#001f2e';
    for (let x = 0; x < W; x += 48) {
      for (let y = 0; y < H; y += 48) {
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const rFace = fw * 0.31;
    const halo = mt ? 25 : (spk ? 120 + amp * 95 : 55 + amp * 75);
    const scale = mt ? 1.0 : (spk ? 1.03 + amp * 0.13 : 1.0 + amp * 0.06);

    // Halo glow rings
    for (let i = 0; i < 10; i++) {
      const r = rFace * (1.8 - i * 0.08);
      const frc = 1.0 - i / 10;
      const a = Math.max(0, Math.min(255, Math.floor(halo * 0.085 * frc)));
      ctx.strokeStyle = mt ? `rgba(255,51,102,${a/255})` : `rgba(0,212,255,${a/255})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Pulse rings
    for (let p = 0; p < 3; p++) {
      const pr = ((t * (spk ? 4.2 : 2.0) * 30 + p * 120) % (fw * 0.74));
      const a = Math.max(0, Math.floor(230 * (1.0 - pr / (fw * 0.74))));
      ctx.strokeStyle = mt ? `rgba(255,51,102,${a/255})` : `rgba(0,212,255,${a/255})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, pr, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Spinning arc rings
    const rings = [
      { rFrac: 0.48, w: 3, arcLen: 115, gap: 78, speed: spk ? 1.3 : 0.55 },
      { rFrac: 0.40, w: 2, arcLen: 78, gap: 55, speed: spk ? -0.9 : -0.35 },
      { rFrac: 0.32, w: 1, arcLen: 56, gap: 40, speed: spk ? 2.0 : 0.9 },
    ];

    rings.forEach((ring, idx) => {
      const ringR = fw * ring.rFrac;
      const baseAngle = t * ring.speed * (1 + amp * 1.6) * Math.PI;
      const aVal = Math.max(0, Math.min(255, Math.floor(halo * (1.0 - idx * 0.18))));
      ctx.strokeStyle = mt ? `rgba(255,51,102,${aVal/255})` : `rgba(0,212,255,${aVal/255})`;
      ctx.lineWidth = ring.w;

      let angle = baseAngle;
      while (angle < baseAngle + Math.PI * 2) {
        ctx.beginPath();
        ctx.arc(cx, cy, ringR, angle, angle + (ring.arcLen * Math.PI / 180));
        ctx.stroke();
        angle += (ring.arcLen + ring.gap) * Math.PI / 180;
      }
    });

    // Scanners
    const sr = fw * 0.50;
    const sa = Math.min(255, Math.floor(halo * 1.5));
    const scanAngle1 = t * (spk ? 3.0 : 1.3) * (1 + amp * 1.6);
    const scanAngle2 = -t * (spk ? 2.0 : 0.75) * (1 + amp * 1.6);
    const ex = spk ? 75 : 44;

    ctx.strokeStyle = mt ? `rgba(255,51,102,${sa/255})` : `rgba(0,212,255,${sa/255})`;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(cx, cy, sr, scanAngle1, scanAngle1 + ex * Math.PI / 180);
    ctx.stroke();

    ctx.strokeStyle = `rgba(255,107,0,${sa/510})`;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, sr, scanAngle2, scanAngle2 + ex * Math.PI / 180);
    ctx.stroke();

    // Tick marks
    const tOut = fw * 0.497;
    const tIn = fw * 0.474;
    ctx.strokeStyle = 'rgba(0,212,255,0.55)';
    ctx.lineWidth = 1;
    for (let deg = 0; deg < 360; deg += 10) {
      const rad = (deg * Math.PI) / 180;
      const inn = deg % 30 === 0 ? tIn : tIn + 6;
      ctx.beginPath();
      ctx.moveTo(cx + tOut * Math.cos(rad), cy - tOut * Math.sin(rad));
      ctx.lineTo(cx + inn * Math.cos(rad), cy - inn * Math.sin(rad));
      ctx.stroke();
    }

    // Crosshair
    const chR = fw * 0.51;
    const gapH = fw * 0.16;
    ctx.strokeStyle = `rgba(0,212,255,${halo * 0.5 / 255})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx - chR, cy); ctx.lineTo(cx - gapH, cy);
    ctx.moveTo(cx + gapH, cy); ctx.lineTo(cx + chR, cy);
    ctx.moveTo(cx, cy - chR); ctx.lineTo(cx, cy - gapH);
    ctx.moveTo(cx, cy + gapH); ctx.lineTo(cx, cy + chR);
    ctx.stroke();

    // Corner brackets
    const bl = 24;
    ctx.strokeStyle = 'rgba(0,212,255,0.82)';
    ctx.lineWidth = 2;
    const hl = cx - fw / 2;
    const hr = cx + fw / 2;
    const ht = cy - fw / 2;
    const hb = cy + fw / 2;
    const corners = [
      [hl, ht, 1, 1], [hr, ht, -1, 1], [hl, hb, 1, -1], [hr, hb, -1, -1]
    ];
    corners.forEach(([bx, by, dx, dy]) => {
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(bx + dx * bl, by);
      ctx.moveTo(bx, by);
      ctx.lineTo(bx, by + dy * bl);
      ctx.stroke();
    });

    // Central orb (no face image - use glowing orb)
    const orbR = Math.floor(fw * 0.27 * scale);
    const oc = mt ? [200, 0, 50] : [0, 60, 110];
    for (let i = 8; i > 0; i--) {
      const r2 = Math.floor(orbR * i / 8);
      const frc = i / 8;
      const a = Math.max(0, Math.min(255, Math.floor(halo * 1.1 * frc)));
      ctx.fillStyle = `rgba(${Math.floor(oc[0]*frc)},${Math.floor(oc[1]*frc)},${Math.floor(oc[2]*frc)},${a/255})`;
      ctx.beginPath();
      ctx.arc(cx, cy, r2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Assistant name text
    ctx.fillStyle = `rgba(0,212,255,${Math.min(255, Math.floor(halo * 2)) / 255})`;
    ctx.font = `bold 13px 'JetBrains Mono', monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(assistantName, cx, cy);

    // Particles (when speaking)
    if (spk) {
      for (let i = 0; i < 12; i++) {
        const ang = (t * 0.5 + i * 0.52) % (Math.PI * 2);
        const dist = fw * 0.28 + Math.sin(t * 2 + i) * 20;
        const px = cx + Math.cos(ang) * dist;
        const py = cy + Math.sin(ang) * dist;
        const pa = 0.3 + Math.sin(t * 3 + i * 0.7) * 0.3;
        ctx.fillStyle = `rgba(0,212,255,${pa})`;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Status text
    const sy = cy + fw * 0.40;
    let statusText = '';
    let statusColor = '#00d4ff';
    const blinkOn = Math.floor(t * 2) % 2 === 0;

    if (mt) {
      statusText = '⊘  MUTED';
      statusColor = '#ff3366';
    } else if (spk) {
      statusText = '●  SPEAKING';
      statusColor = '#ff6b00';
    } else if (st === 'THINKING') {
      statusText = `${blinkOn ? '◈' : '◇'}  THINKING`;
      statusColor = '#ffcc00';
    } else if (st === 'PROCESSING') {
      statusText = `${blinkOn ? '▷' : '▶'}  PROCESSING`;
      statusColor = '#ffcc00';
    } else if (st === 'LISTENING') {
      statusText = `${blinkOn ? '●' : '○'}  LISTENING`;
      statusColor = '#00ff88';
    } else if (st === 'SLEEPING') {
      statusText = '◌  SLEEPING';
      statusColor = '#3a8a9a';
    } else {
      statusText = `${blinkOn ? '●' : '○'}  ${st}`;
      statusColor = '#00d4ff';
    }

    ctx.fillStyle = statusColor;
    ctx.font = `bold 11px 'JetBrains Mono', monospace`;
    ctx.textAlign = 'center';
    ctx.fillText(statusText, cx, sy);

    // Waveform
    const wy = sy + 30;
    const N = 36;
    const bw = 8;
    const wx0 = (W - N * bw) / 2;
    const mid = (N - 1) / 2.0;
    const dispAmp = amp;

    for (let i = 0; i < N; i++) {
      let hgt: number;
      let color: string;

      if (mt) {
        hgt = 2;
        color = '#ff3366';
      } else {
        const env = Math.pow(1.0 - Math.abs(i - mid) / mid, 0.7);
        const shimmer = 0.55 + 0.45 * Math.sin(t * 11.3 + i * 0.7);
        const idle = 3.0 + 2.0 * Math.sin(t * 5.7 + i * 0.6);
        hgt = Math.max(2, Math.min(24, Math.floor(idle + dispAmp * 22.0 * env * shimmer)));
        if (dispAmp > 0.05) {
          color = hgt > 12 ? '#00d4ff' : '#007a99';
        } else {
          color = '#1a5c7a';
        }
      }

      ctx.fillStyle = color;
      ctx.fillRect(wx0 + i * bw, wy + 20 - hgt, bw - 1, hgt);
    }

  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width * window.devicePixelRatio;
        canvas.height = rect.height * window.devicePixelRatio;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
        draw(ctx, rect.width, rect.height);
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  );
}
