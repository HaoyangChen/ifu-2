<template>
    <div class="home">
        <Banner
            :title="$t('home.banner.subTitle')"
            :sub-title="$t('home.banner.title')"
            :button-text="$t('home.banner.buttonText')"
            :to="localePath('/about')"
            :background="bannerImage"
            title-color="#2C3E51"
        >
            <p v-html="$t('home.banner.description')" />
        </Banner>
        <div class="bg-carnival">
            <section class="container">
                <div class="carnival-event">
                    <img
                        id="carnival-person1"
                        :src="carnivalPerson1"
                        alt="carnival section decoration1"
                    />
                    <img
                        id="carnival-person2"
                        :src="carnivalPerson2"
                        alt="carnival section decoration2"
                    />
                    <img
                        id="carnival-person3"
                        :src="carnivalPerson3"
                        alt="carnival section decoration3"
                    />
                    <div>
                        <h1>{{ $t('home.carnival.title') }}</h1>
                        <h2 v-html="$t('home.carnival.subTitle')" />
                        <div class="carnival-description">
                            <p v-html="$t('home.carnival.description')" />
                        </div>
                        <div class="carnival-btn">
                            <Button :to="localePath('/carnival')">{{
                                $t('home.carnival.buttonText')
                            }}</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="wuhan-coronavirus">
            <section
                :style="{
                    paddingBottom: '80px',
                }"
                class="container"
            >
                <h2>{{ $t('home.coronavirus.subTitle') }}</h2>
                <img
                    class="mobile wuhan-mobile-image"
                    src="@/assets/home/wuhan-mobile-1.png"
                />
                <h1>{{ $t('home.coronavirus.title') }}</h1>
                <div class="wuhan-description">
                    <p v-html="$t('home.coronavirus.description')" />
                </div>
                <Button
                    external
                    to="https://mp.weixin.qq.com/s/DYgmlzgmHrr9_-T0UjdGYw"
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
                <p style="padding-bottom: 30px">
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
        <!-- <div class="announcement-row">
            <section class="announcement-section">
                <div class="col-left col">
                    10月各个UC学校的同学们即将面临第一次期中考试，多多罗学长学姐特别策划了第一期公益期中复习辅导课程，报名即可获得学霸学长学姐精心定制的复习计划，一起线上模拟考试，练习考试真题，复习重点考点！另外参与本活动的同学们可以免费获取配套复习笔记大礼包一份！
                </div>
                <div class="col-right col">
                    无托福无SAT的学长是如何进入波士顿大学并且收获满绩点GPA的？
                    想要转学的同学们需要在入学的时候做什么准备？
                    如何通过学术和社团工作有效优化个人经历？
                    多多罗学术讲座就在本月，大一大二转学必读
                </div> -->
        <!-- <h2>{{ $t('home.announcement.title') }}</h2>
                <p>
                    {{ $t('home.announcement.description') }}
                </p>
                <ul>
                    <li>
                        <span>{{ $t('home.announcement.1.time') }}</span
                        >{{ $t('home.announcement.1.name') }}
                    </li>
                    <li>
                        <span>{{ $t('home.announcement.2.time') }}</span
                        >{{ $t('home.announcement.2.name') }}
                    </li>
                    <li>
                        <span>{{ $t('home.announcement.3.time') }}</span
                        >{{ $t('home.announcement.3.name') }}
                    </li>
                    <li>
                        <span>{{ $t('home.announcement.4.time') }}</span
                        >{{ $t('home.announcement.4.name') }}
                    </li>
                </ul>
                <div class="qr-announcement">
                    <p v-html="$t('home.announcement.qrDescription')" />

                    <img src="@/assets/home/qrcode-announcements.png" />
                </div> -->
        <!-- </section> -->
        <!-- <section class="announcement-image">
                <img src="@/assets/home/announcement.svg" />
            </section> -->
        <!-- </div> -->
        <section class="container report">
            <div class="report-container">
                <div class="report left">
                    <h2>{{ $t('home.report.leftTitle') }}</h2>
                    <p>{{ $t('home.report.leftBody') }}</p>
                    <img src="@/assets/home/clipboard.svg" alt="Clipboard" />
                    <Button
                        external
                        to="https://1drv.ms/b/s!AjLe8dyJJ0x9bV-0xYwPiPPiWZs"
                        >{{ $t('home.report.leftButton') }}</Button
                    >
                </div>
                <div class="report right">
                    <h2>{{ $t('home.report.rightTitle') }}</h2>
                    <p>
                        {{ $t('home.report.rightBody') }}
                    </p>
                    <img
                        src="@/assets/home/mental-health-report.svg"
                        alt="Mental health report"
                    />
                    <Button
                        class="right-button right-button-en"
                        external
                        to="https://1drv.ms/b/s!AjLe8dyJJ0x9a-u4TrYc80u0PqQ"
                        >{{ $t('home.report.rightButton') }}</Button
                    >
                    <Button
                        class="right-button right-button-zh"
                        external
                        to="https://1drv.ms/b/s!AjLe8dyJJ0x9bBnrsODBQgJHWZE"
                        >{{ $t('home.report.rightButton') }}</Button
                    >
                </div>
            </div>
        </section>
        <section class="about-us-section">
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
        <section class="about-us-section background-blue">
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
                    </div>
                </div>
            </div>
        </section>
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
        <back-to-top text="Back to top"></back-to-top>
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
import otherServiceImage from '@/assets/home/partner_service.png';
import peerMentorImage from '@/assets/home/peer_mentor.png';
import workImage1 from '@/assets/home/work_1.png';
import workImage2 from '@/assets/home/work_2.png';
import workImage3 from '@/assets/home/work_3.png';
import workImage4 from '@/assets/home/work_4.png';
import workImage5 from '@/assets/home/work_5.png';
import carnivalBackground from '@/assets/home/carnival_bg.png';
import one from '@/assets/home/1.png';
import two from '@/assets/home/2.png';
import three from '@/assets/home/3.png';
import four from '@/assets/home/4.svg';
import carnivalPerson1 from '@/assets/home/carnival_person1.png';
import carnivalPerson2 from '@/assets/home/carnival_person2.png';
import carnivalPerson3 from '@/assets/home/carnival_person3.png';
import HomeSwiper from '@/components/HomeSwiper.vue';

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
            carnivalBackground,
            carnivalPerson1,
            carnivalPerson2,
            carnivalPerson3,
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
                    buttonText: this.$t(
                        'home.ourServices.serviceList.totoroButtonText',
                    ),
                    link: 'totoroad',
                    subTitle: this.$t(
                        'home.ourServices.serviceList.totorosubTitle',
                    ),
                    icon: one,
                },
                {
                    title: this.$t(
                        'home.ourServices.serviceList.peerMentorTitle',
                    ),
                    backgroundColor: '#CC8ABD',
                    text: this.$t(
                        'home.ourServices.serviceList.peerMentorText',
                    ),
                    image: peerMentorImage,
                    buttonText: this.$t(
                        'home.ourServices.serviceList.peerMentorButtonText',
                    ),
                    link: 'peermentor',
                    subTitle: this.$t(
                        'home.ourServices.serviceList.peerMentorsubTitle',
                    ),
                    icon: four,
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
                    buttonText: this.$t(
                        'home.ourServices.serviceList.membershipButtonText',
                    ),
                    link: 'membership',
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
                    buttonText: this.$t(
                        'home.ourServices.serviceList.otherButtonText',
                    ),
                    link: 'more',
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
                    link: 'https://www.bilibili.com/video/BV1dv411y78M',
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
                    link: 'https://mp.weixin.qq.com/s/X1cFXrsW_zKLK_9sbWN1rA',
                },
            ];
        },
    },
    head() {
        return {
            title: this.$t('header.home') + ' ' + this.$t('header.orgName'),
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
        line-height: 50px;
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

        /deep/ span {
            color: $red;
        }
    }

    img {
        vertical-align: middle;
        height: 100%;
        width: 100%;
        object-fit: cover;
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
    // text-align: center;
    // line-height: 40px;
    // padding-top: 70px;
}
.con {
    text-align: center;
    display: flex;
}
.bg {
    background: url('../assets/home/bg.png') no-repeat;
    padding: 80px 0 0 0;
}

.bg-carnival {
    background: url('../assets/home/carnival_bg.png') repeat;
    padding: 80px 0 0 0;
    #carnival-person1 {
        position: absolute;
        width: 93px;
        left: 680px;
        top: 447px;
    }

    #carnival-person2 {
        position: absolute;
        width: 127px;
        left: -86px;
        top: 307px;
    }

    #carnival-person3 {
        position: absolute;
        width: 88px;
        left: 645px;
        top: -21px;
    }

    div.carnival-event {
        width: 720px;
        background: rgba(84, 190, 245, 0.25);
        padding: 41px 60px 88px 60px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 30px;
        position: relative;

        h1 {
            text-align: center;
            font-weight: bold;
        }

        h2 {
            text-align: left;
            padding-top: 20px;
            margin: 0 auto;
            width: 86%;
        }

        .carnival-description {
            p {
                width: 86%;
                margin-left: auto;
                margin-right: auto;
            }
            /deep/ span {
                font-weight: bold;
            }
        }

        .carnival-btn {
            text-align: center;
            margin-top: 50px;
        }
    }
}

