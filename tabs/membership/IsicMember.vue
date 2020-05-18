<template>
    <div>
        <section class="part-5">
            <div class="row">
                <div class="col-half">
                    <div class="wave-image">
                        <img
                            id="waveimg"
                            src="@/assets/membership/isic/wave-left.png"
                            alt="image in wave"
                        />
                    </div>
                </div>
                <div class="col-half">
                    <h2>{{ $t('membership.colhalf.whycardTitle') }}</h2>
                    <p>
                        {{ $t('membership.colhalf.overView1')
                        }}<b> {{ $t('membership.colhalf.overView2') }}</b
                        >{{ $t('membership.colhalf.overView3')
                        }}<b>{{ $t('membership.colhalf.overView4') }}</b
                        >{{ $t('membership.colhalf.overView5')
                        }}<b>{{ $t('membership.colhalf.overView6') }}</b
                        >{{ $t('membership.colhalf.overView7') }}
                    </p>
                    <p>
                        {{ $t('membership.colhalf.overView8')
                        }}<b>{{ $t('membership.colhalf.overView9') }}</b
                        >{{ $t('membership.colhalf.overView10')
                        }}<b>{{ $t('membership.colhalf.overView11') }}</b
                        >{{ $t('membership.colhalf.overView12') }}
                    </p>
                    <Button
                        external
                        to="https://weidian.com/item.html?itemID=2778597927&amp;wfr=c&amp;spider_token=8e9c"
                        :style="{ margin: '24px 0px' }"
                    >
                        {{ $t('membership.colhalf.becomeMemberBtnText') }}
                    </Button>
                </div>
            </div>
        </section>
        <section
            class="ifu-discount-banner"
            :style="{ backgroundColor: 'white' }"
        >
            <h2>{{ $t('membership.colhalf.isicDiscountTitle') }}</h2>
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
                    href="https://www.isic.org"
                    target="_blank"
                    >{{ $t('membership.colhalf.moreDiscount') }}</a
                >
            </div>
        </section>
        <section class="ifu-discount-banner">
            <h2>{{ $t('membership.colhalf.ifuDiscountTitle') }}</h2>
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
            <p class="display-mobile">
                {{ $t('membership.colhalf.becomeVIP') }}
            </p>
            <div class="row">
                <div class="col-half">
                    <div class="wave-image">
                        <img
                            src="@/assets/membership/isic/isic-sample.png"
                            alt="image in wave"
                        />
                    </div>
                </div>
                <div class="col-half">
                    <p class="display-desktop">
                        {{ $t('membership.colhalf.becomeVipDesktop') }}
                    </p>
                    <p>{{ $t('membership.colhalf.becomeVipContent') }}</p>
                    <Button to="/contact">{{
                        $t('membership.colhalf.buttonText')
                    }}</Button>
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
import nbaImage from '@/assets/membership/isic/nba.png';
import greImage from '@/assets/membership/isic/gre.png';
import studentUImage from '@/assets/membership/isic/studentuniverse.png';
import hooliImage from '@/assets/membership/isic/hooli.png';
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
            nbaImage,
            greImage,
            studentUImage,
            hooliImage,
        };
    },
    computed: {
        cardList() {
            return [
                {
                    image: AbenityImage,
                    description: this.$t('membership.cardList.imgDescription1'),
                },
                {
                    image: UCSDImage,
                    description: this.$t('membership.cardList.imgDescription2'),
                },
                {
                    image: nbaImage,
                    description: this.$t('membership.cardList.imgDescription3'),
                },
                {
                    image: avisImage,
                    description: this.$t('membership.cardList.imgDescription4'),
                },
                {
                    image: citypassImage,
                    description: this.$t('membership.cardList.imgDescription5'),
                },
                {
                    image: lenovoImage,
                    description: this.$t('membership.cardList.imgDescription6'),
                },
                {
                    image: universalImage,
                    description: this.$t('membership.cardList.imgDescription7'),
                },
                {
                    image: amcImage,
                    description: this.$t('membership.cardList.imgDescription8'),
                },
                {
                    image: amazonImage,
                    description: this.$t('membership.cardList.imgDescription9'),
                },
            ];
        },
        ifuList() {
            return [
                {
                    image: greImage,
                    description: this.$t(
                        'membership.cardList.imgDescription10',
                    ),
                },
                {
                    image: studentUImage,
                    description: this.$t(
                        'membership.cardList.imgDescription11',
                    ),
                },
                {
                    image: hooliImage,
                    description: this.$t(
                        'membership.cardList.imgDescription12',
                    ),
                },
            ];
        },
    },
};
</script>

<style lang="scss" scoped>
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
}

.col-half {
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
}

.display-mobile {
    display: none;
}

.display-desktop {
    font-weight: bold;
}

#more-discount {
    text-decoration: none;
    color: #22a5d8;

    &:hover {
        color: #f96291;
    }
}

.card-section {
    padding: 0;
}

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
