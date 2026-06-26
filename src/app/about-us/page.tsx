import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutMetrics } from "@/components/about/AboutMetrics";
import { AboutWhy } from "@/components/about/AboutWhy";
import { AboutTeam } from "@/components/about/AboutTeam";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About BlueBuck Research — 12 Engineers, Kolkata India",
  description:
    "Founded 2022. 12 senior engineers. AI/ML, data engineering, full-stack development for international growth-stage startups. Founder-to-founder access.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About BlueBuck Research — 12 Engineers, Kolkata India",
    description: "Founded 2022. 12 senior engineers. AI/ML, data engineering, full-stack development for international growth-stage startups.",
    url: "https://bluebuckresearch.com/about-us",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutMetrics />
      <AboutWhy />
      <AboutTeam />
      <AboutCTA />
    </>
  );
}
