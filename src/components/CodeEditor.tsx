import { useState } from 'react';
import { executeCode } from '../lib/plugins';

interface CodeEditorProps {
  open: boolean;
  onClose: () => void;
}

export default function CodeEditor({ open, onClose }: CodeEditorProps) {
  const [code, setCode] = useState('// Write JavaScript here\nconst greeting = "Hello from WEAID!";\nconsole.log(greeting);\n\n// Try some math\nconst result = 2 + 2;\nconsole.log(`2 + 2 = ${result}`);\n\n// Return a value\nreturn { success: true, result };');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [running, setRunning] = useState(false);

  if (!open) return null;

  const handleRun = async () => {
    setRunning(true);
    setOutput('Executing...');
    try {
      const result = await executeCode(code, language);
      setOutput(result);
    } catch (e: any) {
      setOutput(`Error: ${e.message}`);
    }
    setRunning(false);
  };

  const examples = {
    fibonacci: `// Fibonacci sequence
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

for (let i = 0; i < 10; i++) {
  console.log(\`fib(\${i}) = \${fib(i)}\`);
}`,
    arrayOps: `// Array operations
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = numbers.filter(n => n % 2 === 0);
console.log('Even:', even);

const sum = numbers.reduce((a, b) => a + b, 0);
console.log('Sum:', sum);

const doubled = numbers.map(n => n * 2);
console.log('Doubled:', doubled);`,
    async: `// Async simulation
async function fetchData() {
  console.log('Fetching data...');
  await new Promise(r => setTimeout(r, 1000));
  return { name: 'WEAID', status: 'active' };
}

const data = await fetchData();
console.log('Data:', JSON.stringify(data));`,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative w-[800px] h-[600px] rounded-lg border border-[#1a5c7a] bg-[#00060a] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="h-10 flex items-center justify-between px-3 bg-[#010d14] border-b border-[#0d3347]">
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-bold text-[#00d4ff]">◈ CODE EDITOR</span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-[#000d12] border border-[#0d3347] rounded px-2 py-0.5 text-[8px] text-[#8ffcff] outline-none"
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python (info)</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            {/* Examples */}
            <select
              onChange={(e) => {
                if (e.target.value && examples[e.target.value as keyof typeof examples]) {
                  setCode(examples[e.target.value as keyof typeof examples]);
                }
                e.target.value = '';
              }}
              className="bg-[#000d12] border border-[#0d3347] rounded px-2 py-0.5 text-[8px] text-[#5ab8cc] outline-none"
              defaultValue=""
            >
              <option value="" disabled>Examples...</option>
              <option value="fibonacci">Fibonacci</option>
              <option value="arrayOps">Array Ops</option>
              <option value="async">Async</option>
            </select>
            <button
              onClick={handleRun}
              disabled={running}
              className="px-3 py-1 bg-[#001f2e] border border-[#00d4ff] rounded text-[8px] font-bold text-[#00d4ff] hover:bg-[#002f3e] disabled:opacity-50 transition-all"
            >
              {running ? '⏳ RUNNING...' : '▶ RUN'}
            </button>
            <button onClick={onClose} className="text-[8px] text-[#3a8a9a] hover:text-[#ff3355]">✕ CLOSE</button>
          </div>
        </div>

        {/* Editor + Output */}
        <div className="flex-1 flex overflow-hidden">
          {/* Code editor */}
          <div className="flex-1 flex flex-col border-r border-[#0d3347]">
            <div className="h-6 px-3 flex items-center bg-[#010d14] border-b border-[#0d3347]">
              <span className="text-[7px] text-[#3a8a9a]">EDITOR</span>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="flex-1 bg-[#00060a] text-[10px] text-[#8ffcff] font-mono p-3 resize-none outline-none leading-relaxed"
              spellCheck={false}
              style={{ tabSize: 2 }}
            />
          </div>

          {/* Output */}
          <div className="w-[300px] flex flex-col">
            <div className="h-6 px-3 flex items-center bg-[#010d14] border-b border-[#0d3347]">
              <span className="text-[7px] text-[#3a8a9a]">OUTPUT</span>
            </div>
            <div className="flex-1 overflow-y-auto p-3 font-mono text-[9px] text-[#00ff88] leading-relaxed whitespace-pre-wrap bg-[#00060a]">
              {output || 'Click RUN to execute code...'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
