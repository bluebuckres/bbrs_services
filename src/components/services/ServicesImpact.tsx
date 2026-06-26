export function ServicesImpact() {
    const verticals = [
        {
            title: "Startup MVP",
            description: "From napkin math to production in 8 weeks. We build the architecture you need today, designed not to break when you scale tomorrow.",
            metric: "8 weeks to market"
        },
        {
            title: "FinTech Accelerator",
            description: "Low-latency trading tools, secure payment gateways, and compliant data systems for teams who can't afford a single dropped packet.",
            metric: "Sub-millisecond latency"
        },
        {
            title: "BioMed Insights",
            description: "HIPAA-adjacent data pipelines and AI models trained on medical imaging and clinical trial data.",
            metric: "HIPAA & SOC2 ready"
        },
        {
            title: "Enterprise Software",
            description: "Digital transformation that doesn't take 3 years. We modernize legacy codebases and integrate AI into existing workflows.",
            metric: "Modernized in months"
        }
    ];

    return (
        <section className="py-32 bg-[#1a1a1a] text-white" id="solutions-for">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20">
                    <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-400 mb-4 block">
                        Solutions For
                    </span>
                    <h2 className="font-display text-5xl md:text-7xl mb-6 leading-tight max-w-4xl">
                        We build for specific environments.<br />
                        <span className="opacity-50 italic">Not generic use cases.</span>
                    </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                    {verticals.map((vertical, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors duration-500">
                            <span className="text-emerald-400 font-mono tracking-widest uppercase text-xs mb-6 block">
                                {vertical.metric}
                            </span>
                            <h3 className="text-3xl font-display mb-4 text-white/90">
                                {vertical.title}
                            </h3>
                            <p className="text-lg text-white/60 leading-relaxed">
                                {vertical.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
