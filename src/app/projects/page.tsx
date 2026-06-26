import type { Metadata } from "next";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Work — Case Studies | BlueBuck Research",
  description:
    "46+ projects shipped across India, UAE, UK, Singapore. Healthcare platforms, algo trading, AI features, and our own products CartIn AI and MakeUGC.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Our Work — Case Studies | BlueBuck Research",
    description: "46+ projects shipped across India, UAE, UK, Singapore. Healthcare platforms, algo trading, AI features.",
    url: "https://bluebuckresearch.com/projects",
  },
};

export default function ProjectsPage() {
    return (
        <div className="bg-[#050505] min-h-screen text-gray-100 font-sans selection:bg-[#d8c7ff]/30">
            {/* Header */}
            <header className="pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="font-display text-7xl md:text-9xl tracking-tighter mb-6 text-white">
                        Our <span className="serif-italic opacity-40">Work</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl opacity-50 font-light leading-relaxed">
                        Forty-six projects across four continents since 2022. Healthcare platforms, algo trading tools, AI-powered products, and our own software businesses. Named where we can. Anonymous where we can't.
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 pb-40 space-y-32">
                {/* 1. Filter bar */}
                <div className="flex flex-wrap justify-center gap-3">
                    {["All", "AI & ML", "FinTech", "HealthTech", "Own Products", "Web & Design", "Hospitality"].map(tag => (
                        <button key={tag} className={`px-5 py-2 rounded-full text-sm font-medium border ${tag === 'All' ? 'border-[#d8c7ff] text-[#d8c7ff] bg-[#d8c7ff]/10' : 'border-white/10 text-white/60 hover:text-white hover:border-white/30'} transition-all`}>
                            {tag}
                        </button>
                    ))}
                </div>

                {/* 2. Featured row */}
                <div>
                    <h2 className="text-xl font-bold font-mono tracking-widest uppercase opacity-40 mb-8 border-b border-white/10 pb-4">Featured Engagements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px]">
                        <ProjectCard
                            size="large"
                            title="MrMed.in"
                            category="HealthTech Platform"
                            image="/Project_Pic/MrMed_in.webp"
                            href="/projects/mrmed"
                            placeholderGradient="bg-gradient-to-br from-emerald-900 to-[#0a0a0a]"
                            description="Serving patients across 3,500+ cities. Complete platform build from prescription upload to cold-chain delivery."
                        />
                        <ProjectCard
                            size="large"
                            title="TradeMade.in"
                            category="FinTech Trading App"
                            image="/Project_Pic/trademade.webp"
                            href="/projects/trademade"
                            placeholderGradient="bg-gradient-to-br from-indigo-900 to-[#0a0a0a]"
                            description="From spreadsheet to live algo execution. Full-stack platform connecting to Zerodha, Upstox, and Angel One."
                        />
                    </div>
                </div>

                {/* 3. Grid - Remaining Case Studies */}
                <div>
                    <h2 className="text-xl font-bold font-mono tracking-widest uppercase opacity-40 mb-8 border-b border-white/10 pb-4">Client Case Studies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                        <ProjectCard
                            title="Asteride"
                            category="Consumer App & Design"
                            image="/Project_Pic/asteride.webp"
                            href="/projects/asteride"
                            placeholderGradient="bg-gradient-to-br from-orange-900/40 to-[#0a0a0a]"
                            description="Design system and website for India's #1 motorcycle community app."
                        />
                        <ProjectCard
                            title="eStay Hotel, Dubai"
                            category="Hospitality"
                            image="/Project_Pic/estayhotel.webp"
                            href="/projects/estay"
                            placeholderGradient="bg-gradient-to-br from-amber-900/40 to-[#0a0a0a]"
                            description="A hospitality website that converts browsers into direct bookings."
                        />
                        <ProjectCard
                            title="Gleo.ai"
                            category="AI Consulting"
                            image="/Project_Pic/gleo_ai.webp"
                            href="/projects/gleo-ai"
                            placeholderGradient="bg-gradient-to-br from-blue-900/40 to-[#0a0a0a]"
                            description="Embedded LLM features and AI strategy for a UK productised service platform."
                        />
                    </div>
                </div>

                {/* 4. Own Products */}
                <div>
                    <h2 className="text-xl font-bold font-mono tracking-widest uppercase opacity-40 mb-8 border-b border-white/10 pb-4 flex items-center gap-4">
                        Products we've built and operate
                        <span className="text-xs bg-white/10 text-white px-2 py-1 rounded">Internal</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[280px]">
                        <ProjectCard
                            size="wide"
                            title="CartIn AI"
                            category="AI Shopify Assistant"
                            image="/Project_Pic/cartIn_web.webp"
                            href="/projects/cartin"
                            placeholderGradient="bg-gradient-to-br from-rose-900/40 to-[#0a0a0a]"
                            description="An AI shopping assistant for D2C brands. Live, converting, and actively generating revenue."
                        />
                        <ProjectCard
                            size="wide"
                            title="MakeUGC"
                            category="Creator Economy Platform"
                            image="/Project_Pic/makeugc_web.webp"
                            href="/projects/makeugc"
                            placeholderGradient="bg-gradient-to-br from-purple-900/40 to-[#0a0a0a]"
                            description="Influencer marketing platform and creator database tailored for the Indian D2C ecosystem."
                        />
                    </div>
                </div>

                {/* 5. Anonymous Cards */}
                <div>
                    <h2 className="text-xl font-bold font-mono tracking-widest uppercase opacity-40 mb-8 border-b border-white/10 pb-4">More work, shared under NDA</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
                        <ProjectCard
                            title="AI-Powered Analytics Platform"
                            category="AI / Data Engineering"
                            image=""
                            placeholderGradient="bg-neutral-900"
                            description="Reduced reporting latency by 87%. Stack: Python, LLM, Next.js"
                        />
                        <ProjectCard
                            title="FinTech Data Pipeline"
                            category="Data Engineering"
                            image=""
                            placeholderGradient="bg-neutral-900"
                            description="5x faster data processing at scale."
                        />
                        <ProjectCard
                            title="Custom LLM for Retail Intelligence"
                            category="AI / ML"
                            image=""
                            placeholderGradient="bg-neutral-900"
                            description="40% efficiency gain across operations."
                        />
                    </div>
                </div>
            </main>

            {/* CTA Section */}
            <section className="relative py-40 px-6 overflow-hidden bg-[#fcfaf2] text-[#050505]">
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 50%, rgba(216, 199, 255, 0.08) 0%, transparent 60%)' }}></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="font-display text-5xl md:text-7xl leading-[0.85] tracking-tighter mb-12">
                                Ready to add your <br />
                                <span className="serif-italic opacity-40">story to this list?</span>
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
