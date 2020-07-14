module.exports = {
  rootDir: '../../src',
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
  ],
  coveragePathIgnorePatterns: ['index.js', 'store.js'],
  coverageDirectory: '../coverage',
  coverageThreshold: {
    './src/': {
      branches: -100,
      functions: -100,
      lines: -100,
      statements: -100,
    },
  },
  displayName: {
    name: 'FILM',
    color: 'blue',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/../config/jest/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
};
