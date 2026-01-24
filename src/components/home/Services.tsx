import { Bot, Terminal, Cloud, Shield, BarChart3 } from "lucide-react";

export function Services() {
    return (
        <section className="py-24 px-6" id="services">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className="font-display text-4xl md:text-6xl mb-4">Core Services</h2>
                    <p className="text-lg opacity-60 max-w-xl">
                        Deep technical expertise tailored for modern enterprise needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 bento-card mint-glow p-10 rounded-3xl relative overflow-hidden group border border-emerald/10">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full -mr-20 -mt-20"></div>
                        <Bot className="w-10 h-10 mb-6 text-emerald-600" />
                        <h3 className="font-display text-2xl md:text-4xl mb-4">AI & Machine Learning</h3>
                        <p className="opacity-70 max-w-md mb-8">
                            Custom LLM fine-tuning, RAG implementations, and predictive
                            analytics that actually drive ROI.
                        </p>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-emerald/5 dark:bg-emerald/20 rounded-full text-xs font-semibold text-emerald-800 dark:text-mint">
                                Fine-tuning
                            </span>
                            <span className="px-3 py-1 bg-emerald/5 dark:bg-emerald/20 rounded-full text-xs font-semibold text-emerald-800 dark:text-mint">
                                NLP
                            </span>
                            <span className="px-3 py-1 bg-emerald/5 dark:bg-emerald/20 rounded-full text-xs font-semibold text-emerald-800 dark:text-mint">
                                Research
                            </span>
                        </div>
                    </div>
                    <div className="bento-card mint-glow p-10 rounded-3xl flex flex-col justify-between border border-emerald/10">
                        <div>
                            <Terminal className="w-10 h-10 mb-6 text-emerald-600" />
                            <h3 className="font-display text-2xl md:text-4xl mb-4">App Dev</h3>
                            <p className="opacity-70">
                                High-performance web and mobile applications built with the
                                latest stack.
                            </p>
                        </div>
                        <div className="mt-8 border-t border-emerald/10 pt-6">
                            <span className="text-sm font-medium text-emerald-600 italic">
                                3x faster delivery
                            </span>
                        </div>
                    </div>
                    <div className="bento-card mint-glow p-8 rounded-3xl relative overflow-hidden border border-emerald/10">
                        <Cloud className="w-8 h-8 mb-4 text-emerald-600" />
                        <h3 className="text-xl font-bold mb-2">DevOps & Cloud</h3>
                        <p className="text-sm opacity-70">
                            Infrastructure as Code, CI/CD pipelines, and cloud migration
                            experts.
                        </p>
                    </div>
                    <div className="bento-card mint-glow p-8 rounded-3xl relative overflow-hidden border border-emerald/10">
                        <Shield className="w-8 h-8 mb-4 text-emerald-600" />
                        <h3 className="text-xl font-bold mb-2">Cybersecurity</h3>
                        <p className="text-sm opacity-70">
                            Protecting your data and applications with industry-leading
                            standards.
                        </p>
                    </div>
                    <div className="bento-card mint-glow p-8 rounded-3xl relative overflow-hidden border border-emerald/10">
                        <BarChart3 className="w-8 h-8 mb-4 text-emerald-600" />
                        <h3 className="text-xl font-bold mb-2">Tech Research</h3>
                        <p className="text-sm opacity-70">
                            In-depth market and technical research for strategic decision
                            making.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
