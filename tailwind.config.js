/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#5e233e",
          200: "#80384a",
          300: "#b85558",
          400: "#f08365",
          500: "#efbc62",
        },
      },
    },
  },
  plugins: [],
};
