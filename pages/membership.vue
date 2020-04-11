<template>
    <div class="isic">
        <Banner
            :title="$t('isic.banner.title')"
            :description="$t('isic.banner.description')"
            :button-text="$t('isic.banner.buttonText')"
            :background="bannerImage"
            external-link="https://www.wjx.top/jq/48243970.aspx"
        />
        <Tab :list="tabList" />
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Tab from '@/components/Tab.vue';
import bannerImage from '@/assets/membership/banner.png';
import IsicMember from '@/tabs/membership/IsicMember.vue';
import RegularMember from '@/tabs/membership/RegularMember.vue';

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
                    title: this.$t('isic.tabList.regularMember'),
                    content: RegularMember,
                    color: '#C9D74A',
                    defaultShow: true,
                },
                {
                    title: this.$t('isic.tabList.ifuIsicMember'),
                    content: IsicMember,
                    color: '#F96291',
                },
            ];
        },
    },
    head() {
        return {
            title: this.$t('header.membership'),
        };
    },
};
</script>
