import { ArrowRight } from "lucide-react";

export function FeaturedCaseStudy() {
    return (
        <section className="py-32 px-6" id="case-study">
            <div className="max-w-6xl mx-auto">
                <div className="bg-[#1a1a1a] text-white rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 p-12 md:p-20">
                        <span className="text-[#d8c7ff] font-bold tracking-widest uppercase text-xs mb-6 block">
                            Featured Case Study
                        </span>
                        <h2 className="font-display text-5xl md:text-6xl mb-8 leading-tight">
                            Redefining Data Intelligence for Enterprise
                        </h2>
                        <p className="text-white/60 text-lg mb-10 leading-relaxed">
                            We built a custom AI-driven dashboard that reduced reporting latency by 90% for a Fortune 500 fintech leader.
                        </p>
                        <div className="flex items-center gap-6">
                            <div>
                                <div className="text-3xl font-display text-[#d8c7ff]">90%</div>
                                <div className="text-xs opacity-40 uppercase">Latency Reduction</div>
                            </div>
                            <div className="w-px h-10 bg-white/10"></div>
                            <div>
                                <div className="text-3xl font-display text-[#d8c7ff]">3.4x</div>
                                <div className="text-xs opacity-40 uppercase">User Engagement</div>
                            </div>
                        </div>
                        <button className="mt-12 px-8 py-4 bg-white text-[#1a1a1a] rounded-2xl font-bold hover:bg-[#d8c7ff] transition-colors flex items-center gap-2 group">
                            View Full Story
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 h-[400px] md:h-[700px] bg-neutral-900 relative overflow-hidden">
                        <img
                            alt="Sleek Dashboard Interface"
                            className="w-full h-full object-cover object-left opacity-90"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkZuBhVhFu963Zk3CVlW9IEnn8SP0nu9XJZ29_KBJkdAiI7XwQyl6C8gF4NqKTFE-FmHpBpa2YcOHWG6RJFxtiqz3VFZT7zDdVZiFbleZaO1QOEvkBW0rbfyfzzSgCD6p4UeVeuEhhnQpeYDgdyTDVbtHnK7Q1wUNXWeewamL8Kg-LoDZwE8_ZJYNsrU6b4LGnZ4L-NWrSqXsatBfeC6tfYhJerCI3J1oGPqJWPQh-T_5kVKkACrds6OMc5z7kXsfwr-Q9nL2KKxjK"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-transparent to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
