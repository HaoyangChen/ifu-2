<template>
    <div>
        <Banner
            :title="$t('career.banner.title')"
            :button-text="$t('career.banner.buttonText')"
            :to="localePath('/about')"
            :description="$t('career.banner.description')"
            :background="bannerImage"
        />
        <Tab :list="tabList" />
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Tab from '@/components/Tab.vue';
import Volunteer from '@/tabs/career/volunteer.vue';
import Staff from '@/tabs/career/staff.vue';
import bannerImage from '@/assets/career/banner.png';

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
                    title: this.$t('career.volunteer.tabTitle'),
                    content: Volunteer,
                    color: '#C9D74A',
                },
                {
                    title: this.$t('career.staff.tabTitle'),
                    content: Staff,
                    color: '#F96291',
                },
            ];
        },
    },
    head() {
        return {
            title: this.$t('header.career') + ' - ' + this.$t('header.orgName'),
        };
    },
};
</script>
