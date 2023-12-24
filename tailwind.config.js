/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      thick: ["Switzer Variable"],
    },

    extend: {
      height: {
        128: "412px",
        999: "800px",
      },
      width: {
        128: "461px",
        999: "800px",
      },
      colors: {
        newgray: "#0f0f0f",
      },
    },
  },
  plugins: [],
};
