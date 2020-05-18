<template>
    <div>
        <section class="culture-section">
            <h2>{{ $t('about.culture.cultureTitle') }}</h2>
            <p>
                <b>{{ $t('about.culture.cultureText') }}</b>
            </p>
            <p>{{ $t('about.culture.cultureText2') }}</p>
            <p>{{ $t('about.culture.cultureText3') }}</p>
            <p>{{ $t('about.culture.cultureText4') }}</p>
            <p>{{ $t('about.culture.cultureText5') }}</p>
            <iframe
                class="video"
                frameborder="0"
                src="https://v.qq.com/txp/iframe/player.html?vid=f0516cmc391"
                allowFullScreen="true"
            ></iframe>
        </section>
        <section>
            <h2>{{ $t('about.culture.distributionTitle') }}</h2>
            <div class="distribution-image desktop">
                <img src="../../assets/about/culture/map.png" />
                <div class="tips" data-aos="fade-up">
                    <div class="tips-text">
                        <p>{{ $t('about.culture.schoool1') }}</p>
                        <p>{{ $t('about.culture.schoool2') }}</p>
                    </div>
                    <div class="tips-line" />
                </div>
                <div class="tips" data-aos="fade-up">
                    <div class="tips-text">
                        <p>{{ $t('about.culture.schoool3') }}</p>
                    </div>
                    <div class="tips-line" />
                </div>
                <div class="tips" data-aos="fade-left">
                    <div class="tips-text">
                        <p>{{ $t('about.culture.schoool4') }}</p>
                        <p>{{ $t('about.culture.schoool5') }}</p>
                        <p>{{ $t('about.culture.schoool6') }}</p>
                        <p>{{ $t('about.culture.schoool7') }}</p>
                        <p>{{ $t('about.culture.schoool8') }}</p>
                        <p>{{ $t('about.culture.schoool9') }}</p>
                        <p>{{ $t('about.culture.schoool10') }}</p>
                        <p>{{ $t('about.culture.schoool11') }}</p>
                    </div>
                    <div class="tips-line" />
                </div>
                <div class="tips" data-aos="fade-right">
                    <div class="tips-text">
                        <p>{{ $t('about.culture.schoool12') }}</p>
                        <p>{{ $t('about.culture.schoool13') }}</p>
                        <p>{{ $t('about.culture.schoool14') }}</p>
                        <p>{{ $t('about.culture.schoool15') }}</p>
                        <p>{{ $t('about.culture.schoool16') }}</p>
                        <p>{{ $t('about.culture.schoool17') }}</p>
                        <p>{{ $t('about.culture.schoool18') }}</p>
                        <p>{{ $t('about.culture.schoool19') }}</p>
                        <p>{{ $t('about.culture.schoool20') }}</p>
                    </div>
                    <div class="tips-line" />
                </div>
                <div class="tips" data-aos="fade-down">
                    <div class="tips-text">
                        <p>{{ $t('about.culture.schoool21') }}</p>
                    </div>
                    <div class="tips-line" />
                </div>
            </div>
            <div class="distribution-image-mobile mobile">
                <img src="../../assets/about/culture/map-mobile.png" />
            </div>
        </section>
        <section class="join-section">
            <p>{{ $t('about.culture.joinText1') }}</p>
            <p>{{ $t('about.culture.joinText2') }}</p>
            <Button external to="https://www.wjx.cn/jq/71891803.aspx">{{
                $t('about.culture.joinButtonText')
            }}</Button>
        </section>
    </div>
</template>

<script>
import AOS from 'aos';
import Button from '@/components/Button.vue';

import 'aos/dist/aos.css';

export default {
    name: 'Culture',
    components: {
        Button,
    },
    created() {
        AOS.init({
            delay: 0,
            duration: 800,
        });
    },
};
</script>

<style lang="scss" scoped>
@import '@/style/var.scss';

.culture-section {
    position: relative;

    p {
        width: 33%;
    }
}

.video {
    margin: 67px;
    width: 40%;
    float: right;
    position: absolute;
    top: 0px;
    right: 142px;
    height: 362px;
    text-align: center;
    background: gray;
}

.distribution-image {
    width: 1180px;
    margin: $padding-horizontal auto 0 auto;
    text-align: center;
    position: relative;

    img {
        width: 100%;
    }
}

.tips {
    box-sizing: border-box;
    font-size: 12px;
    line-height: 12px;
    position: absolute;

    .tips-text {
        background: rgba(255, 255, 255, 0.8);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        p {
            margin: 0;
        }
    }

    .tips-line {
        position: absolute;
    }
}

.tips:nth-of-type(1) {
    top: -43px;
    left: 317px;

    .tips-text {
        width: 116px;
        height: 70px;
        border: 2px solid #c9d74a;
        color: #c9d74a;
    }

    .tips-line {
        width: 2px;
        height: 110px;
        background: #c9d74a;
        left: 58px;
    }
}

.tips:nth-of-type(2) {
    top: 0px;
    left: 495px;

    .tips-text {
        width: 144px;
        height: 41px;
        border: 2px solid #f96291;
        color: #f96291;
    }

    .tips-line {
        width: 2px;
        height: 113px;
        background: #f96291;
        left: 72px;
    }
}

.tips:nth-of-type(3) {
    top: 218px;
    left: 32px;

    .tips-text {
        width: 171px;
        height: 227px;
        border: 2px solid #34bbc9;
        color: #34bbc9;
    }

    .tips-line {
        width: 34px;
        height: 2px;
        background: #34bbc9;
        top: 28px;
        left: 170px;
    }
}

.tips:nth-of-type(4) {
    top: 241px;
    left: 397px;

    .tips-text {
        width: 183px;
        height: 255px;
        border: 2px solid #34bbc9;
        color: #34bbc9;
    }

    .tips-line {
        width: 31px;
        height: 2px;
        background: #34bbc9;
        top: 28px;
        left: -30px;
    }
}

.tips:nth-of-type(5) {
    top: 494px;
    left: 827px;

    .tips-text {
        width: 121px;
        height: 41px;
        border: 2px solid #fda63b;
        color: #fda63b;
    }

    .tips-line {
        width: 2px;
        height: 98px;
        background: #fda63b;
        top: -96px;
        left: 59px;
    }
}

.join-section {
    padding-top: 0;
    text-align: center;

    p {
        margin-bottom: 30px;
    }
}

@media (max-width: 1440px) {
    .distribution-image {
        width: 764px;
    }

    .tips:nth-of-type(1) {
        top: -50px;
        left: 184px;

        .tips-line {
            height: 64px;
        }
    }

    .tips:nth-of-type(2) {
        top: 32px;
        left: 295px;

        .tips-line {
            height: 25px;
        }
    }

    .tips:nth-of-type(3) {
        top: 146px;
        left: -48px;

        .tips-line {
            left: 170px;
        }
    }

    .tips:nth-of-type(4) {
        top: 146px;
        left: 267px;

        .tips-text {
            height: 215px;
        }
    }

    .tips:nth-of-type(5) {
        top: 294px;
        left: 507px;

        .tips-line {
            height: 38px;
            top: -36px;
        }
    }
}

@media (max-width: 1024px) {
    .culture-section p {
        width: 100%;
    }

    .video {
        margin: auto;
        position: relative;
        width: 100%;
        right: 0;
        float: none;
    }

    .distribution-image-mobile {
        width: 100%;

        img {
            width: 100%;
        }
    }
}
</style>
