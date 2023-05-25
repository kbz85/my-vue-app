/** @type {import('tailwindcss').Config} */
export default {
  presets: [require("../src/tailwind-preset-default")],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], 
};
