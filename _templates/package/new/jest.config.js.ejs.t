---
to: packages/<%= h.changeCase.paramCase(packageName) %>/jest.config.js
---
const commonConfig = require('../../jest.common.config')

module.exports = {
  ...commonConfig,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}
