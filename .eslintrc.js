module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    // '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  rules: {
    "no-console": "off",
    "no-unused-vars": "off",
    "vue/no-v-html": 0,
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/component-name-in-template-casing": "off",
    "vue/html-self-closing": "off",
    "vue/html-closing-bracket-spacing": "off",
    "vue/order-in-components": "off",
  }
}
