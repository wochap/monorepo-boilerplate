module.exports = {
  lintOnSave: false,
  css: {
    extract: false,
    sourceMap: process.env.NODE_ENV === 'production',
    loaderOptions: {
      sass: {
        // make functions and mixins accessible in every sass file
        prependData: `
          @import "~@/styles/_settings.global.scss";
          @import "~@/styles/_tools.global.scss";
        `,
      },
    },
  },
}
