const { resolve } = require('path')

module.exports = async ({ config }) => {
  config.resolve.alias['@'] = resolve(__dirname, '../src')
  config.module.rules.some(rule => {
    if (!rule.use || !rule.use.find) {
      return
    }
    const sassLoaderRule = rule.use.find(item => item.loader === 'sass-loader')
    if (!sassLoaderRule) {
      return
    }
    sassLoaderRule.options = {
      data: `
        @import "~@/styles/_settings.global.scss";
        @import "~@/styles/_tools.global.scss";
      `,
    }
    return true
  })
  config.module.rules.some(rule => {
    if (!rule.exclude) {
      return
    }
    rule.exclude = [/node_modules\/(?!(element-ui|ANOTHER-ONE)).*/]
    return true
  })
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          prettierConfig: require('../../../.prettierrc.js'),
          parser: 'flow',
        },
      },
    ],
    enforce: 'pre',
  })
  return config
}
