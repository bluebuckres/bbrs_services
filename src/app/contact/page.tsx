import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactMap } from "@/components/contact/ContactMap";

export const metadata: Metadata = {
  title: "Book a Discovery Call — BlueBuck Research",
  description:
    "Talk to a co-founder directly. 30-minute call, no commitment. We'll assess your project and tell you honestly if we're the right fit.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Book a Discovery Call — BlueBuck Research",
    description: "Talk to a co-founder directly. 30-minute call, no commitment.",
    url: "https://bluebuckresearch.com/contact",
  },
};



export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <ContactMap />
        </>
    );
}
