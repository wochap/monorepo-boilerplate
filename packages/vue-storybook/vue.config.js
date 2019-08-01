module.exports = {
  lintOnSave: false,
  transpileDependencies: ['element-ui'],
  css: {
    extract: false,
    sourceMap: process.env.NODE_ENV === 'production',
    loaderOptions: {
      sass: {
        // @/ is an alias to src/
        data: `
          @import "~@/styles/_settings.global.scss";
          @import "~@/styles/_tools.global.scss";
        `,
      },
    },
  },
}
