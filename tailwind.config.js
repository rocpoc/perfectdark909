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
    },
    plugins: [],
    rotate: {
      17: "17deg",
    },
  },
};
