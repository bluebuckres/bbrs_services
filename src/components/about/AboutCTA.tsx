import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function AboutCTA() {
    return (
        <section className="py-32 px-6 bg-[#fdfbf7] dark:bg-[#0a0a0a]">
            <div className="max-w-5xl mx-auto">
                <div className="rounded-[3rem] p-12 md:p-20 bg-white dark:bg-white/5 text-center relative overflow-hidden group border border-[#9333ea]/20 shadow-[0_10px_30px_rgba(147,51,234,0.05)]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#9d88cc] to-transparent" />
                    <div className="relative z-10">
                        <h2 className="font-display text-5xl md:text-7xl mb-8 text-[#2d2d2d] dark:text-white">Join Our Team</h2>
                        <p className="text-xl text-[#2d2d2d]/50 dark:text-white/50 mb-12 max-w-2xl mx-auto">
                            Senior engineers who want to work on hard problems — not ticket queues. We&apos;re based in Kolkata. Remote-first for the right people.
                        </p>
                        <Link
                            href="/career"
                            className="bg-[#2d2d2d] dark:bg-white text-white dark:text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform inline-flex items-center justify-center gap-2 shadow-xl shadow-[#2d2d2d]/10"
                        >
                            View Open Positions
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </div>
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-50 dark:bg-purple-900/10 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
                </div>
            </div>
        </section>
    );
}
