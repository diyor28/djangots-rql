/*
 * Copyright © 2020 Ingram Micro Inc. All rights reserved.
 */

module.exports = {
  moduleFileExtensions: [
    'js',
  ],

  clearMocks: true,

  transform: {
    '^.+\\.js$': 'babel-jest',
  },

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  collectCoverage: true,

  collectCoverageFrom: [
    'src/**/*.js',
    '!**/node_modules/**',
  ],

  coverageDirectory: '<rootDir>/tests/coverage/',

  coveragePathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/test/',
  ],
};
