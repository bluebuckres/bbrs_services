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
  title: {
    default: "BlueBuck Research — AI, ML & Software Engineering Studio | India",
    template: "%s | BlueBuck Research",
  },
  description:
    "BlueBuck Research is a boutique AI, ML and software engineering studio in Kolkata, India. We build LLM systems, data pipelines, web apps, Shopify stores, mobile apps and AI email automation — for growth-stage founders in US, UK, UAE & India.",
  keywords: [
    // Core AI/ML
    "AI development company India",
    "machine learning consulting India",
    "LLM fine-tuning services",
    "RAG pipeline development",
    "AI engineering studio Kolkata",
    // Web development
    "custom web development India",
    "web application development company",
    "Next.js development services India",
    "full stack web development Kolkata",
    "hire web developers India",
    // Shopify
    "Shopify development company India",
    "Shopify store builder India",
    "custom Shopify theme development",
    "Shopify app development India",
    "ecommerce development India",
    // Mobile apps
    "mobile app development India",
    "React Native app development India",
    "iOS Android app development Kolkata",
    "cross-platform app development India",
    // Data engineering
    "data engineering company India",
    "data pipeline consulting",
    "Apache Spark consulting India",
    "ETL pipeline development",
    // Email automation
    "email automation services India",
    "AI email marketing automation",
    "email infrastructure development",
    // General
    "boutique software studio India",
    "hire AI engineers India",
    "software development for US companies",
    "offshore development team India",
  ],
  metadataBase: new URL("https://bluebuckresearch.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BlueBuck Research — AI, ML & Software Engineering Studio | India",
    description:
      "A 12-engineer boutique studio in Kolkata specialising in AI/ML, web development, Shopify, mobile apps, data engineering, and AI email automation. India-based, globally focused.",
    url: "https://bluebuckresearch.com",
    siteName: "BlueBuck Research",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BlueBuck Research — AI, ML & Software Engineering Studio | India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlueBuck Research — AI, ML & Software Engineering Studio | India",
    description:
      "Boutique AI/ML engineering studio in Kolkata. Web apps, Shopify, mobile apps, data pipelines. Senior engineers only.",
    images: ["/og-image.png"],
    creator: "@BlueBuckRes",
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
  category: "technology",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://bluebuckresearch.com/#organization",
  name: "BlueBuck Research",
  legalName: "BlueBuck Research LLP",
  url: "https://bluebuckresearch.com",
  logo: {
    "@type": "ImageObject",
    url: "https://bluebuckresearch.com/bbrslogo_used_one.svg",
    width: 100,
    height: 100,
  },
  image: "https://bluebuckresearch.com/og-image.png",
  description:
    "Boutique AI and software engineering studio based in Kolkata, India. We build AI/ML systems, data pipelines, web applications, Shopify stores, mobile apps, and AI email automation for growth-stage companies globally.",
  email: "connect@bluebuckresearch.com",
  telephone: "+917908158639",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Millenium Towers, Unit T-2 9C, Tower II, DN Block, Salt Lake, Sector V",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    postalCode: "700091",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "22.5726",
    longitude: "88.3639",
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 12,
  },
  foundingDate: "2022",
  areaServed: ["US", "GB", "EU", "SG", "AE", "IN"],
  serviceType: [
    "Artificial Intelligence Development",
    "Machine Learning Engineering",
    "LLM Fine-tuning",
    "RAG Pipeline Development",
    "Data Engineering",
    "Custom Web Development",
    "Shopify Development",
    "Mobile App Development",
    "AI Email Automation",
    "DevOps & Cloud Infrastructure",
    "Data Science & Analytics",
    "Cybersecurity",
  ],
  knowsAbout: [
    "Large Language Models",
    "Retrieval Augmented Generation",
    "Apache Spark",
    "Next.js",
    "React Native",
    "Shopify",
    "Kubernetes",
    "Data Engineering",
  ],
  sameAs: [
    "https://www.linkedin.com/company/bluebuckresearch",
    "https://x.com/BlueBuckRes",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Engineering Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & Machine Learning Engineering", url: "https://bluebuckresearch.com/services/artificial-intelligence" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Data Engineering", url: "https://bluebuckresearch.com/services/data-engineering" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Web Development", url: "https://bluebuckresearch.com/services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify Development", url: "https://bluebuckresearch.com/services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development", url: "https://bluebuckresearch.com/services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "DevOps & Cloud", url: "https://bluebuckresearch.com/services/devops" } },
    ],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://bluebuckresearch.com/#website",
  url: "https://bluebuckresearch.com",
  name: "BlueBuck Research",
  description: "AI, ML & Software Engineering Studio | Kolkata, India",
  publisher: { "@id": "https://bluebuckresearch.com/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://bluebuckresearch.com/insights?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