.report {
    background-color: #f1f9ff;
}
.report-container {
    display: flex;
    justify-content: space-between;

    div {
        width: 43%;
    }
    .report {
        p {
            margin-bottom: 42px;
        }
    }

    .right-button {
        margin-left: 55px;
    }

    :lang(en) {
        .right-button-zh {
            display: none;
        }
    }

    :lang(zh) {
        .right-button-en {
            display: none;
        }
    }
}

:lang(zh) {
    .report-container {
        .left {
            p {
                margin-bottom: 100px;
            }
        }
    }
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

.announcement-row {
    .announcement-section {
        display: flex;
        justify-content: space-around;
        line-height: 31px;
        flex-direction: row;
        .col-left {
            background-color: black;
            flex-basis: 40%;
            height: 400px;
            background: url('../assets/home/left_graphics.png') no-repeat;
        }
        .col-right {
            background-color: blue;
            height: 400px;
            flex-basis: 40%;
            background: url('../assets/home/right_graphics.png') no-repeat;
        }
    }

    .announcement-section,
    .announcement-row {
        flex-basis: 50%;
        margin: 0;
    }

    .announcement-section {
        padding-right: 0;
    }

    p {
        margin-top: 0;
    }

    ul {
        margin-top: 30px;
        list-style: 0;
        padding: 0;
        list-style-type: none;

        span {
            color: $button-color;
            font-weight: 600;
        }
    }
    .qr-announcement {
        display: flex;
    }
    /deep/ span {
        font-weight: bold;
    }
    .qr-announcement > img {
        margin: 0px 55px;
        width: auto;
    }
    img {
        width: 100%;
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

    .bg-carnival {
        background: url(~assets/carnival/banner-mobile.svg);
        padding: 0;
        section {
            padding: 0;
        }

        #carnival-person1,
        #carnival-person2,
        #carnival-person3 {
            display: none;
        }
        div.carnival-event {
            width: auto !important;
            padding: 15px 30px;
            border-radius: 0;

            h1,
            h2 {
                width: 100%;
            }

            h1 {
                font-size: 23px;
            }

            h2 {
                font-size: 14px;
            }

            .carnival-description {
                p {
                    width: 100%;
                }
            }

            .carnival-btn {
                margin-top: 0px;
                text-align: left;

                .popup {
                    padding: 45px 25px 0 25px;
                    width: 250px;
                    height: 250px;
                    position: absolute;
                    top: -250px;
                    left: calc(50% - 125px);
                    text-align: center;

                    .qr {
                        width: 150px;
                        height: 150px;
                    }

                    div {
                        font-size: 18px;
                        margin-top: 0;
                    }
                }
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
    .report-container {
        flex-direction: column;
        .right-button {
            margin-left: 0;
        }
        div {
            width: 100%;

            img {
                width: 100%;
                height: auto;
            }
        }
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

    .announcement-row {
        display: flex;
        flex-direction: column;

        .announcement-section,
        .announcement-row {
            flex-basis: 100%;
            margin: 0;
            padding-right: 30px;
        }
    }

    .about-us-section {
        .half-style {
            flex-direction: column;
        }

        h2:nth-of-type(2) {
            padding-top: 0;
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
