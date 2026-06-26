import { Check } from "lucide-react";

const differentiators = [
  {
    title: "Senior engineers only",
    desc: "Your code is written by the people you speak to. No juniors handed off after the sales call.",
  },
  {
    title: "One project at a time",
    desc: "We don't overload calendars. When we take your project, you get 100% of our focus.",
  },
  {
    title: "Founder-to-founder access",
    desc: "Your point of contact is a co-founder. Direct line, no account managers, no translation layer.",
  },
  {
    title: "US / EU timezone overlap",
    desc: "Kolkata-based team that works your hours. Daily standups, async updates — you choose the rhythm.",
  },
  {
    title: "Full IP, zero lock-in",
    desc: "Every line of code, design file, and document belongs to you from day one. Always.",
  },
  {
    title: "Selective by design",
    desc: "We take 3–4 projects per quarter. If we're full, we'll tell you — and refer you to who's right.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a] text-white relative overflow-hidden" aria-label="Why BlueBuck Research">
      <div className="absolute inset-0 constellation-bg opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — headline */}
          <div className="lg:sticky lg:top-32">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-mint mb-4 block opacity-60">
              Why BlueBuck Research
            </span>
            <h2 className="font-display text-5xl md:text-6xl leading-tight mb-8">
              Not a vendor.{" "}
              <span className="serif-italic opacity-40">A partner.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-md">
              The best boutique AI studios are proudly India-based. We are too.
              Kolkata engineering talent, global delivery standards.
            </p>
            <div className="p-5 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm">
              <p className="text-sm text-white/40 leading-relaxed italic">
                &ldquo;Kolkata-based. Globally trusted. India is where our engineering talent lives — not something we footnote.&rdquo;
              </p>
            </div>
          </div>

          {/* Right — differentiators */}
          <div className="space-y-px">
            {differentiators.map((item, i) => (
              <div
                key={i}
                className="group flex gap-5 py-6 border-b border-white/6 last:border-0 hover:bg-white/2 transition-colors rounded-lg px-2"
              >
                <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald/15 flex items-center justify-center shrink-0 border border-emerald/25">
                  <Check className="w-3 h-3 text-mint" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1 group-hover:text-mint transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
