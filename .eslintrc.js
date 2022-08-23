module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6
  },
  plugins: [],
  rules: { 
    'vue/multi-word-component-names': 0,
    "vue/no-v-model-argument": "off",
  },
}
