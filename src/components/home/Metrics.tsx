export function Metrics() {
  const stats = [
    {
      value: "46+",
      label: "Projects Shipped",
      sub: "Across 4 continents · 2022–present",
    },
    {
      value: "12",
      label: "Senior Engineers",
      sub: "Every engineer has shipped at production scale",
      featured: true,
    },
    {
      value: "98%",
      label: "Client Retention",
      sub: "Because we hand off clean, documented, yours-from-day-one code",
    },
  ];

  return (
    <section className="py-6 px-6 bg-[#0a0a0a] text-white relative overflow-hidden" aria-label="Studio metrics">
      <div className="absolute inset-0 constellation-bg opacity-20 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`metric-card-glass p-6 md:p-8 rounded-2xl text-center group transition-all duration-500 hover:border-emerald-500/60 ${
                stat.featured
                  ? "scale-105 border-emerald-500/30 shadow-[0_0_30px_rgba(6,78,59,0.3)] z-20"
                  : ""
              }`}
            >
              <span
                className={`font-display block mb-1 font-light tracking-tight ${
                  stat.featured ? "text-6xl md:text-7xl text-mint" : "text-5xl md:text-6xl text-mint"
                }`}
              >
                {stat.value}
              </span>
              <p className={`font-bold tracking-[0.2em] uppercase mb-1 transition-colors ${
                stat.featured
                  ? "text-[10px] md:text-xs text-mint"
                  : "text-[9px] md:text-[10px] text-white/50 group-hover:text-mint"
              }`}>
                {stat.label}
              </p>
              <p className="text-[9px] text-white/30 tracking-wide mt-1 hidden md:block">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
