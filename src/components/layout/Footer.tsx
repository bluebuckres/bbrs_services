import Link from "next/link";
import Image from "next/image";
import {
    ArrowRight,
    Linkedin,
    Twitter,
    Cpu,
    Send
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

                    <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white relative z-10 text-center lg:text-left">
                        Ready to <span className="serif-italic text-mint">scale?</span>
                    </h2>

                    <div className="flex items-center group relative z-10">
                        <Link
                            href="/contact"
                            className="bg-white text-[#001414] px-6 md:px-10 py-4 md:py-5 rounded-l-full font-bold text-sm md:text-lg hover:bg-mint/90 transition-colors uppercase tracking-widest"
                        >
                            Book a Free Consultation
                        </Link>
                        <div className="bg-emerald-600 h-[52px] md:h-[68px] w-12 md:w-16 flex items-center justify-center rounded-r-full group-hover:bg-emerald-500 transition-colors">
                            <ArrowRight className="text-white w-6 h-6 md:w-8 md:h-8" />
                        </div>
                    </div>
                </div>

                {/* --- Giant Logo Section (Fixed 'k' visibility) --- */}
                <div className="flex items-center gap-4 md:gap-8 mb-12 w-full select-none">
                    {/* Icon Container */}
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

                    {/* 
             FIX: Changed font size clamp from 18vw to 13vw. 
             This ensures 'bluebuck' + the icon fits within the screen width 
             without cutting off the 'k' on standard laptops/monitors.
          */}
                    <h1 className="font-black leading-none tracking-tighter text-white lowercase text-[clamp(2rem,10vw,14rem)]">
                        bluebuck
                    </h1>
                </div>

                {/* --- Grid Content Section --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-t border-white/10 pt-12">

                    {/* Col 1: Description & Socials */}
                    <div className="space-y-6">
                        <p className="text-xl md:text-2xl font-light leading-snug text-white/90">
                            Transforming <span className="font-medium text-white underline decoration-[#0ea5e9] underline-offset-4">complex technology</span> into seamless growth for the world&apos;s most ambitious companies.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#001414] transition-all duration-300 group">
                                <Linkedin className="w-5 h-5 fill-current" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#001414] transition-all duration-300 group">
                                <Twitter className="w-5 h-5 fill-current" />
                            </Link>
                        </div>
                    </div>

                    {/* Col 2: Sitemap */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-4">Sitemap</h3>
                        {['Projects', 'Services', 'Case Studies', 'About Us', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase().replace(" ", "-")}`}
                                className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 transition-all duration-300 hover:text-white hover:translate-x-1"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Col 3: Contact */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-4">Contact Us</h3>
                        <p className="text-sm leading-relaxed text-white/60 font-light">
                            Millenium Towers Unit: T-2 9C,<br />
                            Tower II, DN Block, Salt Lake,<br />
                            Sector V, Kolkata, India
                        </p>
                        <a
                            className="text-white hover:text-[#0ea5e9] transition-colors text-sm font-medium pt-2 block"
                            href="mailto:hello@bluebuckservices.com"
                        >
                            hello@bluebuckservices.com
                        </a>
                    </div>

                    {/* Col 4: Newsletter */}
                    <div className="flex flex-col space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-2">Stay up to date</h3>
                        <div className="relative flex flex-col sm:flex-row border border-white/10 rounded-lg overflow-hidden bg-white/5 focus-within:border-white/30 transition-all">
                            <input
                                className="w-full bg-transparent border-none focus:ring-0 focus:outline-none py-4 px-4 text-sm placeholder:text-white/20 text-white"
                                placeholder="Email Address"
                                type="email"
                            />
                            <button
                                className="bg-white text-[#001414] px-6 text-xs font-black uppercase tracking-widest hover:bg-gray-200 transition-colors"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                        <p className="text-[10px] text-white/30 leading-relaxed uppercase tracking-wider">
                            By subscribing, you agree to our Privacy Policy and consent to receive updates.
                        </p>
                    </div>
                </div>

                {/* --- Bottom Legal Bar --- */}
                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/40">
                        <Link className="hover:text-white transition-colors" href="/privacy">Privacy Policy</Link>
                        <Link className="hover:text-white transition-colors" href="/terms">Terms of Service</Link>
                        <Link className="hover:text-white transition-colors" href="/security">Security</Link>
                        <Link className="hover:text-white transition-colors" href="/cookies">Cookie Policy</Link>
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-medium text-center md:text-right">
                        © 2026 BlueBuck Research LLP. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}