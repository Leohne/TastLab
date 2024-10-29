import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Louis':['"Louis cafe"'],
        'Sugar':['"Sugar"'],
        'Itim':['"Itim"'],
        'sans':['"Louis cafe"']
      },
      animation: {
        drop : 'drop 0.6s ease-in-out',
      },
      keyframes: {
        drop: {
          '0%': { transform: 'translateY(-150%)', opacity: '0'},
          '50%': {opacity:'0.1'},
          '80%': {opacity:'0.6'},
          '100%': { transform: 'translateY(0)', opacity:'1' },
        }
        }
      },
    },
  };
  plugins: []

