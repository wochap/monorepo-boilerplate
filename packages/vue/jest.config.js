const commonConfig = require('../../jest.config')

module.exports = Object.assign({}, commonConfig, {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
})
