import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServicesImpact } from "@/components/services/ServicesImpact";
import { ServicesTestimonials } from "@/components/services/ServicesTestimonials";
import { ServicesFAQ } from "@/components/services/ServicesFAQ";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "AI & ML Engineering Services — BlueBuck Research",
  description:
    "LLM fine-tuning, RAG pipelines, data engineering, DevOps, and full-stack development. Senior engineers only. 12-person studio, Kolkata India.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "AI & ML Engineering Services — BlueBuck Research",
    description: "LLM fine-tuning, RAG pipelines, data engineering, DevOps, and full-stack development.",
    url: "https://bluebuckresearch.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesImpact />
      <ServicesTestimonials />
      <ServicesFAQ />
      <CTA />
    </>
  );
}
