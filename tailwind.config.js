// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary - A vibrant indigo that's professional but modern
        primary: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1", // Base primary color
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        // Secondary - A warm coral that complements the primary
        secondary: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e", // Base secondary color
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
        },
        // Neutral colors for text, backgrounds, and borders
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        // Semantic colors
        success: {
          light: "#10b981", // Emerald-500
          dark: "#34d399", // Emerald-400
        },
        warning: {
          light: "#f59e0b", // Amber-500
          dark: "#fbbf24", // Amber-400
        },
        error: {
          light: "#ef4444", // Red-500
          dark: "#f87171", // Red-400
        },
        info: {
          light: "#3b82f6", // Blue-500
          dark: "#60a5fa", // Blue-400
        },
      },
    },
  },
  plugins: [],
  presets: [require("nativewind/preset")],
};
