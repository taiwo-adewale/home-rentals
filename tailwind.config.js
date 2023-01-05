/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xs: { max: "339px" },
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#F4511E",
        secondary: "#18191F",
        gray: "#818181",
        dark: "#0A142F",
        altGray: "rgba(10,20,47,0.5)",
      },
      backgroundColor: {
        mainBg: "#F9F9FE",
      },
    },
    fontFamily: {
      primary: ["Josefin Sans", "sans-serif"],
      secondary: ["Source Serif Pro", "serif"],
    },
  },
  plugins: [],
};
