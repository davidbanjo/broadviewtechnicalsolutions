// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:react/jsx-runtime',
//     'plugin:react-hooks/recommended',
//   ],
//   ignorePatterns: ['dist', '.eslintrc.cjs'],
//   parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
//   settings: { react: { version: '18.2' } },
//   plugins: ['react-refresh'],
//   rules: {
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//   },
// }
module.exports = {
  env: {
      browser: true,
      es2021: true,
  },
  extends: [
      'airbnb',
      'airbnb/hooks',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
  ],
  overrides: [],
  ignorePatterns: ['*.html'],
  // parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      tsconfigRootDir: __dirname,
      project: 'tsconfig.json',
  },
  plugins: ['react', 'prefer-arrow', 'prettier'],
  rules: {
      'react/react-in-jsx-scope': 0,
      'react/function-component-definition': [
          2,
          {
              namedComponents: 'arrow-function',
              unnamedComponents: 'arrow-function',
          },
      ],
      'react/require-default-props': 'off',
      'prefer-arrow/prefer-arrow-functions': [
          'error',
          {
              disallowPrototype: true,
              singleReturnOnly: true,
              classPropertiesAllowed: false,
          },
      ],
      'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
      'func-style': ['error', 'expression', { allowArrowFunctions: true }],
  },
}