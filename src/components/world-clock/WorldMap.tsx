"use client";

import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { CityData } from "./cities-data";

interface WorldMapProps {
  cities: CityData[];
  referenceCity: CityData;
}

// Ensure the map fills the container beautifully without being cut off
export function WorldMap({ cities, referenceCity }: WorldMapProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] overflow-hidden">
      {/* 
        We use an Equirectangular or simple Mercator projection. 
        react-simple-maps defaults to a projection that centers the world.
      */}
      <ComposableMap
        projectionConfig={{
          scale: 140,
          center: [0, 20], // Shift center slightly to focus on northern hemisphere/cities
        }}
        width={800}
        height={400}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="rgba(115, 115, 115, 0.25)" // neutral-500 with opacity
                stroke="rgba(82, 82, 91, 0.4)" // zinc-600 with opacity
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: "rgba(163, 163, 163, 0.4)" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {cities.map((city) => {
          const isRef = city.id === referenceCity.id;
          const color = isRef ? "#818cf8" : "#f59e0b"; // Indigo vs Amber

          return (
            <Marker key={city.id} coordinates={[city.lng, city.lat]}>
              <g className="marker-group">
                {/* Pulsing ring animation */}
                <circle r={12} fill={color} opacity="0.2" className="animate-ping" style={{ transformOrigin: "center" }} />
                
                {/* Solid Core */}
                <circle r={3} fill={color} />
                <circle r={1} fill="#fff" />
                
                {/* City Label */}
                <text
                  textAnchor="middle"
                  y={-12}
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fill: isRef ? "#a5b4fc" : "#fcd34d",
                    fontSize: "10px",
                    fontWeight: 600,
                    filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.8))"
                  }}
                >
                  {city.name}
                </text>
              </g>
            </Marker>
          );
        })}
      </ComposableMap>

      {/* 
        Soft Gradient Overlay to simulate Day/Night subtly.
        For a completely accurate day/night terminator, we would need to generate
        SVG paths via d3-geo math. A modern web alternative that looks stunning
        is a radial gradient overlay mimicking global illumination.
      */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/40 to-slate-950"></div>
    </div>
  );
}
