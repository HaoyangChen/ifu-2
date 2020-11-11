<template>
    <div>
        <Banner
            :title="$t('volunteer.bannerTitle')"
            :description="$t('volunteer.bannerDescrip')"
            :button-text="$t('volunteer.bannerText')"
            external
            to="https://docs.google.com/forms/d/e/1FAIpQLSfQSwvr7oNnFr5_T2SEKr79CwxXJglFjs6zFslk8mEweCJsMw/viewform"
            :background="bannerImage"
        />
        <div class="section-mission">
            <section>
                <h3>{{ $t('volunteer.missionHeader') }}</h3>
                <p>{{ $t('volunteer.missionParagraph') }}</p>
            </section>
            <div>
                <img src="@/assets/volunteer/section-mission.png" />
            </div>
        </div>
        <div class="section-activity">
            <div>
                <img
                    src="@/assets/volunteer/icon-emergency.svg"
                    alt="emergency icon"
                />
                <h2>{{ $t('volunteer.activityHeader') }}</h2>
                <p>
                    {{ $t('volunteer.activityParagraph') }}
                </p>
            </div>
            <div>
                <img src="@/assets/volunteer/icon-info.svg" alt="info icon" />
                <h2>{{ $t('volunteer.activityHeader2') }}</h2>
                <p>
                    {{ $t('volunteer.activityParagraph2') }}
                </p>
            </div>
            <div>
                <img
                    src="@/assets/volunteer/icon-program.svg"
                    alt="program icon"
                />
                <h2>{{ $t('volunteer.activityHeader3') }}</h2>
                <p>
                    {{ $t('volunteer.activityParagraph3') }}
                </p>
            </div>
        </div>
        <section class="section-school">
            <div>
                <h2 class="color-underline east-color title">
                    {{ $t('volunteer.schoolHeader') }}
                </h2>
                <p v-html="$t('volunteer.eastPara1')" />
                <p v-html="$t('volunteer.eastPara2')" />
                <p v-html="$t('volunteer.eastPara3')" />
                <p v-html="$t('volunteer.eastPara4')" />
                <p v-html="$t('volunteer.eastPara5')" />
                <p v-html="$t('volunteer.eastPara6')" />
                <p v-html="$t('volunteer.eastPara7')" />
                <p v-html="$t('volunteer.eastPara8')" />
                <p v-html="$t('volunteer.eastPara9')" />
                <p v-html="$t('volunteer.eastPara10')" />
                <p v-html="$t('volunteer.eastPara11')" />
                <p v-html="$t('volunteer.eastPara12')" />
            </div>
            <div>
                <h2 class="color-underline west-color title">
                    {{ $t('volunteer.west') }}
                </h2>
                <p v-html="$t('volunteer.westPara1')" />
                <p v-html="$t('volunteer.westPara2')" />
                <p v-html="$t('volunteer.westPara3')" />
                <p v-html="$t('volunteer.westPara4')" />
                <p v-html="$t('volunteer.westPara5')" />
                <p v-html="$t('volunteer.westPara6')" />
                <p v-html="$t('volunteer.westPara7')" />
                <p v-html="$t('volunteer.westPara8')" />
            </div>
            <div>
                <h2 class="color-underline canada-color title">
                    {{ $t('volunteer.caEn') }}
                </h2>
                <p v-html="$t('volunteer.caPara1')" />
                <p v-html="$t('volunteer.caPara2')" />
                <p v-html="$t('volunteer.caPara3')" />
                <p v-html="$t('volunteer.caPara4')" />
                <p v-html="$t('volunteer.caPara5')" />
            </div>
            <div>
                <h2 class="color-underline singapore-color title">
                    {{ $t('volunteer.singa') }}
                </h2>
                <p v-html="$t('volunteer.singaPara1')" />
            </div>
            <div class="bubble-section">
                <div class="pic">
                    <h3>{{ $t('volunteer.picHeader') }}</h3>
                    <span>{{ $t('volunteer.picPara') }}</span>
                    <br />
                    <a
                        class="link"
                        target="_blank"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfQSwvr7oNnFr5_T2SEKr79CwxXJglFjs6zFslk8mEweCJsMw/viewform"
                        >{{ $t('volunteer.picLink') }}
                    </a>
                </div>
            </div>
        </section>
        <section class="event-review">
            <div class="event-review-left">
                <h3>{{ $t('volunteer.review') }}</h3>
                <p>
                    {{ $t('volunteer.reviewPara') }}
                </p>
                <div>
                    <a
                        href="https://mp.weixin.qq.com/s/WnYCL5vHY7UL3yZfieRTrQ"
                        target="_blank"
                        >{{ $t('volunteer.reviewLink') }}</a
                    >
                </div>
            </div>
            <div class="event-review-right desktop">
                <img src="@/assets/volunteer/event-recap-pic.png" />
                <div>
                    <a
                        href="https://mp.weixin.qq.com/s/WnYCL5vHY7UL3yZfieRTrQ"
                        target="_blank"
                        >{{ $t('volunteer.reviewLink') }}</a
                    >
                </div>
            </div>
        </section>
        <div class="swiper-section">
            <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                    <div
                        v-for="(item, index) in swiperList"
                        :key="index"
                        class="swiper-slide"
                    >
                        <div class="img zh-image">
                            <img :src="item.image" />
                            <p>{{ item.title }}</p>
                            <p>{{ item.subTitle }}</p>
                        </div>
                        <div class="img en-image">
                            <img :src="item.image" />
                            <p>{{ item.enTitle }}</p>
                            <p>{{ item.subTitle }}</p>
                        </div>
                    </div>
                </div>
                <div
                    slot="button-prev"
                    class="swiper-button-prev desktop"
                ></div>
                <div
                    slot="button-next"
                    class="swiper-button-next desktop"
                ></div>
                <div class="swiper-pagination mobile"></div>
            </div>
        </div>
        <section class="become-campus-volunteer">
            <div class="volunteer-become">
                <h2>{{ $t('volunteer.becomeHeader') }}</h2>
                <p v-html="$t('volunteer.becomePara')" />
            </div>
            <div class="campus-volunteer-lr">
                <div class="requirement">
                    <p>{{ $t('volunteer.requirePara') }}</p>
                    <ul>
                        <li>
                            {{ $t('volunteer.li1') }}
                        </li>
                        <li>
                            {{ $t('volunteer.li2') }}
                        </li>
                        <li>
                            {{ $t('volunteer.li3') }}
                        </li>
                    </ul>
                    <br />
                    <p>{{ $t('volunteer.requirePara2') }}</p>
                    <ul>
                        <li>{{ $t('volunteer.li4') }}</li>
                        <li>{{ $t('volunteer.li5') }}</li>
                    </ul>
                </div>
                <div class="ready-to-join">
                    <!-- <img
                        class="mobile-frame mobile"
                        src="@/assets/volunteer/frame-mobile.png"
                    /> -->
                    <div class="content">
                        <div class="content-text">
                            <h2>{{ $t('volunteer.join') }}</h2>
                            <p>
                                {{ $t('volunteer.joinPara') }}
                            </p>
                        </div>

                        <Button
                            external
                            to="https://docs.google.com/forms/d/e/1FAIpQLSfQSwvr7oNnFr5_T2SEKr79CwxXJglFjs6zFslk8mEweCJsMw/viewform"
                            >{{ $t('volunteer.button') }}</Button
                        >
                    </div>
                    <img src="@/assets/volunteer/Kimmy.png" alt="kimmy" />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper';
