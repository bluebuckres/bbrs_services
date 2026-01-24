import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export function ServicesHero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 bg-[#fcfaf2] dark:bg-[#0a0a0a] text-[#1a1a1a] dark:text-gray-100">
            <div className="max-w-4xl">
                <h1 className="font-display text-5xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tighter mb-8">
                    Driven by <br />
                    <span className="serif-italic opacity-40">Code.</span>
                </h1>
                <p className="text-2xl md:text-3xl font-light opacity-70 tracking-tight">
                    Build products, <span className="text-neon-purple font-semibold">3x faster.</span>
                </p>
                <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="flex -space-x-4">
                        <img
                            alt="Expert"
                            className="w-12 h-12 rounded-full border-4 border-[#fcfaf2] dark:border-[#0a0a0a] object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBktSemHIcdO_JhRQQSMzToXK_pek6VD-UsxBT3TdVOhKJ10KKwP6Grp1kVbdmahZV05103gnT_h10MuNyTrbzEiPgpGt1pqjater-Pd-AnPKfLpWtVWbNbUyczdKXKJabC43-mHravI203E6nxfQ_AF9ISKd5-7b6uofL4VA-cEZW1Mqa-6a0lSczoDwhBafX5VD5PRjBOkfEpmuyFtBO-5cUt_lTQvbGbqD_7LX_Z58C-DNssaRS75JHqjUKuDsMB3_xSTzM2lJrf"
                        />
                        <img
                            alt="Expert"
                            className="w-12 h-12 rounded-full border-4 border-[#fcfaf2] dark:border-[#0a0a0a] object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuDPi5A1_9SH4ARzd46pnaPVPPmU74EbbO8NONj4-FWiKhKHInbZUyBl_aQbr5MZLFsS8RIDxEWi5wbvndh6v6PALnu3zm_JFiUvwTP_k-d6g-OKHTMmgQqbkMgi9zAWpZyYIWK9R3TCLxPtRNQBYUrtkV6wahI2pqXl7ScWavufvpGQbNaqJ3XjWGmgw9ePctjGmN_BmUsLW73b7jHAnOmDDiV_uyauniwkmObjzQIP0pUrfEf18qhMhPAtsKEp2ge1X-S5_kZH6o"
                        />
                        <img
                            alt="Expert"
                            className="w-12 h-12 rounded-full border-4 border-[#fcfaf2] dark:border-[#0a0a0a] object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuDPi5A1_9SH4ARzd46pnaPVPPmU74EbbO8NONj4-FWiKhKHInbZUyBl_aQbr5MZLFsS8RIDxEWi5wbvndh6v6PALnu3zm_JFiUvwTP_k-d6g-OKHTMmgQqbkMgi9zAWpZyYIWK9R3TCLxPtRNQBYUrtkV6wahI2pqXl7ScWavufvpGQbNaqJ3XjWGmgw9ePctjGmN_BmUsLW73b7jHAnOmDDiV_uyauniwkmObjzQIP0pUrfEf18qhMhPAtsKEp2ge1X-S5_kZH6o"
                        />
                    </div>
                    <p className="text-sm font-medium opacity-50 uppercase tracking-widest">
                        Trusted by 50+ Fortune 500 Enterprises
                    </p>
                </div>
            </div>
            <div className="mt-24 animate-bounce opacity-30">
                <ChevronDown className="w-10 h-10" />
            </div>
        </section>
    );
}
