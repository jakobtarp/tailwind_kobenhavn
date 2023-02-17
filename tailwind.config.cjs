/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      blue: {
        300: "#93c5fd",
      },
      violet: {
        100: "#ede9fe",
      },
      purple: {
        100: "#f3e8ff",
      },
      white: {
        white: "#ffffff",
      },
      black: {
        black: "#000",
      },
      a: {
        dark: "#181818",
      },
      b: {
        lessdark: "#282828",
      },
      c: {
        light: "#404040",
      },
    },
    extend: {
      fontFamily: {
        typo: "Poppins, sans-serif",
      },
      plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
    },
  },
};
