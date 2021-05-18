module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: ['**/src/**/*.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  displayName: 'UNIT TEST',
  maxWorkers: 4,
  // coverageThreshold: {
  //   global: {
  //     statements: 50,
  //     branches: 50,
  //     functions: 50,
  //     lines: 50,
  //   },
  // },
};
