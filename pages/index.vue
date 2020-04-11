<template>
    <div class="home">
        <Banner
            :title="$t('home.banner.subTitle')"
            :sub-title="$t('home.banner.title')"
            :description="$t('home.banner.description')"
            :button-text="$t('home.banner.buttonText')"
            :button-on-click="() => $router.push('contact')"
            :background="bannerImage"
        />
        <div class="wuhan-coronavirus">
            <section class="container">
                <h2>{{ $t('home.coronavirus.subTitle') }}</h2>
                <img
                    class="mobile wuhan-mobile-image"
                    :src="wuhanMobileImage1"
                />
                <h1>{{ $t('home.coronavirus.title') }}</h1>
                <div class="wuhan-description">
                    <p>{{ $t('home.coronavirus.description') }}</p>
                </div>
                <a
                    href="https://mp.weixin.qq.com/s/FUOLzynHbsRUq-6C4KmUwQ"
                    target="_blank"
                    ><Button>{{ $t('home.coronavirus.buttonText') }}</Button></a
                >
                <img
                    class="mobile wuhan-mobile-image"
                    :src="wuhanMobileImage2"
                />
            </section>
            <section class="desktop container">
                <img :src="wuhanImage" />
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
                <img class="img" :src="workImage" alt="" />
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
                    <Carousel :list="serviceList" :is-show="isShow" />
                </div>
                <div class="mobile">
                    <HomeSwiper :list="serviceList" />
                </div>
            </section>
        </div>
        <section class="container">
            <h2>{{ $t('home.ourTeam.title') }}</h2>
            <div class="profile-list">
                <Profile
                    v-for="(profile, index) in profileList"
                    :key="index"
                    class="profile-item"
                    :image="profile.image"
                    :title="profile.title"
                    :sub-title="profile.subTitle"
                />
            </div>
            <div class="all-members">
                <router-link :to="{ path: 'team' }">{{
                    $t('home.ourTeam.allTeamMembers')
                }}</router-link>
            </div>
        </section>
        <section style="background: #F1F9FF">
            <div class="container">
                <h2>{{ $t('home.eventList.title') }}</h2>
                <div class="event-left">
                    <a :href="eventLink" target="_blank">
                        <img :src="eventImage7" alt="" />
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
            </div>
        </section>
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Button from '@/components/Button.vue';
import Profile from '@/components/Profile.vue';
import Event from '@/components/Event.vue';
import Carousel from '@/components/Carousel.vue';
import bannerImage from '@/assets/home/home_banner.png';
import workImage from '@/assets/home/works.png';

import wuhanImage from '@/assets/home/wuhan.png';

import tangjiawenImage from '@/assets/team/tangjiawen.png';
import luoyanranImage from '@/assets/team/luoyanran.png';
import jianghanqinImage from '@/assets/team/jianghanqin.png';
import guixiaoqinImage from '@/assets/team/guixiaoqin.png';
import xuzhiqiImage from '@/assets/team/xuzhiqi.png';
import wangcaiweiImage from '@/assets/team/wangcaiwei.png';
import zhuohanwenImage from '@/assets/team/zhuohanwen.png';
import zhanzixuanImage from '@/assets/team/zhanzixuan.png';

import eventImage1 from '@/assets/home/event_1.png';
import eventImage2 from '@/assets/home/event_2.png';
import eventImage3 from '@/assets/home/event_3.png';
import eventImage4 from '@/assets/home/event_4.png';
import eventImage5 from '@/assets/home/event_5.png';
import eventImage6 from '@/assets/home/event_6.png';
import eventImage7 from '@/assets/home/event_7.png';
import serviceTotoroImage from '@/assets/home/service_totoro.png';
import ifuMembershipImage from '@/assets/home/IFU_membership.png';
import otherServiceImage from '@/assets/home/other_service.png';
import workImage1 from '@/assets/home/work_1.png';
import workImage2 from '@/assets/home/work_2.png';
import workImage3 from '@/assets/home/work_3.png';
import workImage4 from '@/assets/home/work_4.png';
import workImage5 from '@/assets/home/work_5.png';
import wuhanMobileImage1 from '@/assets/home/wuhan-mobile-1.png';
import wuhanMobileImage2 from '@/assets/home/wuhan-mobile-2.png';
import one from '@/assets/home/1.png';
import two from '@/assets/home/2.png';
import three from '@/assets/home/3.png';
import HomeSwiper from '@/components/HomeSwiper.vue';

