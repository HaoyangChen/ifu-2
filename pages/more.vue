<template>
    <div class="dma-container">
        <Banner
            class="dma-banner"
            :title="$t('dma.banner.title')"
            :description="$t('dma.banner.description')"
            :button-text="$t('dma.banner.buttonText')"
            :background="bannerImage"
            :button-on-click="() => $router.push('contact')"
        />
        <Tab :list="tabList" />
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Tab from '@/components/Tab.vue';
import bannerImage from '@/assets/dma/dma_banner.png';
import Other from '@/tabs/dma/other.vue';

export default {
    name: 'Dma',
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
                // {
                //     title: 'IFU X DMA 夏校',
                //     content: Summer,
                //     color: '#C9D74A',
                // },
                {
                    title: this.$t('dma.banner.tabContent'),
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
};
</script>
