module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:node/recommended',
    'plugin:promise/recommended',
    'standard',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': 'off',
    'no-const-assign': 'error',
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'comma-dangle': ['error', 'always-multiline'],
    'import/no-unresolved': 'error',
    'node/no-missing-import': 'error',
    'promise/always-return': 'warn',
    'promise/no-return-wrap': 'warn',
    'prefer-const': 'off', // Desativa a regra prefer-const
    'no-var': 'off', // Desativa a regra no-var que substitui var por let
  },
};
