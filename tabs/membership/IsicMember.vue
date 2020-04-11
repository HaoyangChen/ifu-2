<template>
    <div>
        <section class="part-5">
            <div class="row">
                <div class="col-half">
                    <div class="wave-image">
                        <img
                            id="waveimg"
                            :src="waveImage"
                            alt="image in wave"
                        />
                    </div>
                </div>
                <div class="col-half">
                    <h2 v-t="'isic.colhalf.whycardTitle'"></h2>
                    <p>
                        {{ $t('isic.colhalf.overView1')
                        }}<b> {{ $t('isic.colhalf.overView2') }}</b
                        >{{ $t('isic.colhalf.overView3')
                        }}<b>{{ $t('isic.colhalf.overView4') }}</b
                        >{{ $t('isic.colhalf.overView5')
                        }}<b>{{ $t('isic.colhalf.overView6') }}</b
                        >{{ $t('isic.colhalf.overView7') }}
                    </p>
                    <p>
                        {{ $t('isic.colhalf.overView8')
                        }}<b>{{ $t('isic.colhalf.overView9') }}</b
                        >{{ $t('isic.colhalf.overView10')
                        }}<b>{{ $t('isic.colhalf.overView11') }}</b
                        >{{ $t('isic.colhalf.overView12') }}
                    </p>
                    <a
                        href="https://weidian.com/item.html?itemID=2778597927&wfr=c&spider_token=8e9c"
                        ><Button :style="{ margin: '24px 0px' }">{{
                            $t('isic.colhalf.becomeMemberBtnText')
                        }}</Button></a
                    >
                </div>
            </div>
        </section>
        <section
            class="ifu-discount-banner"
            :style="{ backgroundColor: 'white' }"
        >
            <h2 v-t="'isic.colhalf.isicDiscountTitle'"></h2>
            <div class="card-list">
                <Card
                    v-for="(item, index) in cardList"
                    :key="index"
                    :image="item.image"
                    :description="item.description"
                >
                </Card>
            </div>
            <div class="all-discounts">
                <a
                    id="more-discount"
                    v-t="'isic.colhalf.moreDiscount'"
                    href="https://www.isic.org"
                    target="_blank"
                ></a>
            </div>
        </section>
        <section class="ifu-discount-banner">
            <h2 v-t="'isic.colhalf.ifuDiscountTitle'"></h2>
            <div class="ifu-list">
                <Card
                    v-for="(item, index) in ifuList"
                    :key="index"
                    :image="item.image"
                    :description="item.description"
                >
                </Card>
            </div>
        </section>
        <section class="isic-sample-section">
            <p v-t="'isic.colhalf.becomeVIP'" class="display-mobile"></p>
            <div class="row">
                <div class="col-half">
                    <div class="wave-image">
                        <img :src="isicSample" alt="image in wave" />
                    </div>
                </div>
                <div class="col-half">
                    <p
                        v-t="'isic.colhalf.becomeVipDesktop'"
                        class="display-desktop"
                    ></p>
                    <p v-t="'isic.colhalf.becomeVipContent'"></p>
                    <Button
                        v-t="'isic.colhalf.buttonText'"
                        :on-click="() => $router.push('contact')"
                    />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import AbenityImage from '@/assets/membership/isic/abenity.png';
import UCSDImage from '@/assets/membership/isic/ucsd.png';
import waveImage from '@/assets/membership/isic/wave-left.png';
import nbaImage from '@/assets/membership/isic/nba.png';
import greImage from '@/assets/membership/isic/gre.png';
import studentUImage from '@/assets/membership/isic/studentuniverse.png';
import hooliImage from '@/assets/membership/isic/hooli.png';
import isicSample from '@/assets/membership/isic/isic-sample.png';
import amazonImage from '@/assets/membership/isic/amazon.png';
import amcImage from '@/assets/membership/isic/amc.png';
import avisImage from '@/assets/membership/isic/avis.png';
import citypassImage from '@/assets/membership/isic/citypass.png';
import lenovoImage from '@/assets/membership/isic/lenovo.png';
import universalImage from '@/assets/membership/isic/universal.png';

