/**
  NOTE: @minko-fe/postcss-pxtorem automatically changes `px`
  values to `rem` values, with the root font size. If
  deleting consider also updating the tailwind.config.js
  file to use `rem` instead of `px`.
*/
module.exports = {
  plugins: {
    '@minko-fe/postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
      mediaQuery: true,
      minPixelValue: 0,
    },
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
}
