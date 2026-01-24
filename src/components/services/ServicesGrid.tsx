import { cn } from "@/lib/utils";
import { Brain, Shield, Layers, Settings, Database, Cloud, Terminal, Activity, Code, AppWindow, Rocket, Smartphone } from "lucide-react";

const services = [
    {
        title: "Artificial Intelligence",
        description: "Custom LLMs, computer vision, and predictive modeling at scale.",
        icon: Brain,
        color: "bg-neon-purple/20",
        iconColor: "text-neon-purple",
        href: "/services/ai",
    },
    {
        title: "Voice Agents",
        description: "Human-parity voice AI for customer support and workflow automation.",
        icon: Brain,
        color: "bg-purple-500/10",
        iconColor: "text-neon-purple",
        href: "/services/ai-voice",
    },
    {
        title: "Cyber Security",
        description: "Zero-trust architecture and automated vulnerability intelligence.",
        icon: Shield,
        color: "bg-blue-500/10",
        iconColor: "text-primary dark:text-white",
        href: "/services",
    },
    {
        title: "Product Design",
        description: "High-fidelity interface design rooted in cognitive research.",
        icon: Layers,
        color: "bg-emerald/20",
        iconColor: "text-primary dark:text-white",
        href: "/services",
    },
    {
        title: "Automation",
        description: "Enterprise-wide workflows powered by autonomous agents.",
        icon: Settings,
        color: "bg-orange-500/10",
        iconColor: "text-primary dark:text-white",
        href: "/services",
    },
    {
        title: "Data Engineering",
        description: "Real-time pipelines and robust data warehousing solutions.",
        icon: Database,
        color: "bg-green-500/10",
        iconColor: "text-primary dark:text-white",
        href: "/services",
    },
    {
        title: "Cloud Strategy",
        description: "Multi-cloud optimization and serverless infrastructure scaling.",
        icon: Cloud,
        color: "bg-blue-400/10",
        iconColor: "text-primary dark:text-white",
        href: "/services",
    },
    {
        title: "DevOps",
        description: "CI/CD automation with sub-second deployment metrics.",
        icon: Terminal,
        color: "bg-purple-500/10",
        iconColor: "text-primary dark:text-white",
        href: "/services",
    },
    {
        title: "Data Science",
        description: "Insight extraction through advanced statistical analysis.",
        icon: Activity,
        color: "bg-red-500/10",
        iconColor: "text-primary dark:text-white",
        href: "/services",
    },
    {
        title: "Custom Software Development",
        description: "Tailored enterprise solutions built with modern frameworks and cloud-native architecture.",
        icon: Code,
        color: "bg-indigo-500/10",
        iconColor: "text-primary dark:text-white",
        href: "/services",
    },
    {
        title: "SaaS Platform Development",
        description: "Scalable multi-tenant platforms from design to production deployment.",
        icon: AppWindow,
        color: "bg-pink-500/10",
        iconColor: "text-primary dark:text-white",
        href: "/services",
    },
    {
        title: "MVP Development",
        description: "Ship market-ready products in 8-12 weeks with iterative validation cycles.",
        icon: Rocket,
        color: "bg-yellow-500/10",
        iconColor: "text-primary dark:text-white",
        href: "/services",
    },
    {
        title: "Web & Mobile Applications",
        description: "Cross-platform apps using React, React Native, and progressive web standards.",
        icon: Smartphone,
        color: "bg-cyan-500/10",
        iconColor: "text-primary dark:text-white",
        href: "/services",
    },
];

import Link from "next/link";

export function ServicesGrid() {
    return (
        <section className="py-32 px-6 bg-[#fcfaf2] dark:bg-[#0a0a0a]" id="services">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 flex items-end justify-between">
                    <div>
                        <h2 className="font-display text-7xl mb-6 text-[#1a1a1a] dark:text-white">Expertise.</h2>
                        <p className="text-xl opacity-60 text-[#1a1a1a] dark:text-white">High-speed technical delivery across the full stack.</p>
                    </div>
                    <span className="text-neon-purple font-mono text-xl">[ {services.length} / SPECIALIZATIONS ]</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Link
                            href={service.href}
                            key={index}
                            className="bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/10 p-8 rounded-3xl group hover:border-neon-purple/50 transition-all duration-500 hover:-translate-y-1 block"
                        >
                            <div className="w-16 h-16 mb-8 relative">
                                <div className={cn("absolute inset-0 blur-xl rounded-full group-hover:scale-150 transition-transform", service.color)} />
                                <service.icon className={cn("w-10 h-10 relative", service.iconColor)} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a] dark:text-white">{service.title}</h3>
                            <p className="opacity-50 leading-relaxed text-[#1a1a1a] dark:text-white">{service.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
