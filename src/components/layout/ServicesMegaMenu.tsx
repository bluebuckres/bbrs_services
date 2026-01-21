import { ArrowRight, Cpu, Database, Shield, Cloud, Component, Terminal, Settings2, LineChart, Building2, Landmark, TestTube2, Sparkles, Radio, Headset } from "lucide-react";
import Link from "next/link";

export function ServicesMegaMenu() {
    return (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-full max-w-[1280px] pt-4 animate-in fade-in slide-in-from-top-1 duration-200 z-50">
            {/* Gradient border wrapper */}
            <div className="p-[1px] bg-gradient-to-b from-emerald-500/20 via-emerald-400/10 to-transparent rounded-xl">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[400px]">
                    {/* Left Column: Featured Solution */}
                    <div className="lg:w-1/4 p-6 border-b lg:border-b-0 lg:border-r border-black/5 dark:border-white/10 flex flex-col">
                        <h3 className="text-black/40 dark:text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                            Featured Solution
                        </h3>
                        <div className="flex-1">
                            <div className="rounded-xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-indigo-100 to-slate-100 dark:from-indigo-900/40 dark:to-slate-900/40 relative group mb-6 border border-black/5 dark:border-white/5">
                                <div
                                    className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-50 transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQPOsnOBRjFst3f50V9z41NY1BXtizBRGN3YoQ-XT3BkDcauN-2NPGQn9moGfJhVUVv3xAfZ89002Zs2iv1RAZLv5lb7WBY5SdKK9dGeeN9FJoFxMSOXi7LHtbizMVrRiYcV1IZ9RRffbEzhuXaLjqdTVWSEx9BL6ZRFbfawKJeV-LyFmC9DwwQQ3b4I12I_vA4rne4uoHwe-r8gIXvcUViuQoPiYiGCO8zJkK3lP1C8KiiCofYtKL5nbpn2pTK_dKLwiWw9AASvRI")' }}
                                />
                                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                                    <p className="text-white font-display text-xl font-bold leading-tight mb-3">
                                        AI Strategy Consulting
                                    </p>
                                    <p className="text-white/90 text-sm leading-relaxed mb-6">
                                        Revolutionizing enterprise intelligence through proprietary LLM frameworks—unlock 40% efficiency gains.
                                    </p>
                                    <button className="w-fit flex items-center gap-2 bg-white/20 backdrop-blur hover:bg-white/30 text-white text-xs font-bold py-2.5 px-5 rounded-lg transition-all border border-white/20">
                                        Learn More
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column: Core Research Services */}
                    <div className="lg:w-1/2 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-black/5 dark:border-white/10">
                        <h3 className="text-black/40 dark:text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 px-4">
                            Core Research Services
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                            <ServiceItem
                                icon={<Cpu className="w-5 h-5" />}
                                title="Artificial Intelligence"
                                description="Deploy LLMs for predictive accuracy up to 95%."
                            />
                            <ServiceItem
                                icon={<Database className="w-5 h-5" />}
                                title="Data Engineering"
                                description="Scale big data 5x faster with robust architectures."
                            />
                            <ServiceItem
                                icon={<Shield className="w-5 h-5" />}
                                title="Cyber Security"
                                description="Achieve zero-trust security with 99.9% protection."
                            />
                            <ServiceItem
                                icon={<Cloud className="w-5 h-5" />}
                                title="Cloud Strategy"
                                description="Cut cloud infrastructure costs by 30%."
                            />
                            <ServiceItem
                                icon={<Component className="w-5 h-5" />}
                                title="Product Design"
                                description="Improve user engagement metrics by 2x."
                            />
                            <ServiceItem
                                icon={<Terminal className="w-5 h-5" />}
                                title="DevOps"
                                description="Accelerate deployment cycles by 60%."
                            />
                            <ServiceItem
                                icon={<Settings2 className="w-5 h-5" />}
                                title="Automation"
                                description="Reduce operational overhead by 45%."
                            />
                            <ServiceItem
                                icon={<LineChart className="w-5 h-5" />}
                                title="Data Science"
                                description="Extract actionable insights 3x faster."
                            />
                        </div>
                    </div>

                    {/* Right Column: Solutions For & CTA */}
                    <div className="lg:w-1/4 flex flex-col">
                        <div className="p-8 flex-1">
                            <h3 className="text-black/40 dark:text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                                Solutions For
                            </h3>
                            <div className="space-y-1">
                                <SolutionItem
                                    icon={<Building2 className="w-5 h-5" />}
                                    title="Enterprise Core"
                                    subtitle="Legacy modernization"
                                    isNew
                                />
                                <SolutionItem
                                    icon={<Landmark className="w-5 h-5" />}
                                    title="FinTech Accelerator"
                                    subtitle="3x faster processing"
                                />
                                <SolutionItem
                                    icon={<TestTube2 className="w-5 h-5" />}
                                    title="BioMed Insights"
                                    subtitle="50% faster discoveries"
                                />
                                <SolutionItem
                                    icon={<Sparkles className="w-5 h-5" />}
                                    title="Creative Intelligence"
                                    subtitle="Generative asset scaling"
                                />
                                <SolutionItem
                                    icon={<Radio className="w-5 h-5" />}
                                    title="IoT Edge Connect"
                                    subtitle="99.9% uptime guaranteed"
                                />
                            </div>
                        </div>
                        <div className="p-8 bg-black/5 dark:bg-white/5 border-t border-black/5 dark:border-white/5">
                            <p className="text-black/80 dark:text-white/80 text-sm font-medium mb-4">
                                Ready to transform your operations?
                            </p>
                            <button className="w-full bg-black dark:bg-white text-white dark:text-black font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group shadow-lg">
                                <span>Speak with an Expert</span>
                                <Headset className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Insights */}
                <div className="mt-[-1px] mx-6 rounded-b-xl bg-gray-100/90 dark:bg-black/40 backdrop-blur border-x border-b border-black/5 dark:border-white/5 px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <span className="text-black/30 dark:text-white/30 text-[10px] font-bold uppercase tracking-widest">
                            Insights
                        </span>
                        <div className="flex gap-6 text-xs font-medium text-black/60 dark:text-white/60">
                            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1">
                                Latest AI Trends
                                <ArrowRight className="w-3 h-3" />
                            </Link>
                            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1">
                                Case Studies
                                <ArrowRight className="w-3 h-3" />
                            </Link>
                        </div>
                    </div>
                    <div className="text-[10px] text-black/20 dark:text-white/20 uppercase tracking-widest">
                        Updated Q4 2025
                    </div>
                </div>
            </div>
        </div>
    );
}

function ServiceItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <Link href="/services" className="flex gap-4 p-4 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer group">
            <div className="flex-shrink-0 size-10 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors border border-black/5 dark:border-white/10">
                {icon}
            </div>
            <div className="flex flex-col gap-1">
                <h4 className="text-black dark:text-white font-display font-bold text-[15px] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {title}
                </h4>
                <p className="text-black/50 dark:text-white/50 text-xs leading-relaxed">
                    {description}
                </p>
            </div>
        </Link>
    );
}

function SolutionItem({ icon, title, subtitle, isNew }: { icon: React.ReactNode, title: string, subtitle: string, isNew?: boolean }) {
    return (
        <Link href="#" className="group flex items-center gap-4 p-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-all">
            <div className="flex-shrink-0 size-10 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors border border-black/5 dark:border-white/10">
                {icon}
            </div>
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <span className="text-black dark:text-white font-display font-bold text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {title}
                    </span>
                    {isNew && (
                        <span className="bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400 text-[9px] font-bold px-1.5 py-0.5 rounded leading-none">
                            NEW
                        </span>
                    )}
                </div>
                <span className="text-black/40 dark:text-white/40 text-[11px]">
                    {subtitle}
                </span>
            </div>
        </Link>
    );
}
