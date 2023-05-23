import { log } from "console";

/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const matchStyle = (type) => {
  // const typeArr = type.split(':')
  const needTransparentColors = [
    "primary-color",
    "success-color",
    "warning-color",
    "error-color",
    "alarm-color",
  ];
  const typeArr = type.split(":");
  if (typeArr.length >= 2) type = typeArr[1]
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
