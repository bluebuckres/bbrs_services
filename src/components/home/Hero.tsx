import { ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <main className="relative overflow-hidden pt-20 pb-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-hero-gradient pointer-events-none -z-10"></div>
            <div className="max-w-6xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-3 mb-10 px-4 py-2 bg-white/50 dark:bg-emerald/10 border border-emerald/10 rounded-full">
                    <span className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full border-2 border-background-light dark:border-background-dark bg-emerald-100 flex items-center justify-center overflow-hidden">
                            <img
                                alt="Team member"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBktSemHIcdO_JhRQQSMzToXK_pek6VD-UsxBT3TdVOhKJ10KKwP6Grp1kVbdmahZV05103gnT_h10MuNyTrbzEiPgpGt1pqjater-Pd-AnPKfLpWtVWbNbUyczdKXKJabC43-mHravI203E6nxfQ_AF9ISKd5-7b6uofL4VA-cEZW1Mqa-6a0lSczoDwhBafX5VD5PRjBOkfEpmuyFtBO-5cUt_lTQvbGbqD_7LX_Z58C-DNssaRS75JHqjUKuDsMB3_xSTzM2lJrf"
                            />
                        </div>
                        <div className="w-6 h-6 rounded-full border-2 border-background-light dark:border-background-dark bg-emerald-50 flex items-center justify-center overflow-hidden">
                            <img
                                alt="Team member"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuDPi5A1_9SH4ARzd46pnaPVPPmU74EbbO8NONj4-FWiKhKHInbZUyBl_aQbr5MZLFsS8RIDxEWi5wbvndh6v6PALnu3zm_JFiUvwTP_k-d6g-OKHTMmgQqbkMgi9zAWpZyYIWK9R3TCLxPtRNQBYUrtkV6wahI2pqXl7ScWavufvpGQbNaqJ3XjWGmgw9ePctjGmN_BmUsLW73b7jHAnOmDDiV_uyauniwkmObjzQIP0pUrfEf18qhMhPAtsKEp2ge1X-S5_kZH6o"
                            />
                        </div>
                    </span>
                    <span className="text-xs font-semibold tracking-wide uppercase text-emerald-800 dark:text-mint opacity-80">
                        Premium Tech Delivery for Scale-ups
                    </span>
                </div>
                <h1 className="font-display text-7xl md:text-[9rem] leading-[0.9] tracking-tighter mb-8 text-[#0a0a0a] dark:text-white">
                    Build <span className="opacity-20">better,</span>
                    <br />
                    <span className="serif-italic shimmer-text">3x faster.</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-70 leading-relaxed mb-12">
                    BlueBuck Research Services transforms complex tech into seamless 
                    growth — from AI consulting to DevOps and custom SaaS solutions.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button className="w-full sm:w-auto text-lg py-6 px-8 rounded-2xl">
                        Start Your Project
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                        variant="outline"
                        className="w-full sm:w-auto text-lg py-6 px-8 rounded-2xl"
                    >
                        <Compass className="mr-2 w-5 h-5 opacity-60" />
                        View Services
                    </Button>
                </div>
            </div>
        </main>
    );
}
