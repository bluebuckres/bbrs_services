import { ArrowRight } from "lucide-react";
import Link from "next/link";

const offices = [
    { city: "London, UK", status: "open", hours: "09:00 — 18:00", current: "14:32", statusColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400", dotColor: "bg-green-500" },
    { city: "San Francisco, USA", status: "closing", hours: "08:00 — 17:00", current: "06:32", statusColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400", dotColor: "bg-amber-500" },
    { city: "Dubai, UAE", status: "closed", hours: "09:00 — 18:00", current: "17:32", statusColor: "bg-neutral-100 text-neutral-500 dark:bg-white/5 dark:text-white/40", dotColor: "bg-neutral-400" },
    { city: "Sydney, AU", status: "closed", hours: "08:00 — 17:00", current: "23:32", statusColor: "bg-neutral-100 text-neutral-500 dark:bg-white/5 dark:text-white/40", dotColor: "bg-neutral-400" },
];

export function ContactHero() {
    return (
        <main className="relative pt-20 pb-32 bg-background-light dark:bg-background-dark text-[#1a1a1a] dark:text-gray-100">
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none -z-10"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(216, 199, 255, 0.15) 0%, transparent 70%)" }}
            />
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <header className="mb-20 text-center md:text-left">
                    <h1 className="font-display text-7xl md:text-[8rem] leading-[0.9] tracking-tighter mb-8 max-w-4xl">
                        Let&apos;s build something <span className="serif-italic opacity-40">exceptional.</span>
                    </h1>
                    <p className="text-lg md:text-xl opacity-60 max-w-2xl leading-relaxed">
                        Whether you&apos;re looking for AI integration, cloud transformation, or custom software, our
                        research-driven approach ensures your project is built to lead.
                    </p>
                </header>

                {/* Grid: Left (Offices + Contact) | Right (Form) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left Column */}
                    <div className="lg:col-span-5 space-y-16">
                        {/* Global Operations */}
                        <section>
                            <h2 className="text-xs font-bold tracking-[0.3em] uppercase opacity-30 mb-8">Global Operations</h2>
                            <div className="space-y-6">
                                {offices.map((office) => (
                                    <div
                                        key={office.city}
                                        className="flex items-center justify-between group p-4 rounded-2xl hover:bg-white/40 dark:hover:bg-white/5 transition-colors"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="text-2xl font-display">{office.city}</span>
                                            <span className={`text-xs px-2 py-0.5 ${office.statusColor} rounded-full flex items-center gap-1`}>
                                                <span className={`w-1.5 h-1.5 ${office.dotColor} rounded-full`} />
                                                {office.status === "open" ? "Open" : office.status === "closing" ? "Closing soon" : "Closed"}
                                            </span>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-medium opacity-60">{office.hours}</div>
                                            <div className="text-xs opacity-40 uppercase tracking-wider">Current {office.current}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Direct Contact */}
                        <section className="space-y-8">
                            <div>
                                <h2 className="text-xs font-bold tracking-[0.3em] uppercase opacity-30 mb-4">Direct Contact</h2>
                                <a className="text-2xl font-medium hover:text-purple-accent transition-colors" href="mailto:hello@bluebuck.research">
                                    hello@bluebuck.research
                                </a>
                            </div>
                            <div>
                                <h2 className="text-xs font-bold tracking-[0.3em] uppercase opacity-30 mb-4">Immediate Booking</h2>
                                <Link href="#" className="inline-flex items-center gap-2 group text-xl border-b border-[#1a1a1a]/10 dark:border-white/10 pb-1">
                                    Schedule a 15-min discovery call
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </section>
                    </div>

                    {/* Right Column - Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-[2.5rem] p-10 md:p-14 shadow-2xl shadow-[#1a1a1a]/5">
                            <h2 className="font-display text-4xl mb-8">Project Inquiry</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium opacity-60">Full Name</label>
                                        <input
                                            className="w-full bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:border-purple-accent focus:ring-purple-accent transition-all"
                                            placeholder="John Doe"
                                            type="text"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium opacity-60">Company</label>
                                        <input
                                            className="w-full bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:border-purple-accent focus:ring-purple-accent transition-all"
                                            placeholder="Enterprise Inc."
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium opacity-60">Service Interest</label>
                                    <select className="w-full bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 appearance-none focus:border-purple-accent focus:ring-purple-accent transition-all">
                                        <option>AI &amp; Machine Learning</option>
                                        <option>Custom App Development</option>
                                        <option>DevOps &amp; Cloud Infrastructure</option>
                                        <option>Technical Research &amp; Strategy</option>
                                        <option>Cybersecurity Audit</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium opacity-60">Project Brief</label>
                                    <textarea
                                        className="w-full bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 h-32 resize-none focus:border-purple-accent focus:ring-purple-accent transition-all"
                                        placeholder="Tell us about your objectives, timeline, and challenges..."
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="w-full bg-[#1a1a1a] dark:bg-white text-white dark:text-black py-5 rounded-2xl font-bold text-lg hover:scale-[1.01] transition-all active:scale-[0.99] flex items-center justify-center gap-3 mt-8 shadow-[0_0_20px_rgba(216,199,255,0.3)]"
                                >
                                    Submit Inquiry
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <p className="text-center text-xs opacity-40 mt-4">Average response time: &lt; 4 hours during office hours.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
