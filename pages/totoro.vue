<template>
    <div>
        <Banner
            :title="$t('totoro.banner.title')"
            :description="$t('totoro.banner.description')"
            :button-text="$t('totoro.banner.buttonText')"
            :background="bannerImage"
            external
            to="https://mp.weixin.qq.com/s/zeLEz8t2QcMEZtw_e-j8Hw"
        />
        <section class="container">
            <h2>{{ $t('totoro.totoro.title') }}</h2>
            <p>{{ $t('totoro.totoro.text') }}</p>
            <Carousel :list="courseList" use-subtitle />
        </section>
        <Tab :list="tabList" />
        <section>
            <h2>{{ $t('totoro.tutors.title') }}</h2>
            <div class="staff-list">
                <TotoroProfile
                    v-for="(staff, index) in staffList"
                    :key="index"
                    class="profile-list"
                    :staff="staff"
                    :image="staff.image"
                    :title="staff.title"
                />
            </div>
        </section>
        <div class="img">
            <img src="@/assets/totoro/totoro.png" alt="" />
            <div class="text">
                <p>{{ $t('totoro.tutors.joinTutor') }}</p>
                <Button
                    class="btn"
                    external
                    to="https://www.wjx.top/jq/89696872.aspx"
                    >{{ $t('totoro.tutors.submitApplication') }}</Button
                >
            </div>
        </div>
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Carousel from '@/components/Carousel.vue';
import Button from '@/components/Button.vue';
import Tab from '@/components/Tab.vue';
import TotoroProfile from '@/components/TotoroProfile.vue';

import Academic from '@/tabs/totoro/Academic.vue';
import Cohesion from '@/tabs/totoro/Cohesion.vue';

import bannerImage from '@/assets/totoro/banner.png';
import carouselImage from '@/assets/totoro/carousel.png';
import icon1Image from '@/assets/totoro/icon1.png';
import icon2Image from '@/assets/totoro/icon2.png';

import liuchenshuImage from '@/assets/totoro/mentor/liuchenshu.png';
import zhangtianluImage from '@/assets/totoro/mentor/zhangtianlu.png';
import maweikunImage from '@/assets/totoro/mentor/maweikun.png';
import zhouzihaoImage from '@/assets/totoro/mentor/zhouzihao.png';
import linxiqiangImage from '@/assets/totoro/mentor/linxiqiang.png';
import wangyuqingImage from '@/assets/totoro/mentor/wangyuqing.png';
import ruanjinglongImage from '@/assets/totoro/mentor/ruanjinglong.png';
import lichunlingImage from '@/assets/totoro/mentor/lichunling.png';
import liangchenweiImage from '@/assets/totoro/mentor/liangchenwei.png';
import wangzhiweiImage from '@/assets/totoro/mentor/wangzhiwei.png';
import huangjiaqiImage from '@/assets/totoro/mentor/huangjiaqi.png';
import zengjunImage from '@/assets/totoro/mentor/zengjun.png';
import houkaiwenImage from '@/assets/totoro/mentor/houkaiwen.png';
import jiangjiaruiImage from '@/assets/totoro/mentor/jiangjiarui.png';
import yinluwaImage from '@/assets/totoro/mentor/yinluwa.png';

