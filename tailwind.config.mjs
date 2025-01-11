/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        prime: "#FFCC00",
        second: "#FF9900",
        third: "#FF4D4D",
        "gradient-start": "#FF4D4D", // Red
        "gradient-middle": "#FF9900", // Orange
        "gradient-end": "#FFCC00", // Yellow
      },
      backgroundImage: {
        "main-gradient":
          "linear-gradient(to bottom right, var(--tw-gradient-stops))",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradient: "gradient 3s ease infinite",
      },
    },
  },
  plugins: [],
};
