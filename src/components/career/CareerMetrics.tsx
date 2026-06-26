import { Globe, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function CareerMetrics() {
    return (
        <section className="max-w-7xl mx-auto px-6 mb-40">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div className="relative group overflow-hidden rounded-[2.5rem] bg-[#0c0c0c] border border-white/10 flex flex-col justify-between min-h-[480px] hover:border-neon-purple/30 transition-colors duration-500 shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none" />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl -z-10" />
                    {/* Glow Effect */}
                    <div className="absolute top-[-20%] right-[-20%] w-[400px] h-[400px] bg-neon-purple/10 blur-[120px] rounded-full group-hover:bg-neon-purple/20 transition-all duration-700" />

                    {/* Pattern Overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.07]"
                        style={{
                            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                            maskImage: "radial-gradient(circle at 100% 0%, black, transparent 80%)",
                        }}
                    />

                    <div className="relative z-10 p-12 md:p-16 flex flex-col h-full justify-between">
                        <div className="flex justify-between items-start">
                            <div className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 text-neon-purple">
                                <Globe className="w-7 h-7" />
                            </div>
                            <span className="text-white/20 font-mono text-xs tracking-widest">MTRC_01</span>
                        </div>
                        <div className="mt-auto">
                            <h2 className="font-display text-[8rem] lg:text-[10rem] leading-[0.8] text-white tracking-tight -ml-2 mb-2">
                                13
                                <span className="text-neon-purple font-serif italic text-7xl lg:text-9xl ml-2 align-top inline-block mt-4">
                                    +
                                </span>
                            </h2>
                            <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent my-8" />
                            <div className="flex flex-col gap-1">
                                <span className="text-gray-400 font-sans text-sm tracking-[0.2em] uppercase font-semibold">
                                    Global Projects
                                </span>
                                <p className="text-white/30 text-sm font-light">Deployed across 4 continents</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative group overflow-hidden rounded-[2.5rem] bg-[#0c0c0c] border border-white/10 flex flex-col justify-between min-h-[480px] hover:border-neon-purple/30 transition-colors duration-500 shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none" />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl -z-10" />
                    {/* Glow Effect */}
                    <div className="absolute bottom-[-20%] left-[-20%] w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full group-hover:bg-indigo-500/20 transition-all duration-700" />

                    {/* Curve Overlay */}
                    <svg
                        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,400 C100,300 300,500 600,200"
                            fill="none"
                            stroke="white"
                            strokeDasharray="10 10"
                            strokeWidth="2"
                        />
                        <path d="M0,200 C200,400 400,100 800,300" fill="none" stroke="white" strokeWidth="1" />
                    </svg>

                    <div className="relative z-10 p-12 md:p-16 flex flex-col h-full justify-between">
                        <div className="flex justify-between items-start">
                            <div className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 text-neon-purple">
                                <Building2 className="w-7 h-7" />
                            </div>
                            <span className="text-white/20 font-mono text-xs tracking-widest">MTRC_02</span>
                        </div>
                        <div className="mt-auto">
                            <h2 className="font-display text-[8rem] lg:text-[10rem] leading-[0.8] text-white tracking-tight -ml-2 mb-2">
                                50
                                <span className="text-neon-purple font-serif italic text-7xl lg:text-9xl ml-2 align-top inline-block mt-4">
                                    +
                                </span>
                            </h2>
                            <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent my-8" />
                            <div className="flex flex-col gap-1">
                                <span className="text-gray-400 font-sans text-sm tracking-[0.2em] uppercase font-semibold">
                                    Enterprise Clients
                                </span>
                                <p className="text-white/30 text-sm font-light">Trusted by Fortune 500 leaders</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
