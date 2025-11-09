/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: { "can-hover": { raw: "(hover: hover)" } },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in forwards",
      },
      variants: {
        animation: ["motion-safe"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      fontFamily: {
        helvetica: ["Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#34d399", // emerald-400 - lighter emerald
          light: "#6ee7b7", // emerald-300 - very light emerald
          dark: "#10b981", // emerald-500 - medium emerald
        },
      },

      rotate: {
        17: "17deg",
      },
    },
    plugins: [],
  },
};
