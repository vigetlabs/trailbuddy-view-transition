/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '512px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '<sm': { max: '549.98px' },
      '<md': { max: '767.98px' },
      '<lg': { max: '1023.98px' },
      '<xl': { max: '1439.98px' },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      'pearl-bush': '#E2DDD1',
      'quill-gray': '#DBE0DA',
      champagne: '#F3E6C4',
      'brandy-rose': '#C29087',
      'pale-turquoise': '#B4F0F0',
      matisse: '#366A9C',
      orient: '#2C6488',
      mirage: '#0B1D30',
      shark: '#1D252D',
      'red-orange': {
        DEFAULT: '#FF4237',
        hover: '#FF6057',
        active: '#E50D00',
      },
    },
    fontFamily: {
      sans: [
        "'antipol-variable', 'sans-serif'",
        {
          fontVariationSettings: "'STCH' 1, 'wght' 500, 'wdth' 100",
        },
      ],
      mono: ["'IBM Plex Mono', 'monospace'"],
    },
    extend: {
      maxWidth: {
        '8xl': '1360px',
      },
      backgroundImage: {
        topography: "url('/images/topography-bg.png')",
      },
    },
  },
  plugins: [require('./config/tailwind/fontVariationSettingsPlugin.js')],
}
