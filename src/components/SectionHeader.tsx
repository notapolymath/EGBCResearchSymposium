export const SectionHeader = ({ title, subtitle, number }: { title: string, subtitle: string, number: string }) => (
  <div className="mb-20">
    <div className="flex items-center gap-4 mb-4">
      <span className="font-mono text-exeter-red font-bold text-[10px] tracking-[0.3em] uppercase">{number}</span>
      <div className="h-[1px] flex-1 bg-gray-100" />
    </div>
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-exeter-dark uppercase tracking-tight leading-none">{title}</h2>
      <p className="text-gray-400 font-mono text-[10px] uppercase tracking-[0.2em] italic max-w-xs">{subtitle}</p>
    </div>
  </div>
);
