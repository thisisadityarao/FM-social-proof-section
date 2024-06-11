/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      sans: ["League Spartan", "sans-serif"],
    },
    color: {
      transparent: "transparent",
      current: "currentColor",
      white: "hsl(0, 0%, 100%)",
      darkMagenta: "hsl(300, 43%, 22%)",
      softPink: "hsl(333, 80%, 67%)",
      darkGrayishMagenta: "hsl(303, 10%, 53%)",
      lightGrayishMagenta: "hsl(300, 24%, 96%)",
    },
    extend: {},
  },
  plugins: [],
};
