export function AboutWhy() {
    const stack = [
        "Next.js", "React", "Node.js", "Python", 
        "PostgreSQL", "AWS", "GCP", "LangChain", 
        "OpenAI", "PyTorch"
    ];

    return (
        <section className="py-32 px-6 bg-[#fdfbf7] dark:bg-[#0a0a0a]">
            <div className="max-w-5xl mx-auto text-center">
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-600 dark:text-mint mb-5 block">
                    The Stack
                </span>
                <h2 className="font-display text-5xl md:text-7xl mb-6 text-[#2d2d2d] dark:text-white">
                    Our default tools. <br />
                    <span className="italic opacity-40">No religious wars.</span>
                </h2>
                <p className="text-xl opacity-60 max-w-3xl mx-auto mb-16 leading-relaxed text-[#1a1a1a] dark:text-white">
                    We use the right tool for the job. But if you don't have a preference, this is what we reach for to build fast and scale safely.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                    {stack.map((tech, index) => (
                        <span 
                            key={index} 
                            className="px-6 py-3 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full text-sm font-semibold tracking-wide shadow-sm text-[#1a1a1a] dark:text-white"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
