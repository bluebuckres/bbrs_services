"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Activity, Rocket, Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { ServicesMegaMenu } from "./ServicesMegaMenu";
import { ChevronDown } from "lucide-react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesHovered, setIsServicesHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "/services", hasMegaMenu: true },
        { name: "Projects", href: "/projects" },
        { name: "Career", href: "/career" },
        { name: "About", href: "/about-us" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            {/* Top Banner */}
            <div className="w-full bg-[#064e3b] text-mint py-2.5 text-center text-sm font-medium border-b border-mint/10 relative z-[60]">
                <span className="opacity-90">
                    BlueBuck Emerald Protocol: Delivering 3x faster infrastructure.
                </span>
                <a
                    className="underline underline-offset-4 ml-2 hover:opacity-100 transition-opacity inline-flex items-center"
                    href="#"
                >
                    Read Update <ChevronRight className="w-4 h-4" />
                </a>
            </div>

            <nav
                className={cn(
                    "sticky top-6 z-50 px-6 mt-4 transition-all duration-300",
                    isScrolled ? "mt-2" : "mt-4"
                )}
            >
                <div
                    className="max-w-6xl mx-auto glass-nav border border-emerald/10 dark:border-white/5 rounded-2xl py-3 px-6 flex items-center justify-between shadow-sm relative"
                    onMouseLeave={() => setIsServicesHovered(false)}
                >
                    <Link href="/" className="flex items-center gap-2 group cursor-pointer relative z-50">
                        <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center">
                            <Activity className="text-white w-5 h-5" />
                        </div>
                        <span className="font-bold text-xl tracking-tight">BlueBuck</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8 relative z-50">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative py-2"
                                onMouseEnter={() => {
                                    if (link.hasMegaMenu) {
                                        setIsServicesHovered(true);
                                    } else {
                                        setIsServicesHovered(false);
                                    }
                                }}
                            >
                                <Link
                                    href={link.href}
                                    className="text-sm font-medium opacity-70 hover:opacity-100 hover:text-emerald-600 transition-all flex items-center gap-1"
                                >
                                    {link.name}
                                    {link.hasMegaMenu && <ChevronDown className="w-3 h-3 mt-0.5 opacity-50" />}
                                </Link>
                                {link.hasMegaMenu && isServicesHovered && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 animate-in fade-in duration-300"></span>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="hidden md:block relative z-50">
                        <Button>
                            <Rocket className="mr-2 w-4 h-4" />
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-primary dark:text-gray-100 relative z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>

                    {/* Mega Menu */}
                    <div className="hidden md:block">
                        {isServicesHovered && <ServicesMegaMenu />}
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 p-6 md:hidden">
                        <div className="glass-nav border border-emerald/10 rounded-2xl p-6 flex flex-col gap-4 shadow-xl mt-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium opacity-80 hover:opacity-100 hover:text-emerald-600 transition-all py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-emerald/10">
                                <Button className="w-full">
                                    <Rocket className="mr-2 w-4 h-4" />
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
