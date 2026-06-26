export interface ServiceData {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  shortDesc: string;
  outcomeStat: string;
  techTags: string[];
  deliverables: string[];
  whoItsFor: string;
  accentColor: string; // tailwind color name e.g. "emerald"
  gradientFrom: string;
  gradientTo: string;
  metaTitle: string;
  metaDescription: string;
}

export const services: ServiceData[] = [
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    eyebrow: "AI & ML Engineering",
    headline: "AI that ships into production — not prototypes that break under real load.",
    shortDesc:
      "LLM fine-tuning, RAG pipelines, computer vision, NLP, and autonomous agents built for production. Not demos. Not slides. Delivered code that survives real usage.",
    outcomeStat: "87% reporting latency reduction. 40% ops efficiency gain. Delivered.",
    techTags: ["OpenAI", "Anthropic", "LangChain", "CrewAI", "HuggingFace", "PyTorch", "RAG", "Fine-tuning"],
    deliverables: [
      "Custom LLM fine-tuning on proprietary data",
      "RAG pipeline design, evaluation, and production deployment",
      "Computer vision models — detection, classification, OCR",
      "AI agent systems — single and multi-agent",
      "Prompt architecture and output quality evaluation frameworks",
      "AI feature consulting: where LLMs add value, where they don't",
    ],
    whoItsFor:
      "SaaS founders adding AI features. Data teams needing production ML. Companies replacing manual workflows with AI systems that actually hold up in production.",
    accentColor: "emerald",
    gradientFrom: "from-emerald-500/20",
    gradientTo: "to-teal-500/10",
    metaTitle: "Artificial Intelligence Services — BlueBuck Research",
    metaDescription:
      "Custom LLM fine-tuning, RAG pipelines, computer vision, and AI agents built for production. 87% latency reduction delivered. Kolkata-based AI engineering studio.",
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    eyebrow: "Data Infrastructure",
    headline: "Data pipelines that don't become tomorrow's incident.",
    shortDesc:
      "Design, build, and maintain the infrastructure your analytics, ML models, and business decisions run on. Built to survive your Series B data volumes — and beyond.",
    outcomeStat: "5× faster data processing. 87% reduction in reporting latency.",
    techTags: ["Apache Spark", "dbt", "Kafka", "Snowflake", "Airflow", "BigQuery", "Redshift"],
    deliverables: [
      "End-to-end pipeline architecture — batch and real-time",
      "Data warehouse design and implementation",
      "ETL/ELT frameworks using dbt and Spark",
      "Kafka-based streaming data systems",
      "Data quality monitoring and alerting",
      "Migration from legacy data infrastructure",
    ],
    whoItsFor:
      "Growth-stage companies whose data is outgrowing their current stack. Teams whose analysts spend more time fixing pipelines than analysing data.",
    accentColor: "blue",
    gradientFrom: "from-blue-500/20",
    gradientTo: "to-cyan-500/10",
    metaTitle: "Data Engineering Services — BlueBuck Research",
    metaDescription:
      "End-to-end data pipelines, warehouse architecture, Spark, Kafka, dbt. 5× faster processing. Senior engineers, Kolkata-based studio.",
  },
  {
    slug: "cybersecurity",
    title: "Cyber Security",
    eyebrow: "Security & Compliance",
    headline: "Security architecture for companies where a breach isn't recoverable.",
    shortDesc:
      "Penetration testing, SOC 2 readiness, Zero Trust architecture, and compliance frameworks. Built for FinTech and HealthTech companies where the stakes are real.",
    outcomeStat: "Zero critical vulnerabilities in post-engagement audits.",
    techTags: ["Pen Testing", "SOC 2", "Zero Trust", "OWASP", "ISO 27001", "GDPR", "HIPAA"],
    deliverables: [
      "Penetration testing — web, API, and infrastructure",
      "SOC 2 Type II readiness and implementation",
      "Zero Trust architecture design",
      "Security audit and vulnerability assessment",
      "Compliance framework setup — ISO 27001, GDPR, HIPAA-adjacent",
      "Ongoing security monitoring and incident response planning",
    ],
    whoItsFor:
      "FinTech and HealthTech companies preparing for enterprise sales. Founders who need security validated before their first enterprise contract is signed.",
    accentColor: "red",
    gradientFrom: "from-red-500/20",
    gradientTo: "to-orange-500/10",
    metaTitle: "Cybersecurity Services — BlueBuck Research",
    metaDescription:
      "Penetration testing, SOC 2, Zero Trust architecture, and compliance for FinTech and HealthTech. Zero critical vulnerabilities delivered.",
  },
  {
    slug: "cloud-strategy",
    title: "Cloud Strategy",
    eyebrow: "Cloud & Infrastructure",
    headline: "Infrastructure that runs when it matters most.",
    shortDesc:
      "Cloud-native architecture on AWS, GCP, and Azure — built to scale without becoming someone else's emergency at 2am. Architected, deployed, and handed off clean.",
    outcomeStat: "Zero-downtime deployments. Production-grade from day one.",
    techTags: ["Kubernetes", "Terraform", "Docker", "AWS", "GCP", "Azure", "Pulumi", "GitHub Actions"],
    deliverables: [
      "Cloud infrastructure architecture — AWS, GCP, Azure",
      "Infrastructure as Code with Terraform and Pulumi",
      "CI/CD pipeline design and implementation",
      "Kubernetes cluster setup and management",
      "Docker containerisation and orchestration",
      "Cost optimisation for scaling infrastructure",
    ],
    whoItsFor:
      "Engineering teams moving from monolith to microservices. Founders whose infrastructure is holding back their product velocity and needs a senior hand.",
    accentColor: "sky",
    gradientFrom: "from-sky-500/20",
    gradientTo: "to-blue-500/10",
    metaTitle: "Cloud Strategy & Infrastructure Services — BlueBuck Research",
    metaDescription:
      "Cloud architecture on AWS, GCP, Azure. Kubernetes, Terraform, CI/CD. Zero-downtime deployments. Kolkata-based senior engineering studio.",
  },
  {
    slug: "product-design",
    title: "Product Design",
    eyebrow: "UX & Design Systems",
    headline: "Design built for the user's second session — not just their first impression.",
    shortDesc:
      "Research-backed design systems and interfaces. Healthcare platforms, trading dashboards, community apps, and AI-powered tools — designed for retention, not just launch.",
    outcomeStat: "Designed platforms now serving millions of sessions per month.",
    techTags: ["Figma", "Design Systems", "Prototyping", "Framer", "User Research", "Component Libraries"],
    deliverables: [
      "UX research and user journey mapping",
      "Full design system and component library",
      "Figma prototypes and interactive mockups",
      "Mobile-first responsive design",
      "Design-to-development handoff with documentation",
      "Iterative design based on real usage data",
    ],
    whoItsFor:
      "Founders who need product design alongside engineering — not a separate agency. Companies whose product has outgrown its original design and needs a system.",
    accentColor: "violet",
    gradientFrom: "from-violet-500/20",
    gradientTo: "to-purple-500/10",
    metaTitle: "Product Design & UX Services — BlueBuck Research",
    metaDescription:
      "Design systems, UX research, Figma prototyping, and component libraries. Designed for retention. Kolkata-based product design studio.",
  },
  {
    slug: "devops",
    title: "DevOps",
    eyebrow: "DevOps Engineering",
    headline: "CI/CD and deployment pipelines that accelerate cycles — not block them.",
    shortDesc:
      "Infrastructure as Code, automated deployment pipelines, and containerisation. Built for teams that need to ship fast without introducing risk every release.",
    outcomeStat: "60% faster release cycles. Production-grade pipelines from week one.",
    techTags: ["Kubernetes", "Docker", "GitHub Actions", "Terraform", "Helm", "ArgoCD", "Prometheus"],
    deliverables: [
      "CI/CD pipeline design and implementation from scratch",
      "Docker containerisation and multi-stage builds",
      "Kubernetes cluster configuration and GitOps workflows",
      "Automated testing integration into the pipeline",
      "Monitoring, alerting, and observability setup",
      "Runbook documentation and on-call handoff",
    ],
    whoItsFor:
      "Teams shipping manually with high deployment anxiety. Engineering orgs that want to move faster without breaking production.",
    accentColor: "orange",
    gradientFrom: "from-orange-500/20",
    gradientTo: "to-amber-500/10",
    metaTitle: "DevOps Engineering Services — BlueBuck Research",
    metaDescription:
      "CI/CD pipelines, Kubernetes, Docker, and GitOps. 60% faster release cycles. Senior DevOps engineers, Kolkata India.",
  },
  {
    slug: "automation",
    title: "Automation",
    eyebrow: "AI Agents & Workflow Automation",
    headline: "Autonomous systems that replace a workflow — not just assist it.",
    shortDesc:
      "Single and multi-agent pipelines using LangChain, CrewAI, and proprietary frameworks. Designed to run unsupervised in production and remove the human bottleneck.",
    outcomeStat: "45% overhead reduction. Workflows automated. Human hours recovered.",
    techTags: ["LangChain", "CrewAI", "OpenAI", "Anthropic", "LlamaIndex", "Python", "Custom Agents"],
    deliverables: [
      "Multi-agent system architecture and implementation",
      "Tool-calling agent pipelines — web, API, database",
      "Workflow automation replacing manual human steps",
      "Agent evaluation, testing, and observability",
      "Integration with existing SaaS and internal tools",
      "Human-in-the-loop design where required",
    ],
    whoItsFor:
      "Companies with repetitive, high-volume knowledge workflows. SaaS products adding autonomous AI capabilities that need to run without babysitting.",
    accentColor: "teal",
    gradientFrom: "from-teal-500/20",
    gradientTo: "to-emerald-500/10",
    metaTitle: "Automation & AI Agent Development — BlueBuck Research",
    metaDescription:
      "Multi-agent systems, workflow automation, LangChain, CrewAI. 45% overhead reduction. Autonomous AI systems built for production.",
  },
  {
    slug: "data-science",
    title: "Data Science",
    eyebrow: "Data Science & Analytics",
    headline: "Decisions backed by real numbers — not decorated reports.",
    shortDesc:
      "Predictive models, statistical analysis, and BI dashboards that inform real decisions. Built for teams who want analysis, not just charts that look good in a board meeting.",
    outcomeStat: "40% efficiency gains from data-informed process changes.",
    techTags: ["Python", "R", "SQL", "Tableau", "Looker", "Pandas", "Scikit-learn"],
    deliverables: [
      "Predictive modelling and forecasting",
      "Statistical analysis and hypothesis testing",
      "BI dashboard design — Tableau, Looker, custom",
      "Customer segmentation and cohort analysis",
      "A/B testing frameworks",
      "Data storytelling for executive and investor audiences",
    ],
    whoItsFor:
      "Companies sitting on data that isn't driving decisions. Teams who want analysis that changes behaviour — not reports that get filed.",
    accentColor: "indigo",
    gradientFrom: "from-indigo-500/20",
    gradientTo: "to-blue-500/10",
    metaTitle: "Data Science & Analytics Services — BlueBuck Research",
    metaDescription:
      "Predictive modelling, BI dashboards, statistical analysis. 40% efficiency gains. Data science studio based in Kolkata India.",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
