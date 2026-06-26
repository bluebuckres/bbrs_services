import { caseStudies } from "@/data/case-studies";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { ProjectDiagram } from "@/components/projects/ProjectDiagram";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="bg-[#050505] min-h-screen text-gray-100 font-sans selection:bg-[#d8c7ff]/30 pb-32">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between">
        <Link href="/projects" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
        <div className="font-display text-lg tracking-tight">BlueBuck <span className="text-[#d8c7ff]">Research</span></div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#d8c7ff]/10 text-[#d8c7ff] border border-[#d8c7ff]/20">
            {caseStudy.client}
          </span>
          <span className="text-white/40 text-sm">{caseStudy.geography}</span>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl tracking-tighter mb-8 max-w-4xl leading-[1.1]">
          {caseStudy.headline}
        </h1>

        <div className="flex flex-wrap gap-2 mb-16">
          {caseStudy.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-md text-sm font-medium bg-white/5 text-white/60">
              {tag}
            </span>
          ))}
          {caseStudy.stack.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-md text-sm font-medium bg-[#d8c7ff]/5 text-[#d8c7ff]/60 border border-[#d8c7ff]/10">
              {tech}
            </span>
          ))}
        </div>

        {/* Hero Image */}
        <div className="w-full h-[50vh] md:h-[70vh] rounded-[2rem] overflow-hidden relative border border-white/10 group">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 opacity-60" />
          <img 
            src={caseStudy.images.hero} 
            alt={`${caseStudy.client} platform screenshot`} 
            className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
          />
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Column: Problem */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-xs font-bold font-mono tracking-widest uppercase opacity-40 mb-4 text-[#d8c7ff]">01 / The Challenge</h2>
              <h3 className="text-3xl font-display mb-6">The Problem</h3>
              <p className="text-lg opacity-70 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            {/* Metrics (if any) */}
            {caseStudy.metrics && (
              <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
                {caseStudy.metrics.map((m, i) => (
                  <div key={i}>
                    <div className="text-4xl font-display text-[#d8c7ff] mb-2">{m.value}</div>
                    <div className="text-sm opacity-50 uppercase tracking-widest">{m.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Solution & Outcome */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* What we built */}
            <div className="bg-[#0a0a0a] rounded-[2rem] p-8 md:p-12 border border-white/5 shadow-2xl">
              <h2 className="text-xs font-bold font-mono tracking-widest uppercase opacity-40 mb-6 text-[#d8c7ff]">02 / Execution</h2>
              <h3 className="text-3xl font-display mb-8">What we built</h3>
              <ul className="space-y-6">
                {caseStudy.solution.map((item, i) => {
                  const [boldPart, rest] = item.split(" — ");
                  return (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1.5 shrink-0 w-6 h-6 rounded-full bg-[#d8c7ff]/10 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-[#d8c7ff]" />
                      </div>
                      <p className="text-lg leading-relaxed opacity-80">
                        {rest ? (
                          <>
                            <strong className="text-white font-semibold">{boldPart}</strong> — {rest}
                          </>
                        ) : (
                          item
                        )}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Outcome */}
            <div>
              <h2 className="text-xs font-bold font-mono tracking-widest uppercase opacity-40 mb-4 text-[#d8c7ff]">03 / Results</h2>
              <h3 className="text-3xl font-display mb-6">The Outcome</h3>
              <div className="space-y-4">
                {caseStudy.outcome.map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-lg opacity-90 leading-relaxed">
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Diagram Section */}
        {caseStudy.diagramType !== "none" && (
          <div className="mt-24">
            <h2 className="text-xs font-bold font-mono tracking-widest uppercase opacity-40 mb-8 text-[#d8c7ff] text-center">Architecture & Flow</h2>
            <ProjectDiagram type={caseStudy.diagramType!} />
          </div>
        )}

        {/* Gallery */}
        {caseStudy.images.gallery.length > 0 && (
          <div className="mt-24 space-y-8">
            <h2 className="text-xs font-bold font-mono tracking-widest uppercase opacity-40 mb-8 text-[#d8c7ff] text-center">Platform Gallery</h2>
            {caseStudy.images.gallery.map((img, i) => (
              <div key={i} className="w-full rounded-[2rem] overflow-hidden border border-white/10">
                <img src={img} alt={`${caseStudy.client} gallery image ${i + 1}`} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
        )}

        {/* Testimonial */}
        {caseStudy.testimonial && (
          <div className="mt-32 max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#d8c7ff]/30">
                <img src={caseStudy.testimonial.image} alt={caseStudy.testimonial.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <h3 className="text-2xl md:text-4xl font-display leading-tight mb-8">
              "{caseStudy.testimonial.quote}"
            </h3>
            <div className="text-[#d8c7ff] font-bold text-lg">{caseStudy.testimonial.name}</div>
            <div className="opacity-50 text-sm mt-1">{caseStudy.testimonial.role}</div>
          </div>
        )}
      </main>
      
      {/* Footer CTA */}
      <section className="mt-40 border-t border-white/10 pt-20 pb-10 text-center px-6">
        <h2 className="font-display text-4xl mb-6">Ready to build something like this?</h2>
        <Link href="/contact" className="inline-block px-8 py-4 rounded-full bg-[#d8c7ff] text-[#050505] font-bold hover:bg-white transition-colors">
          Start a Conversation
        </Link>
      </section>
    </div>
  );
}
