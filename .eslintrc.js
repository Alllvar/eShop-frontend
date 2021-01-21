module.exports = {
  parser: 'babel-eslint',
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      env: {
        browser: true,
      },
      extends: [
        'airbnb-typescript',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      plugins: [
        '@typescript-eslint',
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
        'linebreak-style': 0,
        'no-param-reassign': 0,
        'react/jsx-props-no-spreading': [2, { custom: 'ignore' }],
        'react-hooks/exhaustive-deps': 0,
      },
    },
  ],
};
