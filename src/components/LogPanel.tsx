import { useEffect, useRef, useState } from 'react';

interface LogEntry {
  text: string;
  tag: 'you' | 'ai' | 'sys' | 'err' | 'file';
  timestamp: string;
}

interface LogPanelProps {
  logs: LogEntry[];
}

const TAG_COLORS: Record<string, string> = {
  you: '#d8f8ff',
  ai: '#00d4ff',
  err: '#ff3355',
  file: '#00ff88',
  sys: '#ffcc00',
};

export default function LogPanel({ logs }: LogPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayedLogs, setDisplayedLogs] = useState<LogEntry[]>([]);

  useEffect(() => {
    setDisplayedLogs(logs);
  }, [logs]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayedLogs]);

  return (
    <div
      ref={containerRef}
      className="h-full overflow-y-auto bg-[#010d14] border border-[#0d3347] rounded p-2 font-mono text-[9px] leading-relaxed"
    >
      {displayedLogs.length === 0 ? (
        <div className="text-[#3a8a9a] text-center mt-4">
          ◈ Awaiting input...
        </div>
      ) : (
        displayedLogs.map((log, i) => (
          <div key={i} className="mb-1 flex gap-2">
            <span className="text-[#1a5c7a] shrink-0">{log.timestamp}</span>
            <span style={{ color: TAG_COLORS[log.tag] || '#8ffcff' }}>
              {log.text}
            </span>
          </div>
        ))
      )}
    </div>
  );
}
