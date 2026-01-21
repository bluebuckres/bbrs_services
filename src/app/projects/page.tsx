import { ProjectCard } from "@/components/projects/ProjectCard";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
    return (
        <div className="bg-[#050505] min-h-screen text-gray-100 font-sans selection:bg-[#d8c7ff]/30">
            {/* Header */}
            <header className="pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="font-display text-7xl md:text-9xl tracking-tighter mb-6 text-white">
                        Selected <span className="serif-italic opacity-40">Works</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl opacity-50 font-light leading-relaxed">
                        High-fidelity research and engineering for industry leaders. From
                        quantum computing to AI infrastructure.
                    </p>
                </div>
            </header>

            {/* Grid */}
            <main className="max-w-7xl mx-auto px-6 pb-40">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[240px]">
                    <ProjectCard
                        size="large"
                        title="AI Quant Platform"
                        category="AI / ML"
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCkZuBhVhFu963Zk3CVlW9IEnn8SP0nu9XJZ29_KBJkdAiI7XwQyl6C8gF4NqKTFE-FmHpBpa2YcOHWG6RJFxtiqz3VFZT7zDdVZiFbleZaO1QOEvkBW0rbfyfzzSgCD6p4UeVeuEhhnQpeYDgdyTDVbtHnK7Q1wUNXWeewamL8Kg-LoDZwE8_ZJYNsrU6b4LGnZ4L-NWrSqXsatBfeC6tfYhJerCI3J1oGPqJWPQh-T_5kVKkACrds6OMc5z7kXsfwr-Q9nL2KKxjK"
                        description="Algorithmic trading engine with sub-ms latency and predictive risk modeling."
                    />
                    <ProjectCard
                        size="tall"
                        title="FinTech Mobile Core"
                        category="FinTech"
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCkZuBhVhFu963Zk3CVlW9IEnn8SP0nu9XJZ29_KBJkdAiI7XwQyl6C8gF4NqKTFE-FmHpBpa2YcOHWG6RJFxtiqz3VFZT7zDdVZiFbleZaO1QOEvkBW0rbfyfzzSgCD6p4UeVeuEhhnQpeYDgdyTDVbtHnK7Q1wUNXWeewamL8Kg-LoDZwE8_ZJYNsrU6b4LGnZ4L-NWrSqXsatBfeC6tfYhJerCI3J1oGPqJWPQh-T_5kVKkACrds6OMc5z7kXsfwr-Q9nL2KKxjK"
                    />
                    <ProjectCard
                        size="wide"
                        title="Global DevOps Mesh"
                        category="SaaS"
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCkZuBhVhFu963Zk3CVlW9IEnn8SP0nu9XJZ29_KBJkdAiI7XwQyl6C8gF4NqKTFE-FmHpBpa2YcOHWG6RJFxtiqz3VFZT7zDdVZiFbleZaO1QOEvkBW0rbfyfzzSgCD6p4UeVeuEhhnQpeYDgdyTDVbtHnK7Q1wUNXWeewamL8Kg-LoDZwE8_ZJYNsrU6b4LGnZ4L-NWrSqXsatBfeC6tfYhJerCI3J1oGPqJWPQh-T_5kVKkACrds6OMc5z7kXsfwr-Q9nL2KKxjK"
                        description="Self-healing infrastructure for distributed teams."
                    />
                    <ProjectCard
                        title="BioMed Data Hub"
                        category="Healthcare"
                        // Missing image in HTML but has gradient. I'll use a placeholder or style overrides in component if image is empty?
                        // HTML used: <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-black -z-10"></div>
                        // I'll update ProjectCard to handle no image or use a default one. 
                        // For now, let's put the same image or empty string.
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCkZuBhVhFu963Zk3CVlW9IEnn8SP0nu9XJZ29_KBJkdAiI7XwQyl6C8gF4NqKTFE-FmHpBpa2YcOHWG6RJFxtiqz3VFZT7zDdVZiFbleZaO1QOEvkBW0rbfyfzzSgCD6p4UeVeuEhhnQpeYDgdyTDVbtHnK7Q1wUNXWeewamL8Kg-LoDZwE8_ZJYNsrU6b4LGnZ4L-NWrSqXsatBfeC6tfYhJerCI3J1oGPqJWPQh-T_5kVKkACrds6OMc5z7kXsfwr-Q9nL2KKxjK"
                    />
                    <ProjectCard
                        title="Quantum Registry"
                        category="Science"
                        // "bg-gradient-to-bl from-purple-900/30 to-black"
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCkZuBhVhFu963Zk3CVlW9IEnn8SP0nu9XJZ29_KBJkdAiI7XwQyl6C8gF4NqKTFE-FmHpBpa2YcOHWG6RJFxtiqz3VFZT7zDdVZiFbleZaO1QOEvkBW0rbfyfzzSgCD6p4UeVeuEhhnQpeYDgdyTDVbtHnK7Q1wUNXWeewamL8Kg-LoDZwE8_ZJYNsrU6b4LGnZ4L-NWrSqXsatBfeC6tfYhJerCI3J1oGPqJWPQh-T_5kVKkACrds6OMc5z7kXsfwr-Q9nL2KKxjK"
                    />
                    <ProjectCard
                        size="tall"
                        title="Autonomous Fleet"
                        category="Transport"
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuBktSemHIcdO_JhRQQSMzToXK_pek6VD-UsxBT3TdVOhKJ10KKwP6Grp1kVbdmahZV05103gnT_h10MuNyTrbzEiPgpGt1pqjater-Pd-AnPKfLpWtVWbNbUyczdKXKJabC43-mHravI203E6nxfQ_AF9ISKd5-7b6uofL4VA-cEZW1Mqa-6a0lSczoDwhBafX5VD5PRjBOkfEpmuyFtBO-5cUt_lTQvbGbqD_7LX_Z58C-DNssaRS75JHqjUKuDsMB3_xSTzM2lJrf"
                    />
                    <ProjectCard
                        title="Cyber Arch"
                        category="Security"
                        // "bg-neutral-800/40"
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCkZuBhVhFu963Zk3CVlW9IEnn8SP0nu9XJZ29_KBJkdAiI7XwQyl6C8gF4NqKTFE-FmHpBpa2YcOHWG6RJFxtiqz3VFZT7zDdVZiFbleZaO1QOEvkBW0rbfyfzzSgCD6p4UeVeuEhhnQpeYDgdyTDVbtHnK7Q1wUNXWeewamL8Kg-LoDZwE8_ZJYNsrU6b4LGnZ4L-NWrSqXsatBfeC6tfYhJerCI3J1oGPqJWPQh-T_5kVKkACrds6OMc5z7kXsfwr-Q9nL2KKxjK"
                    />
                    <ProjectCard
                        size="wide"
                        title="Neural Synth"
                        category="Audio AI"
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCuDPi5A1_9SH4ARzd46pnaPVPPmU74EbbO8NONj4-FWiKhKHInbZUyBl_aQbr5MZLFsS8RIDxEWi5wbvndh6v6PALnu3zm_JFiUvwTP_k-d6g-OKHTMmgQqbkMgi9zAWpZyYIWK9R3TCLxPtRNQBYUrtkV6wahI2pqXl7ScWavufvpGQbNaqJ3XjWGmgw9ePctjGmN_BmUsLW73b7jHAnOmDDiV_uyauniwkmObjzQIP0pUrfEf18qhMhPAtsKEp2ge1X-S5_kZH6o"
                        description="Generative audio workspace for creative professionals."
                    />
                </div>
            </main>

            {/* CTA Section */}
            <section className="relative py-40 px-6 overflow-hidden bg-[#fcfaf2] text-[#050505]">
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 50%, rgba(216, 199, 255, 0.08) 0%, transparent 60%)' }}></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="font-display text-7xl md:text-9xl leading-[0.85] tracking-tighter mb-12">
                                Ready to build <br />
                                <span className="serif-italic opacity-40">3x faster?</span>
                            </h2>
                            <ul className="space-y-8">
                                {[
                                    { title: "Direct access to senior devs", desc: "Skip the account managers. Work directly with the minds building your architecture." },
                                    { title: "Zero hidden costs", desc: "Fixed-scope excellence with transparent timelines and no surprise line items." },
                                    { title: "Full IP ownership", desc: "The code, the data, and the documentation belong to you from day one." },
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-5">
                                        <div className="mt-1.5 w-7 h-7 rounded-full bg-[#d8c7ff]/20 flex items-center justify-center shrink-0">
                                            <Check className="w-4 h-4 font-bold text-[#050505]" />
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-bold mb-1 tracking-tight">{item.title}</h4>
                                            <p className="opacity-60 text-lg leading-relaxed">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Form placeholder - implementing just the visual as per HTML */}
                        <div className="relative">
                            <div className="glass-form rounded-[3.5rem] p-12 relative overflow-hidden bg-white/50 border border-black/10">
                                <div className="flex justify-between items-center mb-12">
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Phase 01 — Project Context</span>
                                    <div className="flex gap-2">
                                        <div className="w-10 h-1 bg-black rounded-full"></div>
                                        <div className="w-10 h-1 bg-black/5 rounded-full"></div>
                                    </div>
                                </div>
                                <form className="space-y-10">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-xs font-bold uppercase tracking-widest opacity-50 ml-1">Full Name</label>
                                            <input className="w-full bg-white/50 border-black/10 rounded-2xl px-7 py-5 focus:ring-[#d8c7ff] focus:border-[#d8c7ff] transition-all placeholder:text-black/20 text-lg font-medium border" placeholder="Marcus Wright" type="text" />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-xs font-bold uppercase tracking-widest opacity-50 ml-1">Company Email</label>
                                            <input className="w-full bg-white/50 border-black/10 rounded-2xl px-7 py-5 focus:ring-[#d8c7ff] focus:border-[#d8c7ff] transition-all placeholder:text-black/20 text-lg font-medium border" placeholder="marcus@thames.ai" type="email" />
                                        </div>
                                    </div>
                                    <div className="pt-6">
                                        <Button className="w-full py-8 text-black bg-gradient-to-br from-[#d8c7ff] to-[#a885ff] hover:shadow-[0_0_0_4px_rgba(216,199,255,0.4)] transition-all rounded-[1.75rem] text-xl font-bold">
                                            Start Your Journey
                                            <ArrowRight className="ml-3 w-6 h-6" />
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
