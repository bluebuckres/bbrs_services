import { cn } from "@/lib/utils";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ServicesHero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 bg-[#fcfaf2] dark:bg-[#0a0a0a] text-[#1a1a1a] dark:text-gray-100">
            <div className="max-w-4xl flex flex-col items-center">
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-600 dark:text-mint mb-8 block">
                    What We Build
                </span>
                <h1 className="font-display text-5xl md:text-7xl leading-[0.9] tracking-tighter mb-8">
                    Nine disciplines. <br className="hidden md:block" />
                    <span className="serif-italic opacity-40">Every line written by the people you spoke to.</span>
                </h1>
                
                <div className="space-y-6 max-w-2xl mx-auto text-lg md:text-xl font-light opacity-60 leading-relaxed mb-12 text-left md:text-center">
                    <p>
                        We don't have service tiers or packages. Every engagement starts with a 
                        conversation about your actual problem — then we scope exactly what needs 
                        to be built, by whom, and to what standard.
                    </p>
                    <p>
                        AI and data engineering sit at the centre. Custom software, DevOps, design, 
                        and the rest orbit around them. Most of our clients need more than one — 
                        we handle the overlap so you don't have to manage five vendors.
                    </p>
                </div>

                <div className="flex justify-center">
                    <Button asChild className="h-14 px-8 rounded-full text-base font-semibold group bg-emerald-600 hover:bg-emerald-700 text-white border-none">
                        <Link href="/contact" className="flex items-center gap-3">
                            Talk to a Founder
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="mt-24 animate-bounce opacity-30">
                <ChevronDown className="w-10 h-10" />
            </div>
        </section>
    );
}
