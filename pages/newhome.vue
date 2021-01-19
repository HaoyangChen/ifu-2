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
        <section class="services">
            <h2>{{ $t('home.newServices.title') }}</h2>
            <p>{{ $t('home.newServices.description') }}</p>
            <Newcarousel :list="serviceList" />
        </section>
        <section class="calendar">
            <h2>{{ $t('home.calendar.title') }}</h2>
            <p>{{ $t('home.calendar.description') }}</p>
            <CalendarSwiper :list="calendarList" />
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
        <section class="resources background-blue">
            <h2>{{ $t('home.resources.title') }}</h2>
            <p>
                {{ $t('home.resources.description') }}
            </p>
            <div class="resource-cards-container">
                <div class="resource-card">
                    <img
                        src="@/assets/newhome/chat-icon.svg"
                        class="blue-icon"
                    />
                    <img
                        src="@/assets/newhome/resource-arrow.svg"
                        alt="arrow"
                        class="resource-arrow"
                    />

                    <h2>{{ $t('home.resources.card1.title') }}</h2>

                    <ul>
                        <li>{{ $t('home.resources.card1.li1') }}</li>
                        <li>{{ $t('home.resources.card1.li2') }}</li>
                    </ul>

                    <div class="icons-container">
                        <img src="@/assets/newhome/family-icon.svg" />
                        <img src="@/assets/newhome/student-icon.svg" />
                    </div>
                </div>
                <div class="resource-card">
                    <h2>{{ $t('home.resources.card2.title') }}</h2>
                    <ul>
                        <li>{{ $t('home.resources.card2.li1') }}</li>
                        <li>{{ $t('home.resources.card2.li2') }}</li>
                        <li>{{ $t('home.resources.card2.li3') }}</li>
                    </ul>
                    <img
                        src="@/assets/newhome/resource-arrow.svg"
                        alt="arrow"
                        class="resource-arrow"
                    />
                    <img
                        class="blue-icon"
                        src="@/assets/newhome/wechat-icon.svg"
                    />
                    <div class="icons-container">
                        <img src="@/assets/newhome/family-icon.svg" />
                        <img src="@/assets/newhome/student-icon.svg" />
                    </div>
                </div>
                <div class="resource-card">
                    <h2>{{ $t('home.resources.card3.title') }}</h2>
                    <ul>
                        <li>{{ $t('home.resources.card3.li1') }}</li>
                    </ul>
                    <img
                        src="@/assets/newhome/resource-arrow.svg"
                        alt="arrow"
                        class="resource-arrow"
                    />
                    <img
                        class="blue-icon"
                        src="@/assets/newhome/emerg-icon.svg"
                    />
                    <div class="icons-container">
                        <img src="@/assets/newhome/family-icon.svg" />
                    </div>
                </div>
                <div class="resource-card">
                    <h2>{{ $t('home.resources.card4.title') }}</h2>
                    <ul>
                        <li>{{ $t('home.resources.card4.li1') }}</li>
                        <li>{{ $t('home.resources.card4.li2') }}</li>
                    </ul>
                    <img
                        src="@/assets/newhome/resource-arrow.svg"
                        alt="arrow"
                        class="resource-arrow"
                    />
                    <img
                        class="blue-icon"
                        src="@/assets/newhome/group-icon.svg"
                    />
                    <div class="icons-container">
                        <img src="@/assets/newhome/student-icon.svg" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import bannerImage from '@/assets/home/home_banner.png';
import Event from '@/components/Event.vue';
import Newcarousel from '@/components/Newcarousel.vue';
import CalendarSwiper from '@/components/CalendarSwiper.vue';

// Services Images
import totoroadBackground from '@/assets/newhome/toto_background.svg';
import peermentorBackground from '@/assets/newhome/peermentor_background.svg';
import membershipBackground from '@/assets/newhome/membership_background.svg';
import otherBackground from '@/assets/newhome/other_service_background.svg';
import peermentorArrow from '@/assets/newhome/arrow-peermentor.svg';
import totoroadArrow from '@/assets/newhome/arrow-totoroad.svg';
import membershipArrow from '@/assets/newhome/arrow-membership.svg';
import otherArrow from '@/assets/newhome/arrow-other.svg';

// Event Images
import eventImage1 from '@/assets/home/event_1.png';
import eventImage2 from '@/assets/home/event_2.png';
import eventImage3 from '@/assets/home/event_3.png';
import eventImage4 from '@/assets/home/event_4.png';
import eventImage5 from '@/assets/home/event_5.png';
import eventImage6 from '@/assets/home/event_6.png';

// Calendar Images
import calendarImage1 from '@/assets/newhome/05.svg';
import calendarImage2 from '@/assets/newhome/12.svg';
import calendarImage3 from '@/assets/newhome/19.svg';

