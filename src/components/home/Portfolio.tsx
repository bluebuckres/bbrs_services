import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// PLACEHOLDER: Replace with real project data when assets are ready
const projects = [
  {
    id: "01",
    title: "MrMed.in",
    category: "HealthTech Platform",
    outcome: "Serving 3,500+ cities",
    tags: ["React", "Next.js", "Full-Stack"],
    image: "/Project_Pic/MrMed_in.webp",
    placeholder: "bg-gradient-to-br from-emerald-900 via-emerald-950 to-[#0a0a0a]",
    featured: true,
  },
  {
    id: "02",
    title: "TradeMade.in",
    category: "FinTech Trading App",
    outcome: "Spreadsheet to live algo execution",
    tags: ["React", "Electron", "Python"],
    image: "/Project_Pic/trademade.webp",
    placeholder: "bg-gradient-to-br from-slate-800 via-slate-900 to-[#0a0a0a]",
    featured: false,
  },
  {
    id: "03",
    title: "Gleo.ai",
    category: "AI Consulting",
    outcome: "Embedded LLM features & strategy",
    tags: ["LLM", "RAG", "Automation"],
    image: "/Project_Pic/gleo_ai.webp",
    placeholder: "bg-gradient-to-br from-indigo-900 via-slate-900 to-[#0a0a0a]",
    featured: false,
  },
];

export function Portfolio() {
  return (
    <section className="py-24 px-6" id="work" aria-label="Selected work">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 flex justify-between items-end">
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-600 dark:text-mint mb-3 block">
              Selected Work
            </span>
            <h2 className="font-display text-5xl md:text-6xl leading-tight">
              Recent Engagements
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-500 transition-colors group"
          >
            All Case Studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Featured project — large */}
          {projects.filter((p) => p.featured).map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id === '01' ? 'mrmed' : project.id === '02' ? 'trademade' : 'gleo-ai'}`}
              className="md:col-span-7 group relative rounded-3xl overflow-hidden min-h-[400px] flex flex-col justify-end border border-emerald/15 mint-glow"
            >
              {/* Real project image */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className={`absolute inset-0 ${project.placeholder}`} />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative z-10 p-8 md:p-10">
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-[10px] bg-emerald-500/20 text-mint px-2.5 py-0.5 rounded-full border border-mint/20 uppercase font-bold tracking-wider">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-white mb-3 leading-tight">
                  {project.title}
                </h3>
                <p className="text-mint/60 text-sm mb-4">{project.outcome}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-white/8 text-white/50 px-2 py-0.5 rounded border border-white/10 uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-emerald-500/30">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </Link>
          ))}

          {/* Two smaller projects stacked */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {projects.filter((p) => !p.featured).map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id === '02' ? 'trademade' : 'gleo-ai'}`}
                className="group relative rounded-3xl overflow-hidden flex-1 min-h-[185px] flex flex-col justify-end border border-emerald/15 mint-glow"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className={`absolute inset-0 ${project.placeholder}`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="relative z-10 p-6">
                  <span className="text-[9px] text-mint/60 uppercase tracking-widest font-bold mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl text-white mb-1 leading-tight group-hover:text-mint transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/40 text-xs">{project.outcome}</p>
                </div>
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile "all work" link */}
        <div className="mt-8 flex md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-500 transition-colors group"
          >
            View all case studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
