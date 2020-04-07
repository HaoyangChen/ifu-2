<template>
    <div class="regular-member">
        <Banner
            :description="$t('isic.regularMember.description')"
            :button-text="$t('isic.regularMember.becomeRegularMemberBtn')"
            :background="bannerImage"
            external-link="https://www.wjx.top/jq/48243970.aspx"
        />
        <section style="background: #F1F9FF">
            <div class="container">
                <h2 style="padding-bottom: 10px;">
                    {{ $t('isic.regularMember.northAmericaVolunteer') }}
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
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Event from '@/components/Event.vue';
import bannerImage from '@/assets/isic/regular/banner.png';
import eventImage1 from '@/assets/isic/regular/eventImage1.png';
import eventImage2 from '@/assets/isic/regular/eventImage2.png';
import eventImage3 from '@/assets/isic/regular/eventImage3.png';
import eventImage4 from '@/assets/isic/regular/eventImage4.png';

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
                    text: this.$t('isic.regularMember.volunteer1'),
                    link: 'https://mp.weixin.qq.com/s/D2ZKmbf6mnlHYxAoNTn51A',
                },
                {
                    image: eventImage4,
                    text: this.$t('isic.regularMember.volunteer2'),
                    link: 'https://mp.weixin.qq.com/s/hL2tRYxkTPG2lWn-RinFnw',
                },
                {
                    image: eventImage2,
                    text: this.$t('isic.regularMember.volunteer3'),
                    link: 'https://mp.weixin.qq.com/s/q9nh0t4RxJu6wyd_dICtag',
                },
                {
                    image: eventImage3,
                    text: this.$t('isic.regularMember.volunteer4'),
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
    width: 250px;
    height: 401px;
    margin: 20px;
}

.event-right {
    display: inline-block;
    vertical-align: top;
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
</style>

<style lang="scss" scoped>
@media (max-width: 1024px) {
    .event-right {
        width: 100%;
    }

    .event-item {
        overflow: hidden;
        border-radius: 10px;
        margin: 20px 0;
        width: 100%;
    }

    .container {
        padding: 0 30px;
        p {
            font-size: 14px;
        }
    }
}
</style>
