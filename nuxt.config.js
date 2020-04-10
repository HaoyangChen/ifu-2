export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - IFU',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        [
            'nuxt-i18n',
            {
                detectBrowserLanguage: {
                    useCookie: true,
                    fallbackLocale: 'zh',
                },
                langDir: 'lang/',
                locales: [
                    {
                        code: 'zh',
                        iso: 'zh-CN',
                        name: 'Chinese',
                        file: 'zh.js',
                    },
                    {
                        code: 'en',
                        iso: 'en-US',
                        name: 'English',
                        file: 'en.js',
                    },
                ],
                strategy: 'no_prefix',
                lazy: true,
            },
        ],
    ],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
    },
};
