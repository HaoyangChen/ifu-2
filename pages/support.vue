<template>
    <div class="Donation">
        <Banner
            :title="$t('donation.banner.title')"
            :description="$t('donation.banner.description')"
            :background="bannerImage"
            :button-text="$t('donation.banner.buttonText')"
            to="/about"
        />
        <section class="support-section">
            <h2>{{ $t('donation.support.title') }}</h2>
            <p>{{ $t('donation.support.description') }}</p>
            <div class="images-row">
                <div class="image-item">
                    <img src="@/assets/support/support-1.png" />
                    <p>{{ $t('donation.support.image1') }}</p>
                </div>
                <div class="image-item">
                    <img src="@/assets/support/support-2.png" />
                    <p>{{ $t('donation.support.image2') }}</p>
                </div>
                <div class="image-item">
                    <img src="@/assets/support/support-3.png" />
                    <p>{{ $t('donation.support.image3') }}</p>
                </div>
                <div class="image-item">
                    <img src="@/assets/support/support-4.png" />
                    <p>{{ $t('donation.support.image4') }}</p>
                </div>
                <div class="image-item">
                    <img src="@/assets/support/support-5.png" />
                    <p>{{ $t('donation.support.image5') }}</p>
                </div>
                <div class="image-item">
                    <img src="@/assets/support/support-6.png" />
                    <p>{{ $t('donation.support.image6') }}</p>
                </div>
            </div>
        </section>
        <div class="row">
            <section class="left-section">
                <h2>{{ $t('donation.payment.online') }}</h2>
                <div>
                    <img src="@/assets/support/wechat.png" />
                    <p>{{ $t('donation.payment.wechat') }}</p>
                </div>
                <div>
                    <img src="@/assets/support/alipay.png" />
                    <p>{{ $t('donation.payment.alipay') }}</p>
                </div>
            </section>
            <section>
                <h2>{{ $t('donation.payment.foreign') }}</h2>
                <div>
                    <img src="@/assets/support/zelle.png" />
                    <p
                        class="bottom-divide"
                        v-html="$t('donation.payment.zelle')"
                    />
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import bannerImage from '@/assets/support/banner.png';

export default {
    components: {
        Banner,
    },
    data() {
        return {
            bannerImage,
        };
    },
    head() {
        return {
            title: this.$t('header.support'),
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$t('donation.banner.description'),
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content:
                        '帮助留学生, 支持非政府组织, 支持留学生, 募捐, 海外募捐, 海外捐款',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.row {
    display: flex;
    justify-content: space-between;

    img {
        width: 250px;
        height: 250px;
    }
}

.support-section {
    background-color: $background-light-blue;

    > p {
        line-height: 31px;
        width: 70%;
    }

    .images-row {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .image-item {
            width: 170px;

            img {
                width: 100%;
            }

            p {
                width: 100%;
                text-align: center;
                margin: 20px auto;
            }
        }
    }
}

.left-section {
    padding-right: 0;
    flex-basis: 85%;
}

section > div {
    display: inline-block;
    text-align: center;
}

section > div:first-of-type {
    margin: 33px 50px 0 0;
}

@media (max-width: 1300px) {
    // Change flex items
    .support-section .images-row .image-item {
        width: 125px;
        height: 125px;
    }

    section > div:first-of-type {
        margin: 33px 15% 0 0;
    }

    .row {
        img {
            width: 150px;
            height: 150px;
        }
    }
}

@media (max-width: $mobile-max-width) {
    .support-section {
        > p {
            width: 100%;
        }

        .images-row {
            margin-top: 20px;
            justify-content: space-evenly;
            flex-wrap: wrap;

            .image-item {
                flex-basis: 33%;
                width: 175px;
                height: 200px;

                img {
                    width: 125px;
                    height: 125px;
                }

                p {
                    margin: 0 auto 20px auto;
                }
            }
        }
    }

    p {
        margin: 0;
        line-height: 31px;

        &.bottom-divide {
            margin-bottom: 35px;
        }
    }

    img {
        margin: 15px 0;
        width: 200px;
        height: 200px;
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
