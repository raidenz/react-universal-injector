const path = require('path');
module.exports = {
    "env": {
        "browser": false,
        "node": true,
        "es6": true
    },
    "extends": "airbnb",
    "ecmaFeatures": {
        "modules": true,
        "jsx": true
    },
    "parserOptions": {
        "sourceType": "module"
    },
    "plugins": [
        "import",
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        // "import/external-module-folders": ["node_modules", "src"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "import/no-unresolved": [2, {commonjs: true, amd: true}],
        "import/no-named-default": 0,
        "import/no-unresolved": 0,
        "import/no-extraneous-dependencies": 0,
        "import/extensions": 0,
        "react/jsx-tag-spacing": 0,
        "react/no-array-index-key": 0,
        "react/require-default-props": 0,
        "max-len": [1, 120, 2, {ignoreComments: true}],
        "react/prop-types": [2],
        "no-param-reassign": 0,
        "no-unused-expressions": "warn",
        "no-useless-concat": "warn",
        "block-scoped-var": "error",
        "consistent-return": "error"
    },
    "settings": {
        // "import/ignore": ["components"],
        // "import/external-module-folders": ["src"],
        // "import/resolver": {
        //     // [path.resolve(process.cwd()+'/../../../')]: {
        //     //     "paths": "components",
        //     //     "moduleDirectory": "components"
        //     // }
        // },
    }
};
