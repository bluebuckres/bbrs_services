import { Rocket, Globe, BadgeCheck } from "lucide-react";

export function AboutMetrics() {
    return (
        <section className="py-24 px-6 bg-[#f5f2eb]/50 dark:bg-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                    {/* Card 1 — shorter */}
                    <div className="bg-white dark:bg-black/20 p-10 rounded-[5rem_2rem_5rem_2rem] border border-black/5 dark:border-white/10 h-[320px] flex flex-col justify-between group hover:border-emerald-600/40 transition-all shadow-sm">
                        <Rocket className="text-emerald-600 dark:text-mint w-12 h-12 group-hover:scale-110 transition-transform" />
                        <div>
                            <h3 className="text-6xl font-display mb-2 text-[#2d2d2d] dark:text-white">46</h3>
                            <p className="text-[#2d2d2d]/40 dark:text-white/40 font-medium uppercase tracking-widest text-xs">
                                Projects Shipped
                            </p>
                        </div>
                    </div>

                    {/* Card 2 — tallest / featured */}
                    <div className="bg-white dark:bg-black/20 p-10 rounded-[2rem_4rem_2rem_6rem] border border-black/5 dark:border-white/10 h-[420px] flex flex-col justify-between group hover:border-emerald-600/40 transition-all shadow-sm">
                        <Globe className="text-emerald-600 dark:text-mint w-12 h-12 group-hover:scale-110 transition-transform" />
                        <div>
                            <h3 className="text-7xl font-display mb-2 text-[#2d2d2d] dark:text-white">12</h3>
                            <p className="text-[#2d2d2d]/40 dark:text-white/40 font-medium uppercase tracking-widest text-xs">Senior Engineers</p>
                        </div>
                    </div>

                    {/* Card 3 — shortest */}
                    <div className="bg-white dark:bg-black/20 p-10 rounded-2xl border border-black/5 dark:border-white/10 h-[280px] flex flex-col justify-between group hover:border-emerald-600/40 transition-all shadow-sm">
                        <BadgeCheck className="text-emerald-600 dark:text-mint w-12 h-12 group-hover:scale-110 transition-transform" />
                        <div>
                            <h3 className="text-5xl font-display mb-2 text-[#2d2d2d] dark:text-white">95%</h3>
                            <p className="text-[#2d2d2d]/40 dark:text-white/40 font-medium uppercase tracking-widest text-xs">Client Retention Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
