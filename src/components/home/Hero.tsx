import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";


const projectImages = [
  { src: "/Project_Pic/trademade.webp", alt: "TradeMade — AI trading platform" },
  { src: "/Project_Pic/gleo_ai.webp", alt: "Gleo AI — education app" },
  { src: "/Project_Pic/MrMed_in.webp", alt: "MrMed.in — healthcare platform" },
  { src: "/Project_Pic/maeugc_login.webp", alt: "MakeUGC — creator app" },
  { src: "/Project_Pic/cartIn_web.webp", alt: "CartIn — ecommerce platform" },
  { src: "/Project_Pic/asteride.webp", alt: "Asteride — tech platform" },
  { src: "/Project_Pic/estayhotel.webp", alt: "eStay — hotel booking" },
  { src: "/Project_Pic/briventastudio.png", alt: "Briventa — Shopify store" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-0" aria-label="Hero">
      {/* Animated gradient backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-hero-gradient pointer-events-none -z-10" />
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.025] dark:opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle, #059669 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Location + service badges */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald/5 dark:bg-emerald/10 border border-emerald/15 rounded-full text-[11px] font-semibold tracking-widest uppercase text-emerald-700 dark:text-mint">
            <MapPin className="w-3 h-3" />
            AI &amp; ML Engineering Studio · Kolkata, India
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-violet-50 dark:bg-violet-900/20 border border-violet-200/50 dark:border-violet-700/50 rounded-full text-[11px] font-semibold tracking-widest uppercase text-violet-700 dark:text-violet-300">
            <Sparkles className="w-3 h-3" />
            Web · Shopify · Mobile · AI
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.92] tracking-tighter mb-8 text-[#0a0a0a] dark:text-white max-w-4xl mx-auto">
          When the build <br className="hidden md:block" />
          <span className="opacity-40">has to work</span><br />
          <span className="serif-italic shimmer-text">the first time.</span>
        </h1>

        {/* Sub-copy — expanded to mention all services */}
        <p className="max-w-xl mx-auto text-base md:text-lg opacity-60 leading-relaxed mb-4 font-light">
          We&apos;re a 12-engineer studio in Kolkata — LLM fine-tuning, data pipelines, web apps, Shopify stores,
          mobile apps, AI email automation — for growth-stage founders who can&apos;t hand
          their core technology to the wrong team.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-3">
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
        <div className="mt-12 pt-8 border-t border-black/8 dark:border-white/8 w-full">
          <p className="text-sm font-semibold opacity-50 mb-6">
            46+ projects shipped across India, UAE, UK, Singapore — since 2022.
          </p>
        </div>
      </div>

      {/* ───── Project Screenshot Strip (CSS scroll, no JS) ───── */}
      <div className="w-full mt-0 overflow-hidden relative" aria-hidden="true">
        {/* Edge fade */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#fcfaf2] dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#fcfaf2] dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 pb-10 pt-2 animate-scroll" style={{ width: "max-content" }}>
          {[...projectImages, ...projectImages].map((img, i) => (
            <div
              key={i}
              className="relative w-64 h-44 md:w-80 md:h-52 rounded-2xl overflow-hidden flex-shrink-0 border border-black/8 dark:border-white/8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="320px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="text-[10px] text-white/90 font-semibold bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
                  {img.alt.split("—")[0].trim()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

