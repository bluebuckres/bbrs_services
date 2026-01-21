import Link from "next/link";
import {
    ArrowRight,
    Banknote,
    Brain,
    Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Portfolio() {
    return (
        <section className="py-24 px-6" id="portfolio">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 flex justify-between items-end">
                    <div>
                        <h2 className="font-display text-6xl mb-4">Top 3 Projects</h2>
                        <p className="text-lg opacity-60">
                            Success stories defined by high speed and higher ROI.
                        </p>
                    </div>
                    <Button variant="link" className="text-emerald-600 font-bold p-0 h-auto hover:text-emerald-500">
                        All Case Studies <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-3 order-2 md:order-1">
                        <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-emerald-900 border border-emerald/20 mint-glow">
                            <img
                                alt="Project"
                                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkZuBhVhFu963Zk3CVlW9IEnn8SP0nu9XJZ29_KBJkdAiI7XwQyl6C8gF4NqKTFE-FmHpBpa2YcOHWG6RJFxtiqz3VFZT7zDdVZiFbleZaO1QOEvkBW0rbfyfzzSgCD6p4UeVeuEhhnQpeYDgdyTDVbtHnK7Q1wUNXWeewamL8Kg-LoDZwE8_ZJYNsrU6b4LGnZ4L-NWrSqXsatBfeC6tfYhJerCI3J1oGPqJWPQh-T_5kVKkACrds6OMc5z7kXsfwr-Q9nL2KKxjK"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="flex gap-3 mb-4">
                                    <Banknote className="text-mint w-6 h-6" />
                                    <div className="flex gap-2">
                                        <span className="text-[10px] bg-emerald/30 text-mint px-2 py-0.5 rounded border border-mint/20 uppercase font-bold tracking-wider">
                                            Next.js
                                        </span>
                                    </div>
                                </div>
                                <h3 className="font-display text-2xl text-white mb-2 leading-tight">
                                    Revolutionizing Fintech
                                </h3>
                                <p className="text-mint/60 text-xs">
                                    Reduced operational latency by 70%.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-6 order-1 md:order-2">
                        <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-emerald-900 border border-emerald/30 mint-glow shadow-2xl scale-[1.02]">
                            <img
                                alt="Project"
                                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkZuBhVhFu963Zk3CVlW9IEnn8SP0nu9XJZ29_KBJkdAiI7XwQyl6C8gF4NqKTFE-FmHpBpa2YcOHWG6RJFxtiqz3VFZT7zDdVZiFbleZaO1QOEvkBW0rbfyfzzSgCD6p4UeVeuEhhnQpeYDgdyTDVbtHnK7Q1wUNXWeewamL8Kg-LoDZwE8_ZJYNsrU6b4LGnZ4L-NWrSqXsatBfeC6tfYhJerCI3J1oGPqJWPQh-T_5kVKkACrds6OMc5z7kXsfwr-Q9nL2KKxjK"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-10 w-full">
                                <div className="flex gap-3 mb-6">
                                    <Brain className="text-mint w-8 h-8" />
                                    <div className="flex gap-2">
                                        <span className="text-[10px] bg-emerald-500/30 text-mint px-3 py-1 rounded-full border border-mint/30 uppercase font-bold tracking-widest">
                                            Python
                                        </span>
                                        <span className="text-[10px] bg-emerald-500/30 text-mint px-3 py-1 rounded-full border border-mint/30 uppercase font-bold tracking-widest">
                                            Pytorch
                                        </span>
                                    </div>
                                </div>
                                <h3 className="font-display text-5xl text-white mb-4 leading-[1.1]">
                                    AI Vision: Automating Retail Intelligence
                                </h3>
                                <p className="text-mint/70 text-base max-w-sm">
                                    Deployment of custom LLM for 40% growth in efficiency across
                                    global locations.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-3 order-3">
                        <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-emerald-900 border border-emerald/20 mint-glow">
                            <img
                                alt="Project"
                                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBktSemHIcdO_JhRQQSMzToXK_pek6VD-UsxBT3TdVOhKJ10KKwP6Grp1kVbdmahZV05103gnT_h10MuNyTrbzEiPgpGt1pqjater-Pd-AnPKfLpWtVWbNbUyczdKXKJabC43-mHravI203E6nxfQ_AF9ISKd5-7b6uofL4VA-cEZW1Mqa-6a0lSczoDwhBafX5VD5PRjBOkfEpmuyFtBO-5cUt_lTQvbGbqD_7LX_Z58C-DNssaRS75JHqjUKuDsMB3_xSTzM2lJrf"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="flex gap-3 mb-4">
                                    <Package className="text-mint w-6 h-6" />
                                    <div className="flex gap-2">
                                        <span className="text-[10px] bg-emerald/30 text-mint px-2 py-0.5 rounded border border-mint/20 uppercase font-bold tracking-wider">
                                            Rust
                                        </span>
                                    </div>
                                </div>
                                <h3 className="font-display text-2xl text-white mb-2 leading-tight">
                                    Logistics Engine
                                </h3>
                                <p className="text-mint/60 text-xs">
                                    60% reduction in development cycles.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
