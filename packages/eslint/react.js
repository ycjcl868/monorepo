require('@rushstack/eslint-patch/modern-module-resolution')

const path = require('path')
const rulesDirPlugin = require('eslint-plugin-rulesdir')
rulesDirPlugin.RULES_DIR = path.join(__dirname, 'rules')

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true
    },
    project: './tsconfig.json'
  },
  plugins: ['rulesdir'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    'shared-node-browser': true,
    jest: true,
    mocha: true,
    es2017: true,
    es2020: true,
    worker: true
  },
  rules: {
    // custom
    'rulesdir/text-specification': 'error',
    'rulesdir/jsx-no-numeric-and': 'error',
    'rulesdir/lodash-import': 'error'
  }
}
