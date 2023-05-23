import { log } from "console";

/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const matchStyle = (type) => {
  // if (type.includes('hover') || type.includes('active') || type.includes('disable')) return null
  const needTransparentColors = [
    "primary-color",
    "success-color",
    "warning-color",
    "error-color",
    "alarm-color",
  ];
  const typeArr = type.split("");
  let arr = [];
  for (let index = 0; index < needTransparentColors.length; index++) {
    const element = needTransparentColors[index];
    if (type === "text-" + element) return (arr = ["color", "text"]);
    else if (type === "bg-" + element) return arr = ["background-color", "bg"];
    else if (type === "border-" + element) return arr = ["border-color", "border"];
    else {
      arr = null;
      return;
    }
  }
  // for (const color of needTransparentColors) {
  //   if (Object.hasOwnProperty.call(needTransparentColors, color)) {
  //     const element = needTransparentColors[color];
  //     if (type === 'text-' + element) return arr = ["color", "text"];
  //     else if (type === 'bg-' + element) arr = ["background-color", "bg"];
  //     else if (type === 'border-' + element) arr = ["border-color", "border"];
  //     else return arr = null
  //   }
  // }
  // const index = needTransparentColors.forEach(color => {
  //   if (type === 'text-' + color)
  // })
  // if (type.includes("text")) arr = ["color", "text"];
  // else if (type.includes("bg")) arr = ["background-color", "bg"];
  // else if (type.includes("border")) arr = ["border-color", "border"];
  return arr;
};
export default {
  presets: [require("./script/theme-plugin/tailwind-preset-default")],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [
    plugin(function ({
      addVariant,
      matchVariant,
      addUtilities,
      theme,
      e,
      config,
    }) {
      const colors = theme("colors");
      const utilities = {};
      for (const color in colors) {
        const classes = [
          `text-${color}`,
          `bg-${color}`,
          `border-${color}`,
          `hover:text-${color}`,
          `hover:bg-${color}`,
          `focus:text-${color}`,
          `focus:bg-${color}`,
        ];
        for (const className of classes) {
          const name = matchStyle(className);
          if (name != null) {
            utilities[`.${className}`] = {
              [`--tw-${name[1]}-opacity`]: "0.8",
              [name[0]]: `rgb(var(--${color}-tailwindcss) / var(--tw-${name[1]}-opacity))`,
            };
          }
        }
      }
      addUtilities(utilities);
    }),
  ],
};
