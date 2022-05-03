module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-console': 0,
    'import/no-extraneous-dependencies': 0,
    'max-len': 0,
    'import/extensions': [
      0,
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:import/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:jsx-a11y/recommended',
      ],
      parser: '@babel/eslint-parser',
      plugins: ['react', 'react-hooks', 'import'],
      rules: {
        indent: ['error', 2, { SwitchCase: 1 }],
        'react/display-name': 'off',
        'react/jsx-indent': ['error', 2],
        'react/jsx-indent-props': ['error', 2],
        'react/prefer-stateless-function': ['warn'],
        'react/no-find-dom-node': ['warn'],
        'react/prop-types': 'off',
        'operator-linebreak': ['warn', 'after', { overrides: { '?': 'before', ':': 'before' } }],
        'import/no-unresolved': 'off',
        semi: ['error', 'always'],
        'keyword-spacing': ['error', { before: true, after: true }],
        'jsx-a11y/click-events-have-key-events': ['warn'],
        'jsx-a11y/no-noninteractive-element-interactions': ['warn'],
        'jsx-a11y/no-autofocus': ['warn'],
        'jsx-a11y/anchor-has-content': 'off',
        'jsx-quotes': ['error', 'prefer-single'],
        'object-curly-spacing': ['error', 'always'],
      },
      globals: {
        sinon: 'readonly',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:jsx-a11y/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.eslint.json'],
      },
      plugins: ['react', 'react-hooks', 'import', '@typescript-eslint'],
      rules: {
        indent: 'off',
        '@typescript-eslint/indent': ['error', 2],
        'react/display-name': 'off',
        'react/jsx-indent': ['error', 2],
        'react/jsx-indent-props': ['error', 2],
        'react/prefer-stateless-function': ['warn'],
        'react/no-find-dom-node': ['warn'],
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'import/no-unresolved': 'off',
        semi: ['error', 'always'],
        'keyword-spacing': ['error', { before: true, after: true }],
        'jsx-quotes': ['error', 'prefer-single'],
        'jsx-a11y/click-events-have-key-events': ['warn'],
        'jsx-a11y/no-noninteractive-element-interactions': ['warn'],
        'jsx-a11y/no-autofocus': ['warn'],
        'jsx-a11y/anchor-has-content': 'off',
        'object-curly-spacing': ['error', 'always'],
      },
    },
  ],
};
