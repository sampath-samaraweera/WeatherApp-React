module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "@react-native-community"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        semi: ['error', 'never'],
        'comma-dangle': [2, 'never'],
        'react/jsx-filename-extension': [1, {extension: ['.js', '.jsx']}],
        'no-use-before-before': [
            'error',
            {function: true, classes: true, variables: false}
        ]
    }
}
