<template>
    <div class="about">
        <Banner
            :title="$t('about.banner.title')"
            :button-text="$t('about.banner.buttonText')"
            external
            :to="campusVolunteerLink[$i18n.locale]"
            :background="bannerImage"
        >
            <p v-html="$t('about.banner.description')" />
        </Banner>
        <Tab :list="tabList" />
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Tab from '@/components/Tab.vue';
import bannerImage from '@/assets/about/banner.png';
import Culture from '@/tabs/about/Culture.vue';
import History from '@/tabs/about/History.vue';
import Story from '@/tabs/about/Story.vue';
import Team from '@/pages/team.vue';

export default {
    name: 'About',
    components: {
        Tab,
        Banner,
    },
    data() {
        return {
            bannerImage,
            campusVolunteerLink: {
                zh: 'https://www.wjx.cn/jq/71891803.aspx',
                en: 'https://forms.gle/ViLaGzEtXmRjpDTD9',
            },
        };
    },
    computed: {
        tabList() {
            return [
                {
                    title: this.$t('about.tabList.story'),
                    content: Story,
                    color: '#F96291',
                    defaultShow: true,
                },
                {
                    title: this.$t('about.tabList.culture'),
                    content: Culture,
                    color: '#34BBC9',
                },
                {
                    title: this.$t('about.tabList.progress'),
                    content: History,
                    color: '#C9D74A',
                },
                {
                    title: this.$t('about.tabList.team'),
                    content: Team,
                    color: '#F96291',
                },
            ];
        },
    },
    head() {
        return {
            title: this.$t('header.about'),
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$t('about.banner.description'),
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content:
                        '留学生心理健康, 留学安全, 海外援助, 留学生活分享, 留学生非政府组织, 留学生日常, 留学活动, 留学生微信公众号, 留学生公益活动, 留学生峰会, 留学生家长交流会, 美国心理辅导, 留学压力, UCSD新生群, UW新生群',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.about {
    line-height: 24px;
}

/deep/ .tab-content .banner,
/deep/ .tab-content-mobile .banner {
    display: none;
}
</style>
