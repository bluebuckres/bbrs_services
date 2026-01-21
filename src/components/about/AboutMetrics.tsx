import { Rocket, Globe, BadgeCheck } from "lucide-react";

export function AboutMetrics() {
    return (
        <section className="py-24 px-6 bg-[#f5f2eb]/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                    <div className="bg-white p-10 rounded-[5rem_2rem_5rem_2rem] border border-black/5 h-[320px] flex flex-col justify-between group hover:border-[#9d88cc]/40 transition-all shadow-sm">
                        <Rocket className="text-[#9d88cc] w-12 h-12 group-hover:scale-110 transition-transform" />
                        <div>
                            <h3 className="text-6xl font-display mb-2 text-[#2d2d2d]">13+</h3>
                            <p className="text-[#2d2d2d]/40 font-medium uppercase tracking-widest text-xs">
                                Major Projects Delivered
                            </p>
                        </div>
                    </div>
                    <div className="bg-white p-10 rounded-[2rem_4rem_2rem_6rem] border border-black/5 h-[400px] flex flex-col justify-between group hover:border-[#9d88cc]/40 transition-all shadow-sm">
                        <Globe className="text-[#9d88cc] w-12 h-12 group-hover:scale-110 transition-transform" />
                        <div>
                            <h3 className="text-7xl font-display mb-2 text-[#2d2d2d]">50+</h3>
                            <p className="text-[#2d2d2d]/40 font-medium uppercase tracking-widest text-xs">Global Clients</p>
                        </div>
                    </div>
                    <div className="bg-white p-10 rounded-2xl border border-black/5 h-[280px] flex flex-col justify-between group hover:border-[#9d88cc]/40 transition-all shadow-sm">
                        <BadgeCheck className="text-[#9d88cc] w-12 h-12 group-hover:scale-110 transition-transform" />
                        <div>
                            <h3 className="text-5xl font-display mb-2 text-[#2d2d2d]">95%</h3>
                            <p className="text-[#2d2d2d]/40 font-medium uppercase tracking-widest text-xs">Client Retention Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
