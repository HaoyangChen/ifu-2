<template>
    <div class="Donation">
        <Banner
            :title="$t('donation.banner.title')"
            :description="$t('donation.banner.description')"
            :background="bannerImage"
            :button-text="$t('donation.banner.buttonText')"
            :button-on-click="() => $router.push('about')"
        />
        <section class="support-section">
            <h2>{{ $t('donation.support.title') }}</h2>
            <p>{{ $t('donation.support.description') }}</p>
        </section>
        <div class="row">
            <section class="left-section">
                <h2>{{ $t('donation.payment.online') }}</h2>
                <div>
                    <img :src="wechatImage" />
                    <p>{{ $t('donation.payment.wechat') }}</p>
                </div>
                <div>
                    <img :src="alipayImage" />
                    <p>{{ $t('donation.payment.alipay') }}</p>
                </div>
            </section>
            <section>
                <h2>{{ $t('donation.payment.foreign') }}</h2>
                <div>
                    <img :src="zelleImage" />
                    <p class="bottom-divide">
                        {{ $t('donation.payment.zelle') }}
                    </p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import bannerImage from '@/assets/donation/banner.png';
import wechatImage from '@/assets/donation/wechat.png';
import alipayImage from '@/assets/donation/alipay.png';
import zelleImage from '@/assets/donation/zelle.png';

export default {
    components: {
        Banner,
    },
    data() {
        return {
            bannerImage,
            wechatImage,
            alipayImage,
            zelleImage,
        };
    },
    head() {
        return {
            title: this.$t('header.support'),
        };
    },
};
</script>

<style lang="scss" scoped>
.row {
    display: flex;
    justify-content: space-between;
}

.support-section {
    p {
        width: 60%;
    }
}

.left-section {
    padding-right: 0;
}

section > div {
    display: inline-block;
    text-align: center;
}

section > div:first-of-type {
    margin: 33px 50px 0 0;
}

@media (max-width: 1024px) {
    img {
        margin: 15px 0;
        width: 200px;
        height: 200px;
    }

    .support-section {
        p {
            width: 100%;
        }
    }

    p {
        margin: 0;
        line-height: 31px;

        &.bottom-divide {
            margin-bottom: 35px;
        }
    }

    .row {
        flex-direction: column;
    }

    .left-section,
    section {
        margin: 0;
        padding-right: 30px;
    }

    section > div:first-of-type,
    section > div {
        display: block;
        margin: 0;
    }
}
</style>
