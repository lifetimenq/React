module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-custom-media')({
      importFrom: {
        '--phone': '(max-width: 541px)'
      }
    })
  ]
}