export default {
    name: 'IsicMember',
    components: {
        Button,
        Card,
    },
    data() {
        return {
            UCSDImage,
            waveImage,
            nbaImage,
            greImage,
            studentUImage,
            hooliImage,
            isicSample,
        };
    },
    computed: {
        cardList() {
            return [
                {
                    image: AbenityImage,
                    description: this.$t('isic.cardList.imgDescription1'),
                },
                {
                    image: UCSDImage,
                    description: this.$t('isic.cardList.imgDescription2'),
                },
                {
                    image: nbaImage,
                    description: this.$t('isic.cardList.imgDescription3'),
                },
                {
                    image: avisImage,
                    description: this.$t('isic.cardList.imgDescription4'),
                },
                {
                    image: citypassImage,
                    description: this.$t('isic.cardList.imgDescription5'),
                },
                {
                    image: lenovoImage,
                    description: this.$t('isic.cardList.imgDescription6'),
                },
                {
                    image: universalImage,
                    description: this.$t('isic.cardList.imgDescription7'),
                },
                {
                    image: amcImage,
                    description: this.$t('isic.cardList.imgDescription8'),
                },
                {
                    image: amazonImage,
                    description: this.$t('isic.cardList.imgDescription9'),
                },
            ];
        },
        ifuList() {
            return [
                {
                    image: greImage,
                    description: this.$t('isic.cardList.imgDescription10'),
                },
                {
                    image: studentUImage,
                    description: this.$t('isic.cardList.imgDescription11'),
                },
                {
                    image: hooliImage,
                    description: this.$t('isic.cardList.imgDescription12'),
                },
            ];
        },
    },
};
</script>

<style scoped>
.card-list,
.ifu-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.Card {
    flex-basis: 30%;
    margin: 25px 15px;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    background-color: #ffffff;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    align-items: center;
    justify-content: space-between;
}

.part-5 {
    background: url('../../assets/membership/isic/wave.png') no-repeat;
    /* padding: 75px 0px; */
}

.col-half {
    /* flex: 0 0 45%;
    max-width: 45%; */
    flex-basis: 46%;
}

.wave-image {
    text-align: center;
}

.wave-image > img {
    width: 100%;
}

.col-half > p {
    width: 80%;
    font-size: 16px;
    line-height: 31px;
    letter-spacing: 0.02em;
}

.all-discounts {
    text-align: right;
    margin: 18px 32px 0px 0px;
}

.ifu-discount-banner {
    background-color: #f1f9ff;
    /* padding: 100px 130px;  */
}

.display-mobile {
    display: none;
}

.display-desktop {
    font-weight: bold;
}

#more-discount {
    text-decoration: none;
    color: #3ea6d6;
}

.card-section {
    padding: 0;
}
</style>

<style scoped>
@media (max-width: 1024px) {
    #waveimg {
        width: 100%;
    }

    .all-discounts {
        margin: 18px 0;
    }

    .col-half {
        max-width: 100%;
        flex: 0 0 100%;
    }

    .col-half > p {
        width: 100%;
    }

    .row {
        margin-left: 0px;
        margin-right: 0px;
    }

    .wave-image > img {
        width: 100%;
    }

    .part-5 {
        padding: 10%;
        background: url('../../assets/membership/isic/wave-mobile.png')
            no-repeat;
        background-position: center center;
        background-size: cover;
    }

    .Card {
        flex-basis: 100%;
        margin: 25px 0px;
    }

    .display-mobile {
        display: block;
        font-weight: bold;
    }

    .display-desktop {
        display: none;
        font-weight: bold;
    }

    h2 {
        padding: 0;
    }

    .card-section {
        padding: 88px 29px;
    }

    .isic-sample-section {
        padding-bottom: 50px;
    }
}
</style>
