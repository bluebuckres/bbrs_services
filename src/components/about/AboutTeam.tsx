import { cn } from "@/lib/utils";

const team = [
    {
        name: "Supriyo Paul",
        role: "Founder & Principal Technologist",
        desc: "Data-driven researcher specializing in ML and data science modeling. Vast cross-domain expertise spanning core architecture, deployment, finance, and marketing.",
        image: "/Founder_Pic/Supriyo_BlueBuck Founder.webp",
        imgClass: "object-top"
    },
    {
        name: "Abhijit Dasgupta",
        role: "Head of Cloud & DevOps",
        desc: "Architecting scalable infrastructure and managing global cloud deployments.",
        image: "/Founder_Pic/Abhijit Dasgupta.jpeg"
    },
    {
        name: "Divyansh Thakur",
        role: "AI Research Lead",
        desc: "Pioneering research in generative AI and advanced machine learning models.",
        image: "/Founder_Pic/Divyansh Thakur.png"
    },
    {
        name: "Nitish Goyal",
        role: "Chief Technology Officer",
        desc: "Driving the core technology vision across frontend, backend, and system architecture.",
        image: "/Founder_Pic/Nitish Goyal.png",
        imgClass: "object-top"
    },
    {
        name: "Trisha Oawal",
        role: "Head of Strategy & Design",
        desc: "Leading product vision, content strategy, and user experience design.",
        image: "/Founder_Pic/Trisha Oawal.png"
    }
];

export function AboutTeam() {
    return (
        <section className="py-32 px-6 bg-[#faf7f2] dark:bg-[#0a0a0a] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-display text-5xl md:text-7xl mb-6 text-center text-[#2d2d2d] dark:text-white">
                    Built by Engineers. <br />
                    <span className="italic opacity-40">Not Marketers.</span>
                </h2>
                <p className="text-xl opacity-60 text-center max-w-3xl mx-auto mb-16 leading-relaxed text-[#1a1a1a] dark:text-white">
                    We don't outsource. We don't hire junior devs to learn on your project. You work directly with the senior engineers building your platform.
                </p>

                {/* Organic Image Collage */}
                <div className="flex flex-wrap justify-center gap-6 mb-32 text-center">
                    {/* Using inline styles for organic shapes as defined in HTML */}
                    <div className="w-64 h-80 overflow-hidden border-2 border-white rotate-3 shadow-md" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}>
                        <img alt="Office Life" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="/office_pic/rUCx27VHgWkb1sUQ1xhUoWa1qAw.webp" />
                    </div>
                    <div className="w-80 h-64 overflow-hidden border-2 border-white -rotate-6 mt-12 shadow-md" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}>
                        <img alt="Whiteboard session" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="/office_pic/IMG20251221170636 (2).jpg" />
                    </div>
                    <div className="w-72 h-72 overflow-hidden border-2 border-white rotate-6 shadow-md" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}>
                        <img alt="Modern Workspace" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="/office_pic/zi3STFivI9DeXrV7bW8Ne2Hjiqc.webp" />
                    </div>
                </div>

                {/* Team Grid (No Scroll) */}
                <div className="flex flex-wrap gap-x-8 gap-y-12 pb-12 justify-center">
                    {team.map((member, i) => (
                        <div key={i} className="w-56 text-center group">
                            <div className="relative w-40 h-40 mx-auto mb-5">
                                <div className="absolute inset-0 rounded-full border-2 border-[#9d88cc]/20 group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-2 rounded-full overflow-hidden">
                                    <img alt={member.name} className={cn("w-full h-full object-cover transition-all duration-500 hover:blur-[2px] brightness-95", member.imgClass)} src={member.image} />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center p-3 text-[11px] font-medium opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                                    <p className="text-[#2d2d2d] font-semibold bg-white/95 px-3 py-2 rounded-lg shadow-sm leading-relaxed">
                                        {member.desc}
                                    </p>
                                </div>
                            </div>
                            <h4 className="font-bold text-lg text-[#2d2d2d] dark:text-white">{member.name}</h4>
                            <p className="text-[#9d88cc] text-[11px] font-semibold uppercase tracking-widest mt-1.5 leading-snug">{member.role}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
