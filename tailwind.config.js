import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Nunito", "sans-serif"],
      },
      colors: {
        lavender: {
          50: "#faf8ff",
          100: "#f3efff",
          200: "#e9e0ff",
          300: "#d4c5fe",
          400: "#b89dfc",
          500: "#9b71f8",
          600: "#854def",
          DEFAULT: "#b89dfc",
        },
        gold: {
          50: "#fffcf0",
          100: "#fff6d4",
          200: "#ffecaa",
          300: "#ffdd73",
          400: "#ffc933",
          500: "#daa520",
          DEFAULT: "#daa520",
          dark: "#b8860b",
        },
        cream: "#fffdf7",
        blush: "#fff5f5",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(184,157,252,0.4)" },
          "50%": { boxShadow: "0 0 16px 8px rgba(184,157,252,0.25)" },
        },
        "confetti-fall": {
          "0%": { transform: "translateY(-40px) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(100vh) rotate(360deg)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "confetti-fall": "confetti-fall linear forwards",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
