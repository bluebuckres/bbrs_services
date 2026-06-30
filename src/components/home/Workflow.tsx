import { Play, Search, Layout, Code, Zap } from "lucide-react";
import Image from "next/image";

export function Workflow() {
    return (
        <section className="py-32 bg-white/30" id="how-it-works">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-20">
                    <div>
                        <h2 className="font-display text-6xl mb-8 leading-tight">
                            Our Workflow <br />
                            <span className="serif-italic opacity-40">&amp; Methodology</span>
                        </h2>
                        <p className="text-lg opacity-70 mb-12">
                            We’ve refined a process that prioritizes speed without compromising on the depth of research and quality of code.
                        </p>
                        <div className="relative w-full aspect-square bg-neutral-100 rounded-3xl overflow-hidden border border-black/5">
                            <Image
                                alt="BlueBuck Research engineering workflow and development process"
                                className="object-cover opacity-80 mix-blend-multiply grayscale"
                                src="/office_pic/IMG20251221170636 (2).jpg"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-24 h-24 bg-white/80 backdrop-blur-xl rounded-full flex items-center justify-center shadow-2xl">
                                    <Play className="w-10 h-10 fill-current ml-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-16 py-10 relative">
                        <div className="absolute left-6 top-0 bottom-0 w-px bg-black/10"></div>

                        <div className="relative pl-20 group">
                            <div className="absolute left-0 w-12 h-12 bg-white border border-black/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#d8c7ff] group-hover:border-[#d8c7ff] transition-colors">
                                <Search className="w-5 h-5" />
                            </div>
                            <h3 className="font-display text-4xl mb-3">01. Discovery</h3>
                            <p className="opacity-60 leading-relaxed">
                                We dive deep into your business requirements, existing tech debt, and long-term objectives to create a tailored roadmap.
                            </p>
                        </div>

                        <div className="relative pl-20 group">
                            <div className="absolute left-0 w-12 h-12 bg-white border border-black/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#d8c7ff] group-hover:border-[#d8c7ff] transition-colors">
                                <Layout className="w-5 h-5" />
                            </div>
                            <h3 className="font-display text-4xl mb-3">02. Architecture</h3>
                            <p className="opacity-60 leading-relaxed">
                                Designing scalable systems and robust data models. We build with the future in mind, ensuring your tech can grow as fast as you do.
                            </p>
                        </div>

                        <div className="relative pl-20 group">
                            <div className="absolute left-0 w-12 h-12 bg-white border border-black/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#d8c7ff] group-hover:border-[#d8c7ff] transition-colors">
                                <Code className="w-5 h-5" />
                            </div>
                            <h3 className="font-display text-4xl mb-3">03. Rapid Execution</h3>
                            <p className="opacity-60 leading-relaxed">
                                Agile development cycles with continuous integration. You see results in weeks, not months.
                            </p>
                        </div>

                        <div className="relative pl-20 group">
                            <div className="absolute left-0 w-12 h-12 bg-white border border-black/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#d8c7ff] group-hover:border-[#d8c7ff] transition-colors">
                                <Zap className="w-5 h-5" />
                            </div>
                            <h3 className="font-display text-4xl mb-3">04. Optimization</h3>
                            <p className="opacity-60 leading-relaxed">
                                Constant monitoring and refinement post-launch to ensure peak performance and security compliance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
