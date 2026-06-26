import { cn } from "@/lib/utils";
import { Bot, Database, Terminal, Cloud, Cpu, Layers, BarChart3, Shield, Globe } from "lucide-react";

const serviceDefinitions = [
    {
        icon: Bot,
        title: "Artificial Intelligence",
        shortDesc: "We build AI that ships into production — not prototypes that look impressive in a demo and break under real load. LLM fine-tuning, RAG pipelines, computer vision, NLP, and autonomous agents.",
        deliverables: [
            "Custom LLM fine-tuning on proprietary data",
            "RAG pipeline design, evaluation, and production deployment",
            "Computer vision models (detection, classification, OCR)",
            "AI agent systems — single and multi-agent",
            "Prompt architecture and output quality evaluation frameworks",
            "AI feature consulting: where LLMs add value, where they don't"
        ],
        whoFor: "SaaS founders adding AI features. Data teams needing production ML. Companies replacing manual workflows with AI systems.",
        outcome: "87% reporting latency reduction. 40% ops efficiency gain. Delivered.",
        tags: ["OpenAI", "Anthropic", "LangChain", "CrewAI", "HuggingFace", "PyTorch", "RAG", "Fine-tuning"]
    },
    {
        icon: Database,
        title: "Data Engineering",
        shortDesc: "Data pipelines that don't become tomorrow's incident. We design, build, and maintain the infrastructure that your analytics, ML models, and business decisions run on.",
        deliverables: [
            "End-to-end pipeline architecture (batch and real-time)",
            "Data warehouse design and implementation",
            "ETL/ELT frameworks using dbt and Spark",
            "Kafka-based streaming data systems",
            "Data quality monitoring and alerting",
            "Migration from legacy data infrastructure"
        ],
        whoFor: "Growth-stage companies whose data is outgrowing their current stack. Teams whose analysts spend more time fixing pipelines than analysing data.",
        outcome: "5× faster data processing. 87% reduction in reporting latency.",
        tags: ["Apache Spark", "dbt", "Kafka", "Snowflake", "Airflow", "BigQuery", "Redshift"]
    },
    {
        icon: Terminal,
        title: "Custom Software Development",
        shortDesc: "Web applications, dashboards, and desktop software designed for real daily use — not just the investor demo. We've built trading platforms, healthcare portals, AI-powered widgets, and creator economy tools.",
        deliverables: [
            "Web applications (Next.js, React, Vue)",
            "API design and backend systems (Node.js, Python, FastAPI)",
            "Desktop applications (Electron and native)",
            "Merchant and admin dashboards",
            "Mobile-responsive design and implementation",
            "Performance optimisation and scalability review"
        ],
        whoFor: "Founders who need a product built end-to-end, or companies adding a new product surface to an existing system.",
        outcome: "From brief to production in 6–12 weeks. Full IP transferred.",
        tags: ["Next.js", "React", "Node.js", "Python", "FastAPI", "PostgreSQL", "Electron"]
    },
    {
        icon: Cloud,
        title: "DevOps & Cloud",
        shortDesc: "Infrastructure that runs when it matters most. We architect, deploy, and hand off cloud-native systems on AWS, GCP, and Azure — built to scale without becoming someone else's emergency at 2am.",
        deliverables: [
            "Cloud infrastructure architecture (AWS · GCP · Azure)",
            "Infrastructure as Code (Terraform · Pulumi)",
            "CI/CD pipeline design and implementation",
            "Kubernetes cluster setup and management",
            "Docker containerisation and orchestration",
            "Cost optimisation for scaling infrastructure"
        ],
        whoFor: "Engineering teams moving from monolith to microservices. Founders whose infrastructure is holding back their product velocity.",
        outcome: "Zero-downtime deployments. Production-grade from day one.",
        tags: ["Kubernetes", "Terraform", "Docker", "AWS", "GCP", "Azure", "GitHub Actions"]
    },
    {
        icon: Cpu,
        title: "AI Agent Development",
        shortDesc: "Autonomous systems that replace a workflow, not just assist it. We build single and multi-agent pipelines using LangChain, CrewAI, and proprietary frameworks — designed to run unsupervised in production.",
        deliverables: [
            "Multi-agent system architecture and implementation",
            "Tool-calling agent pipelines (web, API, database)",
            "Workflow automation replacing manual human steps",
            "Agent evaluation, testing, and observability",
            "Integration with existing SaaS and internal tools",
            "Human-in-the-loop design where needed"
        ],
        whoFor: "Companies with repetitive, high-volume knowledge workflows. SaaS products adding autonomous AI capabilities.",
        outcome: "Workflows automated. Human hours recovered.",
        tags: ["LangChain", "CrewAI", "OpenAI", "Anthropic", "LlamaIndex", "Custom Agents"]
    },
    {
        icon: Layers,
        title: "Product Design & UX",
        shortDesc: "Design systems and interfaces built for the user's second session, not just their first impression. We've designed healthcare platforms, trading dashboards, community apps, and AI-powered tools.",
        deliverables: [
            "UX research and user journey mapping",
            "Full design system and component library",
            "Figma prototypes and interactive mockups",
            "Mobile-first responsive design",
            "Design-to-development handoff with documentation",
            "Iterative design based on real usage data"
        ],
        whoFor: "Founders who need product design alongside engineering. Companies whose product has outgrown its original design.",
        outcome: "Designed platforms now serving millions of sessions per month.",
        tags: ["Figma", "Design Systems", "Prototyping", "Framer", "User Research"]
    },
    {
        icon: BarChart3,
        title: "Data Science & Analytics",
        shortDesc: "Predictive models, statistical analysis, and BI dashboards that inform real decisions — not just decorate board presentations.",
        deliverables: [
            "Predictive modelling and forecasting",
            "Statistical analysis and hypothesis testing",
            "BI dashboard design (Tableau · Looker · custom)",
            "Customer segmentation and cohort analysis",
            "A/B testing frameworks",
            "Data storytelling for executive and investor audiences"
        ],
        whoFor: "Companies sitting on data that isn't driving decisions. Teams who want analysis, not just reports.",
        outcome: "40% efficiency gains from data-informed process changes.",
        tags: ["Python", "R", "SQL", "Tableau", "Looker", "Pandas", "Scikit-learn"]
    },
    {
        icon: Shield,
        title: "Cybersecurity",
        shortDesc: "Security architecture, penetration testing, and compliance frameworks for companies where a breach isn't a recoverable event.",
        deliverables: [
            "Penetration testing (web, API, infrastructure)",
            "SOC 2 Type II readiness and implementation",
            "Zero Trust architecture design",
            "Security audit and vulnerability assessment",
            "Compliance framework setup (ISO 27001, GDPR, HIPAA-adjacent)",
            "Ongoing security monitoring and incident response planning"
        ],
        whoFor: "FinTech and HealthTech companies preparing for enterprise sales. Founders who need security before their first enterprise contract.",
        outcome: "Zero critical vulnerabilities in post-engagement audits.",
        tags: ["Pen Testing", "SOC 2", "Zero Trust", "OWASP", "ISO 27001"]
    },
    {
        icon: Globe,
        title: "Technical Research",
        shortDesc: "Deep-dive feasibility studies and proof-of-concept development before you commit the budget. We tell you what's possible, what isn't, and what it will actually cost — before you start building.",
        deliverables: [
            "Technology feasibility assessments",
            "Proof-of-concept development (2–4 week sprints)",
            "Architecture decision records (ADRs)",
            "Build vs. buy analysis",
            "Vendor and tool evaluation",
            "Research reports for investor or board communication"
        ],
        whoFor: "Founders evaluating a technical direction before raising. CTOs assessing a new technology category for their product.",
        outcome: "Most clients save 3–6 months of wrong-direction development.",
        tags: ["POC", "R&D", "Architecture", "Benchmarking", "Technical Writing"]
    }
];

