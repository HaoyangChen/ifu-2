<template>
    <div class="membership">
        <Banner
            :title="$t('membership.banner.title')"
            :description="$t('membership.banner.description')"
            :button-text="$t('membership.banner.buttonText')"
            :background="bannerImage"
            external
            :to="becomeMemberLink[$i18n.locale]"
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
            becomeMemberLink: {
                zh: 'https://www.wjx.cn/jq/71891803.aspx',
                en: 'https://forms.gle/ViLaGzEtXmRjpDTD9',
            },
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
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$t('membership.banner.description'),
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content:
                        '海外留学生生活, 活动, 折扣, 福利优惠, 留学生动态, 课程讲座, 海外校园信息, 最新资讯, GRE考研辅导, ISIC联名学生证, 法律援助, 心理辅导, 学生卡',
                },
            ],
        };
    },
};
</script>
