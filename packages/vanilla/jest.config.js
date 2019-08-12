const commonConfig = require('../../jest.common.config')

module.exports = {
  ...commonConfig,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}
