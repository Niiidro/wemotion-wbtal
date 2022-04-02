module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
       'wemotion-purple': '#602483'
      },
      backgroundImage: {
        'wemotion': 'url(https://directus.wemotion-wbtal.ch/assets/e2f59efd-ab65-46ea-858b-0b9a64b55855)',
      },
      animation: {
        'bounce-r': 'bounce-r 1s infinite',
      },
      keyframes: {
        'bounce-r': {
          '0%, 100%': { 'transform': 'translateX(-25%)', 'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'},
          '50%': { 'transform': 'translateX(0)',  'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'},
        },
      },
    },
  },
  plugins: [],
};
