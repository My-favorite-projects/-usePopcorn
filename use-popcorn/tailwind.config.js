/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#BE123C",
        secondary: "#9CA3AF",
        dark: "#111827",
        light: "#ffffff",
      },
    },
  },
  plugins: [],
};
