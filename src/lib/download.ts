import JSZip from 'jszip';
import { saveAs } from 'file-saver';

// 모든 소스 파일 내용
const SOURCE_FILES: Record<string, string> = {
  'index.html': `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="W.E.BIG.A.I - Advanced AI Assistant HUD Interface" />
    <meta name="theme-color" content="#00d4ff" />
    <title>MARK LIII — W.E.BIG.A.I</title>
    <link rel="manifest" href="/manifest.json" />
    <link rel="apple-touch-icon" href="/manifest.json" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap" rel="stylesheet">
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html, body, #root {
        width: 100%; height: 100%;
        overflow: hidden;
        background: #00060a;
        font-family: 'JetBrains Mono', 'Courier New', monospace;
      }
    </style>
    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js').catch(() => {});
        });
      }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,

  'package.json': `{
  "name": "weaid-l3",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@types/file-saver": "^2.0.7",
    "@types/three": "^0.186.0",
    "file-saver": "^2.0.5",
    "jszip": "^3.10.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "three": "^0.186.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.7",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.3.4",
    "tailwindcss": "^4.1.7",
    "typescript": "^5.7.0",
    "vite": "^6.3.5"
  }
}`,

  'tsconfig.json': `{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "moduleResolution": "bundler",
    "strict": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "noEmit": true,
    "allowImportingTsExtensions": true
  },
  "include": ["src"]
}`,

  'vite.config.js': `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000,
    },
  },
});`,

  'README.md': `# W.E.BIG.A.I - Mark LIII

Advanced AI Assistant HUD Interface with 3D visualization, voice control, and real-time system monitoring.

## Features

- 🎨 **3D HUD** - Three.js based rotating rings, particles, and glowing core
- 🤖 **Gemini AI** - Real AI responses with conversation history
- 🎤 **Voice Control** - Web Speech API for voice recognition & synthesis
- 🎵 **Audio Analysis** - Web Audio API for real-time audio visualization
- 💾 **Persistent Memory** - IndexedDB for long-term data storage
- 🎭 **Theme System** - 5 themes (Default, Iron Man, Tron, Matrix, Cyberpunk)
- 💻 **Terminal** - Command-line interface
- 📝 **Code Editor** - JavaScript execution environment
- 🌤️ **Weather API** - Real-time weather data
- 🔍 **Web Search** - DuckDuckGo integration
- ⌨️ **Keyboard Shortcuts** - Ctrl+K, Ctrl+\`, Ctrl+Shift+E
- 📱 **PWA** - Offline support and push notifications

## Installation

\`\`\`bash
npm install
\`\`\`

## Development

\`\`\`bash
npm run dev
\`\`\`

## Build

\`\`\`bash
npm run build
\`\`\`

## Commands

- \`/weather [city]\` - Get weather information
- \`/search [query]\` - Web search
- \`/news [query]\` - News search
- \`/clear\` - Clear logs
- \`/status\` - System status
- \`/plugins\` - List plugins
- \`/memory\` - Open memory panel
- \`/help\` - Show help

## Keyboard Shortcuts

- \`Ctrl+K\` - Command palette
- \`Ctrl+\`\` - Terminal
- \`Ctrl+Shift+E\` - Code editor
- \`Escape\` - Close panels

## License

MIT
`,
};

export async function downloadProjectZip(): Promise<void> {
  const zip = new JSZip();

  // Add all source files
  for (const [path, content] of Object.entries(SOURCE_FILES)) {
    zip.file(path, content);
  }

  // Generate ZIP
  const blob = await zip.generateAsync({ type: 'blob' });

  // Download
  saveAs(blob, 'weaid-mark-liii-source.zip');
}
