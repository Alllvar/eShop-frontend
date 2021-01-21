module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        },
        project: "./tsconfig.json",
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    rules:{
        "linebreak-style": 0,
        "no-param-reassign": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "react/jsx-props-no-spreading": [2, { custom: 'ignore' }]
    },
    extends: [
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
};