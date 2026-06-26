import { Bot, Database, Terminal, Cloud, Shield, BarChart3, Layers, Globe, Cpu } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Bot,
    title: "AI / Machine Learning",
    desc: "Custom LLM fine-tuning, production RAG pipelines, computer vision, and AI agents that do real work — not demos.",
    tags: ["LLM Fine-tuning", "RAG", "Computer Vision", "NLP", "Agents"],
    featured: true,
  },
  {
    icon: Database,
    title: "Data Engineering",
    desc: "End-to-end data pipelines, warehouse architecture, and real-time analytics built to survive your Series B data volumes.",
    tags: ["Spark", "dbt", "Kafka", "Snowflake", "Airflow"],
    featured: true,
  },
  {
    icon: Terminal,
    title: "Custom Software Development",
    desc: "Web apps, dashboards, and desktop software built for daily use by real users — not just demos for investors.",
    tags: ["Next.js", "React", "Node.js", "Python"],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    desc: "Infrastructure as Code, CI/CD, and cloud-native architecture that doesn't become someone else's emergency at 2am.",
    tags: ["Kubernetes", "Terraform", "Docker", "AWS", "GCP"],
  },
  {
    icon: Cpu,
    title: "AI Agent Development",
    desc: "Autonomous multi-agent systems and workflow automation — where LLMs actually replace a process, not just assist it.",
    tags: ["LangChain", "CrewAI", "OpenAI", "Custom Frameworks"],
  },
  {
    icon: Layers,
    title: "Product Design & UX",
    desc: "Research-backed design systems and interfaces. We design for the user's second session, not just their first impression.",
    tags: ["Figma", "Design Systems", "Prototyping", "User Research"],
  },
  {
    icon: BarChart3,
    title: "Data Science & Analytics",
    desc: "Predictive models, statistical analysis, and BI dashboards that inform decisions — not just decorate reports.",
    tags: ["Python", "R", "Tableau", "Looker"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Security architecture, penetration testing, and compliance frameworks for companies where a breach isn't an option.",
    tags: ["Pen Testing", "SOC 2", "Zero Trust", "Security Architecture"],
  },
  {
    icon: Globe,
    title: "Technical Research",
    desc: "Feasibility studies, proof-of-concept builds, and deep-dive technology assessments before you commit the budget.",
    tags: ["POC", "R&D", "Benchmarking", "Architecture Review"],
  },
];

export function Services() {
  return (
    <section className="py-24 px-6" id="services" aria-label="Our services">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-600 dark:text-mint mb-3 block">
              What We Build
            </span>
            <h2 className="font-display text-5xl md:text-6xl leading-tight">
              Nine disciplines. One team.<br />No juniors handed the work after the call.
            </h2>
          </div>
          <p className="text-base opacity-55 max-w-sm md:text-right leading-relaxed">
            AI/ML and data engineering are our core. Everything else wraps around it. 
            Every engagement is handled by the same senior engineers you spoke to.
          </p>
        </div>

        {/* Featured 2 — large bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {services.filter((s) => s.featured).map((svc) => (
            <Link
              key={svc.title}
              href="/services"
              className="bento-card mint-glow p-9 md:p-10 rounded-3xl relative overflow-hidden group border border-emerald/10 hover:border-emerald/30 transition-all block"
            >
              <div className="absolute top-0 right-0 w-56 h-56 bg-emerald-500/8 blur-3xl rounded-full -mr-20 -mt-20 pointer-events-none" />
              <svc.icon className="w-9 h-9 mb-6 text-emerald-600" />
              <h3 className="font-display text-3xl mb-3">{svc.title}</h3>
              <p className="opacity-60 leading-relaxed mb-6 text-sm md:text-base">{svc.desc}</p>
              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 bg-emerald/5 dark:bg-emerald/15 rounded-full text-[11px] font-semibold text-emerald-800 dark:text-mint border border-emerald/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* Remaining 7 — split into 4 and 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {services.filter((s) => !s.featured).slice(0, 4).map((svc) => (
            <Link
              key={svc.title}
              href="/services"
              className="bento-card mint-glow p-7 rounded-2xl relative overflow-hidden group border border-emerald/10 hover:border-emerald/30 transition-all block"
            >
              <svc.icon className="w-7 h-7 mb-4 text-emerald-600 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-semibold text-lg mb-2">{svc.title}</h3>
              <p className="text-sm opacity-55 leading-relaxed mb-4">{svc.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-emerald/5 dark:bg-emerald/15 rounded-full text-[10px] font-semibold text-emerald-800 dark:text-mint border border-emerald/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.filter((s) => !s.featured).slice(4).map((svc) => (
            <Link
              key={svc.title}
              href="/services"
              className="bento-card mint-glow p-7 rounded-2xl relative overflow-hidden group border border-emerald/10 hover:border-emerald/30 transition-all block"
            >
              <svc.icon className="w-7 h-7 mb-4 text-emerald-600 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-semibold text-lg mb-2">{svc.title}</h3>
              <p className="text-sm opacity-55 leading-relaxed mb-4">{svc.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-emerald/5 dark:bg-emerald/15 rounded-full text-[10px] font-semibold text-emerald-800 dark:text-mint border border-emerald/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
