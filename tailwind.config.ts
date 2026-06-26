import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0a0a0a",
                emerald: {
                    DEFAULT: "#064e3b",
                    100: "#d1fae5", // Approximate for bg-emerald-100
                    50: "#ecfdf5",  // Approximate for bg-emerald-50
                    500: "#10b981", // Standard emerald-500
                    600: "#059669", // Standard emerald-600
                    700: "#047857",
                    800: "#065f46",
                    900: "#064e3b",
                    950: "#022c22",
                },
                mint: "#a7f3d0",
                "background-light": "#fcfaf2",
                "background-dark": "#0a0a0a",
                accent: "#059669",
                "purple-accent": "#d8c7ff",
                "neon-purple": "#b088ff",
                "card-dark": "#141414",
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                display: ["var(--font-instrument-serif)", "serif"],
                sans: ["var(--font-inter)", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.75rem",
                xl: "1.5rem",
                "2xl": "2.5rem",
                "3xl": "3rem",
            },
            backgroundImage: {
                "hero-gradient": "radial-gradient(circle at 50% 50%, rgba(5, 150, 105, 0.1) 0%, transparent 70%)",
                "conversion-bg-gradient": "radial-gradient(circle at 80% 50%, rgba(5, 150, 105, 0.15) 0%, transparent 60%)",
                "constellation-bg": "radial-gradient(circle at 2px 2px, rgba(167, 243, 208, 0.15) 1px, transparent 0)",
            },
            animation: {
                scroll: "scroll 30s linear infinite",
            },
            keyframes: {
                scroll: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-100%)" },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
};
export default config;