import Banner from '@/components/Banner.vue';
import Button from '@/components/Button.vue';
import bannerImage from '@/assets/volunteer/banner.png';
import swiperImage1 from '@/assets/volunteer/carousel/1.png';
import swiperImage2 from '@/assets/volunteer/carousel/2.png';
import swiperImage3 from '@/assets/volunteer/carousel/3.png';
import 'swiper/css/swiper.css';

export default {
    directives: {
        swiper: directive,
    },
    components: {
        Banner,
        Button,
    },
    data() {
        return {
            bannerImage,
            swiperOption: {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                coverflowEffect: {
                    rotate: 0,
                    stretch: 150,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                },
            },
        };
    },
    computed: {
        swiperList() {
            return [
                {
                    title: '2017加州中国留学生家长交流峰会（上海）',
                    enTitle:
                        '2017 Studying Abroad in California - Students & Parents Summit - Shanghai',
                    image: swiperImage1,
                },
                {
                    title: 'IFU X Shelter Helper 募集善款活动',
                    enTitle: 'IFU X Shelter Helper Fundraising Event',
                    image: swiperImage2,
                },
                {
                    title: '农历新年聚会',
                    enTitle: 'Lunar New Year Event',
                    image: swiperImage3,
                },
            ];
        },
    },
};
</script>

<style lang="scss" scoped>
.section-mission {
    display: flex;
    background-color: #f1f9ff;
    div {
        background-color: #c9d74a;
    }
    h3 {
        font-size: 30px;
        font-weight: 600;
    }

    p {
        line-height: 31px;
    }
    img {
        height: 100%;
    }
}

.section-activity {
    display: flex;
    justify-content: center;

    > div {
        flex-basis: 33.3%;
        text-align: center;
        padding: 80px 4%;
        color: #ffffff;

        > p {
            text-align: left;
            padding: 0 25px;
            line-height: 31px;
        }
    }

    div:first-of-type {
        background-color: #c9d74a;
    }
    div:nth-of-type(2) {
        background-color: #fda63b;
    }
    div:nth-of-type(3) {
        background-color: #54bef5;
    }
}

