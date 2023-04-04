/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    screens: {
      '2xl': {'max': '1440px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '921px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '671px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '522px'},
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      sans: ['Noto Sans TC', 'sans-serif'],
      ubuntu: ['Ubuntu','sans-serif'],
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
      taiwan: '.18em',
    },
    fontWeight:{
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      'extra-bold': '800',
      black: '900',
    },
    extend: {
      
    },
  },
  plugins: [],
};