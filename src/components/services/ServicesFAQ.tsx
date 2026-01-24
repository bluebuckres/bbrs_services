import { ChevronDown } from "lucide-react";

export function ServicesFAQ() {
    return (
        <section className="py-32 px-6 bg-[#fcfaf2] dark:bg-[#0a0a0a] text-[#1a1a1a] dark:text-gray-100" id="faq">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-display text-6xl mb-16 text-center">Frequently Asked.</h2>
                <div className="space-y-4">
                    <details className="group bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-black/5 dark:border-white/10" open>
                        <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                            <h4 className="text-xl font-bold">How do you guarantee high ROI?</h4>
                            <ChevronDown className="transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="px-8 pb-8 opacity-60 leading-relaxed">
                            We start every project with a technical feasibility assessment and business impact analysis. If we don&apos;t see a clear path to at least 2x ROI within 12 months, we don&apos;t take the project. Our agile development cycles mean you see working software every 2 weeks—no wasted time.
                        </div>
                    </details>

                    <details className="group bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-black/5 dark:border-white/10">
                        <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                            <h4 className="text-xl font-bold">Do you build MVPs or just consult?</h4>
                            <ChevronDown className="transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="px-8 pb-8 opacity-60 leading-relaxed">
                            We build. Every project includes hands-on development, deployment, and ongoing support. We write the code, manage infrastructure, and ship production-ready software.
                        </div>
                    </details>

                    <details className="group bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-black/5 dark:border-white/10">
                        <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                            <h4 className="text-xl font-bold">What tech stacks do you use?</h4>
                            <ChevronDown className="transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="px-8 pb-8 opacity-60 leading-relaxed">
                            We&apos;re language-agnostic but specialize in: React/Next.js, Node.js, Python, Go, PostgreSQL, MongoDB, AWS/Azure/GCP, Kubernetes, TensorFlow/PyTorch. We choose the right stack for your specific requirements.
                        </div>
                    </details>

                    <details className="group bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-black/5 dark:border-white/10">
                        <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                            <h4 className="text-xl font-bold">How secure is my proprietary data?</h4>
                            <ChevronDown className="transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="px-8 pb-8 opacity-60 leading-relaxed">
                            Security is baked into our DNA. We use air-gapped development environments for sensitive AI training and
                            are compliant with SOC2 Type II, GDPR, and HIPAA standards. Your IP always remains yours.
                        </div>
                    </details>

                    <details className="group bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-black/5 dark:border-white/10">
                        <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                            <h4 className="text-xl font-bold">What does &quot;3x faster&quot; actually mean?</h4>
                            <ChevronDown className="transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="px-8 pb-8 opacity-60 leading-relaxed">
                            Traditional agencies take 6-9 months to ship an MVP. We do it in 8-12 weeks through lean processes, modern DevOps, and eliminating bureaucracy. You get working software faster, which means faster validation and faster revenue.
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
}
