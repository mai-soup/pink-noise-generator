module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'prettier', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/newline-after-import': ['error', { count: 1 }],
    'no-unused-vars': ['warn'],
    'prefer-template': ['warn'],
    'class-methods-use-this': [
      'warn',
      { exceptMethods: ['profile'], enforceForClassFields: true },
    ],
    'func-names': ['warn', 'as-needed'],
    'prefer-const': ['warn'],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id'],
        enforceInMethodNames: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: true,
        arrowParens: 'avoid',
        printWidth: 80,
        semi: false,
        trailingComma: 'es5',
        tabWidth: 2,
        useTabs: false,
      },
    ],
  },
}
