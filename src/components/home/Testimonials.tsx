'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
    id: number;
    company: string;
    tagline: string;
    quote: string;
    highlight: string;
    name: string;
    role: string;
    image: string;
    metric: {
        label: string;
        value: string;
        percentage: number;
    };
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        company: 'MrMed.in',
        tagline: 'HealthTech Platform',
        quote: 'BlueBuck helped us build the platform that now serves patients across 3,500+ cities. They understood we weren\'t building a shopping app — we were building a lifeline. The engineering quality and the pace of delivery were both exceptional.',
        highlight: 'engineering quality and the pace of delivery',
        name: 'Devashish Singh',
        role: 'Co-Founder @ MrMed.in',
        image: '/Founder_Pic/MrMed.inDevashish Singh.webp',
        metric: { label: 'Cities Served', value: '3,500+', percentage: 85 }
    },
    {
        id: 2,
        company: 'Gleo.ai',
        tagline: 'AI Features & Strategy',
        quote: 'They didn\'t just build the LLM features, they scoped where AI actually adds value versus where it creates fragility. Having them as our embedded AI partner gave us the technical depth we needed to scale our platform.',
        highlight: 'embedded AI partner',
        name: 'Adarsh Kumar',
        role: 'Founder @ Gleo.ai',
        image: '/Founder_Pic/Adarsh Kumar Gleo AI.webp',
        metric: { label: 'Advisory Value', value: '10x', percentage: 90 }
    },
    {
        id: 3,
        company: 'Asteride',
        tagline: 'Consumer App & Design',
        quote: 'The design system and website they built finally matched the quality of our community app. Their ability to understand a passionate lifestyle audience and translate that into a consistent web experience was exactly what we needed.',
        highlight: 'consistent web experience',
        name: 'Jitesh Surana',
        role: 'Founder @ Asteride',
        image: '/Founder_Pic/Jitesh Surana Asteride.webp',
        metric: { label: 'App Store Rating', value: '4.9★', percentage: 98 }
    }
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const current = testimonials[currentIndex];

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const handlePrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const formatQuote = (quote: string, highlight: string) => {
        const parts = quote.split(highlight);
        return (
            <>
                {parts[0]}
                <span className="font-display italic">{highlight}</span>
                {parts[1]}
            </>
        );
    };

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Decorative Quote Mark */}
            <div className="absolute top-12 right-12 opacity-5 pointer-events-none hidden lg:block">
                <span className="text-[20rem] font-display leading-none">"</span>
            </div>

            <div className="max-w-7xl mx-auto space-y-12 relative z-10">
                {/* Header */}
                <header className="border-b border-slate-200 dark:border-white/10 pb-4 flex justify-between items-end">
                    <div>
                        <span className="font-display text-xs uppercase tracking-[0.3em] opacity-80">
                            What Our Partners Say
                        </span>
                        <div className="h-1 w-12 bg-emerald-600 mt-2" />
                    </div>
                    <div className="hidden md:block">
                        <span className="text-xs font-mono opacity-50 uppercase tracking-widest">
                            Case Study {String(currentIndex + 1).padStart(2, '0')} / {testimonials.length}
                        </span>
                    </div>
                </header>

                {/* Main Content */}
                <main className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
                    {/* Left: Image with Metric */}
                    <div className="lg:col-span-5 relative group">
                        <div className="aspect-[4/5] overflow-hidden rounded-sm relative">
                            <Image
                                alt={`${current.name}, ${current.role}`}
                                className="w-full h-full object-cover grayscale-[0.2] contrast-110 hover:scale-105 transition-transform duration-700"
                                src={current.image}
                                fill
                                sizes="(max-width: 768px) 100vw, 42vw"
                            />

                            {/* Corner Decorations */}
                            <div className="absolute top-4 left-4">
                                <Plus className="w-4 h-4 text-white opacity-40" />
                            </div>
                            <div className="absolute top-4 right-4">
                                <Plus className="w-4 h-4 text-white opacity-40" />
                            </div>

                            {/* Metric Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col justify-end p-8 text-white">
                                <div className="flex items-end justify-between mb-4">
                                    <div className="space-y-1">
                                        <span className="block text-[10px] font-mono tracking-widest uppercase opacity-90">
                                            {current.metric.label}
                                        </span>
                                        <div className="relative w-48 h-[2px] bg-white/30">
                                            <div
                                                className="absolute left-0 top-0 h-full bg-white transition-all duration-1000"
                                                style={{ width: `${current.metric.percentage}%` }}
                                            />
                                            <div
                                                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-1000"
                                                style={{ left: `${current.metric.percentage}%` }}
                                            >
                                                <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                                                    <Plus className="w-2.5 h-2.5 text-emerald-600 font-bold" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-6xl md:text-7xl font-display leading-none drop-shadow-lg text-white">
                                        {current.metric.value}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="lg:col-span-7 flex flex-col justify-between py-4">
                        <div className="space-y-12">
                            {/* Company Logo/Name */}
                            <div className="flex items-center gap-2 opacity-90">
                                <div className="grid grid-cols-3 gap-1">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className="w-1.5 h-1.5 bg-current rounded-full" />
                                    ))}
                                </div>
                                <span className="text-xl font-bold tracking-tight">{current.company}</span>
                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-40 ml-2 border-l border-current/20 pl-2">
                                    {current.tagline}
                                </span>
                            </div>

                            {/* Quote */}
                            <blockquote className="relative">
                                <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight">
                                    "{formatQuote(current.quote, current.highlight)}"
                                </p>
                            </blockquote>

                            {/* Read More Link */}
                            <div>
                                <a className="group inline-flex flex-col" href="#">
                                    <span className="text-xs font-mono tracking-[0.3em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                                        Read Full Story
                                    </span>
                                    <div className="h-[1px] w-0 group-hover:w-full bg-emerald-600 transition-all duration-300 mt-1" />
                                </a>
                            </div>
                        </div>

                        {/* Footer: Author & Navigation */}
                        <div className="mt-16 lg:mt-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                            <div className="px-6 py-4 border border-slate-200 dark:border-white/10 rounded-sm">
                                <p className="font-mono text-xs tracking-widest uppercase flex items-center gap-3">
                                    <span className="text-emerald-600 font-bold">{current.name}</span>
                                    <span className="opacity-30">|</span>
                                    <span className="opacity-60">{current.role}</span>
                                </p>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={handlePrevious}
                                    className="w-12 h-12 flex items-center justify-center border border-slate-200 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors rounded-sm group"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="w-12 h-12 flex items-center justify-center border border-slate-200 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors rounded-sm group"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-2 pt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setIsAutoPlaying(false);
                                setCurrentIndex(index);
                            }}
                            className={cn(
                                "h-1 rounded-full transition-all duration-300",
                                index === currentIndex
                                    ? "w-12 bg-emerald-600"
                                    : "w-6 bg-slate-300 dark:bg-slate-700 hover:bg-emerald-600/50"
                            )}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
