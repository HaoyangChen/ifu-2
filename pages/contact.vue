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
import emergency from '../tabs/contact/emergency.vue';
import other from '../tabs/contact/other.vue';

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
                    content: emergency,
                    color: '#7ECAC6',
                    defaultShow: true,
                },
                {
                    title: this.$t('contact.other.title'),
                    content: other,
                    color: '#EB5848',
                },
            ];
        },
    },
    head() {
        return {
            title: this.$t('header.contact'),
        };
    },
};
</script>
