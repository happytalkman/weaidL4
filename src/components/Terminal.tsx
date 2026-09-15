import { useState, useRef, useEffect } from 'react';

interface TerminalProps {
  open: boolean;
  onClose: () => void;
  onCommand: (cmd: string) => string;
}

export default function Terminal({ open, onClose, onCommand }: TerminalProps) {
  const [history, setHistory] = useState<string[]>([
    '╔══════════════════════════════════════════════════╗',
    '║  W.E.BIG.A.I Terminal v1.0                      ║',
    '║  Type "help" for available commands              ║',
    '╚══════════════════════════════════════════════════╝',
    '',
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!open) return null;

  const handleCommand = (cmd: string) => {
    const newHistory = [...history, `$ ${cmd}`];

    if (cmd.trim()) {
      setCmdHistory(prev => [cmd, ...prev]);
      setHistoryIdx(-1);
    }

    if (cmd === 'help') {
      newHistory.push(
        'Available commands:',
        '  help        - Show this help',
        '  clear       - Clear terminal',
        '  status      - Show system status',
        '  memory      - List stored memories',
        '  theme <n>   - Switch theme (default/ironman/tron/matrix/cyberpunk)',
        '  plugins     - List active plugins',
        '  weather     - Show weather info',
        '  time        - Show current time',
        '  echo <msg>  - Echo a message',
        '  calc <expr> - Calculate expression',
        '  exit        - Close terminal',
        '',
      );
    } else if (cmd === 'clear') {
      setHistory([]);
      return;
    } else if (cmd === 'exit') {
      onClose();
      return;
    } else if (cmd === 'status') {
      newHistory.push(
        'System Status:',
        `  CPU: ${Math.round(Math.random() * 40 + 15)}%`,
        `  Memory: ${Math.round(Math.random() * 30 + 35)}%`,
        `  GPU: ${Math.round(Math.random() * 50 + 10)}%`,
        `  Network: ${navigator.onLine ? 'Online' : 'Offline'}`,
        `  Battery: N/A`,
        '',
      );
    } else if (cmd === 'time') {
      newHistory.push(`  ${new Date().toLocaleString()}`, '');
    } else if (cmd.startsWith('echo ')) {
      newHistory.push(`  ${cmd.slice(5)}`, '');
    } else if (cmd.startsWith('calc ')) {
      try {
        const expr = cmd.slice(5);
        const result = Function(`"use strict"; return (${expr})`)();
        newHistory.push(`  = ${result}`, '');
      } catch {
        newHistory.push('  Error: Invalid expression', '');
      }
    } else if (cmd === 'plugins') {
      newHistory.push(
        'Active Plugins:',
        '  [✓] Calculator',
        '  [✓] DateTime',
        '  [✓] UUID Generator',
        '  [✓] Base64 Encoder/Decoder',
        '  [✓] Word Counter',
        '',
      );
    } else if (cmd) {
      const result = onCommand(cmd);
      newHistory.push(`  ${result}`, '');
    }

    setHistory(newHistory);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const newIdx = Math.min(historyIdx + 1, cmdHistory.length - 1);
        setHistoryIdx(newIdx);
        setInput(cmdHistory[newIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const newIdx = historyIdx - 1;
        setHistoryIdx(newIdx);
        setInput(cmdHistory[newIdx]);
      } else {
        setHistoryIdx(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative w-[700px] h-[500px] rounded-lg border border-[#1a5c7a] bg-[#00060a] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="h-8 flex items-center justify-between px-3 bg-[#010d14] border-b border-[#0d3347]">
          <span className="text-[9px] font-bold text-[#00d4ff]">◈ TERMINAL</span>
          <button onClick={onClose} className="text-[8px] text-[#3a8a9a] hover:text-[#ff3355]">✕ CLOSE</button>
        </div>

        {/* Terminal body */}
        <div className="flex-1 overflow-y-auto p-3 font-mono text-[10px] leading-relaxed">
          {history.map((line, i) => (
            <div key={i} className={`${line.startsWith('$') ? 'text-[#00ff88]' : 'text-[#8ffcff]'}`}>
              {line || '\u00A0'}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="p-2 border-t border-[#0d3347] flex items-center gap-2">
          <span className="text-[10px] text-[#00ff88] font-mono">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-[10px] text-[#8ffcff] font-mono outline-none"
            autoFocus
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}
