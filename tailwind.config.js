/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        arial: "arial",
      },
      colors: {
        "button-gray": "#f8f9fa",
        "primary-gray": "#3c4043",
        "primary-blue": "#1a0dab",
        "footer-bg": "#f2f2f2",
        "seconday-gray": "#70757a",
        "mobile-primary-blue": "#4285f4",
      },
      fontSize: {
        sm: "15px",
      },
      screens: {
        sm: { max: "649px" },
      },
    },
  },
  plugins: [],
};
