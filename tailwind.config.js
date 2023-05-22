/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    require('./script/theme-plugin/tailwind-preset-default')
  ],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [],
  
}

