module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/__tests__/**/*.(test|spec).ts?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}', // Include all TS/TSX files in src/
    '!src/**/*.d.ts', // Exclude type declarations
    '!src/**/__tests__/**', // Exclude test files
    '!src/**/index.ts', // Exclude barrel/index files
    '!src/**/types/**', // Exclude types folders
    '!src/**/constants/**', // Exclude constants if desired
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};
