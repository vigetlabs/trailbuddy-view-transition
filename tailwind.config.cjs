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
      'quill-gray': '#DCE0D9',
      champagne: '#F3E6C4',
      'brandy-rose': '#C29087',
      'pale-turquoise': '#b4f2f0',
      matisse: '#366A9C',
      orient: '#266293',
      mirage: '#0B1D30',
      shark: {
        DEFAULT: '#1D252D',
        hover: '#2A3039',
        active: '#0B1D30',
      },
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
      backgroundSize: {
        500: '500px 500px',
      },
    },
  },
  plugins: [
    require('./config/tailwind/fontVariationSettingsPlugin.js'),
    require('@tailwindcss/typography'),
  ],
}
