"use client";

import React from "react";
import {
    ArrowRight, Cpu, Database, Shield, Cloud, Component,
    Terminal, Settings2, LineChart, Building2, Landmark,
    TestTube2, Sparkles, Headset
} from "lucide-react";
import Link from "next/link";

// --- Sub Components ---
function ServiceItem({ icon, title, description, href }: { icon: React.ReactNode, title: string, description: string, href: string }) {
    return (
        <Link href={href} className="flex gap-3 p-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer group border border-transparent hover:border-white/5">
            <div className="flex-shrink-0 size-8 rounded-lg bg-white/5 flex items-center justify-center text-white/50 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                {icon}
            </div>
            <div className="flex flex-col justify-center">
                <h4 className="text-white/90 font-medium text-sm group-hover:text-emerald-300 transition-colors">
                    {title}
                </h4>
                <p className="text-white/40 text-[11px] leading-tight mt-0.5 truncate max-w-[140px]">
                    {description}
                </p>
            </div>
        </Link>
    );
}

function SolutionItem({ icon, title, subtitle, href, isNew }: { icon: React.ReactNode, title: string, subtitle: string, href: string, isNew?: boolean }) {
    return (
        <Link href={href} className="group flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-all">
            <div className="flex-shrink-0 size-8 rounded-lg bg-white/5 flex items-center justify-center text-white/50 group-hover:text-emerald-400 transition-colors">
                {icon}
            </div>
            <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2">
                    <span className="text-white/80 font-medium text-xs group-hover:text-white transition-colors truncate">
                        {title}
                    </span>
                    {isNew && (
                        <span className="bg-emerald-500/20 text-emerald-400 text-[9px] font-bold px-1.5 py-0.5 rounded leading-none border border-emerald-500/20">
                            NEW
                        </span>
                    )}
                </div>
                <span className="text-white/30 text-[10px] truncate">
                    {subtitle}
                </span>
            </div>
        </Link>
    );
}

