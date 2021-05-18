module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'eslint-config-prettier', 'plugin:import/errors', 'plugin:import/warnings'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn',
    'require-await': 'error',
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
  },
};
