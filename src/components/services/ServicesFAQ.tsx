export function ServicesFAQ() {
    const steps = [
        {
            num: "01",
            title: "Discovery Call",
            description: "You speak directly to the founders. We look at your current stack, your business goals, and tell you if we're actually the right fit."
        },
        {
            num: "02",
            title: "Technical Scoping",
            description: "Within 48 hours, we deliver a technical roadmap, architecture proposal, and exact cost. No hidden fees. No endless consulting phases."
        },
        {
            num: "03",
            title: "Execution & Sprints",
            description: "You get a dedicated Slack channel and weekly demo calls. You see the product being built, not just a Gantt chart."
        },
        {
            num: "04",
            title: "Handover & Scale",
            description: "We don't hold your IP hostage. You get full source code access, complete documentation, and team training."
        }
    ];

    return (
        <section className="py-32 px-6 bg-[#fcfaf2] dark:bg-[#0a0a0a] text-[#1a1a1a] dark:text-gray-100" id="how-we-work">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-24">
                    <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-600 dark:text-mint mb-4 block">
                        The Process
                    </span>
                    <h2 className="font-display text-5xl md:text-7xl mb-6">
                        No Account Managers. <br />
                        <span className="serif-italic opacity-40">Just Builders.</span>
                    </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            <div className="text-8xl font-display opacity-5 absolute -top-8 -left-6 z-0">
                                {step.num}
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-4">
                                    <span className="text-emerald-600 dark:text-mint text-sm font-mono tracking-widest">{step.num} /</span>
                                    {step.title}
                                </h3>
                                <p className="opacity-60 leading-relaxed text-lg pl-12">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
