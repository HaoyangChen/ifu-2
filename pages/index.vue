<template>
    <div class="home">
        <Banner
            :title="$t('home.banner.subTitle')"
            :sub-title="$t('home.banner.title')"
            :button-text="$t('home.banner.buttonText')"
            to="/about"
            :background="bannerImage"
            title-color="#2C3E51"
        >
            <p v-html="$t('home.banner.description')" />
        </Banner>
        <div class="wuhan-coronavirus">
            <section class="container">
                <h2>{{ $t('home.coronavirus.subTitle') }}</h2>
                <img
                    class="mobile wuhan-mobile-image"
                    src="@/assets/home/wuhan-mobile-1.png"
                />
                <h1>{{ $t('home.coronavirus.title') }}</h1>
                <div class="wuhan-description">
                    <p>{{ $t('home.coronavirus.description') }}</p>
                </div>
                <Button
                    external
                    to="https://mp.weixin.qq.com/s/FUOLzynHbsRUq-6C4KmUwQ"
                    >{{ $t('home.coronavirus.buttonText') }}</Button
                >
                <img
                    class="mobile wuhan-mobile-image"
                    src="@/assets/home/wuhan-mobile-2.png"
                />
            </section>
            <section class="desktop container">
                <img src="@/assets/home/wuhan.png" />
            </section>
        </div>
        <section class="container part-1">
            <h2>{{ $t('home.ourWork.title') }}</h2>
            <div class="con">
                <div class="row left">
                    <div
                        v-for="(item, index) in workLeftList"
                        :key="index"
                        class="col"
                    >
                        <div class="content">
                            <img class="work-icon" :src="item.icon" />
                            <h3 class="work-title">{{ item.title }}</h3>
                            <p class="work-text">{{ item.text }}</p>
                        </div>
                    </div>
                </div>
                <img class="img" src="@/assets/home/works.png" alt="" />
                <div class="row right">
                    <div
                        v-for="(item, index) in workRightList"
                        :key="index"
                        class="col"
                    >
                        <div class="content">
                            <img class="work-icon" :src="item.icon" />
                            <h3 class="work-title">{{ item.title }}</h3>
                            <p class="work-text">{{ item.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="bg">
            <section class="container">
                <h2>{{ $t('home.ourServices.title') }}</h2>
                <p style="padding-bottom: 30px;">
                    {{ $t('home.ourServices.description') }}
                </p>
                <div class="desktop">
                    <Carousel :list="serviceList" />
                </div>
                <div class="mobile">
                    <HomeSwiper :list="serviceList" />
                </div>
            </section>
        </div>
        <section>
            <h2>{{ $t('home.eventList.title') }}</h2>
            <div class="event-left">
                <a :href="eventLink" target="_blank">
                    <img src="@/assets/home/event_7.png" alt="" />
                    <img
                        id="arrow2"
                        src="@/assets/home/Arrow.png"
                        alt="arrow"
                    />
                    <div class="event-text">
                        {{ $t('home.eventList.text1') }}
                    </div>
                </a>
            </div>
            <div class="event-right">
                <div class="event-list">
                    <Event
                        v-for="(event, index) in eventList"
                        :key="index"
                        class="event-item"
                        :image="event.image"
                        :link="event.link"
                        :text="event.text"
                    />
                </div>
            </div>
            <div class="more-events">
                <a
                    href="http://mp.weixin.qq.com/mp/homepage?__biz=MzU1MTE2MDkxOQ==&hid=2&sn=6787ada9887b05cdee1a4f95d6f67cc3&scene=18#wechat_redirect"
                    target="_blank"
                    >{{ $t('home.eventList.more') }}</a
                >
            </div>
        </section>
        <section class="about-us-section background-blue">
            <div class="container half-style">
                <div class="col-half">
                    <h2>{{ $t('home.aboutUs.title') }}</h2>
                    <h2>{{ $t('home.aboutUs.qrcode') }}</h2>
                    <p>{{ $t('home.aboutUs.text1') }}</p>
                    <p class="scan-qr-margin">
                        <b>{{ $t('home.aboutUs.text2') }}</b>
                    </p>
                </div>
                <div class="col-half col-half-center">
                    <div class="qr-image">
                        <img
                            src="@/assets/home/qrcode-follow.png"
                            alt="image in cohesion section"
                        />
                    </div>
                </div>
            </div>
        </section>
        <section class="about-us-section">
            <div class="container half-style">
                <div class="col-half">
                    <h2>{{ $t('home.studentGroup.title') }}</h2>
                    <p>{{ $t('home.studentGroup.text1') }}</p>
                    <p class="scan-qr-margin">
                        <b>{{ $t('home.studentGroup.text3') }}</b>
                    </p>
                </div>
                <div class="col-half">
                    <div class="student-group-image">
                        <img
                            class="qr-image"
                            src="@/assets/home/qrcode-student.png"
                            alt="QR Code for Student Group"
                        />
                        <img
                            :src="aprilAnnoucementImg[$i18n.locale]"
                            alt="April Annoucement"
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Button from '@/components/Button.vue';
import Event from '@/components/Event.vue';
import Carousel from '@/components/Carousel.vue';
import bannerImage from '@/assets/home/home_banner.png';

import eventImage1 from '@/assets/home/event_1.png';
import eventImage2 from '@/assets/home/event_2.png';
import eventImage3 from '@/assets/home/event_3.png';
import eventImage4 from '@/assets/home/event_4.png';
import eventImage5 from '@/assets/home/event_5.png';
import eventImage6 from '@/assets/home/event_6.png';
import serviceTotoroImage from '@/assets/home/service_totoro.png';
import ifuMembershipImage from '@/assets/home/IFU_membership.png';
import otherServiceImage from '@/assets/home/other_service.png';
import workImage1 from '@/assets/home/work_1.png';
import workImage2 from '@/assets/home/work_2.png';
import workImage3 from '@/assets/home/work_3.png';
import workImage4 from '@/assets/home/work_4.png';
import workImage5 from '@/assets/home/work_5.png';
import one from '@/assets/home/1.png';
import two from '@/assets/home/2.png';
import three from '@/assets/home/3.png';
import HomeSwiper from '@/components/HomeSwiper.vue';

import aprilAnnoucementImgZh from '@/assets/home/april-annoucement.png';
import aprilAnnoucementImgEn from '@/assets/home/april-annoucement-en.png';

export default {
    components: {
        Banner,
        Button,
        Event,
        Carousel,
        HomeSwiper,
    },
    data() {
        return {
            bannerImage,
            eventLink:
                'https://mp.weixin.qq.com/s?__biz=MzU1MTE2MDkxOQ==&mid=2247498115&idx=3&sn=20a54f7f102af1e73b54598589bd49b7&chksm=fb9724bbcce0adad7c9b15d53a4ae6325574498324813dda4ee9d2a4dc241e8ef68a92ff3922&token=1217661680&lang=zh_CN#rd',
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                paginationClickable: true,
                slidesPerView: 3,
                spaceBetween: 20,
                breakpoints: {
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                },
            },
            aprilAnnoucementImg: {
                zh: aprilAnnoucementImgZh,
                en: aprilAnnoucementImgEn,
            },
        };
    },
    computed: {
        workLeftList() {
            return [
                {
                    icon: workImage1,
                    title: this.$t('home.ourWork.workList.infoAsymmetry'),
                    text: this.$t('home.ourWork.workList.infoText'),
                },
                {
                    icon: workImage2,
                    title: this.$t('home.ourWork.workList.security'),
                    text: this.$t('home.ourWork.workList.securityText'),
                },
                {
                    icon: workImage3,
                    title: this.$t('home.ourWork.workList.socialMedia'),
                    text: this.$t('home.ourWork.workList.mediaText'),
                },
            ];
        },
        workRightList() {
            return [
                {
                    icon: workImage4,
                    title: this.$t('home.ourWork.workList.intimateService'),
                    text: this.$t('home.ourWork.workList.serviceText'),
                },
                {
                    icon: workImage5,
                    title: this.$t('home.ourWork.workList.volunteer'),
                    text: this.$t('home.ourWork.workList.volunteerText'),
                },
            ];
        },
        serviceList() {
            return [
                {
                    title: this.$t('home.ourServices.serviceList.totoroTitle'),
                    backgroundColor: '#34BBC9',
                    text: this.$t('home.ourServices.serviceList.totoroText'),
                    image: serviceTotoroImage,
                    subTitle: this.$t(
                        'home.ourServices.serviceList.totorosubTitle',
                    ),
                    icon: one,
                },
                {
                    title: this.$t(
                        'home.ourServices.serviceList.membershipTitle',
                    ),
                    backgroundColor: '#C9D74A',
                    text: this.$t(
                        'home.ourServices.serviceList.membershipText',
                    ),
                    image: ifuMembershipImage,
                    subTitle: this.$t(
                        'home.ourServices.serviceList.membershipsubTitle',
                    ),
                    icon: two,
                },
                {
                    title: this.$t('home.ourServices.serviceList.otherTitle'),
                    backgroundColor: '#F96291',
                    text: this.$t('home.ourServices.serviceList.otherText'),
                    image: otherServiceImage,
                    subTitle: this.$t(
                        'home.ourServices.serviceList.othersubTitle',
                    ),
                    icon: three,
                },
            ];
        },
        eventList() {
            return [
                {
                    image: eventImage1,
                    text: this.$t('home.eventList.text2'),
                    link:
                        'https://mp.weixin.qq.com/s?__biz=MzU1MTE2MDkxOQ==&mid=2247486016&idx=1&sn=020f4cf8f6c151c7cd67d2e493109824&chksm=fb94d778cce35e6e7f28983bc56972afa1e9802dc31ea4fc8c3b8d3ec868ff2b78a4dd7035ca&token=1217661680&lang=zh_CN#rd',
                },
                {
                    image: eventImage2,
                    text: this.$t('home.eventList.text3'),
                    link: 'https://mp.weixin.qq.com/s/q9nh0t4RxJu6wyd_dICtag',
                },
                {
                    image: eventImage3,
                    text: this.$t('home.eventList.text4'),
                    link:
                        'https://mp.weixin.qq.com/s?__biz=MzU1MTE2MDkxOQ==&mid=2247486143&idx=1&sn=bd6151cd3e8f5aed1a4b34604426a592&chksm=fb94d787cce35e91c270bf50b678cacadff08c479698a784831fc5b7c0dd42f343ed82197778&token=1217661680&lang=zh_CN#rd ',
                },
                {
                    image: eventImage4,
                    text: this.$t('home.eventList.text5'),
                    link:
                        'https://mp.weixin.qq.com/s?__biz=MzU1MTE2MDkxOQ==&mid=2247488360&idx=1&sn=5e15c83f97939f8d5e8457be6bb8d8d0&chksm=fb94ce50cce3474642187c02ef93af62df88cfed4aa6dac82c0c455b9bdc3d53576051c10283&token=1217661680&lang=zh_CN#rd',
                },
                {
                    image: eventImage5,
                    text: this.$t('home.eventList.text6'),
                    link:
                        'https://mp.weixin.qq.com/s?__biz=MzU1MTE2MDkxOQ==&mid=2247493852&idx=1&sn=a8b8db44d332dc02af7125aa394b44cd&chksm=fb9735e4cce0bcf2b25650408230619e66acf4ff4fdb2cc3fc38653a69f7fb6c5c6bb83840db&token=1217661680&lang=zh_CN#rd',
                },
                {
                    image: eventImage6,
                    text: this.$t('home.eventList.text7'),
                    link:
                        'https://mp.weixin.qq.com/s?__biz=MzU1MTE2MDkxOQ==&mid=2247494272&idx=1&sn=9d63bd2ce8273c06c7b451b7bae8e1f5&chksm=fb9737b8cce0beae781e5dde3ac9207668c840ec8313dcd0a067127adb4a827409230d545df2&token=1217661680&lang=zh_CN#rd',
                },
            ];
        },
    },
    head() {
        return {
            title: this.$t('header.home'),
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$t('home.banner.description'),
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content:
                        '留学生海外援助, 公益组织, 志愿者联盟, 美国留学安全, 美国留学建议, 美国留学注意事项, 在美国遇到困难可以求助的机构, 在美国留学遇到困难怎么办, 孩子在美国留学不放心怎么办, 留学生实时动态, 孩子一个人在国外上学, International Family Union, IFU, NGO, International student help usa, Missing international student, International student mental health, International student NGO, Volunteer for international students, Study abroad pressure, Study abroad anxiety, International education NGO donation, International student NGO donation, International student NGO, Chinese student help overseas, Study abroad safety sharing, Study abroad experience',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
/deep/ .banner {
    // 缩短 Banner 两行标题间的距离
    .subtitle-text {
        margin-bottom: 0px;
    }

    .title-text {
        margin-top: 0px;
    }
}

.wuhan-coronavirus {
    background: $background-light-blue;
    display: flex;

    h1 {
        font-size: $h1-size;
        font-weight: normal;
    }

    h2 {
        padding-top: 80px;
        padding-bottom: 0px;
    }

    section {
        flex-basis: 50%;
        padding: 0 0 0 $padding-horizontal;
        line-height: 31px;
    }

    .wuhan-description {
        padding: 0 0 0 18px;
        margin: 35px 0;
        border-left: 5px solid $red;
        border-radius: 4px;
        position: relative;
        left: -18px;
    }

    img {
        vertical-align: middle;
    }
}

.container p {
    font-family: PingFang SC;
    line-height: 31px;
    font-size: $text-size;
    letter-spacing: 0.02em;
    margin: 0;
}
.work-icon {
    display: none;
}
.part-1 .con {
    p {
        font-size: 14px;
    }
    h3 {
        font-size: 18px;
        margin: 0;
        font-weight: 400;
    }
}

.event-left {
    display: inline-block;
    vertical-align: top;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    width: 23%;
    box-sizing: border-box;
    margin: 5px 0 5px 5px;
    height: calc((186px + 5px) * 2);

    img {
        min-width: 100%;
    }

    #arrow2 {
        display: none;
    }

    &:hover {
        background: #000;
        img {
            opacity: 0.5;
        }
        #arrow2 {
            opacity: 1;
            position: absolute;
            top: 37%;
            left: 40%;
            height: auto;
            min-width: auto;
            display: flex;
        }
    }
}

.event-right {
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    width: 75%;

    .event-list {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;

        .event-item {
            flex-basis: 31%; // 强制三个一排
            height: 186px;
            margin-bottom: 30px;
            margin: 5px;
            font-size: 14px;
        }
    }
}

.event-text {
    width: 100%;
    height: 50px;
    text-align: center;
    box-sizing: border-box;
    position: absolute;
    bottom: 0px;
    background-color: rgba(78, 189, 247, 0.9);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
}

.more-events {
    text-align: right;
    margin-top: 30px;

    a {
        color: $button-color;
        text-decoration: none;

        &:hover {
            color: $dark-pink;
        }
    }
}

h2 {
    margin: 0;
    padding: 0 0 30px 0;
}
.row {
    display: inline-block;
    vertical-align: top;
    width: 32%;
}
.left {
    text-align: left;
    padding-right: 30px;
}
.left .col:first-child {
    margin-bottom: 40px;
    margin-right: -60px;
}
.left .col:nth-child(2) {
    margin-bottom: 40px;
}
.left .col:last-child {
    margin-right: -35px;
}
.right {
    text-align: left;
    padding-left: 30px;
}
.right .col:first-child {
    padding-bottom: 85px;
}
img {
    vertical-align: top;
    height: fit-content;
}
.col {
    padding-bottom: 6px;
}
.con {
    text-align: center;
    display: flex;
}
.bg {
    background: url('../assets/home/bg.png') no-repeat;
    padding: 80px 0 0 0;
}
.text-container {
    padding-top: 20px;
}
.text-container {
    span {
        font-weight: 600;
        line-height: 31px;
        letter-spacing: 0.02em;
    }
    p {
        margin: 0;
        font-size: $text-size;
        line-height: 31px;
        letter-spacing: 0.02em;
    }
}
.service-left {
    display: inline-block;
    width: 46%;
    vertical-align: top;
    padding-right: 70px;
    div {
        padding: 20px 0;
    }
}
.service-right {
    display: inline-block;
    width: 46%;
    vertical-align: top;
    div {
        padding: 20px 0;
    }
}

.about-us-section {
    padding-top: 60px;

    .half-style {
        display: flex;
        flex-wrap: wrap;
    }

    .col-half {
        flex: 0 0 50%;
        max-width: 50%;
    }

    .col-half-center {
        justify-content: center;
        align-items: center;
        display: flex;
    }

    .scan-qr-margin {
        margin: 30px 0;
    }

    .col-half-left {
        justify-content: left;
        align-items: center;
        display: flex;
    }

    .student-group-image {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        .qr-image {
            max-width: 300px;
            max-height: 300px;
        }
    }
}

.background-blue {
    background-color: $background-light-blue;
}

@media (max-width: $mobile-max-width) {
    .wuhan-coronavirus {
        flex-direction: column;

        h1 {
            font-size: $h2-size;
            font-weight: 600;
            margin: 0;
        }

        h2 {
            padding: 30px 0 0 0;
        }

        section {
            flex-basis: 100%;
            padding: 15px 30px;
            border-top: 5px solid $red;
            border-bottom: 5px solid $red;

            .wuhan-mobile-image {
                max-width: 100%;
                max-height: calc(100vw - 100px);
                margin: 30px auto;
            }

            .wuhan-description {
                left: 0px;
                border: none;
                margin-bottom: 0;
                padding: 0;
            }
        }
    }

    .work-icon {
        display: inline;
        margin-right: 8px;
    }
    .work-title {
        display: inline;
        line-height: 33px;
    }
    .container .row .work-text {
        margin-top: 10px;
    }

    h2 {
        padding: 30px 0;
    }

    h3 {
        margin: 0;
    }
    .container {
        p {
            font-size: 14px;
        }
    }
    .row {
        width: 100%;
    }
    .left {
        text-align: left;
        .col:first-child {
            margin-bottom: 0;
        }
        .col:nth-child(2) {
            margin-bottom: 0;
        }
    }
    .left,
    .right {
        .col:first-child {
            margin-bottom: 0;
            padding-bottom: 30px;
        }
    }

    .con {
        flex-direction: column;

        .img {
            display: none;
        }

        .col {
            padding-bottom: 30px;
            width: 100%;
        }
    }

    .right {
        padding-left: 0;
        margin-top: 0px;
    }

    .text-container {
        .service-left {
            width: 100%;
            padding-right: 0;
        }

        .service-right {
            width: 100%;
        }

        span {
            font-size: 14px;
        }
    }
    .bg {
        padding-bottom: 50px;
    }

    .event-left {
        display: none;
    }

    .event-right {
        width: 100%;

        .event-list {
            .event-item {
                flex-basis: 100%;
                min-height: 100%;
                margin-bottom: 30px;
            }
        }
    }

    .about-us-section {
        .half-style {
            flex-direction: column;
        }

        .col-half {
            max-width: 100%;
        }

        .qr-image > img {
            width: 100%;
            height: 90%;
        }

        .student-group-image {
            flex-direction: column;

            .qr-image {
                margin: 10px;
            }
        }
    }
}
</style>
