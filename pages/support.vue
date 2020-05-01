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
                    <p>人员工资</p>
                </div>
                <div class="image-item">
                    <img src="@/assets/support/support-2.png" />
                    <p>行政费用</p>
                </div>
                <div class="image-item">
                    <img src="@/assets/support/support-3.png" />
                    <p>校园志愿者事务报销</p>
                </div>
                <div class="image-item">
                    <img src="@/assets/support/support-4.png" />
                    <p>学术项目</p>
                </div>
                <div class="image-item">
                    <img src="@/assets/support/support-5.png" />
                    <p>团建与年会</p>
                </div>
                <div class="image-item">
                    <img src="@/assets/support/support-6.png" />
                    <p>其他</p>
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
}

.support-section {
    background-color: #f1f9ff;
    p {
        line-height: 31px;
        width: 70%;
    }
    .images-row {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;

        .image-item {
            &:not(:first-of-type) {
                margin-left: 15px;
            }

            img {
                width: 170px;
                height: 170px;
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

        .images-row {
            margin-top: 20px;
            justify-content: space-evenly;
            flex-wrap: wrap;

            .image-item {
                flex-basis: 33%;

                img {
                    width: 175px;
                    height: 175px;
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
