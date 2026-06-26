import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const team = [
    {
        name: "Dr. Elias Thorne",
        role: "Chief Scientist",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBktSemHIcdO_JhRQQSMzToXK_pek6VD-UsxBT3TdVOhKJ10KKwP6Grp1kVbdmahZV05103gnT_h10MuNyTrbzEiPgpGt1pqjater-Pd-AnPKfLpWtVWbNbUyczdKXKJabC43-mHravI203E6nxfQ_AF9ISKd5-7b6uofL4VA-cEZW1Mqa-6a0lSczoDwhBafX5VD5PRjBOkfEpmuyFtBO-5cUt_lTQvbGbqD_7LX_Z58C-DNssaRS75JHqjUKuDsMB3_xSTzM2lJrf"
    },
    {
        name: "Sarah Chen",
        role: "Head of AI",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuDPi5A1_9SH4ARzd46pnaPVPPmU74EbbO8NONj4-FWiKhKHInbZUyBl_aQbr5MZLFsS8RIDxEWi5wbvndh6v6PALnu3zm_JFiUvwTP_k-d6g-OKHTMmgQqbkMgi9zAWpZyYIWK9R3TCLxPtRNQBYUrtkV6wahI2pqXl7ScWavufvpGQbNaqJ3XjWGmgw9ePctjGmN_BmUsLW73b7jHAnOmDDiV_uyauniwkmObjzQIP0pUrfEf18qhMhPAtsKEp2ge1X-S5_kZH6o"
    },
    {
        name: "Marcus Vane",
        role: "Engineering Director",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuDPi5A1_9SH4ARzd46pnaPVPPmU74EbbO8NONj4-FWiKhKHInbZUyBl_aQbr5MZLFsS8RIDxEWi5wbvndh6v6PALnu3zm_JFiUvwTP_k-d6g-OKHTMmgQqbkMgi9zAWpZyYIWK9R3TCLxPtRNQBYUrtkV6wahI2pqXl7ScWavufvpGQbNaqJ3XjWGmgw9ePctjGmN_BmUsLW73b7jHAnOmDDiV_uyauniwkmObjzQIP0pUrfEf18qhMhPAtsKEp2ge1X-S5_kZH6o"
    },
    {
        name: "Elena Ross",
        role: "Lead Researcher",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBktSemHIcdO_JhRQQSMzToXK_pek6VD-UsxBT3TdVOhKJ10KKwP6Grp1kVbdmahZV05103gnT_h10MuNyTrbzEiPgpGt1pqjater-Pd-AnPKfLpWtVWbNbUyczdKXKJabC43-mHravI203E6nxfQ_AF9ISKd5-7b6uofL4VA-cEZW1Mqa-6a0lSczoDwhBafX5VD5PRjBOkfEpmuyFtBO-5cUt_lTQvbGbqD_7LX_Z58C-DNssaRS75JHqjUKuDsMB3_xSTzM2lJrf"
    }
];

export function CareerTeam() {
    return (
        <section className="max-w-6xl mx-auto px-6 mb-40">
            <div className="flex items-end justify-between mb-16">
                <div className="max-w-xl">
                    <h2 className="font-display text-6xl mb-4">The Herd</h2>
                    <p className="opacity-60">Meet the visionaries building the future of enterprise tech.</p>
                </div>
                <div className="hidden md:flex gap-2">
                    <button className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                    <div key={index} className="group cursor-pointer">
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-neutral-200">
                            <img
                                alt={member.name}
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                src={member.image}
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white text-sm font-bold tracking-widest uppercase">View Profile</span>
                            </div>
                        </div>
                        <h4 className="text-xl font-bold">{member.name}</h4>
                        <p className="text-sm opacity-50 uppercase tracking-wider">{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
