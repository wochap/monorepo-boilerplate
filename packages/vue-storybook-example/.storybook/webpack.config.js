const { resolve } = require('path')

module.exports = async ({ config }) => {
  // add aliases
  config.resolve.alias['@'] = resolve(__dirname, '../src')

  return config
}
