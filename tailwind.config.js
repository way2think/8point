/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "custom-xl": [
          "80px",
          { lineHeight: "110%", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "320px", // Extra small devices (small phones)
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px", // Large desktops & TVs
      "4xl": "2560px", // Ultra-wide screens
    },
  },
  plugins: [],
}
