export function AboutWhy() {
    const engineeringStack = [
        {
            name: "Frontend & Mobile",
            techs: ["React", "Next.js", "Vue", "Angular", "Svelte", "iOS Native", "Android Native", "React Native"]
        },
        {
            name: "Backend & Frameworks",
            techs: ["Node.js", "Python", "Java", "C++", "PHP", "Laravel", "Django", "Spring Boot"]
        },
        {
            name: "Database & BaaS",
            techs: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Firebase", "Supabase"]
        },
        {
            name: "Cloud & DevOps",
            techs: ["AWS", "DigitalOcean", "IBM Cloud", "Kubernetes", "Docker", "Terraform", "Apache", "Git", "Bitbucket"]
        },
        {
            name: "AI & Machine Learning",
            techs: ["OpenAI", "DeepSeek", "Mistral", "Claude", "PyTorch", "TensorFlow", "LangChain", "Hugging Face", "Pinecone", "RAG Pipeline"]
        },
        {
            name: "Commerce & CMS",
            techs: ["Shopify", "Magento", "Strapi", "WordPress"]
        }
    ];

    const designAndTools = [
        {
            name: "UI/UX Design",
            techs: ["Figma", "Framer", "Adobe Creative Cloud", "Webflow"]
        },
        {
            name: "Product & Collaboration",
            techs: ["Jira", "Slack", "Miro", "Notion", "Trello"]
        }
    ];

    return (
        <section className="py-32 px-6 bg-[#fdfbf7] dark:bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-600 dark:text-mint mb-5 block">
                        The Stack
                    </span>
                    <h2 className="font-display text-5xl md:text-7xl mb-6 text-[#2d2d2d] dark:text-white">
                        Our default tools. <br />
                        <span className="italic opacity-40">No religious wars.</span>
                    </h2>
                    <p className="text-xl opacity-60 max-w-3xl mx-auto leading-relaxed text-[#1a1a1a] dark:text-white">
                        We use the right tool for the job. But if you don't have a preference, this is what we reach for to build fast and scale safely.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left/Main Column: Engineering */}
                    <div className="lg:col-span-8">
                        <h3 className="font-display text-3xl mb-8 text-[#1a1a1a] dark:text-white border-b border-black/10 dark:border-white/10 pb-4">
                            Core Engineering
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            {engineeringStack.map((category, index) => (
                                <div key={index} className="space-y-4">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-600/80 dark:text-mint/80">
                                        {category.name}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {category.techs.map((tech, i) => (
                                            <span 
                                                key={i} 
                                                className="px-3 py-1.5 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-md text-xs font-semibold tracking-wide shadow-sm text-[#1a1a1a] dark:text-white/80 hover:border-emerald-500/50 hover:text-emerald-600 transition-colors cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Design & Tools */}
                    <div className="lg:col-span-4">
                        <div className="bg-emerald-900/5 dark:bg-emerald-900/10 rounded-3xl p-8 border border-emerald-900/10 h-full">
                            <h3 className="font-display text-3xl mb-8 text-[#1a1a1a] dark:text-white border-b border-black/10 dark:border-white/10 pb-4">
                                Design & Tools
                            </h3>
                            <div className="space-y-10">
                                {designAndTools.map((category, index) => (
                                    <div key={index} className="space-y-4">
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-600/80 dark:text-mint/80">
                                            {category.name}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {category.techs.map((tech, i) => (
                                                <span 
                                                    key={i} 
                                                    className="px-3 py-1.5 bg-white/80 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-md text-xs font-semibold tracking-wide text-[#1a1a1a] dark:text-white/80 hover:border-emerald-500/50 hover:text-emerald-600 transition-colors cursor-default"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
