import { cn } from "@/lib/utils";

const team = [
    {
        name: "Arjun Mehta",
        role: "Lead AI Researcher",
        desc: "Expert in Neural Networks and Scalable Cloud Arch.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAxTTh2ovdzDHjuXdnz0PJaeiMVFOCuSiCXZDplFzxY964DII_lPGVLeW6VvtfFA5uhaW0zwdxxUbRZ7PxKvEDGanP1mOjQxRp3xNs8AXhLFcgKiGegHEVq9y4OQvZuhwC4ha6TDi7J4EI7b3JDVm4dngqf6DNtqXG0-eRNwDRT9R8qlH6aJvrCyo5G8Ev8ErOr9d03RedUPpAoW5Uz7xHIqQVDktPwbvcqz57j04ppW0-y61WDPl6ftaSH6sgV9l-2ogWVwLds0Sx"
    },
    {
        name: "Saira Khan",
        role: "Head of Engineering",
        desc: "Full-stack specialist with a focus on React and Go.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDh3HwAmTrQE9lF3RAbyUlc1aUzAlQplenxGUvN8gqYS2-peEcWHse9SACUQo6WHwrnFhtLchC4Isr8sP5uaDJdNi1sE6_1CSDyfMTnRdshpFkB0RIKGlSiI9dP4eroE1Y9fBsln6DQ_bDj3nuaH_xEY4iFRZXm5WhzqZX7IMHXcWc7oueAB6c3-DVzJmSpRHqAUcH7MTRqFerGL6T9U2elnRVyBWtyPVSsNWGCxRpb1bk2BzIo1NuvS6EseSVp6NPbxHyftL_ZHo7z"
    },
    {
        name: "Vikram Das",
        role: "DevOps Lead",
        desc: "Infrastructure wizard managing global CI/CD pipelines.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCH0S5H48IDHlY2VfhNUhp89AfA8l8DkrmZCLDbUqDVKWUsBuj93moFgoLoZCs1OM3CROlHFeCTMAsEKyrQsIINNdr1do1wFRwKekauSZvjTnmi1UcgRUkDQwj9TELWhZ2BAE5KAm_AsRjyIe1k8oQU7Uwg0HYYRVBrP0lORx6GPWqZzjXjB-CrmJM77MvFhZZ6sSuhnt6T1cz7VhnKqWfDdTVphfgmrANnn3sP-NFxxzlTQBL3JepOWoHNqlGaeUyk9OieEtfDXqRR"
    },
    {
        name: "Priya Roy",
        role: "Strategic Research",
        desc: "Bridging the gap between R&D and business metrics.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKG_qBY3ZuBrP8P5FBCYdP_SfvsIg6W0zpCE3o81nQ5DPwHTUXfkbhQxG6wYISIkshLjeMM8rQ3KHtljmzNz_KgQs3j6h1ygrcuT3bqk8Ztp7q2OPM1kYsF15hTP6YohevNqyMITSwR1KWuP0ZKZ4QzBfK-4Jx5lZ3SiJvh9RvSyivBstZpbmDay8miijtnI7bhOmWGarGNQ2t7hi3xZskmQ3IQ1YukMBDor4RnbPZueWgQy0RsGqRYEpQEzOt6yyFajAHzjXxN4SP"
    }
];

export function AboutTeam() {
    return (
        <section className="py-32 px-6 bg-[#faf7f2] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-display text-5xl mb-16 text-center text-[#2d2d2d]">
                    Meet the <span className="italic text-[#9d88cc]">Architects</span>
                </h2>

                {/* Organic Image Collage */}
                <div className="flex flex-wrap justify-center gap-6 mb-32 text-center">
                    {/* Using inline styles for organic shapes as defined in HTML */}
                    <div className="w-64 h-80 overflow-hidden border-2 border-white rotate-3 shadow-md" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}>
                        <img alt="Office Life" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqvzczW0b1FHv8xT3mwZ-ObljiDD1kukQDOUHo1DcYQW5MINtNCwI5olazU5EX1_l8agY3AWoQ3CmsMcdvvZ8eot-X2sd0bKrbnNd_7iafpuM8LedEawXW0gS6YSoS4XldVbvwec0jeWKI9no70Ydxxlbciyc6EiuSwsbMK_KiRmvh8qJjvHFzQ0D76ij3K0GRdITEPtssWeoDVN2yuDk079UGE33l0KP7f46v9bYdoWhZDdzo76KO801Znl8tg4VYwGoitNUuxn1C" />
                    </div>
                    <div className="w-80 h-64 overflow-hidden border-2 border-white -rotate-6 mt-12 shadow-md" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}>
                        <img alt="Whiteboard session" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0OS_uVGYHAQaMFtJsJyqduFEfZPkrnMfXwtCy6NKs_QHlHZt5kn83fBDnA8EdbBLmUWp-j8QtUNrhMBhbzZPA7HrZ1i9p5i09o8EQF3ZbWolTeIT6whU1DLrtL-nBGF-AfQqxgin6FYvMaT_oDbgPBttzHKQR6eCkuGV8jbWU_aWUKlDtEcLKGaCHyj6QVfKP2S6DS6JPQRQIpz9ckx5YSFPgfrE9epQVGxZM6zqLsbxRVSsSuGsWHXEbaucTEv8cn4kjEEfNHUI1" />
                    </div>
                    <div className="w-72 h-72 overflow-hidden border-2 border-white rotate-6 shadow-md" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}>
                        <img alt="Modern Workspace" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsEtxjzJg120jH7UjWHqmrasw8yNByEFcHxdcA5_1cA81U5iLOX4XO7IHz0zD5NLSeE7L6H9fhM6aqDcoG80nbb-fKXHGvbVOM-TTejQgc713Gf1f-EdyPzjL86bhrHPJ8FRtekVUFdgFqxXdA5LEt9eQoRYyodx9-tNFRvpRsa5hfx7TNWMn0HyLbJEwuluVFKO21IuyHXtqI8PGVYe80M3qubpFIfxIOHasb_XCvCcaPJLnj-KPHND6BXF3WQ_gwxUHG0CvktMWr" />
                    </div>
                </div>

                {/* Team Slider */}
                <div className="flex gap-10 overflow-x-auto pb-12 no-scrollbar snap-x justify-start md:justify-center">
                    {team.map((member, i) => (
                        <div key={i} className="flex-shrink-0 w-72 text-center snap-center group">
                            <div className="relative w-48 h-48 mx-auto mb-6">
                                <div className="absolute inset-0 rounded-full border-2 border-[#9d88cc]/20 group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-2 rounded-full overflow-hidden">
                                    <img alt={member.name} className="w-full h-full object-cover transition-all duration-500 hover:blur-[2px] brightness-95" src={member.image} />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center p-4 text-xs font-medium opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                                    <p className="text-[#2d2d2d] font-semibold bg-white/90 p-2 rounded-lg shadow-sm">
                                        {member.desc}
                                    </p>
                                </div>
                            </div>
                            <h4 className="font-bold text-xl text-[#2d2d2d]">{member.name}</h4>
                            <p className="text-[#9d88cc] text-sm font-semibold uppercase tracking-widest mt-1">{member.role}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
