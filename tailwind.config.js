/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'infinite-scroll-to-l': 'infinite-scroll-to-l 50s linear infinite',
        'infinite-scroll-to-r': 'infinite-scroll-to-r 50s linear infinite',
      },
      keyframes: {
        'infinite-scroll-to-l': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-to-r': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0%)' },
        }
      }                    
    },
  },
  plugins: [],
};
