import { Globe, Clock, MapPin } from "lucide-react";

const locations = [
    { city: "London", country: "United Kingdom", timezone: "GMT", status: "Operational", lat: "51.5074", long: "-0.1278" },
    { city: "San Francisco", country: "USA", timezone: "PST", status: "Operational", lat: "37.7749", long: "-122.4194" },
    { city: "Dubai", country: "UAE", timezone: "GST", status: "Sleeping", lat: "25.2048", long: "55.2708" },
    { city: "Sydney", country: "Australia", timezone: "AEDT", status: "Sleeping", lat: "-33.8688", long: "151.2093" },
];

export function ContactMap() {
    return (
        <section className="py-24 px-6 border-t border-black/5 dark:border-white/5 bg-neutral-50/50 dark:bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="font-display text-4xl md:text-5xl mb-4">Global Hubs</h2>
                        <p className="opacity-60 max-w-md">
                            Distributed engineering teams across four major timezones ensuring 24/7 development cycles.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-mono opacity-50">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        SYSTEM_STATUS: NOMINAL
                    </div>
                </div>

                {/* The Grid Visualization */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {locations.map((loc, i) => (
                        <div
                            key={loc.city}
                            className="group relative bg-white dark:bg-[#111] p-6 rounded-2xl border border-black/5 dark:border-white/5 hover:border-emerald-500/30 transition-all overflow-hidden"
                        >
                            {/* Decorative technical grid background */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                            />

                            <div className="relative z-10 flex flex-col h-full justify-between h-48">
                                <div className="flex justify-between items-start">
                                    <div className="p-2 bg-neutral-100 dark:bg-white/5 rounded-lg">
                                        <MapPin className="w-5 h-5 opacity-70" />
                                    </div>
                                    <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full border ${loc.status === 'Operational'
                                        ? 'bg-emerald-100/50 border-emerald-200 text-emerald-700 dark:bg-emerald-900/20 dark:border-emerald-900 dark:text-emerald-400'
                                        : 'bg-neutral-100 border-neutral-200 text-neutral-500 dark:bg-white/5 dark:border-white/10'
                                        }`}>
                                        {loc.status}
                                    </span>
                                </div>

                                <div>
                                    <div className="text-xs font-mono opacity-40 mb-1">{loc.lat} / {loc.long}</div>
                                    <h3 className="text-2xl font-display mb-1">{loc.city}</h3>
                                    <div className="flex items-center gap-2 text-sm opacity-60">
                                        <Globe className="w-3 h-3" />
                                        {loc.country}
                                    </div>
                                </div>

                                {/* Hover Reveal Details */}
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-white via-white to-transparent dark:from-[#111] dark:via-[#111] translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                                        <Clock className="w-4 h-4" />
                                        <span>View Office Details</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}