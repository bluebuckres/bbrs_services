const markers = [
    { city: "London HQ", top: "35%", left: "48%" },
    { city: "San Francisco", top: "40%", left: "18%" },
    { city: "Dubai", top: "55%", left: "62%" },
    { city: "Sydney", top: "75%", left: "88%" },
];

export function ContactMap() {
    return (
        <section className="py-32 px-6 bg-white/40 dark:bg-white/5 border-t border-black/5 dark:border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="font-display text-5xl mb-4 text-[#1a1a1a] dark:text-white">Global Reach</h2>
                    <p className="opacity-60 text-[#1a1a1a] dark:text-white">Scaling engineering teams and infrastructure across 4 continents.</p>
                </div>
                <div className="relative w-full aspect-[21/9] bg-neutral-100 dark:bg-neutral-900 rounded-[3rem] overflow-hidden group">
                    <img
                        alt="World Map Minimalist"
                        className="w-full h-full object-cover opacity-30 grayscale contrast-125"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkZuBhVhFu963Zk3CVlW9IEnn8SP0nu9XJZ29_KBJkdAiI7XwQyl6C8gF4NqKTFE-FmHpBpa2YcOHWG6RJFxtiqz3VFZT7zDdVZiFbleZaO1QOEvkBW0rbfyfzzSgCD6p4UeVeuEhhnQpeYDgdyTDVbtHnK7Q1wUNXWeewamL8Kg-LoDZwE8_ZJYNsrU6b4LGnZ4L-NWrSqXsatBfeC6tfYhJerCI3J1oGPqJWPQh-T_5kVKkACrds6OMc5z7kXsfwr-Q9nL2KKxjK"
                    />
                    {markers.map((m) => (
                        <div key={m.city} className="absolute group/marker" style={{ top: m.top, left: m.left }}>
                            <div className="w-4 h-4 bg-purple-accent rounded-full shadow-[0_0_15px_rgba(216,199,255,0.8)] animate-pulse" />
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap bg-[#1a1a1a] text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/marker:opacity-100 transition-opacity">
                                {m.city}
                            </div>
                        </div>
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-background-light/50 dark:from-background-dark/50 to-transparent" />
                </div>
            </div>
        </section>
    );
}
