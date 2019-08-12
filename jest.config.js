const commonConfig = require('./jest.common.config')

module.exports = {
  ...commonConfig,
  transform: {
    ...commonConfig.transform,
    '^.+\\.jsx?$': 'babel-jest',
  },
  projects: ['<rootDir>/packages/*'],
}
