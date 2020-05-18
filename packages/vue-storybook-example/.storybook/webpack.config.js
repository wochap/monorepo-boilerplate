const { resolve } = require('path')

module.exports = async ({ config }) => {
  // add aliases
  config.resolve.alias['@'] = resolve(__dirname, '../src')

  // add postcss-loader to sass files
  config.module.rules.some(rule => {
    if (!rule.use || !rule.use.find) {
      return
    }
    const cssLoaderRuleIndex = rule.use.findIndex(item => [item, item.loader].includes('css-loader'))
    if (cssLoaderRuleIndex === -1) {
      return
    }
    rule.use = [
      ...rule.use.slice(0, cssLoaderRuleIndex + 1),
      'postcss-loader',
      ...rule.use.slice(cssLoaderRuleIndex + 1),
    ]
    return true
  })

  return config
}
