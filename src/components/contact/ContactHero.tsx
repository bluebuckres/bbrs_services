"use client";
import { ArrowRight, ArrowUpRight, CheckCircle2, Copy, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";

export function ContactHero() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("hello@bluebuck.research");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="relative pt-24 pb-20 px-6 overflow-hidden">
            {/* Background Elements matching Home Hero */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-hero-gradient pointer-events-none -z-10 opacity-50" />

            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* LEFT COLUMN: Context & Direct Info */}
                    <div className="relative z-10 pt-8">
                        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-700 dark:text-emerald-400 text-xs font-mono font-medium tracking-wide uppercase">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Accepting New Projects
                        </div>

                        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl leading-[0.95] tracking-tighter mb-8 text-[#0a0a0a] dark:text-white">
                            Let's engineer <br />
                            <span className="serif-italic opacity-40">the future.</span>
                        </h1>

                        <p className="text-lg md:text-xl opacity-60 max-w-lg leading-relaxed mb-12">
                            Have a complex technical challenge? We specialize in translating ambiguity into high-performance software architecture.
                        </p>

                        {/* Contact Methods Bento */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {/* Email Card */}
                            <div className="group bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 p-6 rounded-2xl hover:border-emerald-500/30 transition-all cursor-pointer" onClick={handleCopy}>
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl text-emerald-700 dark:text-emerald-400">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    {copied ? (
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                    ) : (
                                        <Copy className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                                    )}
                                </div>
                                <p className="text-xs font-mono opacity-50 uppercase tracking-wider mb-1">Email us</p>
                                <p className="text-lg font-medium truncate">hello@bluebuck.research</p>
                            </div>

                            {/* Chat/Book Card */}
                            <a href="#" className="group bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 p-6 rounded-2xl hover:bg-emerald-500/[0.03] hover:border-emerald-500/30 transition-all">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-700 dark:text-blue-400">
                                        <MessageSquare className="w-6 h-6" />
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                                <p className="text-xs font-mono opacity-50 uppercase tracking-wider mb-1">Intro Call</p>
                                <p className="text-lg font-medium">Book 15 mins</p>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: The "Spec Sheet" Form */}
                    <div className="relative">
                        {/* Decorative back-layer */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-[2.5rem] blur-2xl -z-10" />

                        <div className="bg-white/80 dark:bg-[#111] backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-xl font-display">Project Inquiry</h3>
                                <span className="text-xs font-mono opacity-40">// SECURE_FORM_V2</span>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono uppercase tracking-widest opacity-50">Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-2 focus:border-emerald-500 focus:outline-none transition-colors text-lg"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono uppercase tracking-widest opacity-50">Company</label>
                                        <input
                                            type="text"
                                            className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-2 focus:border-emerald-500 focus:outline-none transition-colors text-lg"
                                            placeholder="Acme Corp"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono uppercase tracking-widest opacity-50">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-2 focus:border-emerald-500 focus:outline-none transition-colors text-lg"
                                        placeholder="jane@acme.com"
                                    />
                                </div>

                                <div className="space-y-4 pt-4">
                                    <label className="text-xs font-mono uppercase tracking-widest opacity-50">I'm interested in...</label>
                                    <div className="flex flex-wrap gap-2">
                                        {["AI Integration", "Cloud Infrastructure", "Custom SaaS", "Tech Audit", "MVP Build"].map((tag) => (
                                            <label key={tag} className="cursor-pointer">
                                                <input type="checkbox" className="peer sr-only" />
                                                <span className="inline-block px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 text-sm hover:border-emerald-500/50 peer-checked:bg-emerald-500 peer-checked:text-white peer-checked:border-emerald-500 transition-all">
                                                    {tag}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2 pt-4">
                                    <label className="text-xs font-mono uppercase tracking-widest opacity-50">Project Details</label>
                                    <textarea
                                        className="w-full bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/10 rounded-xl p-4 h-32 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-all resize-none"
                                        placeholder="Tell us about the problem you're solving..."
                                    />
                                </div>

                                <button
                                    type="button"
                                    className="w-full group bg-[#1a1a1a] dark:bg-white text-white dark:text-black py-4 rounded-xl font-medium text-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 mt-4"
                                >
                                    Inititate Request
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}