export default {
    components: {
        Banner,
        Button,
        Profile,
        Event,
        Carousel,
        HomeSwiper,
    },
    data() {
        return {
            bannerImage,
            wuhanImage,
            workImage,
            wuhanMobileImage1,
            wuhanMobileImage2,
            isShow: true,
            eventImage7,
            eventLink:
                'https://mp.weixin.qq.com/s?__biz=MzU1MTE2MDkxOQ==&mid=2247498115&idx=3&sn=20a54f7f102af1e73b54598589bd49b7&chksm=fb9724bbcce0adad7c9b15d53a4ae6325574498324813dda4ee9d2a4dc241e8ef68a92ff3922&token=1217661680&lang=zh_CN#rd',
            type: 'service',
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
                    subTitle: this.$t(
                        'home.ourServices.serviceList.totorosubTitle',
                    ),
                    icon: one,
                },
                {
                    title: this.$t('home.ourServices.serviceList.ISICTitle'),
                    backgroundColor: '#C9D74A',
                    text: this.$t('home.ourServices.serviceList.ISICText'),
                    image: ifuMembershipImage,
                    subTitle: this.$t(
                        'home.ourServices.serviceList.ISICsubTitle',
                    ),
                    icon: two,
                },
                {
                    title: this.$t('home.ourServices.serviceList.DMATitle'),
                    backgroundColor: '#F96291',
                    text: this.$t('home.ourServices.serviceList.DMAText'),
                    image: otherServiceImage,
                    subTitle: this.$t(
                        'home.ourServices.serviceList.DMAsubTitle',
                    ),
                    icon: three,
                },
            ];
        },
        profileList() {
            return [
                {
                    image: tangjiawenImage,
                    title: this.$t('home.ourTeam.title1'),
                    subTitle: this.$t('home.ourTeam.name1'),
                },
                {
                    image: zhuohanwenImage,
                    title: this.$t('home.ourTeam.title2'),
                    subTitle: this.$t('home.ourTeam.name2'),
                },
                {
                    image: zhanzixuanImage,
                    title: this.$t('home.ourTeam.title3'),
                    subTitle: this.$t('home.ourTeam.name3'),
                },
                {
                    image: jianghanqinImage,
                    title: this.$t('home.ourTeam.title4'),
                    subTitle: this.$t('home.ourTeam.name4'),
                },
                {
                    image: luoyanranImage,
                    title: this.$t('home.ourTeam.title5'),
                    subTitle: this.$t('home.ourTeam.name5'),
                },
                {
                    image: guixiaoqinImage,
                    title: this.$t('home.ourTeam.title6'),
                    subTitle: this.$t('home.ourTeam.name6'),
                },
                {
                    image: xuzhiqiImage,
                    title: this.$t('home.ourTeam.title7'),
                    subTitle: this.$t('home.ourTeam.name7'),
                },
                {
                    image: wangcaiweiImage,
                    title: this.$t('home.ourTeam.title8'),
                    subTitle: this.$t('home.ourTeam.name8'),
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
                    link:
                        'https://mp.weixin.qq.com/s?__biz=MzU1MTE2MDkxOQ==&mid=2247486105&idx=1&sn=bbbb5f0a0d63236a4e512d89fbbd976a&chksm=fb94d7a1cce35eb7139f13396debb879a34d1e0c0a06debebcf5354efe41810cc785cf929b60&token=1217661680&lang=zh_CN#rd',
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
        };
    },
};
</script>

<style>
/* 暂时这样修改 Banner 里两个标题的行距 */
.home .banner .subtitle-text {
    margin-bottom: 0px;
}

.home .banner .title-text {
    margin-top: 0px;
}
</style>

<style lang="scss" scoped>
.wuhan-coronavirus {
    background: #f1f9ff;
    display: flex;

    h1 {
        font-size: 40px;
        font-weight: 400;
    }

    h2 {
        padding-top: 80px;
        padding-bottom: 0px;
    }

    section {
        flex-basis: 50%;
        padding: 0 0 0 130px;
        line-height: 31px;
    }

    .wuhan-description {
        padding: 0 0 0 18px;
        margin: 34px 0px;
        border-left: 5px solid #fe4c31;
        border-radius: 4px;
        position: relative;
        left: -18px;
    }

    img {
        vertical-align: middle;
    }
}

.container {
    max-width: 1180px;
    margin: 0 auto;
}
.container p {
    font-family: PingFang SC;
    line-height: 31px;
    font-size: 16px;
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
    }
}
.profile-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.profile-item {
    flex-basis: 30%;
    margin-bottom: 48px;
}

.event-list {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.event-item {
    width: 263px;
    height: 186px;
    margin-bottom: 30px;
    margin: 10px;
}
.event-left {
    display: inline-block;
    vertical-align: top;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    width: 24%;
    margin: 10px;
    height: calc((186px + 10px) * 2);

    img {
        min-width: 100%;
    }
}
.event-right {
    display: inline-block;
    vertical-align: top;
    width: 72%;
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
    text-align: right;
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
        font-size: 16px;
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
.all-members {
    text-align: right;
    padding-bottom: 40px;
}
.all-members a {
    text-decoration: none;
    color: #22a5d8;
}
.event-text {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    box-sizing: border-box;
    position: absolute;
    bottom: 0px;
    background-color: rgba(78, 189, 247, 0.9);
    color: white;
}
</style>
<style lang="scss" scoped>
@media (max-width: 1024px) {
    .wuhan-coronavirus {
        flex-direction: column;

        h1 {
            font-size: 23px;
            font-weight: 600;
            margin: 0;
        }

        h2 {
            padding: 70px 0 30px 0;
        }

        section {
            flex-basis: 100%;
            padding: 0px 24px;
            border-top: 5px solid #fe4c31;
            border-bottom: 5px solid #fe4c31;

            .wuhan-mobile-image {
                width: 100%;
                margin: 0 0 35px 0;
            }

            .wuhan-description {
                left: 0px;
                border: none;
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
    .con .img {
        display: none;
    }
    .right {
        padding-left: 0;
        margin-top: 0px;
    }
    .con .col {
        padding-bottom: 30px;
        width: 100%;
    }
    .text-container {
        .service-left {
            width: 100%;
            padding-right: 0;
        }
        .service-right {
            width: 100%;
        }
    }
    .text-container span {
        font-size: 14px;
    }
    .bg {
        padding-bottom: 50px;
    }
    .profile-item {
        flex-basis: 100%;
    }
    .event-item {
        width: 100%;
    }
    .event-left {
        display: none;
    }
    .event-right {
        width: 100%;
    }
}
@media (max-width: 400px) {
    .event-item {
        margin: 0;
        margin-bottom: 30px;
    }
}
</style>
