/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        skyBlue: "#1E40AF",
        deepNavy: "#013B81"
      },
      fontFamily: {
        heading: ['"Crimson Pro", "Microsoft YaHei", "Noto Sans SC", serif'],
        body: ['"Work Sans", "Noto Sans SC", system-ui, -apple-system', "sans-serif"],
        cinzel: ['"Cinzel", serif'],
        cormorant: ['"Cormorant Garamond", serif']
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.12)"
      },
      backdropBlur: {
        xs: "2px"
      }
    }
  },
  plugins: []
};

