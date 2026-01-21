export function Metrics() {
    return (
        <section className="py-4 px-6 bg-[#0a0a0a] text-white relative overflow-hidden">
            <div className="absolute inset-0 constellation-bg opacity-20 pointer-events-none"></div>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 lg:gap-6">
                    <div className="md:col-span-4 metric-card-glass p-6 rounded-2xl text-center group transition-all duration-500 hover:border-emerald-500/60">
                        <div className="relative">
                            <span className="font-display text-5xl md:text-6xl text-mint block mb-1 font-light tracking-tight">
                                13+
                            </span>
                            <div className="absolute inset-0 bg-emerald-500/10 blur-2xl rounded-full scale-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <p className="text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase text-white/50 group-hover:text-mint transition-colors">
                            Projects Delivered in 2024
                        </p>
                    </div>
                    <div className="md:col-span-4 metric-card-glass p-8 md:p-10 rounded-2xl text-center group transition-all duration-500 border-emerald-500/30 scale-105 shadow-[0_0_30px_rgba(6,78,59,0.3)] z-20">
                        <div className="relative">
                            <span className="font-display text-6xl md:text-7xl text-mint block mb-1 font-light tracking-tight">
                                3x
                            </span>
                            <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full scale-75 opacity-100 transition-opacity"></div>
                        </div>
                        <p className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-mint transition-colors">
                            Faster Time-to-Market
                        </p>
                    </div>
                    <div className="md:col-span-4 metric-card-glass p-6 rounded-2xl text-center group transition-all duration-500 hover:border-emerald-500/60">
                        <div className="relative">
                            <span className="font-display text-5xl md:text-6xl text-mint block mb-1 font-light tracking-tight">
                                60%
                            </span>
                            <div className="absolute inset-0 bg-emerald-500/10 blur-2xl rounded-full scale-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <p className="text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase text-white/50 group-hover:text-mint transition-colors">
                            Reduction in Dev Cycles
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
