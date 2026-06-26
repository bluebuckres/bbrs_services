import { ArrowRight, Plane, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

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
                    <h1 className="font-display text-6xl md:text-8xl leading-[0.9] tracking-tighter mb-8 max-w-4xl">
                        Let&apos;s scope <span className="serif-italic opacity-40">your build.</span>
                    </h1>
                    <p className="text-lg md:text-xl opacity-60 max-w-2xl leading-relaxed">
                        We review every inquiry within 24 hours. If we&apos;re not the right fit, we&apos;ll tell you immediately and point you to someone who is.
                    </p>
                </header>

                {/* Grid: Left (Offices + Contact) | Right (Form) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left Column */}
                    <div className="lg:col-span-5 space-y-16">
                        {/* Global Operations */}
                        <section>
                            <h2 className="text-xs font-bold tracking-[0.3em] uppercase opacity-30 mb-8">Location & Meetings</h2>
                            <div className="space-y-6">
                                <div className="flex items-start justify-between group p-4 rounded-2xl hover:bg-white/40 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-black/5 dark:hover:border-white/10">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-4">
                                            <span className="text-xl font-display">Corporate Office</span>
                                            <span className="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full flex items-center gap-1 uppercase tracking-widest font-bold">
                                                Primary
                                            </span>
                                        </div>
                                        <div className="text-sm opacity-60 leading-relaxed max-w-xs">
                                            Millenium Towers Unit: T-2 9C, Tower II,<br />
                                            DN Block, Salt Lake, Sector V, Bidhannagar,<br />
                                            Kolkata, West Bengal IN
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start justify-between group p-4 rounded-2xl hover:bg-white/40 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-black/5 dark:hover:border-white/10">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-4">
                                            <span className="text-xl font-display">Registered Office</span>
                                            <span className="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-full flex items-center gap-1 uppercase tracking-widest font-bold">
                                                Legal
                                            </span>
                                        </div>
                                        <div className="text-sm opacity-60 leading-relaxed max-w-xs">
                                            4G, Kaikhali Main Road, Airport,<br />
                                            KrishtiKunja, Kolkata, West Bengal 700052, IN
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 group p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-black/5 dark:border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center">
                                        <Plane className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div>
                                        <div className="font-medium">Global Kick-offs</div>
                                        <div className="text-sm opacity-60">We fly out for project kick-offs when required.</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Direct Contact */}
                        <section className="space-y-8">
                            <div>
                                <h2 className="text-xs font-bold tracking-[0.3em] uppercase opacity-30 mb-4">Direct Contact</h2>
                                <a className="text-xl md:text-2xl font-medium hover:text-purple-accent transition-colors break-all" href="mailto:connect@bluebuckresearch.com">
                                    connect@bluebuckresearch.com
                                </a>
                                <div className="mt-4">
                                    <a className="text-xl md:text-2xl font-medium hover:text-purple-accent transition-colors block" href="tel:+917908158639">
                                        +91 7908158639
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-xs font-bold tracking-[0.3em] uppercase opacity-30 mb-4">Immediate Booking</h2>
                                <Link
                                    href="https://bluebuck-research.neetocal.com/meeting-with-bluebuck-research"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 group text-lg md:text-xl border-b border-[#1a1a1a]/10 dark:border-white/10 pb-1"
                                >
                                    Schedule a 30-min discovery call
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                            <div>
                                <h2 className="text-xs font-bold tracking-[0.3em] uppercase opacity-30 mb-4">Follow</h2>
                                <div className="flex items-center gap-4">
                                    <Link
                                        href="https://www.linkedin.com/company/bluebuckresearch"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </Link>
                                    <Link
                                        href="https://x.com/BlueBuckRes"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column - Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-[2.5rem] p-4 md:p-8 shadow-2xl shadow-[#1a1a1a]/5 h-full min-h-[600px]">
                            
                            <div style={{ width: "100%", height: "100%", minHeight: "600px" }} id="inline-embed-container"></div>
                            
                            <Script id="neetocal-inline-init" strategy="afterInteractive">
                                {`window.neetoCal = window.neetoCal || { embed: function(){(window.neetoCal.q=window.neetoCal.q||[]).push(arguments)} };`}
                            </Script>
                            <Script src="https://cdn.neetocal.com/javascript/embed.js" strategy="afterInteractive" />
                            <Script id="neetocal-inline-embed" strategy="lazyOnload">
                                {`
                                  if (window.neetoCal && typeof window.neetoCal.embed === 'function') {
                                    window.neetoCal.embed({
                                      type: "inline",
                                      id: "8d7db280-85a4-44cd-b8c9-9473c207529d",
                                      organization: "bluebuck-research",
                                      elementSelector: "#inline-embed-container",
                                      styles: "height: 100%; width: 100%;", 
                                      queryParams: { "dynamicHeight": true },
                                      slug: "meeting-with-bluebuck-research",
                                      isSidebarAndCoverImgHidden: "false",
                                      shouldForwardQueryParams: "false"
                                    });
                                  }
                                `}
                            </Script>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
