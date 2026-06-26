export function AboutHero() {
    return (
        <header className="relative min-h-[70vh] flex items-center justify-center pt-20 overflow-hidden bg-background-light dark:bg-background-dark">
            <div
                className="absolute inset-0 opacity-100"
                style={{
                    backgroundImage: "radial-gradient(circle at 2px 2px, rgba(5, 150, 105, 0.07) 1px, transparent 0)",
                    backgroundSize: "40px 40px"
                }}
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-hero-gradient pointer-events-none -z-10" />
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-600 dark:text-mint mb-5 block">
                    The Manifesto
                </span>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter mb-8 text-[#0a0a0a] dark:text-white">
                    We build for founders <br className="hidden md:block" />
                    <span className="serif-italic opacity-30">because we are founders.</span>
                </h1>
                <p className="text-xl md:text-2xl opacity-50 max-w-3xl mx-auto font-light leading-relaxed">
                    BlueBuck Research was born out of frustration. As quant traders and technical founders, we hired agencies to build our internal tools. We got account managers, bloated scoping phases, and junior devs learning on our dime. So we built the engineering team we wished we could have hired.
                </p>
            </div>
        </header>
    );
}
