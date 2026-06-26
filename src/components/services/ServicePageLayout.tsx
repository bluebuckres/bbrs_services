"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Calendar, MapPin } from "lucide-react";
import type { ServiceData } from "@/data/services";
import { CTA } from "@/components/home/CTA";

export function ServicePageLayout({ service }: { service: ServiceData }) {
  // Irregular bento grid classes for exactly 6 deliverables
  const bentoClasses = [
    "md:col-span-2 md:row-span-2 p-10", // 1: Big box
    "md:col-span-1 p-8",                // 2: Standard
    "md:col-span-1 p-8",                // 3: Standard (sits below 2 next to 1)
    "md:col-span-1 p-8",                // 4: Standard
    "md:col-span-2 p-8",                // 5: Wide
    "md:col-span-3 p-10",               // 6: Full width wide
  ];

  return (
    <div className="min-h-screen">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6" aria-label="Hero">
        {/* Soft radial gradient backdrop */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[700px] bg-hero-gradient pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left: text */}
          <div className="lg:w-3/5">
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald/5 dark:bg-emerald/10 border border-emerald/15 rounded-full text-[11px] font-semibold tracking-widest uppercase text-emerald-700 dark:text-mint">
                {service.eyebrow}
              </span>
            </div>

            <h1 className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-tighter mb-8 text-[#0a0a0a] dark:text-white">
              {service.headline.split("—").map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <span className="opacity-40"> —</span>
                  )}
                </span>
              ))}
            </h1>

            <p className="max-w-xl text-base md:text-lg opacity-60 leading-relaxed mb-10 font-light text-[#0a0a0a] dark:text-white">
              {service.shortDesc}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-12 px-7 rounded-xl text-[15px] font-medium bg-[#0a0a0a] text-white dark:bg-white dark:text-[#0a0a0a] hover:opacity-90 transition-opacity group"
              >
                <Calendar className="w-4 h-4" />
                Book a Discovery Call
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>

          {/* Right: stat card */}
          <div className="lg:w-2/5 w-full">
            <div className="bento-card mint-glow p-10 rounded-3xl relative overflow-hidden group border border-emerald/10 block w-full">
               <div className="absolute top-0 right-0 w-56 h-56 bg-emerald-500/10 blur-3xl rounded-full -mr-20 -mt-20 pointer-events-none" />
              
              <div className="mb-10">
                <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-600 dark:text-mint opacity-70 mb-4">
                  Expected Outcome
                </p>
                <p className="font-display text-3xl leading-snug text-[#0a0a0a] dark:text-white">
                  {service.outcomeStat}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-600 dark:text-mint opacity-70 mb-4">
                  Core Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-emerald/5 dark:bg-emerald/15 rounded-full text-[11px] font-semibold text-emerald-800 dark:text-mint border border-emerald/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What We Deliver (Irregular Bento Grid) ─── */}
      <section className="py-24 px-6 border-t border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-600 dark:text-mint mb-3 block">
              Deliverables
            </span>
            <h2 className="font-display text-5xl leading-tight text-[#0a0a0a] dark:text-white max-w-2xl">
              Exactly what you get. <br className="hidden md:block"/>
              <span className="opacity-40">No vague retainers.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {service.deliverables.map((item, i) => (
              <div
                key={i}
                className={`bento-card mint-glow rounded-3xl relative overflow-hidden border border-emerald/10 hover:border-emerald/30 transition-all flex flex-col justify-center ${
                  bentoClasses[i] || "md:col-span-1 p-8"
                }`}
              >
                <CheckCircle2 className="w-8 h-8 mb-5 text-emerald-600 dark:text-mint opacity-80" />
                <h3 className="text-xl md:text-2xl font-display leading-snug text-[#0a0a0a] dark:text-white">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who It's For ─── */}
      <section className="py-32 px-6 constellation-bg border-t border-black/5 dark:border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/50 dark:via-background-dark/50 to-background-light dark:to-background-dark" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-600 dark:text-mint mb-6 block">
            Who This Is Built For
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 text-[#0a0a0a] dark:text-white">
            <span className="serif-italic shimmer-text">Is this the right fit?</span>
          </h2>
          <p className="text-xl md:text-2xl font-light opacity-70 leading-relaxed mb-12 text-[#0a0a0a] dark:text-white">
            "{service.whoItsFor}"
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-12 px-7 rounded-xl text-[15px] font-medium bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 text-[#0a0a0a] dark:text-white transition-colors"
            >
              Speak with a Founder
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── How We Work (Asymmetrical 3-step) ─── */}
      <section className="py-24 px-6 border-t border-black/5 dark:border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-600 dark:text-mint mb-3 block">
              Process
            </span>
            <h2 className="font-display text-5xl leading-tight text-[#0a0a0a] dark:text-white">
              How an engagement starts.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Step 1: Wide */}
            <div className="bento-card mint-glow p-10 md:p-12 rounded-3xl border border-emerald/10 md:col-span-7 flex flex-col justify-between">
              <span className="font-display text-7xl text-emerald-600/20 dark:text-mint/10 block mb-6">01</span>
              <div>
                <h3 className="text-2xl font-bold text-[#0a0a0a] dark:text-white mb-4">Discovery Call — 30 mins</h3>
                <p className="text-base opacity-60 leading-relaxed text-[#0a0a0a] dark:text-white">
                  Speak to a co-founder directly. No sales deck, no account manager warming you up. 
                  Just an honest conversation about whether we're the right fit for the problem.
                </p>
              </div>
            </div>

            {/* Step 2: Tall */}
            <div className="bento-card mint-glow p-10 md:p-12 rounded-3xl border border-emerald/10 md:col-span-5 md:row-span-2 flex flex-col justify-between">
              <span className="font-display text-7xl text-emerald-600/20 dark:text-mint/10 block mb-6">02</span>
              <div>
                <h3 className="text-2xl font-bold text-[#0a0a0a] dark:text-white mb-4">Scoping — 3 to 5 days</h3>
                <p className="text-base opacity-60 leading-relaxed text-[#0a0a0a] dark:text-white">
                  We document exactly what needs to be built, what the risks are, and what it will take. 
                  You get a clear scope with milestones — not a vague retainer. If something's unclear, 
                  we say so before we start writing any code.
                </p>
              </div>
            </div>

            {/* Step 3: Wide */}
            <div className="bento-card mint-glow p-10 md:p-12 rounded-3xl border border-emerald/10 md:col-span-7 flex flex-col justify-between">
              <span className="font-display text-7xl text-emerald-600/20 dark:text-mint/10 block mb-6">03</span>
              <div>
                <h3 className="text-2xl font-bold text-[#0a0a0a] dark:text-white mb-4">Handoff — Clean & Yours</h3>
                <p className="text-base opacity-60 leading-relaxed text-[#0a0a0a] dark:text-white">
                  Every line of code, every design file, every document is yours from day one. 
                  When we hand off, it's documented to a standard your own team can maintain. 
                  We don't build dependencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTA />
    </div>
  );
}

