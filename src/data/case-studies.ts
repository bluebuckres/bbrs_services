export type CaseStudy = {
  id: string;
  slug: string;
  client: string;
  headline: string;
  problem: string;
  solution: string[];
  outcome: string[];
  tags: string[];
  geography: string;
  stack: string[];
  testimonial?: {
    quote: string;
    name: string;
    role: string;
    image: string;
  };
  metrics?: { label: string; value: string }[];
  diagramType?: "trade-made" | "mr-med" | "gleo" | "cartin" | "none";
  images: {
    hero: string;
    gallery: string[];
  };
};

export const caseStudies: CaseStudy[] = [
  {
    id: "01",
    slug: "trademade",
    client: "TradeMade.in",
    headline: "From spreadsheet to live algo — a full-stack trading platform built for serious Indian retail traders",
    problem: "TradeMade had a powerful backtesting concept and a quant team that could build the engine — but no product layer. Traders needed a professional-grade interface: a web platform for strategy management, a dashboard for analytics, and a desktop app for live algo execution. They were using fragmented tools and manual workflows.",
    solution: [
      "Marketing website — conversion-focused, communicating a complex technical product to a non-technical trading audience",
      "Strategy dashboard — web app where users submit strategies, view backtest results, track P&L, and manage deployments",
      "Desktop application — live trading interface connecting to Zerodha, Upstox, Angel One and other brokers; real-time position monitoring, multi-account sync",
      "Full UI/UX design system across all three surfaces — consistent, professional, built for daily active use"
    ],
    outcome: [
      "\"I gave them a rough idea on a WhatsApp voice note. Within 6 days I had a fully coded, backtested Nifty momentum algo running on my Zerodha. The communication was crisp.\" — TradeMade user"
    ],
    tags: ["FinTech", "Web App", "Desktop App", "Dashboard"],
    geography: "India",
    stack: ["React", "Node.js", "Electron", "Python"],
    diagramType: "trade-made",
    images: {
      hero: "/Project_Pic/trademade.webp",
      gallery: []
    }
  },
  {
    id: "02",
    slug: "mrmed",
    client: "MrMed.in",
    headline: "Building the platform behind India's largest super-specialty pharmacy — from zero to 7,000+ medicines, 3,500 cities",
    problem: "MrMed was solving a serious access problem: cancer patients, transplant patients, people with rare conditions across India couldn't reliably source life-saving medicines at affordable prices. The founders had the supply chain and clinical knowledge. They needed a platform that could handle everything from prescription uploads to cold-chain delivery coordination — and make it feel simple for a patient in distress.",
    solution: [
      "End-to-end platform design — UX research and design from scratch, built around a patient under stress (not a casual shopper)",
      "Web platform — medicine catalogue (7,000+ SKUs), prescription upload flow, order tracking, patient assistance program access",
      "Patient-facing flows — refill reminders, medicine information, healthcare blog integration",
      "Ongoing maintenance and iteration — BlueBuck remained the technical partner post-launch"
    ],
    outcome: [
      "Platform now serves patients across 3,500+ cities including remote areas",
      "FICCI Healthcare Startup of the Year award",
      "Strategic partnership with Eli Lilly (announced Dec 2025)",
      "Rs. 40+ crore saved for patients across the platform"
    ],
    tags: ["HealthTech", "Full Platform", "Design"],
    geography: "India",
    stack: ["React", "Next.js"],
    testimonial: {
      quote: "BlueBuck helped us build the platform that now serves patients across 3,500+ cities. They understood we weren't building a shopping app — we were building a lifeline. The engineering quality and the pace of delivery were both exceptional.",
      name: "Devashish Singh",
      role: "Co-Founder @ MrMed.in",
      image: "/Founder_Pic/MrMed.inDevashish Singh.webp"
    },
    diagramType: "mr-med",
    images: {
      hero: "/Project_Pic/MrMed_in.webp",
      gallery: []
    }
  },
  {
    id: "03",
    slug: "asteride",
    client: "Asteride.co",
    headline: "Website and design system for India's #1 motorcycle community app — built for riders, not just users",
    problem: "Asteride had a strong product (the app had 4.9★ on App Store, growing rider community, GSF-backed) but their web presence didn't match. The website needed to communicate a lifestyle product — not a generic SaaS — to passionate motorcyclists while converting new riders to download the app. Design consistency between web and app was also broken.",
    solution: [
      "Marketing website — designed and built for the riding community; tone, imagery direction, and copy architecture all rider-first",
      "Design system — visual language, component library, and design tokens to keep web and app consistent as the product scales",
      "Collaboration with the Asteride engineering team on integration handoff"
    ],
    outcome: [
      "4.9★ App Store rating (community product the website funnels into)"
    ],
    tags: ["Consumer App", "Web", "Design System", "Community Platform"],
    geography: "India",
    stack: ["React", "Figma"],
    testimonial: {
      quote: "The design system and website they built finally matched the quality of our community app. Their ability to understand a passionate lifestyle audience and translate that into a consistent web experience was exactly what we needed.",
      name: "Jitesh Surana",
      role: "Founder @ Asteride",
      image: "/Founder_Pic/Jitesh Surana Asteride.webp"
    },
    diagramType: "none",
    images: {
      hero: "/Project_Pic/asteride.webp",
      gallery: []
    }
  },
  {
    id: "04",
    slug: "estay",
    client: "eStay Hotel, Dubai",
    headline: "A hospitality website that converts browsers into bookings — built for a Dubai hotel competing on OTAs",
    problem: "eStay Hotel (Al Muhaisnah, Dubai — 3-star, near Dubai International Airport) had strong reviews and good facilities (pool, gym, sports courts, family amenities) but was heavily dependent on OTA platforms like Booking.com. Their direct booking website wasn't converting. For a hotel that competes on value in a high-cost market, direct bookings mean significantly better margins.",
    solution: [
      "Full website redesign — built to convert direct bookings, not just inform",
      "Room catalogue and package pages — Standard King, Deluxe, Business, Family rooms; Rate Card program",
      "Booking flow integration — connecting to their reservation system",
      "SEO architecture — targeting 'luxury hotel near Dubai airport', 'best 3 star hotel Dubai', 'hotel with gym and pool Dubai' keywords",
      "Mobile-first build — majority of hotel searches happen on mobile"
    ],
    outcome: [
      "Significant increase in direct bookings and organic traffic growth."
    ],
    tags: ["Hospitality", "Website"],
    geography: "Dubai, UAE",
    stack: ["Next.js", "Custom CMS"],
    diagramType: "none",
    images: {
      hero: "/Project_Pic/estayhotel.webp",
      gallery: []
    }
  },
  {
    id: "05",
    slug: "gleo-ai",
    client: "Gleo.ai",
    headline: "AI features and strategy for a platform helping service companies productise their expertise",
    problem: "Gleo.ai is building the infrastructure for productised services — helping consulting firms, agencies, and B2B service companies turn their methodology into repeatable, scalable playbooks. The platform needed AI features that felt native, not bolted on — and a team that could advise on where LLMs actually add value vs. where they create fragility.",
    solution: [
      "AI feature consulting — scoped which parts of the Gleo platform should be AI-assisted vs. human-driven; prevented premature automation",
      "LLM feature development — built specific AI-assisted features within the platform",
      "Prompt architecture — designed the prompt system and evaluation criteria for consistent output quality",
      "Ongoing advisory — embedded with the Gleo team as their AI technical partner, not a one-off delivery"
    ],
    outcome: [
      "Successfully integrated LLM workflows directly into the productised service playbooks."
    ],
    tags: ["AI Consulting", "LLM Features", "Productised Services"],
    geography: "UK / Global",
    stack: ["LLM", "OpenAI", "Anthropic", "RAG"],
    testimonial: {
      quote: "They didn't just build the LLM features, they scoped where AI actually adds value versus where it creates fragility. Having them as our embedded AI partner gave us the technical depth we needed to scale our platform.",
      name: "Adarsh Kumar",
      role: "Founder @ Gleo.ai",
      image: "/Founder_Pic/Adarsh Kumar Gleo AI.webp"
    },
    diagramType: "gleo",
    images: {
      hero: "/Project_Pic/gleo_ai.webp",
      gallery: []
    }
  },
  {
    id: "06",
    slug: "cartin",
    client: "CartIn AI",
    headline: "We built an AI shopping assistant for Indian D2C brands — and it's live, converting, and making money",
    problem: "Indian D2C brands on Shopify were losing customers at the product discovery and decision stage. No tool existed that understood the Indian shopper — price-sensitive, vernacular-comfortable, comparison-heavy. Existing chatbots were either too generic (Western products) or too simple (scripted FAQ bots). The gap: an AI assistant that could actually guide purchase decisions, surface the right product, and increase AOV.",
    solution: [
      "CartIn AI — a Shopify widget that embeds into any D2C store; AI-powered product discovery, cart assistance, and conversion nudges",
      "Merchant dashboard — analytics showing conversation quality, hot leads, funnel drop-off, session tracking, ROI per conversation",
      "Intelligence layer — usage nudge system, conversion funnel visualization, CSV export, latency tracking",
      "PostHog integration — full session and event analytics pipeline"
    ],
    outcome: [
      "Live with D2C brand clients",
      "Generating revenue",
      "High session traffic, strong merchant retention"
    ],
    tags: ["Own Product", "AI", "Shopify", "D2C"],
    geography: "India",
    stack: ["Next.js", "Node.js", "OpenAI", "PostHog", "Shopify API"],
    diagramType: "cartin",
    images: {
      hero: "/Project_Pic/cartIn_web.webp",
      gallery: [
        "/Project_Pic/cartIn_app.webp"
      ]
    }
  },
  {
    id: "07",
    slug: "makeugc",
    client: "MakeUGC",
    headline: "We built our own influencer marketing platform — because the tools that existed weren't built for how India's creator economy actually works",
    problem: "Indian brands working with micro and nano influencers were managing everything in spreadsheets and WhatsApp groups. Existing platforms (Western tools, enterprise pricing) didn't fit the Indian market — wrong pricing, wrong creator discovery logic, wrong campaign workflow. MakeUGC was built to fill that gap.",
    solution: [
      "MakeUGC platform — full marketing website (makeugc.in) + proprietary dashboard (app.makeugc.in)",
      "Creator database — 500+ verified Indian creators, searchable by niche, audience, platform, and rate",
      "Campaign management dashboard — brands and agencies track campaigns, creator deliverables, approval workflows, and reporting",
      "UGC request flow — brief submission, creator matching, content delivery, usage rights management"
    ],
    outcome: [
      "500+ creator database",
      "Live brand campaigns shipped (Sri Sri Tattva, VedaOil, India Runs × Redrob AI)"
    ],
    tags: ["Own Product", "Influencer Marketing", "Creator Economy"],
    geography: "India",
    stack: ["Next.js", "Custom dashboard"],
    diagramType: "none",
    images: {
      hero: "/Project_Pic/makeugc_web.webp",
      gallery: [
        "/Project_Pic/maeugc_login.webp",
        "/Project_Pic/makeugc_app.webp"
      ]
    }
  },
  {
    id: "08",
    slug: "briventa",
    client: "Briventa Studio",
    headline: "Shopify Storefront Build, Performance Engineering & Ongoing Maintenance",
    problem: "Briventa Studio is a UK-based women's fashion brand retailing across 28 countries in Europe, the UK, and the United States. The founder approached BlueBuck Research with a clear mandate: build a Shopify storefront that could scale across multiple currency regions while delivering a premium, editorial shopping experience. Free UK delivery, free US shipping, and a weekly 'New Styles' drop cycle meant the platform had to handle frequent catalogue updates without performance degradation.",
    solution: [
      "Built a fully custom Shopify theme from scratch — no off-the-shelf template. Every section was engineered for conversion and editorial brand expression.",
      "Architected multi-currency, multi-region support covering 28 countries across EUR, GBP, and USD zones using Shopify Markets.",
      "Built the 'Shop by Category' structure across 9 distinct product collections — Dresses, Tops & Blouses, Jackets, Sweaters, Jumpsuits, Co-ord Sets, Trousers, Under-£25, and Bestsellers.",
      "Engineered a high-performance image delivery pipeline using Shopify CDN with responsive srcset — page load time under 2.1 seconds on 4G mobile.",
      "Set up the Style Journal blog — an SEO-driven content hub driving organic discovery for fashion-intent keywords in the UK and US.",
      "Integrated Facebook, Pinterest, and Instagram social channels into the storefront experience for shoppable content.",
      "Set up and maintain ongoing weekly product uploads, promotional banners, and seasonal sale configurations.",
      "Built and maintain the customer authentication and wishlist flows with persistent cart across regions."
    ],
    outcome: [
      "Countries: 28 (Multi-region live)",
      "Page Speed: <2.1s (Mobile 4G)",
      "Collections: 9 (Zero template used)",
      "Uptime: 99.9% (Since launch)"
    ],
    tags: ["E-Commerce", "Shopify", "Performance"],
    geography: "United Kingdom",
    stack: ["Shopify", "Liquid", "React"],
    testimonial: {
      quote: "The team built exactly what we envisioned — a store that feels premium without the premium agency price tag. New styles go live every week without a hitch. The multi-currency rollout, which we were dreading, was completely seamless.",
      name: "Founder",
      role: "Founder @ Briventa Studio",
      image: "/Founder_Pic/default.webp"
    },
    diagramType: "none",
    images: {
      hero: "/Project_Pic/briventastudio.png",
      gallery: []
    }
  },
  {
    id: "09",
    slug: "seat-cupra",
    client: "SEAT & CUPRA Media Center",
    headline: "Press Infrastructure Build, Asset Distribution Platform & Ongoing Maintenance",
    problem: "SEAT S.A. — the only automaker to design, develop, manufacture, and sell vehicles entirely in Spain — needed a dedicated media center platform to serve automotive journalists, content creators, and brand partners across the globe. The platform had to function as the authoritative source for SEAT and CUPRA press releases, high-resolution vehicle photography, launch videos, and brand assets. Given SEAT's position within the Volkswagen Group and its role heading the Electric Urban Car Family initiative (a €10B investment into Spain's electrification), the platform needed to support high-concurrency access during major global vehicle launches.",
    solution: [
      "Built the full SEAT S.A. Media Center web platform — designed for press, journalists, and brand partners globally.",
      "Engineered a copyright-free asset distribution system with structured categories: press releases, photos, videos, and brand documents — all downloadable for editorial use.",
      "Built a high-performance search and filter layer capable of handling concurrent access by 500+ automotive journalists during model launch events.",
      "Architected the content pipeline for CUPRA and SEAT press releases covering Formula E, design collaborations with MAM, and quarterly financials (Q1 2026: €43M operating profit).",
      "Integrated press release scheduling and embargo systems — content goes live at precise global launch timestamps.",
      "Maintained the platform across multiple vehicle launches: CUPRA Raval, CUPRA Tavascan Black Edition, SEAT Ibiza/Arona electric family, and the CUPRA KIRO Formula E programme.",
      "Handled infrastructure scaling during the Electric Urban Car Family announcement — SEAT's largest press event in a decade.",
      "Ongoing monthly maintenance contract covering uptime monitoring, asset uploads, and press gallery management."
    ],
    outcome: [
      "Journalists Served: 500+ (Concurrent at launch)",
      "Brands Covered: 2 (SEAT & CUPRA)",
      "Launch Events: 6+ (Zero downtime)",
      "Asset Types: 4 (Photos · Video · PR · Docs)"
    ],
    tags: ["Enterprise", "Media Infrastructure", "Scaling"],
    geography: "Spain",
    stack: ["Next.js", "Node.js", "AWS"],
    diagramType: "none",
    images: {
      hero: "/Project_Pic/seat-cupra-mediacenter.png",
      gallery: []
    }
  },
  {
    id: "10",
    slug: "zipto",
    client: "Zipto",
    headline: "Full-Stack Website Build, Brand Identity Engineering & Ongoing Maintenance",
    problem: "Zipto is a Bhubaneswar-based last-mile logistics and delivery company (similar to Porter), building fast, reliable local delivery infrastructure for businesses and individuals across Odisha. The founder came to BlueBuck Research with a strong operational product — real-time tracking, flexible fleet management, transparent pricing — but no digital presence worthy of the proposition. The brief was clear: build a website that communicates speed, reliability, and technological sophistication to both enterprise clients looking to outsource last-mile delivery and individual users who need same-day parcel movement.",
    solution: [
      "Designed and built the complete Zipto website from zero — brand positioning, visual identity direction, page architecture, copywriting, and code.",
      "Wrote the full website copy using a 'speed-first' narrative framework — every headline is built around delivery velocity, reliability metrics, and fleet flexibility.",
      "Engineered the site on a modern stack with sub-1.8 second load time — critical for India's mobile-first user base.",
      "Built three distinct value proposition sections targeting B2B clients (businesses outsourcing delivery), SME merchants (e-commerce last-mile), and individual users (parcel and personal delivery).",
      "Integrated real-time tracking UX patterns into the marketing experience — users understand the product capability before signing up.",
      "Implemented structured data and on-page SEO foundation targeting Bhubaneswar last-mile and local delivery keywords.",
      "Set up analytics infrastructure — conversion funnels tracking business enquiry vs individual user intent separately.",
      "Monthly maintenance covering content updates, pricing page management, and performance monitoring."
    ],
    outcome: [
      "Load Time: <1.8s (Mobile 4G)",
      "Market: Bhubaneswar, Odisha",
      "User Segments: 3 (B2B · SME · Individual)",
      "SEO Setup: Day 1 (Structured data live)"
    ],
    tags: ["Logistics", "Web Dev", "Branding"],
    geography: "Bhubaneswar, India",
    stack: ["React", "Next.js", "SEO"],
    diagramType: "none",
    images: {
      hero: "/Project_Pic/zipto.png",
      gallery: []
    }
  },
  {
    id: "11",
    slug: "qrata-ai",
    client: "Qrata.ai",
    headline: "Website and platform support for a hiring decision system trusted by venture-backed startups",
    problem: "Qrata is a managed-hiring platform connecting top Indian talent with startups and global companies — competing in a crowded recruiting-tech space (ZipRecruiter, RippleMatch, Otta) with a fraction of their funding. The site needed to communicate something more credible than \"another recruiting platform\": data-driven hiring intelligence, a curated talent pool, and a fast, trustworthy process for hiring managers at venture-backed companies.",
    solution: [
      "Website design and build — communicating Qrata's positioning as a \"hiring decision system,\" not a job board",
      "Content architecture — sections for Smart Hiring, Remote Teams, and AI-era hiring reports/insights",
      "Ongoing maintenance — BlueBuck continues to support and maintain the platform's web presence"
    ],
    outcome: [
      "Live platform serving startup and venture-backed company hiring needs",
      "Positioned Qrata's content (hiring trend reports, compensation benchmarks) as a credibility asset"
    ],
    tags: ["HR Tech", "Talent Platform", "B2B SaaS"],
    geography: "India (Mumbai)",
    stack: ["React", "Next.js"],
    diagramType: "none",
    images: {
      hero: "/Project_Pic/Qrata-ai.webp",
      gallery: []
    }
  }
];
