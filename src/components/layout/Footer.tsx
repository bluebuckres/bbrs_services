import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full text-white pt-20 border-t border-teal-900/50" style={{ background: "linear-gradient(180deg, #002b2b 0%, #001414 100%)" }}>
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                {/* CTA Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Get started today</h2>
                    <div className="mt-8 md:mt-0 flex group">
                        <Link
                            href="/contact"
                            className="bg-[#2a8d80] hover:bg-[#1b655b] text-white px-8 py-4 font-bold uppercase tracking-wider text-sm flex items-center transition-colors"
                        >
                            Book a Quick Call
                        </Link>
                        <div className="bg-[#2a8d80] hover:bg-[#1b655b] ml-[2px] p-4 flex items-center justify-center transition-colors">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>
                </div>

                {/* Logo Section */}
                <div className="relative py-10 mb-16 border-b border-teal-800/30">
                    <div className="flex items-center gap-6 lg:gap-12">
                        {/* SVG Logo */}
                        <div className="shrink-0">
                            <Image
                                src="/bluebuck logo black.svg"
                                alt="BlueBuck Logo"
                                width={80}
                                height={140}
                                className="h-32 lg:h-56 w-auto invert"
                            />
                        </div>
                        <h1 className="text-[clamp(4rem,20vw,18rem)] font-extrabold leading-none tracking-tighter text-white select-none">
                            bluebuck
                        </h1>
                    </div>
                </div>

                {/* Footer Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-20">
                    {/* Tagline */}
                    <div className="md:col-span-3">
                        <p className="text-teal-100/60 text-lg leading-snug">
                            Transforming complex technology into seamless growth for the world&apos;s most ambitious companies.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-3">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-white/40">Contact Us</h4>
                        <div className="space-y-4 text-teal-50">
                            <p className="leading-relaxed">
                                Millenium Towers Unit: T-2 9C, Tower II, DN Block, Salt Lake, Sector V <br />
                                Kolkata, West Bengal, India
                            </p>
                            <a className="block hover:text-[#2a8d80] transition-colors" href="mailto:hello@bluebuckservices.com">
                                hello@bluebuckservices.com
                            </a>
                        </div>
                    </div>

                    {/* Quick Links Badge */}
                    <div className="md:col-span-2 flex items-start">
                        <div className="w-24 h-24 rounded-full border border-teal-800 flex items-center justify-center text-center p-2 bg-teal-900/40">
                            <div className="text-[10px] leading-tight font-bold text-teal-100/40">
                                PROJECTS<br />
                                <span className="text-xs text-teal-100">SOC</span><br />
                                SERVICES<br />
                                ABOUT
                                CONTACT
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="md:col-span-4">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-white/40">Stay Up To Date</h4>
                        <form className="flex border border-teal-800 bg-black/20 p-1">
                            <input
                                className="bg-transparent border-none focus:ring-0 flex-grow text-white px-4 py-2 placeholder:text-teal-800"
                                placeholder="Email Address"
                                type="email"
                            />
                            <button
                                className="bg-white text-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-teal-50 transition-colors"
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Nav */}
                <div className="border-t border-teal-900 py-8 flex flex-col lg:flex-row justify-between items-center gap-8">
                    <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                        <Link className="text-xs font-bold uppercase tracking-[0.2em] hover:text-[#2a8d80] transition-colors" href="/">Home</Link>
                        <Link className="text-xs font-bold uppercase tracking-[0.2em] hover:text-[#2a8d80] transition-colors" href="/services">Services</Link>
                        <Link className="text-xs font-bold uppercase tracking-[0.2em] hover:text-[#2a8d80] transition-colors" href="/projects">Projects</Link>
                        <Link className="text-xs font-bold uppercase tracking-[0.2em] hover:text-[#2a8d80] transition-colors" href="/about-us">About</Link>
                        <Link className="text-xs font-bold uppercase tracking-[0.2em] hover:text-[#2a8d80] transition-colors" href="/contact">Contact</Link>
                    </nav>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-100/30">
                        © 2026 BlueBuck Research Services.
                    </div>
                </div>
            </div>
        </footer>
    );
}
