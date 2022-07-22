/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F2EBE3",
        "dark-cyan": "#3C8067",
        "grayish-blue": "#6C7289",
      },
      width: {
        110: "28.15rem",
        128: "32rem",
        132: "38rem",
      },
      height: {
        110: "28.15rem",
        128: "32rem",
        132: "40rem",
      },
    },
  },
  plugins: [],
};
