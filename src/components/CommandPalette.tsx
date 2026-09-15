import { useState, useEffect, useRef } from 'react';

interface Command {
  id: string;
  label: string;
  description: string;
  shortcut?: string;
  action: () => void;
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  commands: Command[];
}

export default function CommandPalette({ open, onClose, commands }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (open) {
      setQuery('');
      setSelectedIdx(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setSelectedIdx(0);
  }, [query]);

  if (!open) return null;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIdx(prev => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIdx(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      if (filtered[selectedIdx]) {
        filtered[selectedIdx].action();
        onClose();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-[560px] max-h-[400px] rounded-lg border border-[#1a5c7a] bg-[#010d14] overflow-hidden shadow-2xl">
        {/* Search */}
        <div className="p-3 border-b border-[#0d3347]">
          <div className="flex items-center gap-2">
            <span className="text-[#00d4ff]">◈</span>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a command..."
              className="flex-1 bg-transparent text-[11px] text-[#8ffcff] outline-none placeholder:text-[#3a8a9a]"
            />
            <span className="text-[8px] text-[#3a8a9a]">ESC to close</span>
          </div>
        </div>

        {/* Results */}
        <div className="overflow-y-auto max-h-[320px]">
          {filtered.length === 0 ? (
            <div className="p-4 text-center text-[9px] text-[#3a8a9a]">
              No commands found
            </div>
          ) : (
            filtered.map((cmd, i) => (
              <button
                key={cmd.id}
                onClick={() => { cmd.action(); onClose(); }}
                onMouseEnter={() => setSelectedIdx(i)}
                className={`w-full px-4 py-2.5 flex items-center justify-between text-left transition-all ${
                  i === selectedIdx ? 'bg-[#001f2e]' : 'hover:bg-[#010f18]'
                }`}
              >
                <div>
                  <div className="text-[10px] text-[#d8f8ff]">{cmd.label}</div>
                  <div className="text-[8px] text-[#3a8a9a]">{cmd.description}</div>
                </div>
                {cmd.shortcut && (
                  <span className="text-[7px] text-[#5ab8cc] bg-[#000d14] px-2 py-0.5 rounded border border-[#0d3347]">
                    {cmd.shortcut}
                  </span>
                )}
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
