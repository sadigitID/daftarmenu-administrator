/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
    './src/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/**/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        device: "url('/assets/images/device.png')"
      },
      aspectRatio: {
        '9/16': '9 / 16'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif']
      },
      colors: {
        dark: '#151617',
        layout: '#F3F7F9',
        'vtd-primary': {
          50: '#f1f8ed',
          100: '#d3e8c8',
          200: '#bdddae',
          300: '#9fcd88',
          400: '#3e632b',
          500: '#70b44e',
          600: '#66a447',
          700: '#508037',
          800: '#3e632b',
          900: '#2f4c21'
        },
        primary: {
          50: '#f1f8ed',
          100: '#d3e8c8',
          200: '#bdddae',
          300: '#9fcd88',
          400: '#8dc371',
          500: '#70b44e',
          600: '#66a447',
          700: '#508037',
          800: '#3e632b',
          900: '#2f4c21'
        },
        gray: {
          50: '#f6f6f6',
          100: '#e4e4e4',
          200: '#d7d7d7',
          300: '#c5c5c5',
          400: '#b9b9b9',
          500: '#a8a8a8',
          600: '#999999',
          700: '#777777',
          800: '#5c5c5c',
          900: '#474747'
        }
      },
      boxShadow: {
        sdw: '1px 1px 8px 0px rgba(180, 180, 180, 0.39)'
      }
    }
  },
  plugins: []
}
