"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const guarantees = [
  {
    icon: Users,
    title: "Direct founder access",
    desc: "No account managers. You speak to who builds.",
  },
  {
    icon: Clock,
    title: "Response in 24 hours",
    desc: "We respect your time from the first touchpoint.",
  },
  {
    icon: MapPin,
    title: "Kolkata engineering. Global delivery.",
    desc: "Kolkata engineering. Global delivery standards.",
  },
];

export function CTA() {
  const [selectedTopic, setSelectedTopic] = useState<string>("Custom Web App");

  const bookingUrl = `/contact?topic=${encodeURIComponent(selectedTopic)}`;

  return (
    <section
      className="relative py-28 px-6 overflow-hidden bg-background-light dark:bg-background-dark"
      aria-label="Contact and booking"
    >
      <div className="absolute inset-0 conversion-bg-gradient pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left copy */}
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-600 dark:text-mint mb-4 block">
              Start the conversation
            </span>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.92] tracking-tighter mb-10">
              Ready to build{" "}
              <br />
              <span className="serif-italic opacity-35">something worth talking about?</span>
            </h2>

            <div className="space-y-6 mb-10">
              {guarantees.map((g, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-0.5 w-9 h-9 rounded-xl bg-emerald/8 flex items-center justify-center shrink-0 border border-emerald/15">
                    <g.icon className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[15px] mb-0.5">{g.title}</h4>
                    <p className="opacity-50 text-sm">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {[
                "Full IP ownership",
                "No lock-in contracts",
                "Senior engineers only",
              ].map((point) => (
                <span key={point} className="inline-flex items-center gap-1.5 text-xs font-semibold opacity-50">
                  <Check className="w-3 h-3 text-emerald-600" />
                  {point}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Neetocal embed card */}
          <div className="relative">
            <div className="glass-form rounded-3xl p-8 md:p-10 relative overflow-hidden border border-emerald/15">
              <div className="mb-8">
                <h3 className="font-display text-2xl mb-2">Book a Discovery Call</h3>
                <p className="text-sm opacity-50 leading-relaxed">
                  30 minutes. No commitment. We&apos;ll assess your project, give honest
                  feedback, and if we&apos;re a fit, propose next steps.
                </p>
              </div>

              {/* Interactive Meeting Intent UI */}
              <div className="rounded-2xl bg-white/50 dark:bg-white/5 border border-emerald/10 mb-6 p-6">
                <p className="text-xs font-semibold tracking-widest uppercase opacity-40 mb-4 text-center">
                  What's on your mind?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {["AI Strategy & Integration", "Custom Web App", "Team Augmentation", "Just Exploring"].map((topic) => (
                    <div 
                      key={topic}
                      onClick={() => setSelectedTopic(topic)}
                      className={`text-xs text-center py-3 px-2 rounded-xl border transition-colors cursor-pointer ${
                        selectedTopic === topic
                          ? "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold"
                          : "border-emerald/10 bg-white/40 dark:bg-black/20 hover:bg-emerald-500/5 hover:border-emerald-500/30 text-foreground/70"
                      }`}
                    >
                      {topic}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-500 text-white">
                    <Link href={bookingUrl} className="flex items-center justify-center gap-2 whitespace-nowrap">
                      <span>Book a Discovery Call</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Alternative — email CTA */}
              <div className="pt-5 border-t border-emerald/8 flex items-center justify-between gap-4">
                <p className="text-xs opacity-40">Prefer email?</p>
                <a
                  href="mailto:connect@bluebuckresearch.com"
                  className="text-xs font-semibold text-emerald-600 hover:text-emerald-500 transition-colors underline underline-offset-4"
                >
                  connect@bluebuckresearch.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
