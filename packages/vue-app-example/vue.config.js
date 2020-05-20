module.exports = {
  lintOnSave: false,
  css: {
    extract: false,
    sourceMap: process.env.NODE_ENV === 'production',
  },
  chainWebpack(config) {
    config.devtool('source-map')
  },
}
