/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      sans: ["League Spartan", "sans-serif"],
    },
    fontSize: {
      sm: "0.781rem",
      base: "0.938rem",
      xl: "1.125rem",
      "2xl": "1.35rem",
      "3xl": "1.87rem",
      "4xl": "1.944rem",
      "5xl": "2.333rem",
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
