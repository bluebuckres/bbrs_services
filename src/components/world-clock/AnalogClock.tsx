"use client";

import { useEffect, useState } from "react";

interface AnalogClockProps {
  tz: string;
  isReference?: boolean;
  isDay?: boolean;
}

export function AnalogClock({ tz, isReference, isDay }: AnalogClockProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: tz,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
      });

      const parts = formatter.formatToParts(now);
      const hours = parseInt(parts.find((p) => p.type === "hour")?.value || "0");
      const minutes = parseInt(parts.find((p) => p.type === "minute")?.value || "0");
      const seconds = parseInt(parts.find((p) => p.type === "second")?.value || "0");

      const localizedDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, seconds);
      setTime(localizedDate);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [tz]);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = hours * 30 + minutes * 0.5;

  const cx = 55;
  const cy = 55;
  const r = 50;

  const accentColor = isReference ? "#818cf8" : "#f59e0b";
  
  // Theme colors based on day/night
  const faceGradientId = `face-${tz.replace(/\//g, "-")}`;
  const faceColors = isDay
    ? { stop1: "#ffffff", stop2: "#f8fafc" } // White/Light
    : isReference
    ? { stop1: "#1e293b", stop2: "#0f172a" } // Indigo tint
    : { stop1: "#18181b", stop2: "#09090b" }; // Dark

  const tickColorMajor = isDay ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.8)";
  const tickColorMinor = isDay ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)";
  const numColor = isDay ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.5)";
  const handColor = isDay ? "#171717" : "rgba(255,255,255,0.95)";
  const rimColor = isReference ? "rgba(99, 102, 241, 0.4)" : isDay ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)";

  // Tick marks
  const ticks = Array.from({ length: 60 }).map((_, i) => {
    const isMajor = i % 5 === 0;
    const rad = ((i * 6 - 90) * Math.PI) / 180;
    const innerRadius = isMajor ? r - 8 : r - 4;
    const outerRadius = r - 1;

    const x1 = cx + Math.cos(rad) * innerRadius;
    const y1 = cy + Math.sin(rad) * innerRadius;
    const x2 = cx + Math.cos(rad) * outerRadius;
    const y2 = cy + Math.sin(rad) * outerRadius;

    return (
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={isMajor ? tickColorMajor : tickColorMinor}
        strokeWidth={isMajor ? 1.5 : 1}
        strokeLinecap="round"
      />
    );
  });

  // Mathematically calculate hand end points to avoid SVG transform bugs
  const hand = (deg: number, len: number) => {
    const rad = ((deg - 90) * Math.PI) / 180;
    return { x: cx + Math.cos(rad) * len, y: cy + Math.sin(rad) * len };
  };

  const hp = hand(hourAngle, 24);
  const mp = hand(minuteAngle, 34);
  const sp = hand(secondAngle, 38);

  return (
    <div className="relative w-28 h-28 shrink-0">
      <svg viewBox="0 0 110 110" className="w-full h-full drop-shadow-lg transition-colors duration-1000">
        <defs>
          <radialGradient id={faceGradientId} cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor={faceColors.stop1} />
            <stop offset="100%" stopColor={faceColors.stop2} />
          </radialGradient>
        </defs>

        {/* Outer Ring */}
        <circle cx={cx} cy={cy} r={r + 2} fill="none" stroke={rimColor} strokeWidth="1" />

        {/* Clock Face */}
        <circle cx={cx} cy={cy} r={r} fill={`url(#${faceGradientId})`} />

        {/* Ticks */}
        {ticks}

        {/* Minimal Numbers */}
        {[
          { label: "12", angle: 0 },
          { label: "3", angle: 90 },
          { label: "6", angle: 180 },
          { label: "9", angle: 270 },
        ].map((num) => {
          const rad = ((num.angle - 90) * Math.PI) / 180;
          const dist = r - 15;
          const x = cx + Math.cos(rad) * dist;
          const y = cy + Math.sin(rad) * dist;
          return (
            <text
              key={num.label}
              x={x}
              y={y + 3.5}
              textAnchor="middle"
              className="text-[8px] font-medium font-sans"
              style={{ fill: numColor }}
            >
              {num.label}
            </text>
          );
        })}

        {/* Hour Hand */}
        <line x1={cx} y1={cy} x2={hp.x} y2={hp.y} stroke={handColor} strokeWidth="3" strokeLinecap="round" />

        {/* Minute Hand */}
        <line x1={cx} y1={cy} x2={mp.x} y2={mp.y} stroke={handColor} strokeWidth="2" strokeLinecap="round" />

        {/* Second Hand */}
        <line x1={cx} y1={cy} x2={sp.x} y2={sp.y} stroke={accentColor} strokeWidth="1" strokeLinecap="round" />

        {/* Center Dots */}
        <circle cx={cx} cy={cy} r="3" fill={accentColor} />
        <circle cx={cx} cy={cy} r="1.5" fill={isDay ? "#fff" : "#000"} />
      </svg>
    </div>
  );
}