export function ServicesMegaMenu() {
    return (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-full max-w-[1280px] pt-4 animate-in fade-in slide-in-from-top-2 duration-300 z-50">
            {/* Main Glass Panel Wrapper */}
            <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/20">

                {/* Grid Layout with p-1 gap for the 'Bento' look */}
                <div className="grid grid-cols-12 gap-1 p-1">

                    {/* --- Column 1: Featured Solutions (Split into 2) --- */}
                    <div className="col-span-12 lg:col-span-3 flex flex-col gap-1">
                        {/* Tile 1: AI Strategy — links to /projects?filter=ai per reference */}
                        <Link href="/projects?filter=ai" className="flex-1 bg-white/5 rounded-2xl relative overflow-hidden group flex flex-col justify-between p-6">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40 mix-blend-overlay"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQPOsnOBRjFst3f50V9z41NY1BXtizBRGN3YoQ-XT3BkDcauN-2NPGQn9moGfJhVUVv3xAfZ89002Zs2iv1RAZLv5lb7WBY5SdKK9dGeeN9FJoFxMSOXi7LHtbizMVrRiYcV1IZ9RRffbEzhuXaLjqdTVWSEx9BL6ZRFbfawKJeV-LyFmC9DwwQQ3b4I12I_vA4rne4uoHwe-r8gIXvcUViuQoPiYiGCO8zJkK3lP1C8KiiCofYtKL5nbpn2pTK_dKLwiWw9AASvRI")' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest mb-2 block">
                                    Featured Solution
                                </span>
                                <h3 className="text-lg text-white font-medium mb-2 leading-tight">
                                    AI Strategy Consulting
                                </h3>
                                <p className="text-xs text-white/60 leading-relaxed mb-4 line-clamp-2">
                                    Revolutionize enterprise intelligence with proprietary LLM—unlock 40% efficiency gains.
                                </p>
                            </div>

                            <span className="relative z-10 flex items-center gap-2 text-xs text-white font-medium w-fit">
                                <span className="border-b border-white/30 pb-0.5 group-hover:border-emerald-400 group-hover:text-emerald-400 transition-all">See AI Work</span>
                                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 group-hover:text-emerald-400 transition-all" />
                            </span>
                        </Link>

                        {/* Tile 2: Custom Software — links to /projects?filter=software per reference */}
                        <Link href="/projects?filter=software" className="flex-1 bg-white/5 rounded-2xl relative overflow-hidden group flex flex-col justify-between p-6">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent opacity-50" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-2 block">
                                    Signature Service
                                </span>
                                <h3 className="text-lg text-white font-medium mb-2 leading-tight">
                                    Custom Software
                                </h3>
                                <p className="text-xs text-white/60 leading-relaxed mb-4 line-clamp-2">
                                    From MVP to enterprise SaaS: Architect, develop, and scale custom software solutions.
                                </p>
                            </div>

                            <span className="relative z-10 flex items-center gap-2 text-xs text-white font-medium w-fit">
                                <span className="border-b border-white/30 pb-0.5 group-hover:border-blue-400 group-hover:text-blue-400 transition-all">See Product Work</span>
                                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 group-hover:text-blue-400 transition-all" />
                            </span>
                        </Link>
                    </div>

                    {/* --- Column 2: SOFTWARE & ENGINEERING SERVICES (6 cols) --- */}
                    <div className="col-span-12 lg:col-span-6 bg-white/5 rounded-2xl p-8">
                        <div className="flex items-center justify-between mb-6">
                            <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest">
                                SOFTWARE &amp; ENGINEERING SERVICES
                            </h4>
                            <Link href="/services" className="text-xs text-white/40 hover:text-white transition-colors flex items-center gap-1">
                                View All <ArrowRight className="w-3 h-3" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            <ServiceItem icon={<Cpu className="w-4 h-4" />} title="Artificial Intelligence" description="LLM fine-tuning, RAG, agents" href="/services/artificial-intelligence" />
                            <ServiceItem icon={<Database className="w-4 h-4" />} title="Data Engineering" description="Pipelines that don't break at scale" href="/services/data-engineering" />
                            <ServiceItem icon={<Shield className="w-4 h-4" />} title="Cyber Security" description="SOC 2 · Pen Testing · Zero Trust" href="/services/cybersecurity" />
                            <ServiceItem icon={<Cloud className="w-4 h-4" />} title="Cloud Strategy" description="AWS · GCP · Azure · IaC" href="/services/cloud-strategy" />
                            <ServiceItem icon={<Component className="w-4 h-4" />} title="Product Design" description="Systems that convert and retain" href="/services/product-design" />
                            <ServiceItem icon={<Terminal className="w-4 h-4" />} title="DevOps" description="CI/CD · Kubernetes · Docker" href="/services/devops" />
                            <ServiceItem icon={<Settings2 className="w-4 h-4" />} title="Automation" description="Workflows that remove the bottleneck" href="/services/automation" />
                            <ServiceItem icon={<LineChart className="w-4 h-4" />} title="Data Science" description="Decisions backed by real numbers" href="/services/data-science" />
                        </div>
                    </div>

                    {/* --- Column 3: Solutions & CTA (3 cols) --- */}
                    <div className="col-span-12 lg:col-span-3 flex flex-col gap-1">

                        {/* Solutions List */}
                        <div className="bg-white/5 rounded-2xl p-6 flex-1">
                            <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-6">
                                Solutions For
                            </h4>
                            <div className="space-y-1">
                                <SolutionItem icon={<Building2 className="w-4 h-4" />} title="Startup MVP" subtitle="Idea to market in 12 weeks" href="/services" />
                                <SolutionItem icon={<Landmark className="w-4 h-4" />} title="FinTech Accelerator" subtitle="3x faster processing" href="/services" />
                                <SolutionItem icon={<TestTube2 className="w-4 h-4" />} title="BioMed Insights" subtitle="50% faster discoveries" href="/services" isNew />
                                <SolutionItem icon={<Sparkles className="w-4 h-4" />} title="Enterprise Software" subtitle="Custom business solutions" href="/services" />
                            </div>
                        </div>

                        {/* Bottom CTA Box — links to /contact */}
                        <Link href="/contact" className="bg-white/5 rounded-2xl p-6 relative overflow-hidden group block">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h4 className="text-sm font-medium text-white mb-3 relative z-10">Ready to transform?</h4>
                            <div className="w-full bg-white text-black text-sm font-bold py-2.5 px-4 rounded-lg group-hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-black/20 relative z-10">
                                <span>Speak with Expert</span>
                                <Headset className="w-4 h-4" />
                            </div>
                        </Link>
                    </div>
                </div>

                {/* --- Bottom Bar: Insights --- */}
                <div className="border-t border-white/5 bg-white/[0.02] px-8 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <span className="text-[10px] font-mono text-emerald-500/70 uppercase tracking-widest">
                            Latest Insights
                        </span>
                        <div className="flex gap-6 text-xs font-medium text-white/50">
                            <Link href="/insights" className="hover:text-white transition-colors flex items-center gap-1.5">
                                SaaS Case Studies <ArrowRight className="w-3 h-3 opacity-50" />
                            </Link>
                            <Link href="/insights" className="hover:text-white transition-colors flex items-center gap-1.5">
                                MVP Success Stories <ArrowRight className="w-3 h-3 opacity-50" />
                            </Link>
                        </div>
                    </div>
                    <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                        Updated Q2 2026
                    </div>
                </div>
            </div>
        </div>
    );
}
