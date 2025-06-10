module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all',
    'plugin:prettier/recommended', // Integrate Prettier with ESLint
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-native', '@typescript-eslint', 'unused-imports', 'simple-import-sort'],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],

    // TypeScript Rules
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',

    // React
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',

    // React Native
    'react-native/no-inline-styles': 'warn',
    'react-native/split-platform-components': 'off',
    'react-native/no-color-literals': 'off',

    // Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Import Sorting
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