.section-school {
    display: flex;
    justify-content: space-between;
    color: #fff;
    background: url(~assets/volunteer/section-school.png) no-repeat;
    flex-wrap: wrap;
    padding-bottom: 100px;

    .title {
        font-weight: bolder;
    }
    .color-underline {
        border-bottom: 5px solid;
        width: fit-content;
    }
    .east-color {
        border-color: #34bbc9;
    }
    .west-color {
        border-color: #c9d74a;
    }
    .canada-color {
        border-color: #f96191;
    }
    .singapore-color {
        border-color: #fda63b;
    }

    div {
        width: 25%;
        height: 250px;
        overflow: visible;
    }
    div p {
        text-decoration: underline;
    }
    :lang(en) {
        text-decoration: none;
        padding-right: 0.5%;
    }

    .bubble-section {
        width: 100%;
    }
    .pic {
        width: 337px;
        height: 289px;
        background-image: url(~assets/volunteer/bubble.png);
        position: relative;
        left: 70%;
        box-sizing: border-box;
        padding-left: 75px;
        padding-top: 50px;
        padding-right: 50px;
        color: black;
        text-decoration: none;
        line-height: 35px;
        h3 {
            font-size: 20px;
        }
        span {
            font-size: 15px;
        }
        .link {
            color: #4ebdf7;
            text-decoration: none;
        }
        .link:hover {
            color: #f96291;
        }
    }
    :lang(en).pic {
        line-height: 25px;
        padding-left: 50px;
    }
    :lang(zh) div p {
        text-decoration: underline;
    }
}

.event-review {
    display: flex;
    // padding: 80px 6%;

    .event-review-left {
        line-height: 31px;
        flex-basis: 50%;

        h3 {
            font-size: 30px;
            font-weight: 600;
        }
        div {
            background-image: url(~assets/volunteer/link-image.png);
            background-repeat: no-repeat;
            background-size: 21px 20px;
            background-position: 0% 40%;

            &:hover {
                background-image: url(~assets/volunteer/link-image-hover.png);
                a {
                    color: #f96291;
                }
            }

            a {
                padding-left: 25px;
                font-size: 18px;
                color: #197599;
            }
            img {
                width: 21px;
                height: 20px;
            }
        }
    }
    .event-review-right {
        position: relative;
        flex-basis: 50%;
        padding: 50px 0 0 100px;

        div {
            background-image: url(~assets/volunteer/link-image.png);
            background-repeat: no-repeat;
            background-size: 26px 28px;
            background-position: 0% 40%;
            position: absolute;
            top: 10em;
            left: 35%;

            a {
                padding-left: 30px;
                font-size: 30px;
                color: #197599;
            }

            &:hover {
                background-image: url(~assets/volunteer/link-image-hover.png);
                a {
                    color: #f96291;
                }
            }
        }

        img {
            width: 469px;
            height: auto;
        }
    }
}

.swiper-section {
    .swiper-button-prev,
    .swiper-button-next {
        color: white;
        font-weight: bolder;
    }

    .swiper-wrapper {
        .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            .img {
                height: 650px;
                width: 80%;
                img {
                    width: 100%;
                    height: 80%;
                    object-fit: cover;
                    border-radius: 0.5rem;
                }
            }
            :lang(en).zh-image {
                display: none;
            }
            :lang(zh).en-image {
                display: none;
            }
        }
    }
}

/deep/ .swiper-pagination-bullet {
    background: $red;
    margin: 5px;

    &:not(.swiper-pagination-bullet-active) {
        background: #202020;
        opacity: 1;
    }
}

.swiper-pagination {
    padding-top: 10px;
    margin-bottom: 35px;
    position: static;
}

.become-campus-volunteer {
    background: url(~assets/volunteer/become-campus-volunteer.svg) no-repeat;
    background-color: rgba(201, 215, 74, 0.2);

    .volunteer-become {
        width: 62%;
        line-height: 31px;
        color: #ffffff;
        h2 {
            font-weight: bolder;
        }
    }
    .campus-volunteer-lr {
        display: flex;
        margin-top: 70px;
        .requirement {
            background-color: white;
            box-sizing: border-box;
            padding: 30px;
            width: 50%;
            margin-top: 0;
            line-height: 35px;
            p {
                margin-left: 25px;
                font-weight: bolder;
            }
        }
        :lang(en).requirement {
            margin-top: -5px;
        }
        .ready-to-join {
            position: relative;
            top: 40px;
            width: 50%;
            padding-left: 50px;
            box-sizing: border-box;
            .content {
                width: 461px;
                height: 333px;
                background-image: url(~assets/volunteer/frame.png);
                box-sizing: border-box;
                padding-left: 70px;
                padding-top: 40px;
                padding-right: 105px;
                line-height: 30px;
                h2 {
                    font-weight: bolder;
                }

                /deep/ a {
                    button {
                        background-color: #c9d74a;
                        box-shadow: 0px 10px 15px rgba(201, 215, 74, 0.25);
                    }
                    button:hover {
                        color: #c9d74a;
                        background-color: white;
                        box-shadow: 0px 10px 15px white;
                        border: 1px solid #c9d74a;
                    }
                }
            }
            :lang(en).content {
                background-image: url(~assets/volunteer/frame-en.png);
                background-size: 100%;
                height: 353px;
                padding-right: 95px;
            }
            img {
                position: relative;
                left: 400px;
            }
        }
    }
}
:lang(en).become-campus-volunteer {
    background: url(~assets/volunteer/become-campus-volunteer-en.png) no-repeat;
    background-color: rgba(201, 215, 74, 0.2);
    background-size: 100%;
}

