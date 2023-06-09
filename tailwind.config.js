/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blocks-black': '#202020',
        'blocks-zinc': '#322E2E',
        'blocks-hover': '#7972ad',
        'blocks-banner': '#242424',
        'blocks-gray': '#CCCCCC',
        'blocks-section': '#FBFBFB',
        'blocks-purple': '#A11CF3',
        'blocks-pink': '#D835C5',
        'blocks-footer': '#E9E9E9',
      },
    },
    fontFamily: {
      body: ['"Open Sans"'],
    },
  },
  plugins: [],
};
