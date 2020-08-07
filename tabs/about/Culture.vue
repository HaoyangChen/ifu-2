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
                <img :src="map[$i18n.locale]" />
                <div class="tips" data-aos="fade-up">
                    <div class="tips-text">
                        <p
                            v-for="school in $t('about.culture.canada')"
                            :key="school"
                        >
                            {{ school }}
                        </p>
                    </div>
                    <div class="tips-line" />
                </div>
                <div class="tips" data-aos="fade-up">
                    <div class="tips-text">
                        <p
                            v-for="school in $t('about.culture.uk')"
                            :key="school"
                        >
                            {{ school }}
                        </p>
                    </div>
                    <div class="tips-line" />
                </div>
                <div class="tips" data-aos="fade-left">
                    <div class="tips-text">
                        <p
                            v-for="school in $t('about.culture.us-west')"
                            :key="school"
                        >
                            {{ school }}
                        </p>
                    </div>
                    <div class="tips-line" />
                </div>
                <div class="tips" data-aos="fade-right">
                    <div class="tips-text">
                        <p
                            v-for="school in $t('about.culture.us-east')"
                            :key="school"
                        >
                            {{ school }}
                        </p>
                    </div>
                    <div class="tips-line" />
                </div>
                <div class="tips" data-aos="fade-down">
                    <div class="tips-text">
                        <p
                            v-for="school in $t('about.culture.singapore')"
                            :key="school"
                        >
                            {{ school }}
                        </p>
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
            <Button
                external
                to="https://docs.google.com/forms/d/e/1FAIpQLScxv4rY_MMRqShfJRdAPHx50t2R_slZxQVTSJh1Tt_numq-tA/viewform"
                >{{ $t('about.culture.joinButtonText') }}</Button
            >
        </section>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';
import mapImage from '@/assets/about/culture/map.png';
import mapEnImage from '@/assets/about/culture/map-en.png';

export default {
    name: 'Culture',
    components: {
        Button,
    },
    data() {
        return {
            map: {
                zh: mapImage,
                en: mapEnImage,
            },
        };
    },
};
</script>

<style lang="scss" scoped>
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
    top: -75px;
    left: 251px;

    .tips-text {
        width: 144px;
        height: 70px;
        border: 2px solid $green;
        color: $green;
    }

    .tips-line {
        width: 2px;
        height: 110px;
        background: $green;
        left: 77px;
    }
}

.tips:nth-of-type(2) {
    top: -20px;
    left: 439px;

    .tips-text {
        width: 144px;
        height: 41px;
        border: 2px solid $dark-pink;
        color: $dark-pink;
    }

    .tips-line {
        width: 2px;
        height: 113px;
        background: $dark-pink;
        left: 72px;
    }
}

.tips:nth-of-type(3) {
    top: 225px;
    left: -45px;

    .tips-text {
        width: 171px;
        height: 227px;
        border: 2px solid $teal;
        color: $teal;
    }

    .tips-line {
        width: 34px;
        height: 2px;
        background: $teal;
        top: 28px;
        left: 170px;
    }
}

.tips:nth-of-type(4) {
    top: 238px;
    left: 347px;

    .tips-text {
        width: 183px;
        height: 255px;
        border: 2px solid $teal;
        color: $teal;
    }

    .tips-line {
        width: 31px;
        height: 2px;
        background: $teal;
        top: 28px;
        left: -30px;
    }
}

.tips:nth-of-type(5) {
    top: 534px;
    left: 875px;

    .tips-text {
        width: 121px;
        height: 41px;
        border: 2px solid $orange;
        color: $orange;
    }

    .tips-line {
        width: 2px;
        height: 98px;
        background: $orange;
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

@media (max-width: $page-max-width) {
    .distribution-image {
        width: 764px;
    }

    .tips:nth-of-type(1) {
        top: -65px;
        left: 155px;

        .tips-line {
            height: 64px;
        }
    }

    .tips:nth-of-type(2) {
        top: 22px;
        left: 259px;

        .tips-line {
            height: 25px;
        }
    }

    .tips:nth-of-type(3) {
        top: 136px;
        left: -100px;

        .tips-line {
            left: 170px;
        }
    }

    .tips:nth-of-type(4) {
        top: 144px;
        left: 235px;

        .tips-text {
            height: 215px;
        }
    }

    .tips:nth-of-type(5) {
        top: 318px;
        left: 546px;

        .tips-line {
            height: 38px;
            top: -36px;
        }
    }
}

@media (max-width: $mobile-max-width) {
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
