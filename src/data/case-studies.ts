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
  }
];
