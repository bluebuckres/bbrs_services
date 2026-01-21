import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
    return (
        <section className="relative py-32 px-6 overflow-hidden bg-background-light dark:bg-background-dark">
            <div className="absolute inset-0 conversion-bg-gradient pointer-events-none"></div>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="font-display text-6xl md:text-8xl leading-[0.9] tracking-tighter mb-10">
                            Ready to build <br />
                            <span className="serif-italic opacity-40 text-emerald-900">
                                3x faster?
                            </span>
                        </h2>
                        <div className="space-y-6">
                            {[
                                { title: "Direct access to senior devs", desc: "No middlemen. You work directly with the architects." },
                                { title: "Zero hidden costs", desc: "Transparent, outcome-based pricing models." },
                                { title: "Full IP ownership", desc: "Everything we build is yours. Total transparency." },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center shrink-0 border border-emerald/20">
                                        <Check className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                                        <p className="opacity-60">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-20 -z-10 opacity-20 pointer-events-none">
                            <svg
                                className="w-full h-full"
                                viewBox="0 0 800 800"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 100 L200 150 L150 250 L50 200 Z"
                                    fill="none"
                                    stroke="#059669"
                                    strokeWidth="0.5"
                                ></path>
                                <path
                                    d="M200 150 L350 100 L400 200 L300 250 Z"
                                    fill="none"
                                    stroke="#059669"
                                    strokeWidth="0.5"
                                ></path>
                                <circle cx="200" cy="150" fill="#a7f3d0" r="2"></circle>
                                <circle cx="300" cy="250" fill="#a7f3d0" r="2"></circle>
                            </svg>
                        </div>
                        <div className="glass-form rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden border border-emerald/20">
                            <div className="flex justify-between items-center mb-10">
                                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                                    Step 01 / 02
                                </span>
                                <div className="flex gap-1">
                                    <div className="w-8 h-1 bg-emerald-600 rounded-full"></div>
                                    <div className="w-8 h-1 bg-emerald/10 rounded-full"></div>
                                </div>
                            </div>
                            <form className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold opacity-60 ml-1">
                                            Full Name
                                        </label>
                                        <input
                                            className="w-full bg-white/40 border-emerald/10 rounded-2xl px-6 py-4 focus:ring-emerald-600 focus:outline-none focus:border-emerald-600 transition-all border"
                                            placeholder="John Doe"
                                            type="text"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold opacity-60 ml-1">
                                            Company Email
                                        </label>
                                        <input
                                            className="w-full bg-white/40 border-emerald/10 rounded-2xl px-6 py-4 focus:ring-emerald-600 focus:outline-none focus:border-emerald-600 transition-all border"
                                            placeholder="john@company.com"
                                            type="email"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-sm font-semibold opacity-60 ml-1">
                                        Project Type
                                    </label>
                                    <div className="grid grid-cols-3 gap-2 p-1.5 bg-emerald-50 rounded-[1.25rem]">
                                        <label className="cursor-pointer">
                                            <input
                                                defaultChecked
                                                className="peer hidden"
                                                name="project_type"
                                                type="radio"
                                            />
                                            <div className="py-2.5 text-center rounded-xl text-sm font-bold opacity-60 peer-checked:bg-white peer-checked:text-emerald-700 peer-checked:opacity-100 peer-checked:shadow-sm transition-all">
                                                AI
                                            </div>
                                        </label>
                                        <label className="cursor-pointer">
                                            <input
                                                className="peer hidden"
                                                name="project_type"
                                                type="radio"
                                            />
                                            <div className="py-2.5 text-center rounded-xl text-sm font-bold opacity-60 peer-checked:bg-white peer-checked:text-emerald-700 peer-checked:opacity-100 peer-checked:shadow-sm transition-all">
                                                DevOps
                                            </div>
                                        </label>
                                        <label className="cursor-pointer">
                                            <input
                                                className="peer hidden"
                                                name="project_type"
                                                type="radio"
                                            />
                                            <div className="py-2.5 text-center rounded-xl text-sm font-bold opacity-60 peer-checked:bg-white peer-checked:text-emerald-700 peer-checked:opacity-100 peer-checked:shadow-sm transition-all">
                                                Web
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <Button className="w-full py-6 text-lg">
                                        Start Your Journey
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
