"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectsList() {
    const [activeFilter, setActiveFilter] = useState("All");
    const tags = ["All", "AI & ML", "FinTech", "HealthTech", "Cybersecurity", "Government", "Own Products", "Web & Design", "Hospitality"];

    const matches = (projectTags: string[]) => {
        if (activeFilter === "All") return true;
        return projectTags.includes(activeFilter);
    };

    // Define visibility of each project based on filter
    const showMrMed = matches(["HealthTech", "Web & Design"]);
    const showTradeMade = matches(["FinTech", "Web & Design"]);
    
    const showBriventa = matches(["Web & Design"]);
    const showSeatCupra = matches(["Web & Design"]);
    const showZipto = matches(["Web & Design"]);
    const showAsteride = matches(["Web & Design"]);
    const showEstay = matches(["Hospitality", "Web & Design"]);
    const showGleo = matches(["AI & ML"]);
    const showQrata = matches(["HR Tech", "Web & Design"]);

    const showCartIn = matches(["Own Products", "AI & ML"]);
    const showMakeUGC = matches(["Own Products", "Web & Design"]);

    const showAnon1 = matches(["AI & ML"]);
    const showAnon2 = matches(["AI & ML"]); // Data engineering -> AI & ML? We'll group them.
    const showAnon3 = matches(["AI & ML"]);
    const showWbGovt = matches(["Cybersecurity", "Government"]);
    const showKolkataPolice = matches(["Cybersecurity", "Government"]);

    const showFeatured = showMrMed || showTradeMade;
    const showClient = showBriventa || showSeatCupra || showZipto || showAsteride || showEstay || showGleo || showQrata;
    const showOwn = showCartIn || showMakeUGC;
    const showAnon = showAnon1 || showAnon2 || showAnon3 || showWbGovt || showKolkataPolice;

    return (
        <main className="max-w-7xl mx-auto px-6 pb-40 space-y-32">
            {/* 1. Filter bar */}
            <div className="flex flex-wrap justify-center gap-3">
                {tags.map(tag => (
                    <button 
                        key={tag} 
                        onClick={() => setActiveFilter(tag)}
                        className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                            activeFilter === tag 
                                ? 'border-[#d8c7ff] text-[#d8c7ff] bg-[#d8c7ff]/10' 
                                : 'border-white/10 text-white/60 hover:text-white hover:border-white/30'
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* 2. Featured row */}
            {showFeatured && (
            <div>
                <h2 className="text-xl font-bold font-mono tracking-widest uppercase opacity-40 mb-8 border-b border-white/10 pb-4">Featured Engagements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px]">
                    {showMrMed && (
                    <ProjectCard
                        size="wide"
                        title="MrMed.in"
                        category="HealthTech Platform"
                        image="/Project_Pic/MrMed_in.webp"
                        href="/projects/mrmed"
                        placeholderGradient="bg-gradient-to-br from-emerald-900 to-[#0a0a0a]"
                        description="Serving patients across 3,500+ cities. Complete platform build from prescription upload to cold-chain delivery."
                    />
                    )}
                    {showTradeMade && (
                    <ProjectCard
                        size="wide"
                        title="TradeMade.in"
                        category="FinTech Trading App"
                        image="/Project_Pic/trademade.webp"
                        href="/projects/trademade"
                        placeholderGradient="bg-gradient-to-br from-indigo-900 to-[#0a0a0a]"
                        description="From spreadsheet to live algo execution. Full-stack platform connecting to Zerodha, Upstox, and Angel One."
                    />
                    )}
                </div>
            </div>
            )}

            {/* 3. Grid - Remaining Case Studies */}
            {showClient && (
            <div>
                <h2 className="text-xl font-bold font-mono tracking-widest uppercase opacity-40 mb-8 border-b border-white/10 pb-4">Client Case Studies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {showBriventa && (
                    <ProjectCard
                        title="Briventa Studio"
                        category="Fashion E-Commerce (UK)"
                        image="/Project_Pic/briventastudio.png"
                        href="/projects/briventa"
                        placeholderGradient="bg-gradient-to-br from-zinc-900/40 to-[#0a0a0a]"
                        description="Shopify storefront build, multi-currency scaling, and high-performance engineering."
                    />
                    )}
                    {showSeatCupra && (
                    <ProjectCard
                        title="SEAT & CUPRA Media Center"
                        category="Automotive Media (Spain)"
                        image="/Project_Pic/seat-cupra-mediacenter.png"
                        href="/projects/seat-cupra"
                        placeholderGradient="bg-gradient-to-br from-blue-900/40 to-[#0a0a0a]"
                        description="Mission-critical media distribution infrastructure serving 500+ automotive journalists globally."
                    />
                    )}
                    {showZipto && (
                    <ProjectCard
                        title="Zipto"
                        category="Hyperlogistics (Bhubaneswar)"
                        image="/Project_Pic/zipto.png"
                        href="/projects/zipto"
                        placeholderGradient="bg-gradient-to-br from-emerald-900/40 to-[#0a0a0a]"
                        description="Full-stack build and real-time tracking integration for Bhubaneswar's fastest local delivery network."
                    />
                    )}
                    {showAsteride && (
                    <ProjectCard
                        title="Asteride"
                        category="Consumer App & Design"
                        image="/Project_Pic/asteride.webp"
                        href="/projects/asteride"
                        placeholderGradient="bg-gradient-to-br from-orange-900/40 to-[#0a0a0a]"
                        description="Design system and website for India's #1 motorcycle community app."
                    />
                    )}
                    {showEstay && (
                    <ProjectCard
                        title="eStay Hotel, Dubai"
                        category="Hospitality"
                        image="/Project_Pic/estayhotel.webp"
                        href="/projects/estay"
                        placeholderGradient="bg-gradient-to-br from-amber-900/40 to-[#0a0a0a]"
                        description="A hospitality website that converts browsers into direct bookings."
                    />
                    )}
                    {showGleo && (
                    <ProjectCard
                        title="Gleo.ai"
                        category="AI Consulting"
                        image="/Project_Pic/gleo_ai.webp"
                        href="/projects/gleo-ai"
                        placeholderGradient="bg-gradient-to-br from-blue-900/40 to-[#0a0a0a]"
                        description="Embedded LLM features and AI strategy for a UK productised service platform."
                    />
                    )}
                    {showQrata && (
                    <ProjectCard
                        size="full"
                        title="Qrata.ai"
                        category="HR Tech Platform"
                        image="/Project_Pic/Qrata-ai.webp"
                        href="/projects/qrata-ai"
                        placeholderGradient="bg-gradient-to-br from-indigo-900/40 to-[#0a0a0a]"
                        description="Website and platform support for a hiring decision system trusted by venture-backed startups."
                    />
                    )}
                </div>
            </div>
            )}

            {/* 4. Own Products */}
            {showOwn && (
            <div>
                <h2 className="text-xl font-bold font-mono tracking-widest uppercase opacity-40 mb-8 border-b border-white/10 pb-4 flex items-center gap-4">
                    Products we've built and operate
                    <span className="text-xs bg-white/10 text-white px-2 py-1 rounded">Internal</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[280px]">
                    {showCartIn && (
                    <ProjectCard
                        size="wide"
                        title="CartIn AI"
                        category="AI Shopify Assistant"
                        image="/Project_Pic/cartIn_web.webp"
                        href="/projects/cartin"
                        placeholderGradient="bg-gradient-to-br from-rose-900/40 to-[#0a0a0a]"
                        description="An AI shopping assistant for D2C brands. Live, converting, and actively generating revenue."
                    />
                    )}
                    {showMakeUGC && (
                    <ProjectCard
                        size="wide"
                        title="MakeUGC"
                        category="Creator Economy Platform"
                        image="/Project_Pic/makeugc_web.webp"
                        href="/projects/makeugc"
                        placeholderGradient="bg-gradient-to-br from-purple-900/40 to-[#0a0a0a]"
                        description="Influencer marketing platform and creator database tailored for the Indian D2C ecosystem."
                    />
                    )}
                </div>
            </div>
            )}

            {/* 5. Anonymous Cards */}
            {showAnon && (
            <div>
                <h2 className="text-xl font-bold font-mono tracking-widest uppercase opacity-40 mb-8 border-b border-white/10 pb-4">More work, shared under NDA</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
                    {showAnon1 && (
                    <ProjectCard
                        title="AI-Powered Analytics Platform"
                        category="AI / Data Engineering"
                        image=""
                        placeholderGradient="bg-neutral-900"
                        description="Reduced reporting latency by 87%. Stack: Python, LLM, Next.js"
                    />
                    )}
                    {showAnon2 && (
                    <ProjectCard
                        title="FinTech Data Pipeline"
                        category="Data Engineering"
                        image=""
                        placeholderGradient="bg-neutral-900"
                        description="5x faster data processing at scale."
                    />
                    )}
                    {showAnon3 && (
                    <ProjectCard
                        title="Custom LLM for Retail Intelligence"
                        category="AI / ML"
                        image=""
                        placeholderGradient="bg-neutral-900"
                        description="40% efficiency gain across operations."
                    />
                    )}
                    {showWbGovt && (
                    <ProjectCard
                        title="West Bengal Government"
                        category="Cybersecurity Infrastructure"
                        image="/Project_Pic/Seal_of_West_Bengal.svg"
                        imageClassName="object-contain p-12 bg-white"
                        placeholderGradient="bg-gradient-to-br from-green-900/40 to-[#0a0a0a]"
                        description="Critical infrastructure and cybersecurity solutions."
                    />
                    )}
                    {showKolkataPolice && (
                    <ProjectCard
                        title="Kolkata Police"
                        category="Cybersecurity"
                        image="/Project_Pic/kolkata_policer.png"
                        placeholderGradient="bg-gradient-to-br from-blue-900/40 to-[#0a0a0a]"
                        description="Cybersecurity and critical infrastructure development under NDA."
                    />
                    )}
                </div>
            </div>
            )}
        </main>
    );
}
