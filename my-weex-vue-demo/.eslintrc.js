// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        'vue/no-parsing-error': [2, {
            "x-invalid-end-tag": false
        }],
        // allow async-await
        'generator-star-spacing': 'off',
        "space-before-function-paren": [0, "always"],
        // 强制使用一致的反勾号、单引号
        "quotes": [2, "single"], // 单引号
        "indent": ["error", 2], //强制一致的缩进风格
        "no-unused-vars": [2, { "vars": "all", "args": "after-used" }], //不允许有声明后未使用的变量或者参数
        "no-use-before-define": [2, "nofunc"], //不允许在未定义之前就使用变量
        "eol-last": ["error", "never"], // 最后一行不启用换行
        "lines-around-comment": [1, { "beforeBlockComment": false, "beforeLineComment": false }],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}