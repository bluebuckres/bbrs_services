import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NeetoCalPopup } from "@/components/layout/NeetoCalPopup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "BlueBuck Research — AI & ML Engineering Studio | India",
  description:
    "Boutique AI/ML engineering studio in Kolkata, India. LLM fine-tuning, data pipelines, full-stack development for growth-stage startups in US, UK, UAE & India.",
  keywords: [
    "boutique AI development studio",
    "AI engineering company India",
    "custom software development India",
    "data engineering consultancy",
    "LLM fine-tuning services",
    "RAG implementation",
    "software development for US companies",
    "hire AI engineers India",
    "machine learning consulting",
    "web application development",
  ],
  metadataBase: new URL("https://bluebuckresearch.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BlueBuck Research — AI & ML Engineering Studio | India",
    description:
      "A 12-engineer boutique studio specialising in AI/ML, data engineering, and custom software. India-based, globally focused.",
    url: "https://bluebuckresearch.com",
    siteName: "BlueBuck Research",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BlueBuck Research — AI & ML Engineering Studio | India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlueBuck Research — AI & ML Engineering Studio | India",
    description:
      "A 12-engineer boutique studio specialising in AI/ML, data engineering, and custom software. India-based, globally focused.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BlueBuck Research",
  legalName: "BlueBuck Research LLP",
  url: "https://bluebuckresearch.com",
  logo: "https://bluebuckresearch.com/bluebuck%20logo%20black.svg",
  description:
    "Boutique AI and software engineering studio based in Kolkata, India. Specialising in AI/ML systems, data engineering, and custom software for growth-stage companies globally.",
  email: "hello@bluebuckresearch.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Millenium Towers, Unit T-2 9C, Tower II, DN Block, Salt Lake, Sector V",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    postalCode: "700091",
    addressCountry: "IN",
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 12,
  },
  foundingDate: "2022",
  areaServed: ["US", "GB", "EU", "SG", "AE", "IN"],
  serviceType: [
    "AI/ML Engineering",
    "Data Engineering",
    "Custom Software Development",
    "Web Application Development",
    "DevOps & Cloud Infrastructure",
  ],
  sameAs: [
    "https://www.linkedin.com/company/bluebuck-research",
    "https://github.com/bluebuck-research",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          inter.variable,
          instrumentSerif.variable,
          "bg-background-light dark:bg-background-dark text-primary dark:text-gray-100 font-sans selection:bg-emerald/30 antialiased"
        )}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <NeetoCalPopup />
      </body>
    </html>
  );
}
