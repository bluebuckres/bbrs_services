import React from "react";
import {
    AudioWaveform,
    FileText,
    UserPlus,
    Headset,
    IdCard,
    Workflow,
    Activity,
    ShieldCheck,
    Mic,
    Receipt,
    BadgeCheck,
    LineChart
} from "lucide-react";

export default function AIVoiceProductPage() {
    return (
        <main className="bg-background-light dark:bg-background-dark text-primary dark:text-gray-100 transition-colors duration-300">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 pt-32 pb-32">
                <div className="grid grid-cols-12 gap-12 min-h-[600px]">
                    <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
                        <span className="text-neon-purple font-bold tracking-[0.3em] uppercase text-xs mb-6">
                            Product Development
                        </span>
                        <h1 className="font-display text-8xl md:text-[10rem] leading-[0.8] tracking-tighter mb-8">
                            AI Product <br />
                            <span className="italic opacity-40">Development</span>
                        </h1>
                        <h2 className="text-3xl font-display italic opacity-60 mb-10">Revolutionize Every Conversation.</h2>
                        <p className="text-xl opacity-70 max-w-lg leading-relaxed">
                            Engineering sophisticated, human-parity voice agents that navigate complex business workflows
                            with zero latency and absolute precision.
                        </p>
                    </div>
                    <div className="col-span-12 lg:col-span-6 grid grid-cols-2 grid-rows-2 gap-4">
                        <div className="rounded-3xl overflow-hidden relative row-span-2 group">
                            <img
                                alt="3D vocal waves"
                                className="w-full h-full object-cover grayscale brightness-110 transition-transform duration-700 group-hover:scale-110"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkZuBhVhFu963Zk3CVlW9IEnn8SP0nu9XJZ29_KBJkdAiI7XwQyl6C8gF4NqKTFE-FmHpBpa2YcOHWG6RJFxtiqz3VFZT7zDdVZiFbleZaO1QOEvkBW0rbfyfzzSgCD6p4UeVeuEhhnQpeYDgdyTDVbtHnK7Q1wUNXWeewamL8Kg-LoDZwE8_ZJYNsrU6b4LGnZ4L-NWrSqXsatBfeC6tfYhJerCI3J1oGPqJWPQh-T_5kVKkACrds6OMc5z7kXsfwr-Q9nL2KKxjK"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                <AudioWaveform className="text-neon-purple" />
                                <span className="text-white text-xs font-bold tracking-widest uppercase">Wave Analysis</span>
                            </div>
                        </div>
                        <div className="rounded-3xl overflow-hidden relative bg-neutral-900 group">
                            <img
                                alt="AI Nodes"
                                className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkZuBhVhFu963Zk3CVlW9IEnn8SP0nu9XJZ29_KBJkdAiI7XwQyl6C8gF4NqKTFE-FmHpBpa2YcOHWG6RJFxtiqz3VFZT7zDdVZiFbleZaO1QOEvkBW0rbfyfzzSgCD6p4UeVeuEhhnQpeYDgdyTDVbtHnK7Q1wUNXWeewamL8Kg-LoDZwE8_ZJYNsrU6b4LGnZ4L-NWrSqXsatBfeC6tfYhJerCI3J1oGPqJWPQh-T_5kVKkACrds6OMc5z7kXsfwr-Q9nL2KKxjK"
                            />
                        </div>
                        <div className="rounded-3xl overflow-hidden relative bg-neon-purple/10 group">
                            <img
                                alt="Interface"
                                className="w-full h-full object-cover mix-blend-overlay transition-transform duration-700 group-hover:scale-110"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBktSemHIcdO_JhRQQSMzToXK_pek6VD-UsxBT3TdVOhKJ10KKwP6Grp1kVbdmahZV05103gnT_h10MuNyTrbzEiPgpGt1pqjater-Pd-AnPKfLpWtVWbNbUyczdKXKJabC43-mHravI203E6nxfQ_AF9ISKd5-7b6uofL4VA-cEZW1Mqa-6a0lSczoDwhBafX5VD5PRjBOkfEpmuyFtBO-5cUt_lTQvbGbqD_7LX_Z58C-DNssaRS75JHqjUKuDsMB3_xSTzM2lJrf"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-background-dark py-40">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col items-center text-center mb-32">
                        <h2 className="font-display text-7xl md:text-[8rem] text-white leading-tight mb-20">
                            Advanced AI <br /><span className="italic text-neon-purple">Voice Agents</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                            <div className="flex flex-col items-center">
                                <div className="text-neon-purple font-display text-7xl md:text-8xl mb-4 tracking-tighter drop-shadow-[0_0_20px_rgba(176,136,255,0.5)]">3-8x</div>
                                <p className="text-white/40 uppercase tracking-widest text-sm font-bold">Return on Investment</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="text-neon-purple font-display text-7xl md:text-8xl mb-4 tracking-tighter drop-shadow-[0_0_20px_rgba(176,136,255,0.5)]">30-50%</div>
                                <p className="text-white/40 uppercase tracking-widest text-sm font-bold">Cost Reduction</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="text-neon-purple font-display text-7xl md:text-8xl mb-4 tracking-tighter drop-shadow-[0_0_20px_rgba(176,136,255,0.5)]">30%+</div>
                                <p className="text-white/40 uppercase tracking-widest text-sm font-bold">CSAT Boost</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry Specific Agents */}
            <section className="py-40 max-w-7xl mx-auto px-6">
                <div className="mb-24">
                    <span className="text-neon-purple font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                        Vertical Intelligence
                    </span>
                    <h2 className="font-display text-7xl mb-6">
                        Industry-Specific <span className="italic opacity-40">Agents</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-zinc-900 text-white p-8 border border-white/5 rounded-3xl hover:border-neon-purple/30 transition-all duration-500 lg:row-span-2 flex flex-col justify-between min-h-[400px]">
                        <Receipt className="text-neon-purple w-10 h-10" />
                        <div>
                            <h3 className="text-white text-3xl font-bold mb-4 leading-tight">Automate Invoice Processing by 90%</h3>
                            <p className="text-white/40 text-sm leading-relaxed">
                                End-to-end extraction and verification of financial data with direct ERP synchronization via voice-enabled queries.
                            </p>
                        </div>
                    </div>
                    <div className="bg-zinc-900 text-white p-8 border border-white/5 rounded-3xl hover:border-neon-purple/30 transition-all duration-500">
                        <UserPlus className="text-neon-purple w-10 h-10 mb-12" />
                        <h3 className="text-white text-2xl font-bold mb-4">Slash Time-to-Hire by 40%</h3>
                        <p className="text-white/40 text-sm">
                            Automated screening agents that conduct initial technical assessments with semantic analysis.
                        </p>
                    </div>
                    <div className="bg-zinc-900 text-white p-8 border border-white/5 rounded-3xl hover:border-neon-purple/30 transition-all duration-500">
                        <Headset className="text-neon-purple w-10 h-10 mb-12" />
                        <h3 className="text-white text-2xl font-bold mb-4">Scale Sales Assistant Capacity</h3>
                        <p className="text-white/40 text-sm">
                            Proactive lead qualification and follow-up agents maintaining 24/7 engagement pipeline.
                        </p>
                    </div>
                    <div className="bg-zinc-900 text-white p-8 border border-white/5 rounded-3xl hover:border-neon-purple/30 transition-all duration-500 lg:col-span-2 flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/2">
                            <IdCard className="text-neon-purple w-10 h-10 mb-8" />
                            <h3 className="text-white text-3xl font-bold mb-4 leading-tight">Instant HR Onboarding</h3>
                            <p className="text-white/40 text-sm leading-relaxed">
                                Seamlessly guide new hires through compliance, documentation, and system setup via intuitive voice dialogue.
                            </p>
                        </div>
                        <div className="md:w-1/2 rounded-2xl overflow-hidden grayscale">
                            <img
                                alt="Corporate"
                                className="w-full h-40 object-cover opacity-60"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBktSemHIcdO_JhRQQSMzToXK_pek6VD-UsxBT3TdVOhKJ10KKwP6Grp1kVbdmahZV05103gnT_h10MuNyTrbzEiPgpGt1pqjater-Pd-AnPKfLpWtVWbNbUyczdKXKJabC43-mHravI203E6nxfQ_AF9ISKd5-7b6uofL4VA-cEZW1Mqa-6a0lSczoDwhBafX5VD5PRjBOkfEpmuyFtBO-5cUt_lTQvbGbqD_7LX_Z58C-DNssaRS75JHqjUKuDsMB3_xSTzM2lJrf"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Functional Use Cases */}
            <section className="bg-primary py-40">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        <div className="bg-white/10 backdrop-blur-md border border-white/10 p-12 rounded-[2.5rem] mt-0">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                                <Workflow className="text-neon-purple w-8 h-8" />
                            </div>
                            <h3 className="text-white text-2xl font-bold mb-6">Workflow Automation</h3>
                            <p className="text-white/50 mb-8">Multi-step task execution across disparate software ecosystems.</p>
                            <div className="text-3xl font-display text-white">40% Productivity Gain</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md border border-white/10 p-12 rounded-[2.5rem] mt-12">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                                <Activity className="text-neon-purple w-8 h-8" />
                            </div>
                            <h3 className="text-white text-2xl font-bold mb-6">Monitoring &amp; Alert</h3>
                            <p className="text-white/50 mb-8">Real-time system health checks with immediate voice-to-operator escalation.</p>
                            <div className="text-3xl font-display text-white">Zero Downtime</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md border border-white/10 p-12 rounded-[2.5rem] mt-24">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                                <ShieldCheck className="text-neon-purple w-8 h-8" />
                            </div>
                            <h3 className="text-white text-2xl font-bold mb-6">Compliance Monitoring</h3>
                            <p className="text-white/50 mb-8">Continuous audit trails and automated policy enforcement agents.</p>
                            <div className="text-3xl font-display text-white">Zero-Fine Security</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Intelligence */}
            <section className="max-w-7xl mx-auto px-6 py-40">
                <div className="mb-20">
                    <h2 className="font-display text-7xl text-center">Strategic <span
                        className="italic opacity-40">Intelligence</span></h2>
                </div>
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-12 lg:col-span-7 bg-background-light dark:bg-zinc-900 border border-black/5 dark:border-white/5 rounded-[3.5rem] p-12 flex flex-col justify-between min-h-[500px]">
                        <div>
                            <h3 className="text-4xl font-display mb-6">Smart Mobility Solutions</h3>
                            <p className="opacity-60 text-lg max-w-md">Orchestrating complex logistics and fleet communications through decentralized AI agents.</p>
                        </div>
                        <div className="mt-12">
                            <img
                                alt="Mobility data"
                                className="w-full h-48 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuDPi5A1_9SH4ARzd46pnaPVPPmU74EbbO8NONj4-FWiKhKHInbZUyBl_aQbr5MZLFsS8RIDxEWi5wbvndh6v6PALnu3zm_JFiUvwTP_k-d6g-OKHTMmgQqbkMgi9zAWpZyYIWK9R3TCLxPtRNQBYUrtkV6wahI2pqXl7ScWavufvpGQbNaqJ3XjWGmgw9ePctjGmN_BmUsLW73b7jHAnOmDDiV_uyauniwkmObjzQIP0pUrfEf18qhMhPAtsKEp2ge1X-S5_kZH6o"
                            />
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-5 grid grid-rows-2 gap-8">
                        <div className="bg-neon-purple/5 border border-neon-purple/20 rounded-[3rem] p-10 flex flex-col justify-between">
                            <h3 className="text-2xl font-bold">Predictive Maintenance</h3>
                            <div className="flex items-end justify-between">
                                <span className="text-5xl font-display text-neon-purple">99.8%</span>
                                <span className="text-xs uppercase tracking-widest opacity-40 mb-2">Uptime Reliability</span>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-black/10 dark:border-white/10 rounded-[3rem] p-10 flex flex-col justify-between">
                            <h3 className="text-2xl font-bold">Supply Chain Intelligence</h3>
                            <div className="flex items-center gap-4">
                                <div className="h-1 w-full bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-neon-purple w-[85%]"></div>
                                </div>
                                <span className="font-bold opacity-60">85%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-6 pb-40">
                <div className="bg-primary rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <img
                            alt="background"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBktSemHIcdO_JhRQQSMzToXK_pek6VD-UsxBT3TdVOhKJ10KKwP6Grp1kVbdmahZV05103gnT_h10MuNyTrbzEiPgpGt1pqjater-Pd-AnPKfLpWtVWbNbUyczdKXKJabC43-mHravI203E6nxfQ_AF9ISKd5-7b6uofL4VA-cEZW1Mqa-6a0lSczoDwhBafX5VD5PRjBOkfEpmuyFtBO-5cUt_lTQvbGbqD_7LX_Z58C-DNssaRS75JHqjUKuDsMB3_xSTzM2lJrf"
                        />
                    </div>
                    <div className="relative z-10">
                        <h2 className="font-display text-6xl md:text-8xl text-white mb-12 leading-tight">
                            Launch Your <br /><span className="italic">Voice-Powered</span> Future
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <button className="bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:bg-neon-purple hover:scale-105 transition-all">
                                <Mic className="w-6 h-6" />
                                Speak with an Expert
                            </button>
                            <button className="border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/5 transition-all">
                                View Technical Docs
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
