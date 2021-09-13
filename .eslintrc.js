module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        'cypress/globals': true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'plugin:cypress/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'cypress'],
    rules: {
        'cypress/no-assigning-return-values': 0,
        'cypress/no-unnecessary-waiting': 0,
        'cypress/assertion-before-screenshot': 0,
        'cypress/no-force': 0,
        'cypress/no-async-tests': 0,
        'react/jsx-filename-extension': [
            0,
            {
                allow: 'as-needed',
            },
        ],
        'react/jsx-props-no-spreading': [
            0,
            {
                html: 'ignore' || 'enforce',
                custom: 'ignore' || 'enforce',
                explicitSpread: 'ignore' || 'enforce',
                exceptions: 'ignore' || 'enforce',
            },
        ],
        'react/forbid-prop-types': 0,
        'import/no-extraneous-dependencies': ['error', { peerDependencies: true }],
        'class-methods-use-this': 0,
        'no-shadow': 0,
        camelcase: 0,
        'react/prop-types': 0,
        'no-unused-vars': 0,
        'no-console': 0,
        'react/destructuring-assignment': 0,
    },
};
