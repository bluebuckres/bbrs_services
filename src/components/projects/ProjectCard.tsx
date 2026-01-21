import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    category: string;
    image: string;
    description?: string;
    size?: "default" | "tall" | "wide" | "large";
    className?: string;
}

export function ProjectCard({
    title,
    category,
    image,
    description,
    size = "default",
    className,
}: ProjectCardProps) {
    return (
        <div
            className={cn(
                "group relative rounded-3xl p-6 flex flex-col justify-end overflow-hidden",
                "bg-[#141414]/70 backdrop-blur-md border border-white/5 transition-all duration-500",
                "hover:border-[#d8c7ff]/40 hover:shadow-[0_0_30px_rgba(216,199,255,0.1)] hover:-translate-y-1",
                size === "tall" && "row-span-2",
                size === "wide" && "col-span-1 md:col-span-2",
                size === "large" && "col-span-1 md:col-span-2 row-span-2 p-8",
                className
            )}
        >
            {/* Background Image */}
            <img
                alt={title}
                className="absolute inset-0 w-full h-full object-cover -z-10 transition-all duration-700 group-hover:scale-105 group-hover:blur-sm group-hover:brightness-50"
                src={image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent -z-10" />

            {/* Content */}
            <div className={cn("relative z-10", size === "large" && "transition-transform duration-500 group-hover:translate-x-2")}>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-[#d8c7ff]/20 text-[#d8c7ff] px-3 py-1 rounded-full mb-3 inline-block">
                    {category}
                </span>
                <h3 className={cn("font-display mb-2 text-white", size === "large" ? "text-5xl" : size === "wide" ? "text-4xl" : "text-3xl")}>
                    {title}
                </h3>
                {description && (
                    <p className="opacity-60 text-sm max-w-sm text-gray-200">
                        {description}
                    </p>
                )}
            </div>

            {/* Hover Icon */}
            <span className="absolute bottom-6 right-6 text-white/60 group-hover:text-white group-hover:opacity-100 transition-all duration-300">
                <ArrowUpRight className={cn("w-6 h-6", size === "large" && "w-8 h-8")} />
            </span>

            {/* Link overlay */}
            <Link href="#" className="absolute inset-0 z-20" aria-label={`View ${title}`} />
        </div>
    );
}
