module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    rules: {
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        '@typescript-eslint/member-ordering': [
            'warn',
            {
                default: [
                    'public-abstract-field',
                    'protected-abstract-field',
                    'private-abstract-field',

                    'public-abstract-method',
                    'protected-abstract-method',
                    'private-abstract-method',

                    'public-static-field',
                    'protected-static-field',
                    'private-static-field',

                    ['public-static-get', 'public-static-set'],
                    ['protected-static-get', 'protected-static-set'],
                    ['private-static-get', 'private-static-set'],

                    'public-static-method',
                    'protected-static-method',
                    'private-static-method',

                    'public-field',
                    'protected-field',
                    'private-field',

                    'constructor',

                    ['public-get', 'public-set'],
                    ['protected-get', 'protected-set'],
                    ['private-get', 'private-set'],

                    'public-method',
                    'protected-method',
                    'private-method',
                ],
            },
        ],
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/dot-notation': 'warn',
        '@typescript-eslint/consistent-type-definitions': 'warn',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-shadow': [
            'warn',
            {
                hoist: 'all',
            },
        ],
        '@typescript-eslint/no-unused-expressions': 'warn',
        '@typescript-eslint/no-use-before-define': 'warn',
        '@typescript-eslint/prefer-function-type': 'warn',
        '@typescript-eslint/quotes': ['warn', 'single', { avoidEscape: true }],
        '@typescript-eslint/semi': ['warn', 'always'],
        '@typescript-eslint/type-annotation-spacing': 'warn',
        '@typescript-eslint/unified-signatures': 'warn',
        '@typescript-eslint/require-await': 'error',
        'arrow-body-style': 'warn',
        'brace-style': ['warn', '1tbs'],
        'max-len': [
            'warn',
            {
                code: 120,
            },
        ],
        'no-debugger': 'warn',
        'no-useless-escape': 'warn',
        'no-var': 'warn',
        'prefer-const': [
            'warn',
            {
                destructuring: 'all',
            },
        ],
        'no-trailing-spaces': 'warn',
        'spaced-comment': [
            'warn',
            'always',
            {
                markers: ['/'],
            },
        ],
    },
};
