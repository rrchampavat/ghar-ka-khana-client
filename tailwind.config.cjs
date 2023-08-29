/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5d87ff",
        secondary: "#4ABDFB",
        accent: "#edf0ff",
        text: "#2B3248",
        background: "#F2F4FC"
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
