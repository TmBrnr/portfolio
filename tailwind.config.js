/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'base-black': '#2700C5',
      'base-white': '#ffffff',
      'main-red': '#ffffff',
      'main-orange': '#FFD2B9',
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'mono': ['DM Mono', 'monospace'],      
    },
  },
  plugins: [],
}
