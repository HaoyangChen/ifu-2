<template>
    <div class="about">
        <Banner
            :title="$t('about.banner.title')"
            :description="$t('about.banner.description')"
            :button-text="$t('about.banner.buttonText')"
            external-link="https://www.wjx.top/m/42786146.aspx"
            :background="bannerImage"
        />
        <Tab :list="tabList" />
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Tab from '@/components/Tab.vue';
// import bannerImage from '@/assets/about/banner.png';
import bannerImage from '@/assets/course/ai_banner.png';
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
        };
    },
};
</script>

<style>
.about .tab-content .banner,
.about .tab-content-mobile .banner {
    display: none;
}
</style>

<style lang="scss" scoped>
.about {
    line-height: 24px;
}
</style>
