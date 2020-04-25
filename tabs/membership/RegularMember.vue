<template>
    <div class="regular-member">
        <Banner
            :title="$t('membership.regularMember.bannerTitle')"
            :button-text="$t('membership.regularMember.becomeRegularMemberBtn')"
            :background="bannerImage"
            external
            to="https://www.wjx.cn/jq/71891803.aspx"
        >
            <p>
                • 会员月刊邮件: 各类活动信息及报名方式
                <br />
                • 优先参与活动的特权
                <br />
                • 不需要面试
                <br />
                • 不需要履行志愿者职责
                <br />
                • 面向所有年龄段，居住在所有国家的华人开放
                <br />
                • 全开放式面向喜欢、支持IFU文化的朋友们
            </p>
        </Banner>
        <section style="background: #F1F9FF">
            <div class="container">
                <h2 style="padding-bottom: 10px;">
                    {{ $t('membership.regularMember.northAmericaVolunteer') }}
                </h2>
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
        <section class="about-us-section background-blue">
            <div class="container half-style">
                <div class="col-half">
                    <h2>{{ $t('home.aboutUs.title') }}</h2>
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
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Event from '@/components/Event.vue';
import bannerImage from '@/assets/membership/regular/banner.png';
import eventImage1 from '@/assets/membership/regular/eventImage1.png';
import eventImage2 from '@/assets/membership/regular/eventImage2.png';
import eventImage3 from '@/assets/membership/regular/eventImage3.png';
import eventImage4 from '@/assets/membership/regular/eventImage4.png';

export default {
    name: 'RegularMember',
    components: {
        Banner,
        Event,
    },
    data() {
        return {
            bannerImage,
            eventImage1,
            eventImage2,
            eventImage3,
            eventImage4,
        };
    },
    computed: {
        eventList() {
            return [
                {
                    image: eventImage1,
                    text: this.$t('membership.regularMember.volunteer1'),
                    link: 'https://mp.weixin.qq.com/s/D2ZKmbf6mnlHYxAoNTn51A',
                },
                {
                    image: eventImage4,
                    text: this.$t('membership.regularMember.volunteer2'),
                    link: 'https://mp.weixin.qq.com/s/hL2tRYxkTPG2lWn-RinFnw',
                },
                {
                    image: eventImage2,
                    text: this.$t('membership.regularMember.volunteer3'),
                    link: 'https://mp.weixin.qq.com/s/q9nh0t4RxJu6wyd_dICtag',
                },
                {
                    image: eventImage3,
                    text: this.$t('membership.regularMember.volunteer4'),
                    link: 'https://mp.weixin.qq.com/s/wAAcknQHshe5ZttW7PbxRQ',
                },
            ];
        },
    },
};
</script>

<style lang="scss" scoped>
.row {
    display: flex;
}

.row > div {
    flex-basis: 50%;
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
    justify-content: space-around;
    flex-wrap: wrap;
}

.profile-item {
    flex-basis: 30%;
}

.event-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.event-item {
    margin: 15px;
    flex: 1;
    height: 23vw;
    max-height: 40vh;
}

.event-right {
    display: inline-block;
    vertical-align: top;
    width: 100%;
}
h2 {
    margin: 0;
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
}
.col {
    padding-bottom: 6px;
}
.con {
    text-align: center;
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
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.about-us-section {
    .half-style {
        display: flex;
        flex-wrap: wrap;
    }

    h2 {
        margin-bottom: 30px;
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
        margin-top: 40px;
    }

    .col-half-left {
        justify-content: left;
        align-items: center;
        display: flex;
    }
}

@media (max-width: 1024px) {
    .event-right {
        width: 100%;
        .event-list {
            flex-direction: column;
            align-items: center;

            .event-item {
                overflow: hidden;
                border-radius: 10px;
                margin: 20px 0;
                width: 100%;
                max-height: 210px;
            }
        }
    }

    .container {
        padding: 0 30px;
        p {
            font-size: 14px;
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
    }
}
</style>
