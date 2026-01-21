import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "BlueBuck didn't just build a tool; they redefined our entire R&D pipeline. The ROI was visible within the first quarter.",
        author: "Jonathan Vane",
        role: "CTO, NexaCorp",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBktSemHIcdO_JhRQQSMzToXK_pek6VD-UsxBT3TdVOhKJ10KKwP6Grp1kVbdmahZV05103gnT_h10MuNyTrbzEiPgpGt1pqjater-Pd-AnPKfLpWtVWbNbUyczdKXKJabC43-mHravI203E6nxfQ_AF9ISKd5-7b6uofL4VA-cEZW1Mqa-6a0lSczoDwhBafX5VD5PRjBOkfEpmuyFtBO-5cUt_lTQvbGbqD_7LX_Z58C-DNssaRS75JHqjUKuDsMB3_xSTzM2lJrf",
        aspect: "aspect-[3/4] w-[450px]"
    },
    {
        quote: "The speed of execution is unlike anything we've seen in traditional consulting.",
        author: "Sarah Jenkins",
        role: "VP Engineering, FlowState",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuDPi5A1_9SH4ARzd46pnaPVPPmU74EbbO8NONj4-FWiKhKHInbZUyBl_aQbr5MZLFsS8RIDxEWi5wbvndh6v6PALnu3zm_JFiUvwTP_k-d6g-OKHTMmgQqbkMgi9zAWpZyYIWK9R3TCLxPtRNQBYUrtkV6wahI2pqXl7ScWavufvpGQbNaqJ3XjWGmgw9ePctjGmN_BmUsLW73b7jHAnOmDDiV_uyauniwkmObjzQIP0pUrfEf18qhMhPAtsKEp2ge1X-S5_kZH6o",
        aspect: "aspect-[4/3] w-[500px]"
    },
    {
        quote: "Technical brilliance paired with a deep understanding of business goals. They are our go-to partners.",
        author: "Marcus Thorne",
        role: "Founder, Astra AI",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuDPi5A1_9SH4ARzd46pnaPVPPmU74EbbO8NONj4-FWiKhKHInbZUyBl_aQbr5MZLFsS8RIDxEWi5wbvndh6v6PALnu3zm_JFiUvwTP_k-d6g-OKHTMmgQqbkMgi9zAWpZyYIWK9R3TCLxPtRNQBYUrtkV6wahI2pqXl7ScWavufvpGQbNaqJ3XjWGmgw9ePctjGmN_BmUsLW73b7jHAnOmDDiV_uyauniwkmObjzQIP0pUrfEf18qhMhPAtsKEp2ge1X-S5_kZH6o",
        aspect: "aspect-[3/4] w-[450px]"
    }
];

export function ServicesTestimonials() {
    return (
        <section className="py-32 overflow-hidden bg-[#fcfaf2] dark:bg-[#0a0a0a]" id="testimonials">
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <h2 className="font-display text-7xl text-[#1a1a1a] dark:text-white">Testimonials.</h2>
            </div>
            <div className="flex overflow-x-auto gap-8 px-6 pb-12 no-scrollbar">
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className={`flex-none ${item.aspect} rounded-[2.5rem] relative overflow-hidden group cursor-pointer ${index === 1 ? 'mt-12' : ''}`}
                    >
                        <img
                            alt={`Client ${index + 1}`}
                            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:blur-md"
                            src={item.image}
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-[#1a1a1a]/80 transition-all duration-500 flex flex-col justify-end p-12">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                                <Quote className="text-neon-purple w-12 h-12 mb-6" />
                                <p className="text-2xl text-white font-display italic mb-8">
                                    &quot;{item.quote}&quot;
                                </p>
                                <p className="text-white font-bold">{item.author}</p>
                                <p className="text-white/50 text-sm uppercase tracking-widest">{item.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
