interface Stat { value: string; suffix?: string; label: string; }

export default function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-px bg-navy/12 border border-navy/12 rounded-lg overflow-hidden">
      {stats.map((s) => (
        <div key={s.label} className="stat-cell">
          <span className="block font-serif text-[2.75rem] font-black text-navy leading-none">
            {s.value}<span className="text-gold">{s.suffix}</span>
          </span>
          <span className="block text-[0.8rem] text-gray-500 mt-1">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
