module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Didact Gothic', 'sans-serif'],
    },
    extend: {
      colors: {
       'wemotion-purple': '#602483'
      },
      backgroundImage: {
        'wemotion': 'url(https://directus.wemotion-wbtal.ch/assets/62224fee-460a-462c-b331-f656e69e59cc)',
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
