<template>
    <div class="membership">
        <Banner
            :title="$t('membership.banner.title')"
            :description="$t('membership.banner.description')"
            :button-text="$t('membership.banner.buttonText')"
            :background="bannerImage"
            external
            to="https://www.wjx.cn/jq/71891803.aspx"
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
                    title: this.$t('membership.tabList.regularMember'),
                    content: RegularMember,
                    color: '#C9D74A',
                    defaultShow: true,
                },
                {
                    title: this.$t('membership.tabList.ifuIsicMember'),
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
