<template>
    <div class="more-container">
        <Banner
            class="more-banner"
            :title="$t('more.banner.title')"
            :description="$t('more.banner.description')"
            :button-text="$t('more.banner.buttonText')"
            :background="bannerImage"
            :to="localePath('/contact')"
        />
        <Tab :list="tabList" />
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Tab from '@/components/Tab.vue';
import bannerImage from '@/assets/more/banner.png';
import Other from '@/tabs/more/other.vue';

export default {
    components: {
        Banner,
        Tab,
    },
    data() {
        return {
            bannerImage,
        };
    },
    computed: {
        tabList() {
            return [
                {
                    title: this.$t('more.banner.tabContent'),
                    content: Other,
                    color: '#F96291',
                    defaultShow: true,
                },
            ];
        },
    },
    methods: {
        navigateToQuestion() {
            this.$router.push('question');
        },
    },
    head() {
        return {
            title: this.$t('header.more') + ' ' + this.$t('header.orgName'),
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$t('more.banner.description'),
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content:
                        '法律援助, 心理辅导, opt咨询, cpt咨询, h1b咨询, 留学生规划, 如何融入海外课堂, 福利优惠, 留学生动态, 课程讲座, 海外校园信息, 最新资讯',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
/deep/ .tab .tab-list .tab-title {
    background: none !important;
}
</style>