export default {
    components: {
        Banner,
        Event,
        Newcarousel,
        CalendarSwiper,
    },
    data() {
        return {
            bannerImage,
            eventLink:
                'https://mp.weixin.qq.com/s?__biz=MzU1MTE2MDkxOQ==&mid=2247498115&idx=3&sn=20a54f7f102af1e73b54598589bd49b7&chksm=fb9724bbcce0adad7c9b15d53a4ae6325574498324813dda4ee9d2a4dc241e8ef68a92ff3922&token=1217661680&lang=zh_CN#rd',
        };
    },
    computed: {
        serviceList() {
            return [
                {
                    // Totoroad Academy
                    title: this.$t('home.newServices.serviceList.toto.title'),
                    subTitle: this.$t(
                        'home.newServices.serviceList.toto.subTitle',
                    ),
                    bodyTitle: this.$t(
                        'home.newServices.serviceList.toto.bodyTitle',
                    ),
                    text: this.$t('home.newServices.serviceList.toto.text'),
                    barImage: '',
                    bottomText: this.$t(
                        'home.newServices.serviceList.toto.bottomText',
                    ),
                    link: 'totoro',
                    backgroundImage: totoroadBackground,
                    color: '#34BBC9',
                    arrowImage: totoroadArrow,
                },
                {
                    // Peer Mentor
                    title: this.$t(
                        'home.newServices.serviceList.peermentor.title',
                    ),
                    subTitle: this.$t(
                        'home.newServices.serviceList.peermentor.subTitle',
                    ),
                    bodyTitle: this.$t(
                        'home.newServices.serviceList.peermentor.bodyTitle',
                    ),
                    text: this.$t(
                        'home.newServices.serviceList.peermentor.text',
                    ),
                    barImage: '',
                    bottomText: this.$t(
                        'home.newServices.serviceList.peermentor.bottomText',
                    ),
                    link: 'peermentor',
                    backgroundImage: peermentorBackground,
                    color: '#CC8ABD',
                    arrowImage: peermentorArrow,
                },
                {
                    // Membership
                    title: this.$t(
                        'home.newServices.serviceList.membership.title',
                    ),
                    subTitle: this.$t(
                        'home.newServices.serviceList.membership.subTitle',
                    ),
                    bodyTitle: this.$t(
                        'home.newServices.serviceList.membership.bodyTitle',
                    ),
                    bodySubTitle: this.$t(
                        'home.newServices.serviceList.membership.bodySubTitle',
                    ),
                    text: this.$t(
                        'home.newServices.serviceList.membership.text',
                    ),
                    barImage: '',
                    bottomText: this.$t(
                        'home.newServices.serviceList.membership.bottomText',
                    ),
                    link: 'membership',
                    backgroundImage: membershipBackground,
                    color: '#C9D74A',
                    arrowImage: membershipArrow,
                },
                {
                    // Other Services
                    title: this.$t(
                        'home.newServices.serviceList.otherservices.title',
                    ),
                    subTitle: this.$t(
                        'home.newServices.serviceList.otherservices.subTitle',
                    ),
                    bodyTitle: this.$t(
                        'home.newServices.serviceList.otherservices.bodyTitle',
                    ),
                    bodySubTitle: this.$t(
                        'home.newServices.serviceList.otherservices.bodySubTitle',
                    ),
                    text: this.$t(
                        'home.newServices.serviceList.otherservices.text',
                    ),
                    barImage: '',
                    bottomText: this.$t(
                        'home.newServices.serviceList.otherservices.bottomText',
                    ),
                    link: 'more',
                    backgroundImage: otherBackground,
                    color: '#F96291',
                    arrowImage: otherArrow,
                },
            ];
        },
        calendarList() {
            return [
                {
                    numImage: calendarImage1,
                    title: this.$t('home.calendar.title1'),
                    description: this.$t('home.calendar.description1'),
                },
                {
                    numImage: calendarImage2,
                    title: this.$t('home.calendar.title2'),
                    description: this.$t('home.calendar.description2'),
                },
                {
                    numImage: calendarImage3,
                    title: this.$t('home.calendar.title3'),
                    description: this.$t('home.calendar.description3'),
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
};
</script>

<style lang="scss" scoped>
// /deep/ .banner {
//     // 缩短 Banner 两行标题间的距离
//     .subtitle-text {
//         margin-bottom: 0px;
//     }
p {
    line-height: 31px;
}
.services {
    padding-right: 0;
    p {
        margin-bottom: 117px;

        size: 16px;
    }
}

.calendar {
    background-color: #f1f9ff;
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
.resources {
    h2 {
        font-size: 30px;
        font-weight: 700;
    }
    p {
        font-size: 16px;
        line-height: 31px;
        font-weight: 400;
    }
    .resource-cards-container {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%;
        column-gap: 43px;
        row-gap: 47px;
        height: 615px;

        .resource-card {
            position: relative;
            max-width: 565px;
            max-height: 284px;
            background-color: #ffff;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            place-items: center;

            .resource-arrow {
                position: absolute;
                top: 40%;
                right: 6%;
            }

            h2 {
                font-size: 22px;
                line-height: 30px;
                max-width: 250px;
                max-height: 60px;
                margin: 1.5em auto 0 auto;
            }

            ul {
                max-width: 250px;
                padding-left: 0;
            }
            li {
                font-size: 16px;
                font-weight: 400;
                line-height: 31px;
            }
            .blue-icon {
                position: absolute;
                top: 10%;
                left: 12%;
            }
            .icons-container {
                position: absolute;
                bottom: 12%;
                right: 5%;

                img {
                    margin-right: 10px;
                }
            }
        }
    }
}

.background-blue {
    background-color: $background-light-blue;
}
</style>
