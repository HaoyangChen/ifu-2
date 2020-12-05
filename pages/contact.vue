<template>
    <div class="contact">
        <Banner
            class="contact-banner"
            :title="$t('contact.banner.title')"
            :description="$t('contact.banner.description')"
            :background="bannerImage"
        />
        <Tab :list="tabList" />
    </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import Tab from '../components/Tab.vue';
import bannerImage from '../assets/contact/banner.png';
import Emergency from '../tabs/contact/emergency.vue';
import Other from '../tabs/contact/other.vue';

export default {
    name: 'Contact',
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
                    title: this.$t('contact.emergency.title'),
                    content: Emergency,
                    color: '#7ECAC6',
                    defaultShow: true,
                },
                {
                    title: this.$t('contact.other.title'),
                    content: Other,
                    color: '#EB5848',
                },
            ];
        },
    },
    head() {
        return {
            title: this.$t('header.contact'),
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$t('contact.banner.description'),
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content:
                        '紧急联系, 海外找人, 合作, 留学生失联, 帮助留学生组织, 孩子在外留学遗失怎么办',
                },
            ],
        };
    },
};
</script>
