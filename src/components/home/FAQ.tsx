import { ChevronDown } from "lucide-react";

export function FAQ() {
    return (
        <section
            className="py-24 px-6 bg-background-light dark:bg-background-dark border-t border-emerald/5"
            id="faq"
        >
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-display text-5xl md:text-6xl mb-4">
                        Common <span className="serif-italic opacity-40">Questions</span>
                    </h2>
                    <p className="opacity-60">
                        Everything you need to know about our process and guarantees.
                    </p>
                </div>
                <div className="space-y-4">
                    <details className="group bg-white dark:bg-white/5 border border-emerald/10 rounded-2xl overflow-hidden mint-glow transition-all duration-300 open:bg-emerald-50/50 open:border-emerald/20">
                        <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-lg list-none select-none">
                            <span>How do you achieve 3x faster delivery?</span>
                            <span className="group-open:rotate-180 transition-transform duration-300 text-emerald-600">
                                <ChevronDown />
                            </span>
                        </summary>
                        <div className="px-6 pb-6 pt-0 opacity-70 leading-relaxed text-sm md:text-base">
                            We utilize a proprietary library of pre-built, battle-tested
                            modules and a highly specialized AI-assisted workflow. This allows
                            us to skip boilerplate setup and focus immediately on your unique
                            business logic, cutting development time significantly without
                            sacrificing quality.
                        </div>
                    </details>
                    <details className="group bg-white dark:bg-white/5 border border-emerald/10 rounded-2xl overflow-hidden mint-glow transition-all duration-300 open:bg-emerald-50/50 open:border-emerald/20">
                        <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-lg list-none select-none">
                            <span>Do I own the intellectual property?</span>
                            <span className="group-open:rotate-180 transition-transform duration-300 text-emerald-600">
                                <ChevronDown />
                            </span>
                        </summary>
                        <div className="px-6 pb-6 pt-0 opacity-70 leading-relaxed text-sm md:text-base">
                            Absolutely. We operate on a strict &quot;work-for-hire&quot; basis. Once
                            the final payment is settled, 100% of the code, design assets, and
                            documentation belong to you. We retain no rights to your product.
                        </div>
                    </details>
                    <details className="group bg-white dark:bg-white/5 border border-emerald/10 rounded-2xl overflow-hidden mint-glow transition-all duration-300 open:bg-emerald-50/50 open:border-emerald/20">
                        <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-lg list-none select-none">
                            <span>What is your typical engagement model?</span>
                            <span className="group-open:rotate-180 transition-transform duration-300 text-emerald-600">
                                <ChevronDown />
                            </span>
                        </summary>
                        <div className="px-6 pb-6 pt-0 opacity-70 leading-relaxed text-sm md:text-base">
                            We offer both fixed-price project deliveries for well-defined
                            scopes and dedicated team retainers for ongoing product
                            development. Most clients start with a Discovery Phase to define
                            the roadmap before moving into execution.
                        </div>
                    </details>
                    <details className="group bg-white dark:bg-white/5 border border-emerald/10 rounded-2xl overflow-hidden mint-glow transition-all duration-300 open:bg-emerald-50/50 open:border-emerald/20">
                        <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-lg list-none select-none">
                            <span>How do you handle post-launch support?</span>
                            <span className="group-open:rotate-180 transition-transform duration-300 text-emerald-600">
                                <ChevronDown />
                            </span>
                        </summary>
                        <div className="px-6 pb-6 pt-0 opacity-70 leading-relaxed text-sm md:text-base">
                            Every project includes a 30-day warranty period for bug fixes.
                            Beyond that, we offer flexible maintenance packages to ensure your
                            infrastructure remains secure, updated, and performant as you
                            scale.
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
}
