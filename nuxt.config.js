export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - IFU',
        meta: [
            {
                charset: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    '国际家长汇 International Family Union 创建于2017年7月，启始于加州大学圣地亚哥分校的学生社团，现在我们是美国联邦公益组织，聚集了超过300名学生志愿者覆盖美国、加拿大、英国、法国、新加坡等高校，致力于解决国际家庭海外安全、信息不对称等问题，向父母传递学生心声，连接并用心服务留学家庭。',
            },
            {
                hid: 'keywords',
                name: 'keywords',
                content:
                    '美国留学安全, 留学生海外援助, 留学生心理健康, 留学生活分享, 海外校园信息, 留学生峰会, 留学交流会, 留学生实时动态, 留学生失联, 海外捐款, 美本学术辅导, 美国课程在线辅导, 美本线上辅导课, 留学生公益活动, 美国留学建议, 留学生海外求助, 留学压力,  UCSD新生群, UW新生群, GWU新生群, 戴维斯新生群, 南加州新生群, 留学生公益组织, 留学生非政府组织, International student NGO, International student help usa, Missing international student, International student mental health, International student NGO, Volunteer for international students, Study abroad pressure, Study abroad anxiety, International education NGO donation, International student NGO donation, International student NGO, Chinese student help overseas, Study abroad safety sharing, Study abroad experience',
            },
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico',
            },
        ],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#fff',
    },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        {
            src: '~plugins/drift.js',
            mode: 'client',
        },
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        [
            '@nuxtjs/google-analytics',
            {
                id: 'G-F48WM6RK48',
            },
        ],
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        [
            'nuxt-i18n',
            {
                seo: true,
                detectBrowserLanguage: {
                    useCookie: true,
                    fallbackLocale: 'zh',
                },
                vueI18n: {
                    // When no translation available,
                    // fallback to zh-CN
                    fallbackLocale: 'zh',
                },
                langDir: 'lang/',
                locales: [
                    {
                        code: 'zh',
                        iso: 'zh-CN',
                        name: 'Chinese',
                        file: 'zh.json',
                    },
                    {
                        code: 'en',
                        iso: 'en-US',
                        name: 'English',
                        file: 'en.json',
                    },
                ],
                strategy: 'no_prefix',
                lazy: true,
            },
        ],
        '@nuxtjs/sitemap',
        '@nuxtjs/style-resources',
    ],
    styleResources: {
        scss: ['style/var.scss'],
    },
    /**
     * Sitemap Configuration
     */
    sitemap: {
        hostname: 'https://ifu-china.com',
    },
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
