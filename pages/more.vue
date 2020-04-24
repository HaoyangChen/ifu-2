<template>
    <div class="more-container">
        <Banner
            class="more-banner"
            :title="$t('more.banner.title')"
            :description="$t('more.banner.description')"
            :button-text="$t('more.banner.buttonText')"
            :background="bannerImage"
            to="/contact"
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
            title: this.$t('header.more'),
        };
    },
};
</script>

<style lang="scss" scoped>
/deep/ .tab .tab-list .tab-title:hover {
    background: none !important;
}
</style>
