const cssnano = [
  'cssnano',
  {
    preset: 'advanced',
    discardComments: { removeAll: true }
  }
]

module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    cssnano,
  },
};
