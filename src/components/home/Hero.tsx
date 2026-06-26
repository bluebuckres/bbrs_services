import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20" aria-label="Hero">
      {/* Soft radial gradient backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[700px] bg-hero-gradient pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Top label */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald/5 dark:bg-emerald/10 border border-emerald/15 rounded-full text-[11px] font-semibold tracking-widest uppercase text-emerald-700 dark:text-mint">
            <MapPin className="w-3 h-3" />
            AI & ML Engineering Studio · Kolkata, India
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.92] tracking-tighter mb-8 text-[#0a0a0a] dark:text-white max-w-4xl mx-auto">
          When the build <br className="hidden md:block" />
          <span className="opacity-40">has to work</span><br />
          <span className="serif-italic shimmer-text">the first time.</span>
        </h1>

        {/* Sub-copy */}
        <p className="max-w-xl mx-auto text-base md:text-lg opacity-60 leading-relaxed mb-10 font-light">
          We're a 12-engineer studio in Kolkata — LLM fine-tuning, data pipelines, 
          full-stack product development — for growth-stage founders who can't hand 
          their core technology to the wrong team.
        </p>

        {/* CTAs — one primary, one soft secondary */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-3">
            {/* Scarcity signal — adjacent to CTA */}
            <p className="text-[11px] font-semibold tracking-widest uppercase text-emerald-600 dark:text-mint opacity-80">
              Currently accepting 1 more project this quarter.
            </p>
            <div className="flex flex-row flex-wrap items-center justify-center gap-4">
              <Button asChild className="h-12 px-7 rounded-xl text-[15px] group">
                <Link href="/contact" className="flex items-center justify-center gap-2 whitespace-nowrap">
                  Book a Discovery Call
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="h-12 px-7 rounded-xl text-[15px] bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 text-[#0a0a0a] dark:text-white"
              >
                <Link href="/projects" className="flex items-center justify-center gap-2 whitespace-nowrap">
                  See our work ↓
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Trust signals */}
        <div className="mt-16 pt-10 border-t border-black/8 dark:border-white/8">
          <p className="text-sm font-semibold opacity-50 mb-5">
            46+ projects shipped across India, UAE, UK, Singapore — since 2022.
          </p>
        </div>
      </div>
    </section>
  );
}
