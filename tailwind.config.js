const { rotate } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'horizontal-bounce': {
          '0%, 100%': {
            transform: 'translateX(15%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        'ping-pong-spin': {
          '100%': {
            transform: 'rotate(180deg)'
          }
        }
      },
      animation: {
        'spin-fast': 'spin 100ms ease-in infinite;',
        'pulse-slow': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'horizontal-bounce': 'horizontal-bounce 1s infinite',
        'ping-pong': 'ping-pong-spin 800ms linear infinite alternate'
      },
      boxShadow: {
        'green-lg': '0 10px 15px 0px rgba(167, 243, 208, 1), 0 4px 6px -2px rgba(167, 243, 208, 0.1)',
        'deep-inner': 'inset 0 2px 4px 0 #dc2626'
      },
      backgroundImage: theme => ({
        'mesh': 'url(https://uploads-ssl.webflow.com/5ec207a448d573153616868a/60e32bdaafd9e3ec8fae4f8e_Mesh%2034.jpg)',
        'smokey-purple-mesh': 'url(https://uploads-ssl.webflow.com/5ec207a448d573153616868a/60e32bd71c699439d918ecd9_Mesh%2024.jpg)',
        'smokey-blue-mesh': 'url(./images/gradient.jpg)',
        'light-smoke': 'url(https://uploads-ssl.webflow.com/5ec207a448d573153616868a/60e32bf1a2e65b932df641ac_Mesh%2098.jpg)'
      }),
      backgroundSize: {
        '100%': '100%'
      },
      fontFamily: {
        'inter': ['Inter']
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'group-hover'],
      margin: ['hover', 'group-hover']
    },
  },
  plugins: [require("@tailwindcss/forms")({
    strategy: 'class',
  }),],
}
