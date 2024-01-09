const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Graduate", "serif"],
        custom2: ["Inria Serif", "serif"],
      },
    },
  },
  plugins: [],
};