export default {
    name: 'Totoro',
    components: {
        Banner,
        Carousel,
        TotoroProfile,
        Tab,
        Button,
    },
    data() {
        return {
            bannerImage,
            staffList: [
                {
                    image: houkaiwenImage,
                    title: this.$t('totoro.tutors.tutorName1'),
                    subTitle1: this.$t('totoro.tutors.tutorCourse1'),
                    subTitle2: this.$t('totoro.tutors.tutorIntro1'),
                    subTitle3: this.$t('totoro.tutors.tutorIntroContent1'),
                    subTitle4: this.$t('totoro.tutors.tutorExperience1'),
                    subTitle5: this.$t('totoro.tutors.tutorExperienceDetail1'),
                },
                {
                    image: zhangtianluImage,
                    title: this.$t('totoro.tutors.tutorName2'),
                    subTitle1: this.$t('totoro.tutors.tutorCourse2'),
                    subTitle2: this.$t('totoro.tutors.tutorIntro2'),
                    subTitle3: this.$t('totoro.tutors.tutorIntroContent2'),
                    subTitle4: this.$t('totoro.tutors.tutorExperience2'),
                    subTitle5: this.$t('totoro.tutors.tutorExperienceDetail2'),
                },
                {
                    image: liangchenweiImage,
                    title: this.$t('totoro.tutors.tutorName3'),
                    subTitle1: this.$t('totoro.tutors.tutorCourse3'),
                    subTitle2: this.$t('totoro.tutors.tutorIntro3'),
                    subTitle3: this.$t('totoro.tutors.tutorIntroContent3'),
                    subTitle4: this.$t('totoro.tutors.tutorExperience3'),
                    subTitle5: this.$t('totoro.tutors.tutorExperienceDetail3'),
                },
                {
                    image: jiangjiaruiImage,
                    title: this.$t('totoro.tutors.tutorName4'),
                    subTitle1: this.$t('totoro.tutors.tutorCourse4'),
                    subTitle2: this.$t('totoro.tutors.tutorIntro4'),
                    subTitle3: this.$t('totoro.tutors.tutorIntroContent4'),
                    subTitle4: this.$t('totoro.tutors.tutorExperience4'),
                    subTitle5: this.$t('totoro.tutors.tutorExperienceDetail4'),
                },
                {
                    image: linxiqiangImage,
                    title: this.$t('totoro.tutors.tutorName5'),
                    subTitle1: this.$t('totoro.tutors.tutorCourse5'),
                    subTitle2: this.$t('totoro.tutors.tutorIntro5'),
                    subTitle3: this.$t('totoro.tutors.tutorIntroContent5'),
                    subTitle4: this.$t('totoro.tutors.tutorExperience5'),
                    subTitle5: this.$t('totoro.tutors.tutorExperienceDetail5'),
                },
                {
                    image: wangzhiweiImage,
                    title: this.$t('totoro.tutors.tutorName6'),
                    subTitle1: this.$t('totoro.tutors.tutorCourse6'),
                    subTitle2: this.$t('totoro.tutors.tutorIntro6'),
                    subTitle3: this.$t('totoro.tutors.tutorIntroContent6'),
                    subTitle4: this.$t('totoro.tutors.tutorExperience6'),
                    subTitle5: this.$t('totoro.tutors.tutorExperienceDetail6'),
                },
                {
                    image: maweikunImage,
                    title: this.$t('totoro.tutors.tutorName7'),
                    subTitle1: this.$t('totoro.tutors.tutorCourse7'),
                    subTitle2: this.$t('totoro.tutors.tutorIntro7'),
                    subTitle3: this.$t('totoro.tutors.tutorIntroContent7'),
                    subTitle4: this.$t('totoro.tutors.tutorExperience7'),
                    subTitle5: this.$t('totoro.tutors.tutorExperienceDetail7'),
                },
                {
                    image: ruanjinglongImage,
                    title: this.$t('totoro.tutors.tutorName8'),
                    subTitle1: this.$t('totoro.tutors.tutorCourse8'),
                    subTitle2: this.$t('totoro.tutors.tutorIntro8'),
                    subTitle3: this.$t('totoro.tutors.tutorIntroContent8'),
                    subTitle4: this.$t('totoro.tutors.tutorExperience8'),
                    subTitle5: this.$t('totoro.tutors.tutorExperienceDetail8'),
                },
                {
                    image: yinluwaImage,
                    title: this.$t('totoro.tutors.tutorName9'),
                    subTitle1: this.$t('totoro.tutors.tutorCourse9'),
                    subTitle2: this.$t('totoro.tutors.tutorIntro9'),
                    subTitle3: this.$t('totoro.tutors.tutorIntroContent9'),
                    subTitle4: this.$t('totoro.tutors.tutorExperience9'),
                    subTitle5: this.$t('totoro.tutors.tutorExperienceDetail9'),
                },
                {
                    image: liuchenshuImage,
                    title: this.$t('totoro.tutors.tutorName10'),
                    subTitle1: this.$t('totoro.tutors.tutorCourse10'),
                    subTitle2: this.$t('totoro.tutors.tutorIntro10'),
                    subTitle3: this.$t('totoro.tutors.tutorIntroContent10'),
                    subTitle4: this.$t('totoro.tutors.tutorExperience10'),
                    subTitle5: this.$t('totoro.tutors.tutorExperienceDetail10'),
                },
                {
                    image: lichunlingImage,
                    title: this.$t('totoro.tutors.tutorName11'),
                    subTitle1: this.$t('totoro.tutors.tutorCourse11'),
                    subTitle2: this.$t('totoro.tutors.tutorIntro11'),
                    subTitle3: this.$t('totoro.tutors.tutorIntroContent11'),
                    subTitle4: this.$t('totoro.tutors.tutorExperience11'),
                    subTitle5: this.$t('totoro.tutors.tutorExperienceDetail11'),
                },
                {
                    image: wangyuqingImage,
                    title: this.$t('totoro.tutors.tutorName12'),
                    subTitle1: this.$t('totoro.tutors.tutorCourse12'),
                    subTitle2: this.$t('totoro.tutors.tutorIntro12'),
                    subTitle3: this.$t('totoro.tutors.tutorIntroContent12'),
                    subTitle4: this.$t('totoro.tutors.tutorExperience12'),
                    subTitle5: this.$t('totoro.tutors.tutorExperienceDetail12'),
                },
                {
                    image: zengjunImage,
                    title: this.$t('totoro.tutors.tutorName13'),
                    subTitle1: this.$t('totoro.tutors.tutorCourse13'),
                    subTitle2: this.$t('totoro.tutors.tutorIntro13'),
                    subTitle3: this.$t('totoro.tutors.tutorIntroContent13'),
                    subTitle4: this.$t('totoro.tutors.tutorExperience13'),
                    subTitle5: this.$t('totoro.tutors.tutorExperienceDetail13'),
                },
                {
                    image: huangjiaqiImage,
                    title: this.$t('totoro.tutors.tutorName14'),
                    subTitle1: this.$t('totoro.tutors.tutorCourse14'),
                    subTitle2: this.$t('totoro.tutors.tutorIntro14'),
                    subTitle3: this.$t('totoro.tutors.tutorIntroContent14'),
                    subTitle4: this.$t('totoro.tutors.tutorExperience14'),
                    subTitle5: this.$t('totoro.tutors.tutorExperienceDetail14'),
                },
                {
                    image: zhouzihaoImage,
                    title: this.$t('totoro.tutors.tutorName15'),
                    subTitle1: this.$t('totoro.tutors.tutorCourse15'),
                    subTitle2: this.$t('totoro.tutors.tutorIntro15'),
                    subTitle3: this.$t('totoro.tutors.tutorIntroContent15'),
                    subTitle4: this.$t('totoro.tutors.tutorExperience15'),
                    subTitle5: this.$t('totoro.tutors.tutorExperienceDetail15'),
                },
            ],
        };
    },
    computed: {
        courseList() {
            return [
                {
                    title: 'TOTOROAD',
                    subTitle: this.$t('totoro.totoro.courseList.title1'),
                    backgroundColor: '#FFC2D6',
                    text: this.$t('totoro.totoro.courseList.text1'),
                    image: carouselImage,
                    icon: icon1Image,
                },
                {
                    title: 'TOTOROAD',
                    subTitle: this.$t('totoro.totoro.courseList.title2'),
                    backgroundColor: '#F96291',
                    text: this.$t('totoro.totoro.courseList.text2'),
                    image: carouselImage,
                    icon: icon2Image,
                },
            ];
        },
        tabList() {
            return [
                {
                    title: this.$t('totoro.tabList.title1'),
                    content: Cohesion,
                    color: '#C9D74A',
                    defaultShow: true,
                },
                {
                    title: this.$t('totoro.tabList.title2'),
                    content: Academic,
                    color: '#F96291',
                },
            ];
        },
    },
    head() {
        return {
            title: this.$t('header.totoro'),
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$t('totoro.banner.description'),
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content:
                        '辅导课, 衔接课, 新生适应留学生活, 留学生规划, 如何融入海外课堂, 留学生学术辅导, 美本学术辅导, 美本线上辅导课, 暑期辅导, gre辅导课, h1b咨询, cfa辅导课',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.staff-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
p {
    font-size: $text-size;
    line-height: 31px;
    letter-spacing: 0.02em;
}
.profile {
    flex-basis: 30%;
}

.profile-list {
    padding: 15px 0 0 0;
}

.img {
    position: relative;
    border: 3px solid $teal;
    box-shadow: 0px 5px 15px rgba(52, 187, 201, 0.25);
    border-radius: 0px 0px 40px 40px;
    width: 642px;
    height: 370px;
    margin: 180px auto 50px auto;
    img {
        width: 167px;
        position: absolute;
        top: -123px;
        left: 50%;
        margin-left: -83px;
    }
    .text {
        height: 100%;
        padding: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        p {
            margin: 0;
            margin-bottom: 15px;
            text-align: left;
        }
        .btn {
            margin: 0 auto;
        }
    }
}

@media (max-width: $mobile-max-width) {
    .profile {
        flex-basis: 100%;
    }
    .container {
        padding: 35px 0 0 0;
        h2 {
            padding: 0 30px;
        }

        p {
            padding: 0 30px 35px 30px;
        }
    }
    p {
        font-size: 14px;
    }
    section:last-child {
        .profile-list {
            text-align: left;
        }
    }
    .img {
        border: none;
        box-shadow: none;
        border-top: 3px solid $teal;
        height: auto;
        width: 100%;
        .text {
            margin: 50px 30px;
        }
    }
}
</style>
