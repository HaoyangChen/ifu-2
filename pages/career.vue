<template>
    <div>
        <Banner
            title="加入我们"
            button-text="我们的故事"
            :to="localePath('/about')"
            description="如果你有一颗帮助留学群体热忱的心；如果你希望尽自己的一份力让留学家庭更安心；让父母和海外学子之间的信息代沟有所改善；让留学生在海外的心理焦虑有所减少；那么就来加入我们IFU大家庭吧！"
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
                    title: '志愿者招募',
                    content: Volunteer,
                    color: '#C9D74A',
                },
                {
                    title: '工作人员招募',
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
