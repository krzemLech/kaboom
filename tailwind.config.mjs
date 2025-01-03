/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        prime: "#FFCC00",
        second: "#FF9900",
        third: "#FF4D4D",
      },
      backgroundImage: {
        "main-gradient":
          "linear-gradient(to bottom right, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
