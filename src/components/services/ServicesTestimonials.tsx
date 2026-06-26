import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "BlueBuck helped us build the platform that now serves patients across 3,500+ cities. They understood we weren't building a shopping app — we were building a lifeline. The engineering quality and the pace of delivery were both exceptional.",
        author: "Devashish Singh",
        role: "Co-Founder @ MrMed.in",
        image: "/Founder_Pic/MrMed.inDevashish Singh.webp",
        aspect: "aspect-[3/4] w-[450px]"
    },
    {
        quote: "They didn't just build the LLM features, they scoped where AI actually adds value versus where it creates fragility. Having them as our embedded AI partner gave us the technical depth we needed to scale our platform.",
        author: "Adarsh Kumar",
        role: "Founder @ Gleo.ai",
        image: "/Founder_Pic/Adarsh Kumar Gleo AI.webp",
        aspect: "aspect-[4/3] w-[500px]"
    },
    {
        quote: "The design system and website they built finally matched the quality of our community app. Their ability to understand a passionate lifestyle audience and translate that into a consistent web experience was exactly what we needed.",
        author: "Jitesh Surana",
        role: "Founder @ Asteride",
        image: "/Founder_Pic/Jitesh Surana Asteride.webp",
        aspect: "aspect-[3/4] w-[450px]"
    }
];

export function ServicesTestimonials() {
    return (
        <section className="py-32 overflow-hidden bg-[#fcfaf2] dark:bg-[#0a0a0a]" id="testimonials">
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <h2 className="font-display text-7xl text-[#1a1a1a] dark:text-white">Testimonials.</h2>
            </div>
            <div className="flex overflow-x-auto gap-8 px-6 pb-12 no-scrollbar">
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className={`flex-none ${item.aspect} rounded-[2.5rem] relative overflow-hidden group cursor-pointer ${index === 1 ? 'mt-12' : ''}`}
                    >
                        <img
                            alt={`Client ${index + 1}`}
                            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:blur-md"
                            src={item.image}
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-[#1a1a1a]/80 transition-all duration-500 flex flex-col justify-end p-12">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                                <Quote className="text-neon-purple w-12 h-12 mb-6" />
                                <p className="text-2xl text-white font-display italic mb-8">
                                    &quot;{item.quote}&quot;
                                </p>
                                <p className="text-white font-bold">{item.author}</p>
                                <p className="text-white/50 text-sm uppercase tracking-widest">{item.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
