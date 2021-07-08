module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-fast': 'spin 100ms linear infinite;',
        'pulse-slow': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;'
      },
      boxShadow: {
        'green-lg': '0 10px 15px 0px rgba(167, 243, 208, 1), 0 4px 6px -2px rgba(167, 243, 208, 0.1)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")({
    strategy: 'class',
  }),],
}
