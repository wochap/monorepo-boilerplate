---
to: packages/<%= h.changeCase.paramCase(packageName) %>/babelJestTransformer.js
---
// HACK: make jest to use package babel config
// requires "babel-jest": "23.6.0",
const babelJest = require('babel-jest')
const babelConfig = require('./.babelrc')

module.exports = babelJest.createTransformer(babelConfig)
