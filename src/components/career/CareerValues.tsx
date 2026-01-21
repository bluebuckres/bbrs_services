import { Zap, Brain, Shield } from "lucide-react";

export function CareerValues() {
    return (
        <section className="max-w-6xl mx-auto px-6 mb-40">
            <div className="text-center mb-20">
                <h2 className="font-display text-6xl mb-6">Why BlueBuck?</h2>
                <p className="opacity-60 max-w-xl mx-auto text-lg">
                    We combine the speed of a startup with the rigor of a research institute.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/40 backdrop-blur-md border border-black/5 dark:bg-white/5 dark:border-white/10 p-12 rounded-[2.5rem] flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:bg-white/80 dark:hover:bg-white/10">
                    <div className="w-16 h-16 rounded-2xl bg-[#d8c7ff]/20 flex items-center justify-center mb-8">
                        <Zap className="w-8 h-8 text-[#1a1a1a] dark:text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">3x Faster Delivery</h3>
                    <p className="opacity-60">
                        Optimized internal frameworks allow us to deploy production-ready code while others are still prototyping.
                    </p>
                </div>
                <div className="bg-white/40 backdrop-blur-md border border-black/5 dark:bg-white/5 dark:border-white/10 p-12 rounded-[2.5rem] flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:bg-white/80 dark:hover:bg-white/10">
                    <div className="w-16 h-16 rounded-2xl bg-[#d8c7ff]/20 flex items-center justify-center mb-8">
                        <Brain className="w-8 h-8 text-[#1a1a1a] dark:text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Bespoke AI Strategy</h3>
                    <p className="opacity-60">
                        We don&apos;t do generic models. We build custom-tuned AI engines tailored to your proprietary datasets.
                    </p>
                </div>
                <div className="bg-white/40 backdrop-blur-md border border-black/5 dark:bg-white/5 dark:border-white/10 p-12 rounded-[2.5rem] flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:bg-white/80 dark:hover:bg-white/10">
                    <div className="w-16 h-16 rounded-2xl bg-[#d8c7ff]/20 flex items-center justify-center mb-8">
                        <Shield className="w-8 h-8 text-[#1a1a1a] dark:text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Senior-Led Teams</h3>
                    <p className="opacity-60">
                        Every project is spearheaded by researchers with over 10 years of experience in their respective fields.
                    </p>
                </div>
            </div>
        </section>
    );
}
