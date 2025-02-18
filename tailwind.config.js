/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grechen: ["'Grechen Fuemen'", "cursive"], // Define the font
        cormorant: ["'Cormorant Garamond'", "serif"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    backdropBlur: true,
  },
};

