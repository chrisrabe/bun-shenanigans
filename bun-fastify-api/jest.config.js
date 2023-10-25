/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: ['src/server.ts'],
  moduleNameMapper: {
    '^@/services/(.*)$': '<rootDir>/src/services/$1'
  }
};