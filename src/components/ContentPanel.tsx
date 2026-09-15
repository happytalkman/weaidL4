interface ContentPanelProps {
  title: string;
  content: string;
  visible: boolean;
}

export default function ContentPanel({ title, content, visible }: ContentPanelProps) {
  if (!visible) return null;

  return (
    <div className="h-full overflow-y-auto bg-[#010d14] border border-[#0d3347] rounded p-3">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[8px] font-bold text-[#00d4ff]">◈</span>
        <span className="text-[8px] font-bold text-[#00d4ff] uppercase">{title}</span>
      </div>
      <div className="h-px bg-[#0d3347] mb-2" />
      <div className="text-[8px] text-[#8ffcff] leading-relaxed whitespace-pre-wrap">
        {content}
      </div>
    </div>
  );
}
