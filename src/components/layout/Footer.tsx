import Link from "next/link";
import Image from "next/image";
import {
    ArrowRight,
    Linkedin,
    Twitter,
    Github,
    Mail
} from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full bg-gradient-to-b from-[#002b2b] to-[#001414] text-white pt-16 pb-8 overflow-hidden border-t border-white/5 relative">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

                {/* --- Top CTA Section --- */}
                <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8 relative">
                    <h2 className="absolute left-1/2 -translate-x-1/2 -top-6 text-[clamp(2rem,10vw,18rem)] leading-[0.8] font-black text-white/[0.03] pointer-events-none select-none whitespace-nowrap hidden md:block">
                        BLUEBUCK
                    </h2>

                    <div className="text-center lg:text-left relative z-10">
                        <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-teal-400/50 mb-3">
                            Ready to start?
                        </p>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white">
                            Let&apos;s build something <br className="hidden md:block" />
                            <span className="serif-italic text-mint">worth talking about.</span>
                        </h2>
                    </div>

                    <div className="flex items-center group relative z-10">
                        <Link
                            href="/contact"
                            className="bg-white text-[#001414] px-6 md:px-10 py-4 md:py-5 rounded-l-full font-bold text-sm md:text-lg hover:bg-mint/90 transition-colors uppercase tracking-widest"
                        >
                            Book a Discovery Call
                        </Link>
                        <div className="bg-emerald-600 h-[52px] md:h-[68px] w-12 md:w-16 flex items-center justify-center rounded-r-full group-hover:bg-emerald-500 transition-colors">
                            <ArrowRight className="text-white w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>

                {/* --- Giant Logo Section --- */}
                <div className="flex items-center gap-4 md:gap-8 mb-12 w-full select-none">
                    <div className="w-[10vw] h-[10vw] max-w-[120px] max-h-[120px] min-w-[60px] min-h-[60px] rounded-full bg-white flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <Image
                            src="/bbrslogo_used_one.svg"
                            alt="BlueBuck Logo"
                            width={120}
                            height={120}
                            className="w-[265%] h-[265%] object-cover -translate-y-[-4%]"
                            style={{ filter: 'brightness(10.5)' }}
                        />
                    </div>
                    <h1 className="font-black leading-none tracking-tighter text-white lowercase text-[clamp(2rem,10vw,14rem)]">
                        bluebuck
                    </h1>
                </div>

                {/* --- Grid Content Section --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-t border-white/10 pt-12">

                    {/* Col 1: Description & Socials */}
                    <div className="space-y-6">
                        <p className="text-xl font-light leading-snug text-white/90">
                            A boutique AI and software engineering studio. India-based. Globally trusted.
                        </p>
                        <p className="text-sm font-light text-white/50">
                            BlueBuck Research LLP · Est. 2022 · Salt Lake, Kolkata, India
                        </p>
                        <div className="flex gap-4 pt-2">
                            {/* LinkedIn — corrected URL from reference */}
                            <Link href="https://www.linkedin.com/company/bluebuckresearch" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#001414] transition-all duration-300">
                                <Linkedin className="w-5 h-5 fill-current" />
                            </Link>
                            {/* Twitter/X — corrected URL from reference */}
                            <Link href="https://x.com/BlueBuckRes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#001414] transition-all duration-300">
                                <Twitter className="w-5 h-5 fill-current" />
                            </Link>
                        </div>
                    </div>

                    {/* Col 2: Studio Links — added Contact per reference */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-4">Studio</h3>
                        {[
                            { name: 'Services', href: '/services' },
                            { name: 'Our Work', href: '/projects' },
                            { name: 'About Us', href: '/about-us' },
                            { name: 'Insights', href: '/insights' },
                            { name: 'Contact', href: '/contact' },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 transition-all duration-300 hover:text-white hover:translate-x-1"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Col 3: Contact */}
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-4">Contact</h3>
                            <p className="text-sm leading-relaxed text-white/60 font-light mb-3">
                                Salt Lake, Sector V<br />
                                Kolkata, India<br />
                                <span className="text-white/40 mt-1 block">US / EU overlap hours</span>
                            </p>
                            {/* Email — corrected to connect@ from reference */}
                            <a
                                className="text-white hover:text-mint transition-colors text-sm font-medium block"
                                href="mailto:connect@bluebuckresearch.com"
                            >
                                connect@bluebuckresearch.com
                            </a>
                            <a
                                className="text-white hover:text-mint transition-colors text-sm font-medium block mt-2"
                                href="tel:+917908158639"
                            >
                                +91 7908158639
                            </a>
                        </div>
                    </div>

                    {/* Col 4: Booking CTA */}
                    <div className="flex flex-col space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-2">Start a Project</h3>
                        <p className="text-sm leading-relaxed text-white/60 font-light">
                            Ready to build something? Book a 30-minute discovery call with a co-founder — no sales deck, no account manager.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-lg text-xs font-black uppercase tracking-widest transition-all duration-300 group w-fit"
                        >
                            Book a Discovery Call
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <p className="text-xs text-white/30">
                            Or email us at{" "}
                            <a href="mailto:connect@bluebuckresearch.com" className="text-mint hover:text-white transition-colors">
                                connect@bluebuckresearch.com
                            </a>
                        </p>
                    </div>
                </div>

                {/* --- Bottom Legal Bar --- */}
                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/40">
                        <Link className="hover:text-white transition-colors" href="/privacy">Privacy Policy</Link>
                        <Link className="hover:text-white transition-colors" href="/terms">Terms of Service</Link>
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-medium text-center md:text-right">
                        © {new Date().getFullYear()} BlueBuck Research LLP · Est. 2022 · Salt Lake, Kolkata, India
                    </div>
                </div>
            </div>
        </footer>
    );
}
