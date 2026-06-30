import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights — AI & Engineering Perspectives | BlueBuck Research",
  description:
    "Technical articles, case studies, and engineering perspectives from the BlueBuck Research team. AI/ML, data engineering, and software development insights.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights | BlueBuck Research",
    description: "Technical articles and case studies from the BlueBuck Research engineering team.",
    url: "https://bluebuckresearch.com/insights",
  },
};

// PLACEHOLDER: Replace with real data from CMS or MDX when content is ready
const caseStudies = [
  {
    id: "cs-01",
    tag: "AI / Data Engineering",
    title: "Building a RAG Pipeline That Reduced Support Tickets by 60%",
    excerpt:
      "How we designed and deployed a production-ready Retrieval-Augmented Generation system for an enterprise SaaS company — and the architectural decisions that made it work at scale.",
    metrics: [
      { label: "Support tickets", value: "−60%" },
      { label: "Response time", value: "−87%" },
    ],
    readTime: "8 min read",
    // image: "/insights/case-study-01.jpg",  ← add when ready
    placeholder: "bg-gradient-to-br from-emerald-900 to-slate-900",
    href: "/insights/rag-pipeline-case-study",
  },
  {
    id: "cs-02",
    tag: "Data Engineering",
    title: "Migrating a $10M Data Pipeline: Architecture Decisions We Made (and Regretted)",
    excerpt:
      "A transparent post-mortem of a large-scale data infrastructure migration — what worked, what we'd do differently, and the lessons that apply to any growing data team.",
    metrics: [
      { label: "Data latency", value: "−92%" },
      { label: "Cloud cost", value: "−34%" },
    ],
    readTime: "12 min read",
    placeholder: "bg-gradient-to-br from-indigo-900 to-slate-900",
    href: "/insights/data-pipeline-migration",
  },
  {
    id: "cs-03",
    tag: "Custom Software",
    title: "From Idea to $500K ARR: The Engineering Architecture Behind a FinTech MVP",
    excerpt:
      "We partnered with a FinTech founder from day zero. Here's every architectural decision we made building a compliant, scalable financial platform in 14 weeks.",
    metrics: [
      { label: "Time to launch", value: "14 weeks" },
      { label: "First-year ARR", value: "$500K+" },
    ],
    readTime: "10 min read",
    placeholder: "bg-gradient-to-br from-teal-900 to-slate-900",
    href: "/insights/fintech-mvp-architecture",
  },
];

