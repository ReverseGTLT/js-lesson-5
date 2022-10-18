module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console":0,
        "quotes": [
            2,
            "single"
        ],
        "linebreak-style": 0,
        "semi": [
            2,
            "always"
        ],
        "no-alert": 0,
    }
}
