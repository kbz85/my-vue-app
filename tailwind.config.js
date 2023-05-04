import colors from './src/styles/color'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: 'rgb(var(--primary-color-tailwindcss) / <alpha-value>)',
      success: 'rgb(var(--success-color-tailwindcss) / <alpha-value>)',
      alarm: 'rgb(var(--alarm-color-tailwindcss) / <alpha-value>)',
      warning: 'rgb(var(--warning-color-tailwindcss) / <alpha-value>)',
      error: 'rgb(var(--error-color-tailwindcss) / <alpha-value>)',
      info: 'rgb(var(--info-color-tailwindcss) / <alpha-value>)',
      white: 'rgb(var(--white-color-tailwindcss) / <alpha-value>)',
    },
    extend: {
      textColor: {
        title: 'var(--title-color)',
        default: 'var(--text-color)',
        secondary: 'var(--text-color-secondary)',
        disabled: 'var(--disabled-color)',
        // white: 'var(--text-white-color)'
      }
    },
  },
  plugins: [],
}

