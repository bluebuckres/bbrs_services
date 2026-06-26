import { Hero } from "@/components/home/Hero";
import { Metrics } from "@/components/home/Metrics";
import { Services } from "@/components/home/Services";
import { Portfolio } from "@/components/home/Portfolio";
import { WhyUs } from "@/components/home/WhyUs";
import { FAQ } from "@/components/home/FAQ";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
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
