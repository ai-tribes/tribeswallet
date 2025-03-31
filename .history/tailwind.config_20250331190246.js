/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffffff',
          100: '#f3f3f3',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#b3b3b3',
          500: '#8a8a8a',
          600: '#636363',
          700: '#414141',
          800: '#232323',
          900: '#111111',
        },
        secondary: {
          50: '#efefef',
          100: '#dcdcdc',
          200: '#bdbdbd',
          300: '#9e9e9e',
          400: '#7b7b7b',
          500: '#616161',
          600: '#4a4a4a',
          700: '#363636',
          800: '#242424',
          900: '#121212',
        },
        tribes: {
          black: '#000000',
          white: '#ffffff',
          gray: {
            100: '#f5f5f5',
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#a3a3a3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          },
          accent: '#FFFFFF',
        },
        tribify: {
          blue: '#00E5FF',
          orange: '#FF6B00',
          pink: '#FF00A8',
          black: '#000000',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'tribes-dark': '#0f0f0f',
        'tribes-darker': '#050505',
      }),
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'tribify-gradient': 'linear-gradient(90deg, #00E5FF 0%, #FF6B00 50%, #FF00A8 100%)',
      },
    },
  },
  plugins: [],
} 