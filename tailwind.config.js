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
          DEFAULT: "#565656", // custom grey
          light: "#737373", // lighter grey
          dark: "#404040", // darker grey
        },
        "artist-highlight": {
          DEFAULT: "#ffff00", // yellow
          light: "#ffff66", // lighter yellow
          dark: "#cccc00", // darker yellow
        },
      },

      rotate: {
        17: "17deg",
      },
    },
    plugins: [],
  },
};
