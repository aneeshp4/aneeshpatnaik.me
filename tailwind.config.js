/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FAF7F0',
        'bg-secondary': '#FFFBF0',
        'accent-peach': '#FFD6BA',
        'accent-coral': '#FFBF9B',
        'accent-yellow': '#FFF4C9',
        'text-brown': '#5C4033',
        'border-light': '#E8DCC4',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

