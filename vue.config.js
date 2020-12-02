/* eslint-disable */
const px2rem = require('postcss-px2rem')

const postcss = px2rem({
  remUnit: 16
})

module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcss]
      }
    }
  }
}
