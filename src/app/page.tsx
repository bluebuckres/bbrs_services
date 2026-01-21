import { Hero } from "@/components/home/Hero";
import { Metrics } from "@/components/home/Metrics";
import { Services } from "@/components/home/Services";
import { Portfolio } from "@/components/home/Portfolio";
import { Workflow } from "@/components/home/Workflow";
import { TechArsenal } from "@/components/home/TechArsenal";
import { FeaturedCaseStudy } from "@/components/home/FeaturedCaseStudy";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <Services />
      <Portfolio />
      <Workflow />
      <TechArsenal />
      <FeaturedCaseStudy />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
