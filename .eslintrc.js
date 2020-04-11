module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: [
        '@nuxtjs',
        'prettier',
        'prettier/vue',
        'plugin:prettier/recommended',
        'plugin:nuxt/recommended',
    ],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {
        // While v-html can lead to XSS attacks, there is no user
        // input being used for v-html and format i18n text would
        // be hard without using it, therefore this warning has been
        // turned off
        'vue/no-v-html': 'off',
    },
};
