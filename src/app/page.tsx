import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Metrics } from "@/components/home/Metrics";
import { Services } from "@/components/home/Services";
import { Portfolio } from "@/components/home/Portfolio";
import { WhyUs } from "@/components/home/WhyUs";
import { FAQ } from "@/components/home/FAQ";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "BlueBuck Research — AI, ML, Web Development, Shopify & Mobile App Studio | India",
  description:
    "Boutique AI, ML and software engineering studio in Kolkata, India. We build LLM systems, data pipelines, web apps, Shopify stores, mobile apps and AI email automation — for growth-stage founders worldwide.",
  alternates: { canonical: "/" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you work with early-stage companies, or only post-Series A?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both — but the fit depends on the project, not the stage. If you have a clear problem, a technical co-founder or strong brief, and you're serious about building right the first time, we'll have a useful conversation. We've shipped MVPs for pre-seed founders and data infrastructure for Series B companies.",
      },
    },
    {
      "@type": "Question",
      name: "We're in the US / UK / Dubai. How does working with a Kolkata-based team actually work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We've designed our entire process around this. Daily async updates, structured weekly standups at your timezone, and you always speak directly to the engineers building your product — not a project manager. Our team overlaps with both US East Coast mornings and UK afternoons.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build Shopify stores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We've built high-performance Shopify storefronts with custom themes, multi-currency support, and AI-powered product recommendations. See our work on Briventa Studio as an example.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build mobile apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build cross-platform mobile apps using React Native, as well as native iOS and Android applications. Our mobile projects include consumer apps, marketplace platforms, and AI-powered mobile experiences.",
      },
    },
    {
      "@type": "Question",
      name: "How many projects do you take at once?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three to four per quarter, maximum. When we take your project, it gets full team attention — not a shared pool. If we're at capacity, we'll tell you immediately and give you an honest timeline.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <Metrics />
      <Services />
      <Portfolio />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
