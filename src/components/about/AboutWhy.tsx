import { Brain, Zap } from "lucide-react";

export function AboutWhy() {
    return (
        <section className="py-32 px-6 bg-[#fdfbf7]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="font-display text-6xl text-[#2d2d2d]">Why BlueBuck?</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="bg-white p-12 rounded-3xl border border-black/5 md:translate-y-8 shadow-sm">
                        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-8">
                            <Brain className="text-[#9d88cc] w-6 h-6" />
                        </div>
                        <h4 className="text-3xl font-display mb-4 text-[#2d2d2d]">Cutting-edge AI Research</h4>
                        <p className="text-[#2d2d2d]/60 leading-relaxed">
                            Access proprietary LLM frameworks and specialized computer vision models that aren&apos;t available
                            off-the-shelf. We provide the &quot;brain&quot; for your next-gen product.
                        </p>
                    </div>
                    <div className="bg-white p-12 rounded-3xl border border-black/5 md:-translate-y-8 shadow-sm">
                        <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-8">
                            <Zap className="text-sky-400 w-6 h-6" />
                        </div>
                        <h4 className="text-3xl font-display mb-4 text-[#2d2d2d]">40% Efficiency Gains</h4>
                        <p className="text-[#2d2d2d]/60 leading-relaxed">
                            Our internal library of DevOps scripts and architectural patterns allows us to deploy production-ready
                            code significantly faster than traditional agencies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
