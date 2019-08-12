---
to: packages/<%= h.changeCase.paramCase(packageName) %>/.babelrc.js
---
// TODO: this file shouldn't be necessary
// this file is required by jest and vue cli
// to run scripts inside package folder
const commonConfig = require('../../babel.config')

module.exports = commonConfig
