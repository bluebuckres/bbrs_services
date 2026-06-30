'use client';

import { useState, useEffect } from 'react';
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
        company: 'TechCore',
        tagline: 'Innovating Future',
        quote: 'BlueBuck is a vital partner in how we accelerate our roadmap and maintain our competitive edge.',
        highlight: 'vital partner',
        name: 'Amit Singh',
        role: 'CTO @ TechCore',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAcWF8CqzNgSiivFl2pgBXnPdznARggBQclyllQ8d8j5VCXxaRgizNT5rQXAlV-516Q40LAKVtymppkCotWPuKvQlCNb6KCs9vVnQKKcsfsFO0YHHR8Dcg5RxRBKUzbDiw5Dev843u4x3SdRp2UfbqO1jz_IzViycVcw4_wJDIxqC2FB-1Ow6H6YpLcF0HvMSVKzOsAif1UBeVWQQJYHg-eBMiHUgtdt5puIA0C4yMVHvH47v2G6-b0904bqUurSTNZLG6yU9O-vvf',
        metric: { label: 'Reduced Dev Time', value: '60%', percentage: 60 }
    },
    {
        id: 2,
        company: 'FinanceHub',
        tagline: 'Banking Reimagined',
        quote: 'Their AI solutions transformed our customer experience, delivering insights we never thought possible.',
        highlight: 'transformed our customer experience',
        name: 'Priya Sharma',
        role: 'VP Engineering @ FinanceHub',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop',
        metric: { label: 'Customer Satisfaction', value: '98%', percentage: 98 }
    },
    {
        id: 3,
        company: 'HealthTech Plus',
        tagline: 'Wellness First',
        quote: 'BlueBuck helped us scale our platform to serve millions while maintaining exceptional performance.',
        highlight: 'scale our platform',
        name: 'Dr. Rajesh Kumar',
        role: 'CTO @ HealthTech Plus',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop',
        metric: { label: 'Platform Uptime', value: '99.9%', percentage: 99 }
    },
    {
        id: 4,
        company: 'EduLearn',
        tagline: 'Learning Evolution',
        quote: 'The data engineering solutions provided by BlueBuck enabled us to personalize learning for every student.',
        highlight: 'personalize learning',
        name: 'Ananya Desai',
        role: 'Head of Product @ EduLearn',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop',
        metric: { label: 'Student Engagement', value: '85%', percentage: 85 }
    },
    {
        id: 5,
        company: 'RetailPro',
        tagline: 'Commerce Redefined',
        quote: 'Working with BlueBuck was a game-changer for our omnichannel strategy and inventory management.',
        highlight: 'game-changer',
        name: 'Vikram Patel',
        role: 'CEO @ RetailPro',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop',
        metric: { label: 'Inventory Accuracy', value: '98%', percentage: 98 }
    },
    {
        id: 6,
        company: 'LogiChain',
        tagline: 'Supply Chain Excellence',
        quote: 'Their cloud architecture reduced our operational costs while improving delivery times significantly.',
        highlight: 'reduced our operational costs',
        name: 'Meera Reddy',
        role: 'COO @ LogiChain',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=1000&fit=crop',
        metric: { label: 'Cost Reduction', value: '40%', percentage: 40 }
    },
    {
        id: 7,
        company: 'MediaStream',
        tagline: 'Content Everywhere',
        quote: 'BlueBuck\'s expertise in video processing and CDN optimization helped us reach global audiences seamlessly.',
        highlight: 'reach global audiences',
        name: 'Arjun Mehta',
        role: 'VP Technology @ MediaStream',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop',
        metric: { label: 'Global Reach', value: '150+', percentage: 75 }
    },
    {
        id: 8,
        company: 'SecureBank',
        tagline: 'Trust & Security',
        quote: 'The cybersecurity framework they implemented gave us confidence to innovate without compromising safety.',
        highlight: 'confidence to innovate',
        name: 'Kavita Iyer',
        role: 'CISO @ SecureBank',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=1000&fit=crop',
        metric: { label: 'Security Score', value: '99%', percentage: 99 }
    },
    {
        id: 9,
        company: 'GreenEnergy',
        tagline: 'Sustainable Tomorrow',
        quote: 'Their IoT solutions enabled real-time monitoring across our renewable energy infrastructure.',
        highlight: 'real-time monitoring',
        name: 'Suresh Nair',
        role: 'CTO @ GreenEnergy',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1000&fit=crop',
        metric: { label: 'Efficiency Gain', value: '55%', percentage: 55 }
    },
    {
        id: 10,
        company: 'TravelEase',
        tagline: 'Journey Simplified',
        quote: 'BlueBuck transformed our booking platform with AI-powered recommendations that users love.',
        highlight: 'AI-powered recommendations',
        name: 'Neha Kapoor',
        role: 'Product Lead @ TravelEase',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop',
        metric: { label: 'Booking Conversion', value: '72%', percentage: 72 }
    },
    {
        id: 11,
        company: 'FoodTech',
        tagline: 'Culinary Innovation',
        quote: 'The automation solutions cut our delivery time in half while maintaining quality standards.',
        highlight: 'cut our delivery time in half',
        name: 'Ravi Krishnan',
        role: 'Founder @ FoodTech',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop',
        metric: { label: 'Delivery Speed', value: '50%', percentage: 50 }
    },
    {
        id: 12,
        company: 'PropTech Solutions',
        tagline: 'Real Estate Evolved',
        quote: 'Their data science expertise helped us predict market trends with unprecedented accuracy.',
        highlight: 'unprecedented accuracy',
        name: 'Deepa Menon',
        role: 'CEO @ PropTech Solutions',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop',
        metric: { label: 'Prediction Accuracy', value: '92%', percentage: 92 }
    },
    {
        id: 13,
        company: 'SportsFit',
        tagline: 'Performance Tracking',
        quote: 'BlueBuck\'s mobile-first approach and real-time analytics revolutionized how athletes train.',
        highlight: 'revolutionized how athletes train',
        name: 'Karthik Rao',
        role: 'Head of Engineering @ SportsFit',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop',
        metric: { label: 'User Retention', value: '88%', percentage: 88 }
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
                            <img
                                alt={`${current.name}, ${current.role}`}
                                className="w-full h-full object-cover grayscale-[0.2] contrast-110 hover:scale-105 transition-transform duration-700"
                                src={current.image}
                            />

                            {/* Corner Decorations */}
                            <div className="absolute top-4 left-4">
                                <Plus className="w-4 h-4 text-white opacity-40" />
                            </div>
                            <div className="absolute top-4 right-4">
                                <Plus className="w-4 h-4 text-white opacity-40" />
                            </div>

                            {/* Metric Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                                <div className="flex items-end justify-between mb-4">
                                    <div className="space-y-1">
                                        <span className="block text-[10px] font-mono tracking-widest uppercase opacity-70">
                                            {current.metric.label}
                                        </span>
                                        <div className="relative w-48 h-[2px] bg-white/20">
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
                                    <span className="text-6xl md:text-7xl font-display leading-none">
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
