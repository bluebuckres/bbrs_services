import React from "react";

interface ProjectDiagramProps {
  type: "trade-made" | "mr-med" | "gleo" | "cartin" | "none";
}

export function ProjectDiagram({ type }: ProjectDiagramProps) {
  if (type === "none") return null;

  const renderDiagram = () => {
    switch (type) {
      case "trade-made":
        return (
          <svg viewBox="0 0 800 400" className="w-full h-auto text-white opacity-80" fill="none" stroke="currentColor" strokeWidth="2">
            {/* Broker APIs */}
            <rect x="50" y="50" width="120" height="60" rx="8" stroke="currentColor" fill="rgba(216,199,255,0.05)" />
            <text x="110" y="85" textAnchor="middle" fontSize="14" fill="currentColor">Zerodha API</text>
            
            <rect x="50" y="140" width="120" height="60" rx="8" stroke="currentColor" fill="rgba(216,199,255,0.05)" />
            <text x="110" y="175" textAnchor="middle" fontSize="14" fill="currentColor">Upstox API</text>
            
            <rect x="50" y="230" width="120" height="60" rx="8" stroke="currentColor" fill="rgba(216,199,255,0.05)" />
            <text x="110" y="265" textAnchor="middle" fontSize="14" fill="currentColor">Angel One</text>
            
            {/* Engine Layer */}
            <rect x="280" y="50" width="200" height="240" rx="16" stroke="#d8c7ff" fill="rgba(216,199,255,0.1)" strokeWidth="3" />
            <text x="380" y="165" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#d8c7ff">Live Algo Engine</text>
            <text x="380" y="195" textAnchor="middle" fontSize="12" fill="#d8c7ff" opacity="0.7">Python / Node.js</text>
            
            {/* Clients */}
            <rect x="590" y="80" width="160" height="80" rx="8" stroke="currentColor" fill="rgba(255,255,255,0.05)" />
            <text x="670" y="125" textAnchor="middle" fontSize="16" fill="currentColor">Web Dashboard</text>
            
            <rect x="590" y="200" width="160" height="80" rx="8" stroke="currentColor" fill="rgba(255,255,255,0.05)" />
            <text x="670" y="245" textAnchor="middle" fontSize="16" fill="currentColor">Desktop App</text>
            
            {/* Connections */}
            <path d="M 170 80 L 280 120" strokeDasharray="4 4" />
            <path d="M 170 170 L 280 170" strokeDasharray="4 4" />
            <path d="M 170 260 L 280 220" strokeDasharray="4 4" />
            
            <path d="M 480 120 L 590 120" stroke="#d8c7ff" strokeWidth="3" />
            <path d="M 480 220 L 590 220" stroke="#d8c7ff" strokeWidth="3" />
            
            {/* Pulse dots */}
            <circle cx="225" cy="170" r="4" fill="#d8c7ff" className="animate-pulse" />
            <circle cx="535" cy="120" r="4" fill="#d8c7ff" className="animate-pulse" />
            <circle cx="535" cy="220" r="4" fill="#d8c7ff" className="animate-pulse" />
          </svg>
        );
      case "mr-med":
        return (
          <svg viewBox="0 0 800 400" className="w-full h-auto text-emerald-400 opacity-80" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="100" y="150" width="140" height="100" rx="12" fill="rgba(52,211,153,0.1)" />
            <text x="170" y="200" textAnchor="middle" fontSize="16" fill="currentColor">Prescription Flow</text>
            <text x="170" y="220" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.6">Mobile & Web</text>
            
            <path d="M 240 200 L 350 200" strokeDasharray="6 6" />
            <circle cx="295" cy="200" r="4" fill="currentColor" className="animate-pulse" />
            
            <circle cx="450" cy="200" r="100" fill="rgba(52,211,153,0.05)" stroke="currentColor" />
            <text x="450" y="180" textAnchor="middle" fontSize="18" fontWeight="bold" fill="currentColor">Core Platform</text>
            <text x="450" y="210" textAnchor="middle" fontSize="14" fill="currentColor" opacity="0.8">Order Engine</text>
            <text x="450" y="235" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.5">Cold Chain DB</text>
            
            <path d="M 550 200 L 630 150" strokeDasharray="4 4" />
            <path d="M 550 200 L 630 250" strokeDasharray="4 4" />
            
            <rect x="630" y="120" width="120" height="50" rx="8" fill="rgba(255,255,255,0.05)" />
            <text x="690" y="150" textAnchor="middle" fontSize="14" fill="currentColor">Logistics</text>
            
            <rect x="630" y="230" width="120" height="50" rx="8" fill="rgba(255,255,255,0.05)" />
            <text x="690" y="260" textAnchor="middle" fontSize="14" fill="currentColor">Patient Care</text>
          </svg>
        );
      case "gleo":
        return (
          <svg viewBox="0 0 800 400" className="w-full h-auto text-blue-400 opacity-80" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="80" y="150" width="160" height="100" rx="16" fill="rgba(96,165,250,0.1)" />
            <text x="160" y="195" textAnchor="middle" fontSize="16" fill="currentColor">Gleo Playbooks</text>
            <text x="160" y="220" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.6">User Interface</text>

            <path d="M 240 200 L 320 200" strokeWidth="3" />
            <path d="M 310 190 L 320 200 L 310 210" />
            
            <rect x="320" y="80" width="160" height="240" rx="8" fill="rgba(96,165,250,0.05)" strokeDasharray="8 8" />
            <text x="400" y="130" textAnchor="middle" fontSize="16" fontWeight="bold" fill="currentColor">AI Middleware</text>
            <rect x="340" y="150" width="120" height="40" rx="4" fill="rgba(255,255,255,0.1)" />
            <text x="400" y="175" textAnchor="middle" fontSize="12" fill="currentColor">Prompt router</text>
            <rect x="340" y="210" width="120" height="40" rx="4" fill="rgba(255,255,255,0.1)" />
            <text x="400" y="235" textAnchor="middle" fontSize="12" fill="currentColor">Context assembly</text>

            <path d="M 480 200 L 560 200" strokeWidth="3" />
            <path d="M 550 190 L 560 200 L 550 210" />
            
            <circle cx="640" cy="200" r="80" fill="rgba(255,255,255,0.05)" />
            <text x="640" y="205" textAnchor="middle" fontSize="24" fontWeight="bold" fill="currentColor">LLMs</text>
          </svg>
        );
      case "cartin":
        return (
          <svg viewBox="0 0 800 400" className="w-full h-auto text-rose-400 opacity-80" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="80" y="100" width="120" height="200" rx="16" fill="rgba(251,113,133,0.1)" />
            <text x="140" y="195" textAnchor="middle" fontSize="16" fill="currentColor">D2C Store</text>
            <text x="140" y="220" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.6">Shopify</text>

            <path d="M 200 150 L 320 150" strokeDasharray="4 4" />
            <path d="M 200 250 L 320 250" strokeDasharray="4 4" />
            
            <rect x="320" y="100" width="160" height="200" rx="16" stroke="currentColor" fill="rgba(251,113,133,0.05)" />
            <text x="400" y="160" textAnchor="middle" fontSize="18" fontWeight="bold" fill="currentColor">CartIn Core</text>
            <text x="400" y="190" textAnchor="middle" fontSize="12" fill="currentColor">Session Tracking</text>
            <text x="400" y="220" textAnchor="middle" fontSize="12" fill="currentColor">Chat Engine</text>
            <text x="400" y="250" textAnchor="middle" fontSize="12" fill="currentColor">Product Index</text>

            <path d="M 480 200 L 600 200" strokeWidth="3" />
            <rect x="600" y="160" width="120" height="80" rx="8" fill="rgba(255,255,255,0.05)" />
            <text x="660" y="195" textAnchor="middle" fontSize="14" fill="currentColor">OpenAI / LLM</text>
            <text x="660" y="215" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.6">Intelligence</text>
            
            <path d="M 400 300 L 400 340" strokeDasharray="4 4" />
            <rect x="340" y="340" width="120" height="40" rx="8" fill="rgba(255,255,255,0.05)" />
            <text x="400" y="365" textAnchor="middle" fontSize="12" fill="currentColor">Analytics (PostHog)</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden p-8 flex items-center justify-center my-16">
      {renderDiagram()}
    </div>
  );
}
