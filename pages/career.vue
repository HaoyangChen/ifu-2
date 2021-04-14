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
            title: this.$t('header.career') + ' ' + this.$t('header.orgName'),
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$t('career.banner.description'),
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content:
                        '加入我们, 加入志愿者团队, 加入工作人员团队, 成为项目型志愿者, 成为校园志愿者, JOIN US, Become a Volunteer, become project volunteers, become on-campus volunteers, become a staff',
                },
            ],
        };
    },
};
</script>
