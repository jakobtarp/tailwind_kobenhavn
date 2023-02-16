/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayish: {
          100: "#CCCCCC",
        },
        purpleish: {
          100: "#2243a8",
        },
      },
      plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
    },
  },
};
