/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem",
        },
      },
      fontFamily: {
        SoraMedium: "Sora Medium",
        SoraBold: "Sora Bold",
        SoraExtraBold: "Sora ExtraBold",
        SoraExtraLight: "Sora ExtraLight",
        SoraLight: "Sora Light",
        SoraRegular: "Sora Regular",
        SoraSemiBold: "Sora SemiBold",
        SoraThin: "Sora Thin",
        DanaMedium: "Dana Medium",
        DanaRegular: "Dana Regular",
        DanaDemiBold: "Dana DemiBold",
        MorabbaMedium: "Morabba Medium",
        MorabbaBold: "Morabba Bold",
        MorabbaLight: "Morabba Light",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
