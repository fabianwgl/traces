/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  automock: true,
  // verbose: true,
  modulePathIgnorePatterns: ['dist/']
};