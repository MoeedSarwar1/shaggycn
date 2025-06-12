module.exports = {
  preset: 'react-native',
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // ✅ Coverage settings
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}', // Only components folder
    '!src/components/**/*.d.ts',
    '!src/components/**/__tests__/**',
  ],
  coverageReporters: ['text', 'lcov'],

  // ✅ Enforce 100% coverage
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
