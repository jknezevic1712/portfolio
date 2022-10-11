/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
      "3xl": "2560px",
    },
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
    },
  },
  plugins: [],
};
