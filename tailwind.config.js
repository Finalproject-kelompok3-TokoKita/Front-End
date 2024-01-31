/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#00AA13",
        secondary: "#FF5600",
        primarybg: "#F1F1F1",
      },
    },
  },
  plugins: [],
};
