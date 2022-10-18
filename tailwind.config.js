/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        arial: ["arial", "sans serif"],
      },
      padding: {
        "5/2": "0.6rem",
      },
      width: {
        base: "17rem",
        xbase: "36rem",
      },
      height: {
        "48/2": "5.75rem",
      },
      colors: {
        "button-gray": "#f8f9fa",
        "primary-gray": "#3c4043",
        "primary-blue": "#1a0dab",
        "footer-bg": "#f2f2f2",
        "seconday-gray": "#70757a",
        "mobile-primary-blue": "#4285f4",
        "semi-gray": "#dadce0",
      },
      fontSize: {
        sm: "15px",
        xsm: "12px",
      },
      screens: {
        sm: { max: "649px" },
      },
    },
  },
  plugins: [],
};
