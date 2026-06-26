"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
    Menu,
    X,
    ChevronDown,
    ArrowRight,
    Cpu,
    Search,
    Globe
} from "lucide-react";
import { ServicesMegaMenu } from "./ServicesMegaMenu";
import Image from "next/image";

const ZONES = {
    KOL: "Asia/Kolkata",
    DXB: "Asia/Dubai",
    LND: "Europe/London",
    NYC: "America/New_York",
};

// --- 1. The Mega Menu Component ---
// --- 1. The Mega Menu Component ---
// Imported from ./ServicesMegaMenu.tsx

// --- 2. The Main Navbar ---
export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [time, setTime] = useState<Record<string, string>>({});

    // For calculating the "Spotlight" pill position
    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const navRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const updateTime = () => {
            const now: Record<string, string> = {};
            for (const key in ZONES) {
                now[key] = new Intl.DateTimeFormat("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                    timeZone: ZONES[key as keyof typeof ZONES],
                }).format(new Date());
            }
            setTime(now);
        };

        updateTime(); // initial
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    const navLinks = [
        { name: "Services", href: "/services", hasMegaMenu: true },
        { name: "Projects", href: "/projects" },
        { name: "Career", href: "/career" },
        { name: "About", href: "/about-us" },
        { name: "Contact", href: "/contact" },
    ];

    // Handle spotlight hover effect
    const handleMouseEnter = (e: React.MouseEvent, name: string) => {
        setHoveredLink(name);
        const target = e.currentTarget as HTMLElement;
        const containerRect = linksRef.current?.getBoundingClientRect();

        if (containerRect) {
            setPillStyle({
                left: target.getBoundingClientRect().left - containerRect.left,
                width: target.getBoundingClientRect().width,
                opacity: 1
            });
        }
    };

    const handleMouseLeave = () => {
        setHoveredLink(null);
        setPillStyle(prev => ({ ...prev, opacity: 0 }));
    };

    return (
        <>
            {/* Top Ticker - "System Status" style */}
            <div className="bg-[#050505] text-white/60 border-b border-white/5 py-2 hidden md:block">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] uppercase font-mono tracking-widest">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                        <span>System Operational</span>
                    </div>
                    <div className="flex gap-4">
                        <span>KOL: {time.KOL}</span>
                        <span>DXB: {time.DXB}</span>
                        <span>LND: {time.LND}</span>
                        <span>NYC: {time.NYC}</span>
                        <span className="text-emerald-500 cursor-pointer hover:underline">View Status Protocol</span>
                    </div>
                </div>
            </div>

            {/* Main Nav Container */}
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
                    isScrolled ? "pt-4" : "pt-8" // Moves down slightly when scrolled for floating effect
                )}
            >
                <nav
                    ref={navRef}
                    onMouseLeave={handleMouseLeave}
                    className={cn(
                        "mx-auto transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex items-center justify-between relative",
                        isScrolled
                            ? "max-w-4xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-full py-3 px-6 shadow-2xl shadow-black/50"
                            : "max-w-7xl bg-black/80 backdrop-blur-sm border-white/5 py-4 px-6"
                    )}
                >
                    {/* Left: Brand */}
                    <Link href="/" className="flex items-center gap-2 group relative z-50">
                        <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-90 overflow-hidden relative">
                            <Image
                                src="/bbrslogo_used_one.svg"
                                alt="BBRS Logo"
                                width={100}
                                height={100}
                                className="w-[270%] h-[270%] object-cover object-center transform scale-100 translate-y-0.5"
                            />
                        </div>
                        <span className={cn(
                            "font-bold text-lg tracking-tight transition-colors",
                            isScrolled ? "text-white" : "text-white"
                        )}>
                            bluebuck
                        </span>
                    </Link>

                    {/* Center: Links with Spotlight Effect */}
                    <div className="hidden md:flex items-center relative" ref={linksRef}>
                        {/* The Moving Pill Background */}
                        <div
                            className="absolute bg-white/10 rounded-full transition-all duration-300 ease-out h-full -z-10"
                            style={{
                                left: pillStyle.left,
                                width: pillStyle.width,
                                opacity: pillStyle.opacity,
                                height: '100%',
                            }}
                        />

                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                onMouseEnter={(e) => handleMouseEnter(e, link.name)}
                                className="relative px-5 py-2"
                            >
                                <Link
                                    href={link.href}
                                    className="text-sm font-medium text-white/80 hover:text-white transition-colors flex items-center gap-1"
                                >
                                    {link.name}
                                    {link.hasMegaMenu && (
                                        <ChevronDown className={cn(
                                            "w-3 h-3 transition-transform duration-300",
                                            hoveredLink === link.name ? "rotate-180" : ""
                                        )} />
                                    )}
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-4 relative z-50">
                        <button className="hidden md:flex text-white/60 hover:text-white transition-colors">
                            <Search className="w-5 h-5" />
                        </button>

                        <Link
                            href="/contact"
                            className={cn(
                                "hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 border",
                                isScrolled
                                    ? "bg-white text-black border-white hover:bg-emerald-400 hover:border-emerald-400"
                                    : "bg-white/10 text-white border-white/10 hover:bg-white hover:text-black"
                            )}
                        >
                            Start Project
                        </Link>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden text-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>

                    {/* Mega Menu Positioned Absolute to Nav */}
                    {hoveredLink === "Services" && (
                        <div className="absolute top-full left-0 w-full pt-6">
                            <ServicesMegaMenu />
                        </div>
                    )}

                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 bg-[#050505] z-40 pt-32 px-6 transition-all duration-500 ease-in-out md:hidden",
                isMobileMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-10"
            )}>
                <div className="flex flex-col gap-6">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-3xl font-light text-white border-b border-white/10 pb-4 flex justify-between items-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                            {link.name}
                            <ArrowRight className="w-5 h-5 -rotate-45 text-white/30" />
                        </Link>
                    ))}
                    <div className="mt-8">
                        <Link
                            href="/contact"
                            className="w-full bg-emerald-500 text-black py-4 rounded-xl font-bold text-center block"
                        >
                            Start Project
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}