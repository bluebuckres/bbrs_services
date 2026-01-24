export function AboutHero() {
    return (
        <header className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden bg-[#fdfbf7]">
            <div
                className="absolute inset-0 opacity-100"
                style={{
                    backgroundImage: "radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.08) 1px, transparent 0)",
                    backgroundSize: "40px 40px"
                }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-100/40 blur-[120px] rounded-full" />
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <h1 className="font-display text-5xl md:text-7xl lg:text-9xl leading-none mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-500">
                    About BlueBuck <br /> Research Services
                </h1>
                <p className="text-xl md:text-2xl text-[#2d2d2d]/50 max-w-2xl mx-auto font-light leading-relaxed">
                    Bridging the gap between frontier AI research and enterprise-grade deployment from the heart of Kolkata.
                </p>
            </div>
        </header>
    );
}
