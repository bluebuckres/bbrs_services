import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServicesImpact() {
    return (
        <section className="py-32 bg-[#1a1a1a] text-white overflow-hidden" id="portfolio">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="font-display text-7xl mb-24">Recent Projects.</h2>
                <div className="space-y-32">
                    {/* Case Study 1 */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="rounded-3xl overflow-hidden aspect-[16/10] bg-neutral-800">
                            <img
                                alt="FinTech Project"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkZuBhVhFu963Zk3CVlW9IEnn8SP0nu9XJZ29_KBJkdAiI7XwQyl6C8gF4NqKTFE-FmHpBpa2YcOHWG6RJFxtiqz3VFZT7zDdVZiFbleZaO1QOEvkBW0rbfyfzzSgCD6p4UeVeuEhhnQpeYDgdyTDVbtHnK7Q1wUNXWeewamL8Kg-LoDZwE8_ZJYNsrU6b4LGnZ4L-NWrSqXsatBfeC6tfYhJerCI3J1oGPqJWPQh-T_5kVKkACrds6OMc5z7kXsfwr-Q9nL2KKxjK"
                            />
                        </div>
                        <div>
                            <span className="text-neon-purple font-mono tracking-widest uppercase text-sm mb-4 block">
                                FinTech Platform • ROI: +240%
                            </span>
                            <h3 className="text-5xl font-display mb-6 italic leading-tight text-white/90">
                                Built Autonomous Risk Assessment for Global Banking
                            </h3>
                            <p className="text-lg text-white/50 mb-6 leading-relaxed">
                                Developed a real-time credit scoring engine that reduced approval latency from 48 hours to 15 seconds using ensemble ML models and microservices architecture.
                            </p>
                            <p className="text-sm text-white/40 font-mono mb-8">
                                <span className="text-neon-purple">Tech Stack:</span> Python, TensorFlow, Kubernetes, PostgreSQL
                            </p>
                            <Button variant="link" className="text-white hover:text-neon-purple p-0 h-auto font-bold group">
                                Read Case Study
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>

                    {/* Case Study 2 */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="md:order-2 rounded-3xl overflow-hidden aspect-[16/10] bg-neutral-800">
                            <img
                                alt="E-commerce Project"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkZuBhVhFu963Zk3CVlW9IEnn8SP0nu9XJZ29_KBJkdAiI7XwQyl6C8gF4NqKTFE-FmHpBpa2YcOHWG6RJFxtiqz3VFZT7zDdVZiFbleZaO1QOEvkBW0rbfyfzzSgCD6p4UeVeuEhhnQpeYDgdyTDVbtHnK7Q1wUNXWeewamL8Kg-LoDZwE8_ZJYNsrU6b4LGnZ4L-NWrSqXsatBfeC6tfYhJerCI3J1oGPqJWPQh-T_5kVKkACrds6OMc5z7kXsfwr-Q9nL2KKxjK"
                            />
                        </div>
                        <div className="md:order-1">
                            <span className="text-neon-purple font-mono tracking-widest uppercase text-sm mb-4 block">
                                Logistics SaaS • ROI: +180%
                            </span>
                            <h3 className="text-5xl font-display mb-6 italic leading-tight text-white/90">
                                Developed Supply Chain Intelligence Platform
                            </h3>
                            <p className="text-lg text-white/50 mb-6 leading-relaxed">
                                Built an IoT-integrated dashboard connecting 50k+ sensors with predictive analytics, eliminating $2M in annual inventory waste.
                            </p>
                            <p className="text-sm text-white/40 font-mono mb-8">
                                <span className="text-neon-purple">Tech Stack:</span> React, Node.js, AWS IoT, ClickHouse
                            </p>
                            <Button variant="link" className="text-white hover:text-neon-purple p-0 h-auto font-bold group">
                                Read Case Study
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>

                    {/* Case Study 3 */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="rounded-3xl overflow-hidden aspect-[16/10] bg-neutral-800">
                            <img
                                alt="Healthcare Project"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBktSemHIcdO_JhRQQSMzToXK_pek6VD-UsxBT3TdVOhKJ10KKwP6Grp1kVbdmahZV05103gnT_h10MuNyTrbzEiPgpGt1pqjater-Pd-AnPKfLpWtVWbNbUyczdKXKJabC43-mHravI203E6nxfQ_AF9ISKd5-7b6uofL4VA-cEZW1Mqa-6a0lSczoDwhBafX5VD5PRjBOkfEpmuyFtBO-5cUt_lTQvbGbqD_7LX_Z58C-DNssaRS75JHqjUKuDsMB3_xSTzM2lJrf"
                            />
                        </div>
                        <div>
                            <span className="text-neon-purple font-mono tracking-widest uppercase text-sm mb-4 block">
                                HealthTech MVP • ROI: +310%
                            </span>
                            <h3 className="text-5xl font-display mb-6 italic leading-tight text-white/90">
                                Shipped Precision Diagnostic Tool in 10 Weeks
                            </h3>
                            <p className="text-lg text-white/50 mb-6 leading-relaxed">
                                Partnered with medical clinics to develop an AI diagnostic platform achieving 99.4% accuracy across 12 pathologies—from prototype to FDA submission.
                            </p>
                            <p className="text-sm text-white/40 font-mono mb-8">
                                <span className="text-neon-purple">Tech Stack:</span> PyTorch, FastAPI, React Native, Azure ML
                            </p>
                            <Button variant="link" className="text-white hover:text-neon-purple p-0 h-auto font-bold group">
                                Read Case Study
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