const blogPosts = [
  {
    tag: "AI Engineering",
    title: "LLM Fine-Tuning vs RAG: When to Use Which (2025 Guide)",
    excerpt:
      "A practical framework for deciding between fine-tuning a model and building a retrieval-augmented system — including cost, latency, and accuracy trade-offs.",
    readTime: "6 min read",
    href: "/insights/llm-fine-tuning-vs-rag",
  },
  {
    tag: "Data Engineering",
    title: "5 Signs Your Data Pipeline Needs a Rewrite",
    excerpt:
      "If your engineers are spending more time fixing data quality issues than building features, you might have a pipeline problem. Here's how to diagnose it.",
    readTime: "5 min read",
    href: "/insights/data-pipeline-rewrite",
  },
  {
    tag: "Business",
    title: "Why Growth-Stage Companies Choose Boutique AI Studios",
    excerpt:
      "The hidden costs of hiring big consultancies for AI projects — and what you actually get when you work with a focused, senior team instead.",
    readTime: "4 min read",
    href: "/insights/boutique-vs-consultancy",
  },
  {
    tag: "DevOps",
    title: "Zero-Downtime Deployments: The Checklist We Use on Every Project",
    excerpt:
      "After 46+ projects, we've distilled our deployment process into a checklist that prevents 90% of production incidents before they happen.",
    readTime: "7 min read",
    href: "/insights/zero-downtime-deployments",
  },
  {
    tag: "AI Engineering",
    title: "The Real Cost of Building vs Buying AI Infrastructure",
    excerpt:
      "A transparent cost breakdown: when does custom AI development make sense versus using off-the-shelf APIs? We ran the numbers on 12 real projects.",
    readTime: "8 min read",
    href: "/insights/build-vs-buy-ai",
  },
  {
    tag: "Engineering Culture",
    title: "Working Across Time Zones Without Losing Your Mind",
    excerpt:
      "Our async-first playbook for running high-trust, high-output engineering collaborations between India and the US/EU.",
    readTime: "4 min read",
    href: "/insights/async-remote-engineering",
  },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Page Header */}
      <header className="pt-20 pb-16 px-6 border-b border-emerald/8">
        <div className="max-w-6xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-600 dark:text-mint mb-4 block">
            Insights
          </span>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.9] tracking-tighter mb-6">
            Ideas from the{" "}
            <span className="serif-italic opacity-35">engineering floor.</span>
          </h1>
          <p className="text-lg opacity-50 max-w-xl leading-relaxed">
            Technical articles, case studies, and honest perspectives on AI, data engineering,
            and building software that lasts.
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* ─── Case Studies ─── */}
        <section aria-label="Case studies" className="mb-24">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-emerald-600" />
              <h2 className="font-display text-3xl md:text-4xl">Case Studies</h2>
            </div>
            <span className="text-[11px] font-bold tracking-widest uppercase opacity-30">
              Real projects · Real outcomes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <Link
                key={cs.id}
                href={cs.href}
                className="group flex flex-col rounded-3xl overflow-hidden border border-emerald/10 hover:border-emerald/25 transition-all bg-white dark:bg-white/3"
              >
                {/* Image placeholder */}
                <div className={`h-44 ${cs.placeholder} relative flex-shrink-0`}>
                  {/* PLACEHOLDER: Add next/image here when photo is ready */}
                  <div className="absolute inset-0 flex items-end p-5">
                    <div className="flex gap-2">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="bg-black/40 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/10">
                          <span className="block font-display text-lg font-bold text-white leading-none">
                            {m.value}
                          </span>
                          <span className="text-[9px] text-white/50 uppercase tracking-wide">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-600 dark:text-mint mb-3">
                    {cs.tag}
                  </span>
                  <h3 className="font-semibold text-[15px] leading-snug mb-3 group-hover:text-emerald-600 transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-sm opacity-50 leading-relaxed mb-5 flex-1">{cs.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] opacity-30 flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {cs.readTime}
                    </span>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-mint flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read case study <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ─── Blog ─── */}
        <section aria-label="Blog articles">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              <h2 className="font-display text-3xl md:text-4xl">Articles</h2>
            </div>
            <span className="text-[11px] font-bold tracking-widest uppercase opacity-30">
              Engineering · Strategy · Culture
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-emerald/5 border border-emerald/8 rounded-3xl overflow-hidden">
            {blogPosts.map((post, i) => (
              <Link
                key={i}
                href={post.href}
                className="group bg-background-light dark:bg-background-dark p-7 hover:bg-emerald-50/40 dark:hover:bg-emerald/5 transition-colors flex flex-col gap-3"
              >
                <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-600 dark:text-mint opacity-70">
                  {post.tag}
                </span>
                <h3 className="font-semibold text-[15px] leading-snug group-hover:text-emerald-600 dark:group-hover:text-mint transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm opacity-45 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-3">
                  <span className="text-[11px] opacity-25 flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-mint opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-all">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-20 pt-16 border-t border-emerald/8 text-center">
          <p className="text-sm opacity-40 mb-3">
            Have a project in mind? Let's talk.
          </p>
          <h2 className="font-display text-3xl md:text-4xl mb-8">
            Ready to build something <span className="serif-italic opacity-40">worth shipping?</span>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 h-12 px-8 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-sm font-semibold transition-colors group"
          >
            Book a Discovery Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