export function ServicesGrid() {
    return (
        <section className="py-24 px-6 bg-[#fcfaf2] dark:bg-[#0a0a0a]" id="disciplines">
            <div className="max-w-5xl mx-auto space-y-12">
                {serviceDefinitions.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 p-8 md:p-12 rounded-3xl group transition-all duration-500"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-mint">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-display text-[#1a1a1a] dark:text-white">{service.title}</h3>
                        </div>
                        
                        <p className="text-lg opacity-70 leading-relaxed mb-10 max-w-3xl">
                            {service.shortDesc}
                        </p>

                        <div className="grid md:grid-cols-2 gap-10 mb-10">
                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest opacity-40 mb-4">What You Deliver</h4>
                                <ul className="space-y-3">
                                    {service.deliverables.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm opacity-70">
                                            <span className="text-emerald-500 mt-1">•</span>
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest opacity-40 mb-3">Who It's For</h4>
                                    <p className="text-sm opacity-70 leading-relaxed">{service.whoFor}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest opacity-40 mb-3">Outcome</h4>
                                    <p className="text-sm font-medium text-emerald-600 dark:text-mint">{service.outcome}</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-black/5 dark:border-white/10 flex flex-wrap gap-2">
                            {service.tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-md text-xs font-medium opacity-60">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
