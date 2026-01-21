export function AboutStory() {
    return (
        <section className="py-32 px-6 bg-[#fdfbf7]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-[70%]">
                        <span className="text-[#9d88cc] font-bold tracking-[0.2em] uppercase text-xs mb-6 block">
                            Our Origins
                        </span>
                        <h2 className="font-display text-5xl md:text-6xl mb-10 leading-tight text-[#2d2d2d]">
                            A tech pioneer born in <span className="italic font-light">Kolkata</span>, <br />
                            scaling across the globe.
                        </h2>
                        <div className="space-y-6 text-lg text-[#2d2d2d]/70 leading-relaxed max-w-3xl">
                            <p>
                                Founded in 2018, BlueBuck Research Services began as a boutique collective of senior engineers and data
                                scientists frustrated by the sluggish pace of traditional R&D. We set out to prove that deep technical
                                research could be executed at the speed of a high-growth startup.
                            </p>
                            <p>
                                Today, we are a premier technology partner for Fortune 500s and ambitious scale-ups alike, specializing
                                in the intersection of generative AI, cloud infrastructure, and proprietary research frameworks.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-[30%] lg:pt-20">
                        <div className="p-8 rounded-[2rem_4rem_2rem_6rem] bg-white/70 backdrop-blur-md border border-purple-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                            <p className="font-display text-2xl italic text-[#9d88cc] mb-4">
                                &quot;We don&apos;t just solve problems; we redefine the boundaries of what&apos;s technically possible.&quot;
                            </p>
                            <p className="text-sm font-bold uppercase tracking-widest text-[#2d2d2d]/30">— Founder&apos;s Vision</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
