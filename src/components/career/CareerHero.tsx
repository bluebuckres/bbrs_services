import { cn } from "@/lib/utils";

export function CareerHero() {
    return (
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-32">
            <div className="grid grid-cols-12 gap-6 h-auto lg:h-[800px]">
                <div className="col-span-12 lg:col-span-5 flex flex-col justify-center mb-12 lg:mb-0">
                    <h1 className="font-display text-7xl md:text-8xl leading-[0.9] tracking-tighter mb-8">
                        Driven by <br />
                        <span className="serif-italic opacity-40">Curiosity.</span>
                    </h1>
                    <p className="text-xl opacity-70 max-w-md leading-relaxed">
                        BlueBuck is a team of elite researchers and engineers dedicated to solving the most complex
                        technical challenges for global enterprises.
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-7 grid grid-cols-2 grid-rows-2 gap-6 h-[500px] lg:h-full">
                    <div className="rounded-3xl overflow-hidden bg-neutral-200">
                        <img
                            alt="Office space"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkZuBhVhFu963Zk3CVlW9IEnn8SP0nu9XJZ29_KBJkdAiI7XwQyl6C8gF4NqKTFE-FmHpBpa2YcOHWG6RJFxtiqz3VFZT7zDdVZiFbleZaO1QOEvkBW0rbfyfzzSgCD6p4UeVeuEhhnQpeYDgdyTDVbtHnK7Q1wUNXWeewamL8Kg-LoDZwE8_ZJYNsrU6b4LGnZ4L-NWrSqXsatBfeC6tfYhJerCI3J1oGPqJWPQh-T_5kVKkACrds6OMc5z7kXsfwr-Q9nL2KKxjK"
                        />
                    </div>
                    <div className="rounded-3xl overflow-hidden bg-neutral-300 row-span-2">
                        <img
                            alt="Collaboration"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkZuBhVhFu963Zk3CVlW9IEnn8SP0nu9XJZ29_KBJkdAiI7XwQyl6C8gF4NqKTFE-FmHpBpa2YcOHWG6RJFxtiqz3VFZT7zDdVZiFbleZaO1QOEvkBW0rbfyfzzSgCD6p4UeVeuEhhnQpeYDgdyTDVbtHnK7Q1wUNXWeewamL8Kg-LoDZwE8_ZJYNsrU6b4LGnZ4L-NWrSqXsatBfeC6tfYhJerCI3J1oGPqJWPQh-T_5kVKkACrds6OMc5z7kXsfwr-Q9nL2KKxjK"
                        />
                    </div>
                    <div className="rounded-3xl overflow-hidden bg-neutral-100">
                        <img
                            alt="Team meeting"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBktSemHIcdO_JhRQQSMzToXK_pek6VD-UsxBT3TdVOhKJ10KKwP6Grp1kVbdmahZV05103gnT_h10MuNyTrbzEiPgpGt1pqjater-Pd-AnPKfLpWtVWbNbUyczdKXKJabC43-mHravI203E6nxfQ_AF9ISKd5-7b6uofL4VA-cEZW1Mqa-6a0lSczoDwhBafX5VD5PRjBOkfEpmuyFtBO-5cUt_lTQvbGbqD_7LX_Z58C-DNssaRS75JHqjUKuDsMB3_xSTzM2lJrf"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
