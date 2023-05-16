/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "1/2": "50%",
        "3/4": "75%",
      },
      fontFamily: {
        display: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [],
};
