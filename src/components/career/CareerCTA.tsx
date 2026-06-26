import { ArrowUpRight } from "lucide-react";

export function CareerCTA() {
    return (
        <section className="max-w-6xl mx-auto px-6 mb-32">
            <div className="bg-[#1a1a1a] text-white rounded-[3.5rem] p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center gap-16">
                <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/20 blur-[100px] rounded-full" />
                <div className="relative z-10 md:w-2/3">
                    <span className="text-neon-purple font-bold tracking-widest uppercase text-sm mb-6 block">
                        We&apos;re Growing
                    </span>
                    <h2 className="font-display text-6xl md:text-8xl mb-8 leading-tight">
                        Join the <br />
                        <span className="serif-italic">Herd.</span>
                    </h2>
                    <p className="text-white/60 text-xl leading-relaxed max-w-xl">
                        We&apos;re looking for world-class developers, researchers, and designers who aren&apos;t afraid of the deep
                        end.
                    </p>
                </div>
                <div className="relative z-10 w-full md:w-1/3 flex flex-col gap-4">
                    <button className="w-full py-6 px-8 bg-white text-black rounded-2xl font-bold text-xl hover:bg-neon-purple hover:text-white transition-all flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(176,136,255,0.3)] border border-[#b088ff]/50">
                        View Openings
                        <ArrowUpRight className="w-6 h-6" />
                    </button>
                    <p className="text-center text-sm text-white/40">Remote & On-site (London, Sydney, NY)</p>
                </div>
            </div>
        </section>
    );
}
