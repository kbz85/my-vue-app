/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  presets: [require("./script/theme-plugin/tailwind-preset-default")],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], 
  plugins: [
    plugin(async function ({
        addUtilities,
        theme
    }) {
        console.log(theme('colors'));
        
    }),
],
};
