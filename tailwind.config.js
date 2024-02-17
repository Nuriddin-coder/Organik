/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          lg: "1340px",
        },
        center: true,
        padding: "20px",
      },
      colors: {
        primary: "#274C5B",
        secondary: "#7EB693",
        funkyYellow: "#EFD372",
        discoBall: "#D4D4D4",
        doctor: "#F9F8F8",
        heavySugar: "#EFF6F1",
        cityRain: "#525C60",
        drWhite: "#FAFAFA",
        fontClr: "#68A47F",
        fortressGrey: "#B8B8B8",
        silverLake: "#DEDDDD",
        weatheredStone: "#C4C4C4",
        organicBgClr: "#F1F8F4",
        discoBall: "#D5D5D5",
        mediaBgClr: "#EFF6F1",
        coronation: "#ECECEC",
        inputPlcholderClr: "#ABABAB",
      },
      screens: {
        tablet: "670px",
        desktop: "1100px",
      },
      fontFamily: {
        yellowtail: "Yellowtail",
      },
      gridTemplateColumns: {
        ourProductCols: "repeat(auto-fit, minmax(280px, 1fr))",
      },
    },
  },
  plugins: [require("daisyui")],
};
