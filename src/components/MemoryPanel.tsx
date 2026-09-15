import { useRef } from 'react';
import { exportMemory, importMemory } from '../lib/db';

interface MemoryEntry {
  key: string;
  value: string;
  category: string;
  updated: string;
}

interface MemoryPanelProps {
  open: boolean;
  onClose: () => void;
  entries: MemoryEntry[];
  onDelete: (key: string, category: string) => void;
}

const CATEGORY_COLORS: Record<string, string> = {
  identity: '#00d4ff',
  preferences: '#ff6b00',
  projects: '#00ff88',
  relationships: '#cc44ff',
  wishes: '#ffcc00',
  notes: '#5ab8cc',
};

export default function MemoryPanel({ open, onClose, entries, onDelete }: MemoryPanelProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!open) return null;

  const handleExport = async () => {
    const json = await exportMemory();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `weaid-memory-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    try {
      const count = await importMemory(text);
      alert(`Imported ${count} memories. Refresh to see changes.`);
      window.location.reload();
    } catch (err) {
      alert('Failed to import: Invalid file format');
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-[560px] max-h-[85vh] overflow-hidden flex flex-col rounded-lg border border-[#1a5c7a] bg-[rgba(0,6,10,0.97)] p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-[12px] font-bold text-[#00d4ff]">🧠 WHAT WEAID REMEMBERS</h2>
          <div className="flex gap-2">
            <button
              onClick={handleExport}
              className="px-2 py-0.5 text-[7px] font-bold border border-[#0d3347] rounded text-[#5ab8cc] hover:text-[#00d4ff] hover:border-[#00d4ff] transition-all"
            >
              📥 EXPORT
            </button>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-2 py-0.5 text-[7px] font-bold border border-[#0d3347] rounded text-[#5ab8cc] hover:text-[#00d4ff] hover:border-[#00d4ff] transition-all"
            >
              📤 IMPORT
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />
          </div>
        </div>
        <div className="h-px bg-[#0d3347] mb-3" />
        <p className="text-[7px] text-[#3a8a9a] mb-3">
          {entries.length} stored facts — persisted in IndexedDB. Nothing leaves your machine.
        </p>

        {/* Entries */}
        <div className="flex-1 overflow-y-auto space-y-1.5 mb-3">
          {entries.length === 0 ? (
            <div className="text-[9px] text-[#5ab8cc] text-center py-4">
              Nothing stored yet.
            </div>
          ) : (
            entries.map((entry, i) => (
              <div key={i} className="flex items-center gap-2 py-1.5 px-2 rounded bg-[#010f18] border border-[#0d3347]">
                <div className="flex-1 min-w-0">
                  <span className="text-[8px] font-bold text-[#d8f8ff]">
                    {entry.key.replace(/_/g, ' ')}
                  </span>
                  <span className="text-[8px] text-[#5ab8cc] ml-1">— {entry.value}</span>
                </div>
                <span
                  className="text-[7px] px-1.5 py-0.5 rounded border shrink-0"
                  style={{
                    color: CATEGORY_COLORS[entry.category] || '#5ab8cc',
                    borderColor: CATEGORY_COLORS[entry.category] || '#0d3347',
                  }}
                >
                  {entry.category.slice(0, 4)}
                </span>
                <span className="text-[7px] text-[#3a8a9a] shrink-0">{entry.updated}</span>
                <button
                  onClick={() => onDelete(entry.key, entry.category)}
                  className="w-5 h-5 flex items-center justify-center text-[8px] font-bold text-[#3a8a9a] border border-[#0d3347] rounded hover:text-[#ff3355] hover:border-[#ff3355] transition-all shrink-0"
                  title="Forget this"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="w-full h-8 bg-transparent border border-[#0d3347] rounded text-[9px] text-[#5ab8cc] hover:text-[#8ffcff] hover:border-[#1a5c7a] transition-all"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}
