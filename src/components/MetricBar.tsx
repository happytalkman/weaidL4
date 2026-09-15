interface MetricBarProps {
  label: string;
  value: number;
  text: string;
  color?: string;
}

export default function MetricBar({ label, value, text, color = '#00d4ff' }: MetricBarProps) {
  const barColor = value > 85 ? '#ff3355' : value > 65 ? '#ff6b00' : color;

  return (
    <div className="relative rounded border border-[#0f4060] bg-[#010f18] px-2 py-1.5 h-[38px]">
      <div className="flex justify-between items-center">
        <span className="text-[7px] font-bold text-[#3a8a9a] uppercase tracking-wider">{label}</span>
        <span className="text-[9px] font-bold" style={{ color: text === '--' ? '#3a8a9a' : barColor }}>
          {text}
        </span>
      </div>
      <div className="mt-1 h-[4px] rounded-full bg-[#011520] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${Math.min(100, Math.max(0, value))}%`,
            backgroundColor: barColor,
          }}
        />
      </div>
    </div>
  );
}
