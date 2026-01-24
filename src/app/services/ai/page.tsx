import React from "react";
import {
    Bot,
    ArrowRight,
    ArrowUpRight,
    MessageSquare,
    Users,
    Database,
    Workflow,
    Network,
    Terminal,
    Globe,
    Brain,
    Cpu,
    Zap,
    Layers,
    Activity,
    ScanFace,
    Sparkles,
    BarChart3
} from "lucide-react";

export default function AIServicesPage() {
    return (
        <main className="bg-background-light dark:bg-background-dark text-primary dark:text-gray-100 transition-colors duration-300">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 pt-32 pb-32">
                <div className="grid grid-cols-12 gap-12 items-center">
                    <div className="col-span-12 lg:col-span-6">
                        <span className="inline-block px-4 py-1.5 rounded-full border border-neon-purple/30 bg-neon-purple/10 text-neon-purple text-xs font-bold tracking-widest uppercase mb-6">
                            Expertise Overview
                        </span>
                        <h1 className="font-display text-8xl md:text-[10rem] leading-[0.85] tracking-tighter mb-8">
                            Artificial <br />
                            <span className="italic opacity-40">Intelligence</span>
                        </h1>
                        <p className="text-2xl opacity-70 max-w-lg leading-relaxed mb-10">
                            Elite research and engineering for global enterprises. We deploy production-ready intelligence
                            where others only offer theory.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-primary dark:bg-white dark:text-black text-white rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-all">
                                Consult Our Labs <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 grid grid-cols-2 grid-rows-3 gap-4 h-[600px]">
                        <div className="row-span-2 rounded-3xl overflow-hidden bg-neutral-200 relative group">
                            <img
                                alt="AI Visualization"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkZuBhVhFu963Zk3CVlW9IEnn8SP0nu9XJZ29_KBJkdAiI7XwQyl6C8gF4NqKTFE-FmHpBpa2YcOHWG6RJFxtiqz3VFZT7zDdVZiFbleZaO1QOEvkBW0rbfyfzzSgCD6p4UeVeuEhhnQpeYDgdyTDVbtHnK7Q1wUNXWeewamL8Kg-LoDZwE8_ZJYNsrU6b4LGnZ4L-NWrSqXsatBfeC6tfYhJerCI3J1oGPqJWPQh-T_5kVKkACrds6OMc5z7kXsfwr-Q9nL2KKxjK"
                            />
                        </div>
                        <div className="row-span-1 rounded-3xl overflow-hidden bg-neutral-300 relative group">
                            <img
                                alt="Data Architecture"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkZuBhVhFu963Zk3CVlW9IEnn8SP0nu9XJZ29_KBJkdAiI7XwQyl6C8gF4NqKTFE-FmHpBpa2YcOHWG6RJFxtiqz3VFZT7zDdVZiFbleZaO1QOEvkBW0rbfyfzzSgCD6p4UeVeuEhhnQpeYDgdyTDVbtHnK7Q1wUNXWeewamL8Kg-LoDZwE8_ZJYNsrU6b4LGnZ4L-NWrSqXsatBfeC6tfYhJerCI3J1oGPqJWPQh-T_5kVKkACrds6OMc5z7kXsfwr-Q9nL2KKxjK"
                            />
                        </div>
                        <div className="row-span-2 rounded-3xl overflow-hidden bg-neutral-100 relative group">
                            <img
                                alt="Neural Networks"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBktSemHIcdO_JhRQQSMzToXK_pek6VD-UsxBT3TdVOhKJ10KKwP6Grp1kVbdmahZV05103gnT_h10MuNyTrbzEiPgpGt1pqjater-Pd-AnPKfLpWtVWbNbUyczdKXKJabC43-mHravI203E6nxfQ_AF9ISKd5-7b6uofL4VA-cEZW1Mqa-6a0lSczoDwhBafX5VD5PRjBOkfEpmuyFtBO-5cUt_lTQvbGbqD_7LX_Z58C-DNssaRS75JHqjUKuDsMB3_xSTzM2lJrf"
                            />
                        </div>
                        <div className="row-span-1 rounded-3xl overflow-hidden bg-neutral-400 relative group">
                            <img
                                alt="AI Agents"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBktSemHIcdO_JhRQQSMzToXK_pek6VD-UsxBT3TdVOhKJ10KKwP6Grp1kVbdmahZV05103gnT_h10MuNyTrbzEiPgpGt1pqjater-Pd-AnPKfLpWtVWbNbUyczdKXKJabC43-mHravI203E6nxfQ_AF9ISKd5-7b6uofL4VA-cEZW1Mqa-6a0lSczoDwhBafX5VD5PRjBOkfEpmuyFtBO-5cUt_lTQvbGbqD_7LX_Z58C-DNssaRS75JHqjUKuDsMB3_xSTzM2lJrf"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Arsenal */}
            <section className="bg-primary py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-20">
                        <span className="text-neon-purple font-bold tracking-widest uppercase text-xs mb-4 block">
                            Core Arsenal
                        </span>
                        <h2 className="text-white font-display text-6xl">Research-Led Capabilities</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Machine Learning */}
                        <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-neon-purple/50 transition-all group">
                            <h3 className="text-white text-3xl font-bold mb-4">Machine Learning</h3>
                            <div className="text-5xl font-display text-purple-accent mb-6">95% Accuracy</div>
                            <p className="text-white/50 text-lg leading-relaxed">
                                Proprietary model architecture for classification and regression with unparalleled precision.
                            </p>
                        </div>
                        {/* NLP */}
                        <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-neon-purple/50 transition-all group">
                            <h3 className="text-white text-3xl font-bold mb-4">NLP</h3>
                            <div className="text-5xl font-display text-purple-accent mb-6">50% Error Reduction</div>
                            <p className="text-white/50 text-lg leading-relaxed">
                                Advanced language understanding, sentiment mapping, and automated synthesis.
                            </p>
                        </div>
                        {/* Computer Vision */}
                        <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-neon-purple/50 transition-all group">
                            <h3 className="text-white text-3xl font-bold mb-4">Computer Vision</h3>
                            <div className="text-5xl font-display text-purple-accent mb-6">10ms Latency</div>
                            <p className="text-white/50 text-lg leading-relaxed">
                                Real-time object detection and spatial analysis at sub-millisecond speeds.
                            </p>
                        </div>
                        {/* Generative Models */}
                        <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-neon-purple/50 transition-all group">
                            <h3 className="text-white text-3xl font-bold mb-4">Generative Models</h3>
                            <div className="text-5xl font-display text-purple-accent mb-6">3x Scalability</div>
                            <p className="text-white/50 text-lg leading-relaxed">
                                Custom GANs and diffusion models for high-fidelity content and data synthesis.
                            </p>
                        </div>
                        {/* Deep Learning */}
                        <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-neon-purple/50 transition-all group">
                            <h3 className="text-white text-3xl font-bold mb-4">Deep Learning</h3>
                            <div className="text-5xl font-display text-purple-accent mb-6">99% Stability</div>
                            <p className="text-white/50 text-lg leading-relaxed">
                                Multi-layer neural network training for complex pattern recognition tasks.
                            </p>
                        </div>
                        {/* Predictive Analytics */}
                        <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-neon-purple/50 transition-all group">
                            <h3 className="text-white text-3xl font-bold mb-4">Predictive Analytics</h3>
                            <div className="text-5xl font-display text-purple-accent mb-6">65% Faster Insights</div>
                            <p className="text-white/50 text-lg leading-relaxed">
                                Forecasting engines that predict market shifts before they happen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* End-to-End Solutions */}
            <section className="py-32 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="font-display text-7xl mb-6 text-primary dark:text-white">End-to-End Solutions</h2>
                        <p className="opacity-60 text-xl max-w-2xl mx-auto text-primary dark:text-white">
                            From strategy to deployment, we bridge the gap between innovation and utility.
                        </p>
                    </div>
                    <div className="space-y-12">
                        {/* Consulting */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-7 rounded-[3rem] overflow-hidden bg-neutral-200 aspect-video lg:order-1 relative group">
                                <img
                                    alt="Consulting"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuDPi5A1_9SH4ARzd46pnaPVPPmU74EbbO8NONj4-FWiKhKHInbZUyBl_aQbr5MZLFsS8RIDxEWi5wbvndh6v6PALnu3zm_JFiUvwTP_k-d6g-OKHTMmgQqbkMgi9zAWpZyYIWK9R3TCLxPtRNQBYUrtkV6wahI2pqXl7ScWavufvpGQbNaqJ3XjWGmgw9ePctjGmN_BmUsLW73b7jHAnOmDDiV_uyauniwkmObjzQIP0pUrfEf18qhMhPAtsKEp2ge1X-S5_kZH6o"
                                />
                            </div>
                            <div className="lg:col-span-5 lg:order-2 lg:-ml-20 z-10">
                                <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/5 p-12 rounded-[2.5rem] shadow-2xl transition-transform duration-300 hover:-translate-y-2">
                                    <div className="text-neon-purple font-bold text-6xl font-display mb-4">80%</div>
                                    <h3 className="text-3xl font-bold mb-4 text-primary dark:text-white">AI Consulting</h3>
                                    <p className="opacity-60 mb-8 text-lg text-primary dark:text-white">
                                        Achieving breakthrough results with strategic roadmaps designed for market dominance.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-primary dark:text-white">
                                            <span className="w-2 h-2 rounded-full bg-neon-purple"></span> ML Fusion Strategies
                                        </li>
                                        <li className="flex items-center gap-3 text-primary dark:text-white">
                                            <span className="w-2 h-2 rounded-full bg-neon-purple"></span> Algorithm Optimization
                                        </li>
                                        <li className="flex items-center gap-3 text-primary dark:text-white">
                                            <span className="w-2 h-2 rounded-full bg-neon-purple"></span> Enterprise AI Audits
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* App Development */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-5 z-10 lg:-mr-20">
                                <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/5 p-12 rounded-[2.5rem] shadow-2xl transition-transform duration-300 hover:-translate-y-2">
                                    <div className="text-neon-purple font-bold text-6xl font-display mb-4">Priority</div>
                                    <h3 className="text-3xl font-bold mb-4 text-primary dark:text-white">AI App Development</h3>
                                    <p className="opacity-60 mb-8 text-lg text-primary dark:text-white">
                                        Rapid prototyping and priority builds that go from concept to production in record time.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-primary dark:text-white">
                                            <span className="w-2 h-2 rounded-full bg-neon-purple"></span> Full-Stack AI Integration
                                        </li>
                                        <li className="flex items-center gap-3 text-primary dark:text-white">
                                            <span className="w-2 h-2 rounded-full bg-neon-purple"></span> Scalable Cloud Infrastructures
                                        </li>
                                        <li className="flex items-center gap-3 text-primary dark:text-white">
                                            <span className="w-2 h-2 rounded-full bg-neon-purple"></span> Real-time User Feedback Loops
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:col-span-7 rounded-[3rem] overflow-hidden bg-neutral-200 aspect-video relative group">
                                <img
                                    alt="App Dev"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuDPi5A1_9SH4ARzd46pnaPVPPmU74EbbO8NONj4-FWiKhKHInbZUyBl_aQbr5MZLFsS8RIDxEWi5wbvndh6v6PALnu3zm_JFiUvwTP_k-d6g-OKHTMmgQqbkMgi9zAWpZyYIWK9R3TCLxPtRNQBYUrtkV6wahI2pqXl7ScWavufvpGQbNaqJ3XjWGmgw9ePctjGmN_BmUsLW73b7jHAnOmDDiV_uyauniwkmObjzQIP0pUrfEf18qhMhPAtsKEp2ge1X-S5_kZH6o"
                                />
                            </div>
                        </div>

                        {/* Recommendation Engines */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-7 rounded-[3rem] overflow-hidden bg-neutral-200 aspect-video lg:order-1 relative group">
                                <img
                                    alt="Recommendation Engine"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBktSemHIcdO_JhRQQSMzToXK_pek6VD-UsxBT3TdVOhKJ10KKwP6Grp1kVbdmahZV05103gnT_h10MuNyTrbzEiPgpGt1pqjater-Pd-AnPKfLpWtVWbNbUyczdKXKJabC43-mHravI203E6nxfQ_AF9ISKd5-7b6uofL4VA-cEZW1Mqa-6a0lSczoDwhBafX5VD5PRjBOkfEpmuyFtBO-5cUt_lTQvbGbqD_7LX_Z58C-DNssaRS75JHqjUKuDsMB3_xSTzM2lJrf"
                                />
                            </div>
                            <div className="lg:col-span-5 lg:order-2 lg:-ml-20 z-10">
                                <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/5 p-12 rounded-[2.5rem] shadow-2xl transition-transform duration-300 hover:-translate-y-2">
                                    <div className="text-neon-purple font-bold text-6xl font-display mb-4">60%</div>
                                    <h3 className="text-3xl font-bold mb-4 text-primary dark:text-white">AI Recommendation Engines</h3>
                                    <p className="opacity-60 mb-8 text-lg text-primary dark:text-white">
                                        Massive engagement spikes through hyper-personalized content and product delivery.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-primary dark:text-white">
                                            <span className="w-2 h-2 rounded-full bg-neon-purple"></span> Collaborative Filtering
                                        </li>
                                        <li className="flex items-center gap-3 text-primary dark:text-white">
                                            <span className="w-2 h-2 rounded-full bg-neon-purple"></span> Dynamic User Profiling
                                        </li>
                                        <li className="flex items-center gap-3 text-primary dark:text-white">
                                            <span className="w-2 h-2 rounded-full bg-neon-purple"></span> Real-time Adjustments
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intelligent Agent Suite */}
            <section className="bg-black py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-20 text-center">
                        <span className="text-neon-purple font-bold tracking-widest uppercase text-xs mb-4 block">
                            Future Tech
                        </span>
                        <h2 className="text-white font-display text-7xl">Intelligent Agent Suite</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Chatbot */}
                        <div className="p-12 rounded-[3rem] bg-zinc-900 border border-white/5 hover:border-neon-purple/40 transition-all">
                            <div className="flex justify-between items-start mb-12">
                                <div className="w-16 h-16 bg-neon-purple/10 rounded-2xl flex items-center justify-center">
                                    <MessageSquare className="text-neon-purple w-8 h-8" />
                                </div>
                                <span className="text-purple-accent font-display text-5xl">70%</span>
                            </div>
                            <h3 className="text-white text-3xl font-bold mb-4">AI Chatbot Development</h3>
                            <p className="text-white/40 text-lg mb-6">
                                Instant resolution for complex customer queries via advanced natural language understanding.
                            </p>
                            <div className="text-xs font-bold text-neon-purple tracking-widest uppercase">
                                Instant Resolution Spike
                            </div>
                        </div>
                        {/* AI Agent */}
                        <div className="p-12 rounded-[3rem] bg-zinc-900 border border-white/5 hover:border-neon-purple/40 transition-all">
                            <div className="flex justify-between items-start mb-12">
                                <div className="w-16 h-16 bg-neon-purple/10 rounded-2xl flex items-center justify-center">
                                    <Users className="text-neon-purple w-8 h-8" />
                                </div>
                                <span className="text-purple-accent font-display text-5xl">2x</span>
                            </div>
                            <h3 className="text-white text-3xl font-bold mb-4">AI Agent Development</h3>
                            <p className="text-white/40 text-lg mb-6">
                                Autonomous agents that execute complex workflows across your entire tech stack.
                            </p>
                            <div className="text-xs font-bold text-neon-purple tracking-widest uppercase">
                                Productivity Multiplier
                            </div>
                        </div>
                        {/* RAG */}
                        <div className="p-12 rounded-[3rem] bg-zinc-900 border border-white/5 hover:border-neon-purple/40 transition-all">
                            <div className="flex justify-between items-start mb-12">
                                <div className="w-16 h-16 bg-neon-purple/10 rounded-2xl flex items-center justify-center">
                                    <Database className="text-neon-purple w-8 h-8" />
                                </div>
                                <span className="text-purple-accent font-display text-5xl">50%</span>
                            </div>
                            <h3 className="text-white text-3xl font-bold mb-4">RAG Systems</h3>
                            <p className="text-white/40 text-lg mb-6">
                                Retrieval-Augmented Generation for factually accurate, private data processing.
                            </p>
                            <div className="text-xs font-bold text-neon-purple tracking-widest uppercase">
                                Faster Response Times
                            </div>
                        </div>
                        {/* Automation */}
                        <div className="p-12 rounded-[3rem] bg-zinc-900 border border-white/5 hover:border-neon-purple/40 transition-all">
                            <div className="flex justify-between items-start mb-12">
                                <div className="w-16 h-16 bg-neon-purple/10 rounded-2xl flex items-center justify-center">
                                    <Workflow className="text-neon-purple w-8 h-8" />
                                </div>
                                <span className="text-purple-accent font-display text-5xl">45%</span>
                            </div>
                            <h3 className="text-white text-3xl font-bold mb-4">AI-Powered Automation</h3>
                            <p className="text-white/40 text-lg mb-6">
                                Smart automation that learns and adapts to your operational bottlenecks.
                            </p>
                            <div className="text-xs font-bold text-neon-purple tracking-widest uppercase">
                                Operational Cost Savings
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Product Development */}
            <section className="py-32 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/5 p-16 rounded-[4rem] relative overflow-hidden group">
                            <div className="relative z-10">
                                <h2 className="font-display text-6xl mb-8 text-primary dark:text-white">AI Product Development</h2>
                                <div className="flex flex-col gap-10">
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-white/10 flex items-center justify-center font-bold text-xl text-primary dark:text-white">
                                            01
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2 text-primary dark:text-white">Model Refinement</h4>
                                            <p className="opacity-60 text-primary dark:text-white">
                                                Fine-tuning specialized parameters for industry-specific precision.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-white/10 flex items-center justify-center font-bold text-xl text-primary dark:text-white">
                                            02
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2 text-primary dark:text-white">UX Perfection</h4>
                                            <p className="opacity-60 text-primary dark:text-white">
                                                Designing intuitive interfaces that make AI interaction seamless and human.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-accent/20 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                        </div>

                        <div className="p-16 rounded-[4rem] relative overflow-hidden group bg-primary dark:bg-zinc-900 border-none">
                            <div className="relative z-10">
                                <div className="text-neon-purple font-display text-7xl mb-4">35%</div>
                                <h2 className="font-display text-6xl text-white mb-8">LLM Customization</h2>
                                <p className="text-white/60 text-xl leading-relaxed mb-12">
                                    Significant performance boost through domain-specific fine-tuning and proprietary dataset integration.
                                </p>
                                <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-neon-purple hover:text-white transition-all">
                                    View Case Studies
                                </button>
                            </div>
                            <div className="absolute -top-20 -left-20 w-80 h-80 bg-neon-purple/10 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-6xl mx-auto px-6 mb-32">
                <div className="bg-primary text-white rounded-[3.5rem] p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center gap-16">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/20 blur-[100px] rounded-full"></div>
                    <div className="relative z-10 md:w-2/3">
                        <span className="text-neon-purple font-bold tracking-widest uppercase text-sm mb-6 block">
                            Future-Proof Your Firm
                        </span>
                        <h2 className="font-display text-6xl md:text-8xl mb-8 leading-tight">
                            Join the <br />
                            <span className="italic">Vanguard.</span>
                        </h2>
                        <p className="text-white/60 text-xl leading-relaxed max-w-xl">
                            Deploy world-class AI solutions today. Our lab is ready to scale your most ambitious technical
                            visions.
                        </p>
                    </div>
                    <div className="relative z-10 w-full md:w-1/3 flex flex-col gap-4">
                        <button className="w-full py-6 px-8 bg-white text-black rounded-2xl font-bold text-xl hover:bg-neon-purple hover:text-white transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(176,136,255,0.3)]">
                            Let&apos;s Connect <ArrowUpRight className="w-5 h-5" />
                        </button>
                        <p className="text-center text-sm text-white/40">Trusted by Global Fortune 500 Enterprises</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
