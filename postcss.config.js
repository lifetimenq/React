module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-custom-media')({
      importFrom: {
        customMedia: {
          '--phone': '(max-width: 769px)'
        }
      }
    })
  ]
}