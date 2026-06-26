"use client";

import React from "react";
import { WorldMap } from "./WorldMap";
import { ClockCard } from "./ClockCard";
import { CITIES } from "./cities-data";

export function WorldClockSection() {
  const referenceCity = CITIES.find((c) => c.isReference) || CITIES[0];

  return (
    <section className="w-full bg-slate-950 py-16 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-indigo-500/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-5xl mb-4 text-white">Global Reach</h2>
          <p className="opacity-60 text-white">Always Online. Worldwide.</p>
        </div>

        {/* Widget Container */}
        <div className="relative rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-2xl overflow-hidden shadow-2xl">
          
          {/* Map Area */}
          <div className="w-full h-[350px] sm:h-[450px]">
            <WorldMap cities={CITIES} referenceCity={referenceCity} />
          </div>

          {/* Glow separator between map and cards */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent shadow-[0_0_10px_rgba(99,102,241,0.5)]" />

          {/* Clock Cards Carousel Area */}
          <div className="relative mt-2 pb-6">
            <div className="flex gap-4 sm:gap-6 md:justify-center overflow-x-auto snap-x snap-mandatory px-4 sm:px-8 pb-4 pt-4 no-scrollbar touch-pan-x">
              {CITIES.map((city) => (
                <ClockCard
                  key={city.id}
                  city={city}
                  referenceCity={referenceCity}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