@media (max-width: $mobile-max-width) {
    .section-mission {
        flex-direction: column;
        h3 {
            font-size: 24px;
        }
        > div {
            > img {
                width: 100%;
                height: auto;
            }
        }
    }

    .section-activity {
        flex-direction: column;
        flex-basis: auto;
    }

    .section-school {
        flex-direction: column;
        background-image: url(~assets/volunteer/school-section-mobile.png);
        background-size: 100%;
        width: 100%;

        // background: url(/_nuxt/assets/volunteer/section-school-mobile.png);

        > div {
            width: auto;
            height: auto;
            margin: 5% 0;

            p {
                margin: 0.5em 0;
            }
        }

        img {
            height: 252px;
            width: auto;
            display: none;
        }
        .pic {
            left: 0;
            padding: 60px 75px 0 75px;

            h3 {
                font-size: 25px;
                margin-bottom: 0;
            }
            a {
                padding-left: 5%;
            }
        }
        :lang(en).pic {
            line-height: 30px;
            left: 0;
            padding-right: 0;
            span {
                display: inline-block;
                padding-right: 50px;
            }
            a {
                padding: 0;
            }
        }
    }

    .swiper-section {
        .swiper-button-prev,
        .swiper-button-next {
            color: white;
            font-weight: bolder;
        }

        .swiper-wrapper {
            .swiper-slide {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                .img {
                    height: auto;
                    width: 360px;
                    background-color: #f1f9ff;
                    img {
                        width: 360px;
                        height: auto;
                        // object-fit: cover;
                        // border-radius: 0.5rem;
                    }
                }
            }
        }
    }

    .event-review {
        width: 100%;
        padding-bottom: 30px;

        .event-review-left {
            flex-basis: 100%;

            h3 {
                font-size: 24px;
            }
            div {
                a {
                    font-size: 14px;
                }
            }
        }
    }

    .become-campus-volunteer {
        background-image: none;
        padding: 0;

        .volunteer-become {
            width: 100%;
            background-color: #c9d74a;
            padding: 15px 30px;
        }
        .campus-volunteer-lr {
            margin-top: 25px;
            width: 100%;
            flex-direction: column;
            align-items: center;

            .requirement {
                padding: 2%;
                padding-right: 5%;
                width: 100%;
                background-color: rgba(201, 215, 74, 0.02);
            }

            .ready-to-join {
                width: 100%;
                padding: 0;
                height: 525px;
                display: flex;
                flex-direction: column;
                align-items: center;

                // .mobile-frame {
                //     position: absolute;
                //     left: 25%;
                //     top: 0;
                //     width: 331px;
                //     height: auto;
                //     display: none;
                // }
                .content {
                    // left: 5%;
                    box-sizing: border-box;
                    padding-top: 35px;
                    padding-right: 0;
                    padding-left: 0;
                    background-image: url(~assets/volunteer/frame-mobile.png);
                    background-repeat: no-repeat;
                    background-size: 100%;
                    width: 345px;
                    height: 291px;
                    // height: auto;
                    position: absolute;

                    /deep/ a {
                        button {
                            background-color: #c9d74a;
                            margin: 0 0 55px 110px;
                        }
                    }
                    .content-text {
                        h2 {
                            margin-left: 2.5em;
                        }
                        p {
                            margin: 1em 3.8em;
                        }
                    }
                }
                :lang(en).content {
                    background-image: url(~assets/volunteer/frame-mobile.png);
                    background-repeat: no-repeat;
                    background-size: 100%;
                    width: 345px;
                    height: 291px;
                    padding-right: 0;
                    .content-text {
                        h2 {
                            margin: 0.5em 0 0 2.5em;
                        }
                        p {
                            margin-top: 0.5em;
                        }
                    }
                }

                img {
                    top: 280px;
                    left: 0;
                }
            }
        }
    }
}
</style>
