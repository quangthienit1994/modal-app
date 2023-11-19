// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,json}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [],
  important: true,
  corePlugins: {
    // preflight: false,
  }
};