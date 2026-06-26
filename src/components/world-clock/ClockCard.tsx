"use client";

import { useEffect, useState } from "react";
import { AnalogClock } from "./AnalogClock";
import { CityData } from "./cities-data";
import * as SunCalc from "suncalc";

interface ClockCardProps {
  city: CityData;
  referenceCity: CityData;
}

export function ClockCard({ city, referenceCity }: ClockCardProps) {
  const [timeStr, setTimeStr] = useState("");
  const [offsetStr, setOffsetStr] = useState("");
  const [sunTimes, setSunTimes] = useState({ sunrise: "", sunset: "" });

  const [isDay, setIsDay] = useState(false);

  useEffect(() => {
    // 1. Setup Time String
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: city.tz,
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setTimeStr(formatter.format(now));

      // Calculate Day/Night
      const times = SunCalc.getTimes(now, city.lat, city.lng);
      // It's day if current time is strictly between sunrise and sunset
      setIsDay(times.sunrise && times.sunset ? now > times.sunrise && now < times.sunset : false);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    // 2. Setup Offset
    // Get difference in minutes between city and reference
    const now = new Date();
    
    // Quick helper to get localized date
    const getZoneDate = (tz: string) => {
      const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: tz,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).formatToParts(now);
      
      const p: Record<string, string> = {};
      parts.forEach(({ type, value }) => (p[type] = value));
      const h = p.hour === "24" ? "00" : p.hour;
      return new Date(`${p.year}-${p.month}-${p.day}T${h}:${p.minute}:${p.second}`);
    };

    const refDate = getZoneDate(referenceCity.tz);
    const cityDate = getZoneDate(city.tz);
    const diffMin = Math.round((cityDate.getTime() - refDate.getTime()) / 60000);

    if (diffMin === 0) {
      setOffsetStr("Reference");
    } else {
      const sign = diffMin > 0 ? "+" : "-";
      const abs = Math.abs(diffMin);
      const h = Math.floor(abs / 60);
      const m = abs % 60;
      
      // Determine "Today", "Tomorrow", "Yesterday" relative to reference
      let dayStr = "Today";
      if (cityDate.getDate() !== refDate.getDate()) {
        dayStr = cityDate > refDate ? "Tomorrow" : "Yesterday";
      }

      setOffsetStr(`${dayStr}, ${sign}${h}${m ? `:${m.toString().padStart(2, "0")}` : ""} HRS`);
    }

    // 3. Setup Sun Times
    const times = SunCalc.getTimes(now, city.lat, city.lng);
    const timeFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: city.tz,
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    
    setSunTimes({
      sunrise: times.sunrise ? timeFormatter.format(times.sunrise) : "--:--",
      sunset: times.sunset ? timeFormatter.format(times.sunset) : "--:--",
    });

    return () => clearInterval(interval);
  }, [city, referenceCity]);

  return (
    <div
      className={`
        flex-shrink-0 snap-center flex flex-col items-center gap-3 p-5 rounded-2xl min-w-[180px]
        border transition-colors duration-300 backdrop-blur-md
        ${
          city.isReference
            ? "bg-indigo-500/5 border-indigo-500/20 hover:border-indigo-500/40"
            : "bg-white/5 border-white/10 hover:border-white/20"
        }
      `}
    >
      <AnalogClock tz={city.tz} isReference={city.isReference} isDay={isDay} />

      <div className="text-center">
        <div className="text-white/90 text-sm font-semibold tracking-wide">{city.name}</div>
        <div className="text-blue-300 font-mono text-xs mt-0.5">{timeStr}</div>
      </div>

      <div className="w-full h-px bg-white/10" />

      <div className="text-center w-full">
        <div
          className={`text-xs font-medium ${city.isReference ? "text-indigo-400" : "text-slate-400"}`}
        >
          {offsetStr}
        </div>
        <div className="flex flex-col gap-1 mt-2 text-[10px] text-slate-400">
          <div className="flex items-center justify-between px-2">
            <span>🌅 Sunrise</span>
            <span className="text-slate-300">{sunTimes.sunrise}</span>
          </div>
          <div className="flex items-center justify-between px-2">
            <span>🌇 Sunset</span>
            <span className="text-slate-300">{sunTimes.sunset}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
