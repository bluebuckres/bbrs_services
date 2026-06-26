import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do you work with early-stage companies, or only post-Series A?",
    a: "Both — but the fit depends on the project, not the stage. If you have a clear problem, a technical co-founder or strong brief, and you're serious about building right the first time, we'll have a useful conversation. We've shipped MVPs for pre-seed founders and data infrastructure for Series B companies. What matters is whether we're the right team for what you're building.",
  },
  {
    q: "We're in the US / UK / Dubai. How does working with a Kolkata-based team actually work?",
    a: "We've designed our entire process around this. Daily async updates, structured weekly standups at your timezone, and you always speak directly to the engineers building your product — not a project manager translating between you and them. Our team overlaps with both US East Coast mornings and UK afternoons. It works because we've made it work for 40+ international projects.",
  },
  {
    q: "We have an internal engineering team. Can you work alongside them?",
    a: "Yes — and we prefer it. We've embedded as an external AI/ML team for companies with existing engineering, worked alongside CTOs as a specialist layer, and handed off cleanly documented code when we're done. No lock-in, no empire-building. Your team stays in control.",
  },
  {
    q: "Can we see past client work that's under NDA?",
    a: "On a call, yes. We can walk through architecture, decisions, and outcomes for projects we can't name publicly. We won't share client code or screenshots without permission — but we can give you enough to know whether our work is the right standard for yours.",
  },
  {
    q: "How many projects do you take at once?",
    a: "Three to four per quarter, maximum. When we take your project, it gets full team attention — not a shared pool. If we're at capacity when you reach out, we'll tell you immediately and give you an honest timeline. We'd rather lose a project than deliver a bad one.",
  },
];

export function FAQ() {
  return (
    <section
      className="py-24 px-6 bg-background-light dark:bg-background-dark border-t border-emerald/5"
      id="faq"
      aria-label="Frequently asked questions"
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-14">
          <h2 className="font-display text-5xl md:text-6xl leading-tight">
            Before you{" "}
            <span className="serif-italic opacity-40">reach out.</span>
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white dark:bg-white/3 border border-emerald/10 rounded-2xl overflow-hidden transition-all duration-300 open:bg-emerald-50/40 dark:open:bg-emerald/5 open:border-emerald/20"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer font-semibold text-[15px] list-none select-none gap-4">
                <span>{faq.q}</span>
                <span className="group-open:rotate-180 transition-transform duration-300 text-emerald-600 shrink-0">
                  <ChevronDown className="w-4 h-4" />
                </span>
              </summary>
              <div className="px-6 pb-6 pt-0 opacity-65 leading-relaxed text-sm md:text-[15px]">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
