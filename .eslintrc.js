// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  // parser: "babel-eslint",
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2017
    // "sourceType": "module"
  },
  env: {
    browser: true
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: [
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "eslint:recommended"
  ],
  // required to lint *.vue files
  plugins: ["vue", "html"],
  // add your custom rules here
  rules: {
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
