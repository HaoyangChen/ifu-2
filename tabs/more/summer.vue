<template>
    <div>
        <Banner
            title="IFU X DMA 夏季暑校"
            description="International Family Union为了更大程度上减少留学后学生发生的高概率心理疾病与犯罪率，我们开始通过锻炼学生独立思考、与各国学生合作完成小组项目等能力，培养学生留学后独立自主、全面发展等综合能力。"
            button-text="立即报名"
            :background="bannerImage"
            external-link="https://www.digitalmediaacademy.org/"
        />
        <div style="position:relative">
            <div class="bg">
                <section class="container part-1">
                    <h2>{{ $t('dma.summerCamp.title') }}</h2>
                    <p>{{ $t('dma.summerCamp.description') }}</p>
                    <Carousel :list="serviceList" />
                </section>
                <DmaCollapse
                    :title="$t('dma.stayEnv.title')"
                    background-color="#54BEF5"
                >
                    <section id="one" class="container part-2">
                        <h2>{{ $t('dma.stayEnv.title') }}</h2>
                        <div class="con">
                            <div class="row left">
                                <div
                                    v-for="item in envLeftList"
                                    :key="item.title"
                                    class="col"
                                >
                                    <div class="content">
                                        <div>
                                            <p>{{ item.title }}</p>
                                        </div>
                                        <div class="img-con">
                                            <img :src="item.src" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="circle">
                                <p>IFU X DMA <br />夏季暑校</p>
                            </div>
                            <div class="row right">
                                <div
                                    v-for="item in envRightList"
                                    :key="item.title"
                                    class="col"
                                >
                                    <div class="content">
                                        <div class="img-con">
                                            <img :src="item.src" alt="" />
                                        </div>
                                        <div>
                                            <p>{{ item.title }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </DmaCollapse>
            </div>
            <DmaCollapse
                :title="$t('dma.location.title')"
                background-color="#4BA3D9"
            >
                <section id="two" class="part-3">
                    <div class="bgc">
                        <h2 style="max-width: 1180px; margin: 0 auto">
                            {{ $t('dma.location.title') }}
                        </h2>
                        <div class="flex">
                            <div
                                v-for="item in schoolList"
                                :key="item.name"
                                class="school-container"
                            >
                                <span>{{ item.name }}</span>
                                <ul style="margin-top: 25px;">
                                    <li v-for="op in item.data" :key="op.name">
                                        <a
                                            class="super-link move"
                                            target="_blank"
                                            :href="op.link"
                                            >{{ op.name }} >></a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </DmaCollapse>
        </div>
        <DmaCollapse
            :title="$t('dma.courses.title')"
            background-color="#4187BC"
        >
            <div id="three" class="part-4">
                <div class="college-container">
                    <router-link class="rgba-con" :to="{ path: 'AI' }">
                        <div>
                            <div>{{ $t('dma.courses.name1') }}</div>
                            <div>>>></div>
                        </div>
                    </router-link>
                </div>
                <div class="college-container">
                    <router-link class="rgba-con" :to="{ path: '3D' }">
                        <div>
                            <div>{{ $t('dma.courses.name2') }}</div>
                            <div>>>></div>
                        </div>
                    </router-link>
                </div>
                <div class="college-container">
                    <router-link class="rgba-con" :to="{ path: 'robot' }">
                        <div>
                            <div>{{ $t('dma.courses.name3') }}</div>
                            <div>>>></div>
                        </div>
                    </router-link>
                    <a class="more" href="https://www.digitalmediaacademy.org/"
                        >{{ $t('dma.courses.more') }} >>></a
                    >
                </div>
            </div>
        </DmaCollapse>
        <DmaCollapse :title="$t('dma.select.title')" background-color="#36699C">
            <section id="four" class="part-5">
                <div v-if="screenWidth > 1024" class="container">
                    <div class="text">
                        <h2>{{ $t('dma.select.title') }}</h2>
                        <div>
                            {{ $t('dma.select.text1')
                            }}<strong>{{ $t('dma.select.text2') }}</strong>
                            {{ $t('dma.select.text3')
                            }}<strong>{{ $t('dma.select.text4') }}</strong>
                            {{ $t('dma.select.text5')
                            }}<strong>{{ $t('dma.select.text6') }}</strong>
                            {{ $t('dma.select.text7')
                            }}<strong>{{ $t('dma.select.text8') }}</strong>
                            {{ $t('dma.select.text9')
                            }}<strong>{{ $t('dma.select.text10') }}</strong>
                            {{ $t('dma.select.text11')
                            }}<strong>{{ $t('dma.select.text12') }}</strong>
                            {{ $t('dma.select.text13')
                            }}<strong>{{ $t('dma.select.text14') }}</strong>
                            {{ $t('dma.select.text15')
                            }}<strong>{{ $t('dma.select.text16') }}</strong>
                        </div>
                    </div>
                    <div class="img">
                        <img :src="selectImage" alt="" />
                    </div>
                </div>
                <div v-else class="container">
                    <div class="img">
                        <img :src="selectImage" alt="" />
                    </div>
                    <div class="text">
                        <h2>{{ $t('dma.select.title') }}</h2>
                        <div>
                            {{ $t('dma.select.text1')
                            }}<strong>{{ $t('dma.select.text2') }}</strong>
                            {{ $t('dma.select.text3')
                            }}<strong>{{ $t('dma.select.text4') }}</strong>
                            {{ $t('dma.select.text5')
                            }}<strong>{{ $t('dma.select.text6') }}</strong>
                            {{ $t('dma.select.text7')
                            }}<strong>{{ $t('dma.select.text8') }}</strong>
                            {{ $t('dma.select.text9')
                            }}<strong>{{ $t('dma.select.text10') }}</strong>
                            {{ $t('dma.select.text11')
                            }}<strong>{{ $t('dma.select.text12') }}</strong>
                            {{ $t('dma.select.text13')
                            }}<strong>{{ $t('dma.select.text14') }}</strong>
                            {{ $t('dma.select.text15')
                            }}<strong>{{ $t('dma.select.text16') }}</strong>
                        </div>
                    </div>
                </div>
            </section>
            <section class="part-6">
                <div v-if="screenWidth > 1024" class="container">
                    <div class="text">
                        <h2>{{ $t('dma.detail.title') }}</h2>
                        <div
                            v-for="item in detailList"
                            :key="item.title"
                            style="padding-bottom: 40px;"
                        >
                            <div class="box"></div>
                            <strong>{{ item.title }}</strong
                            ><span>{{ item.text }}</span>
                        </div>
                    </div>
                    <div class="img">
                        <img :src="detailImage" alt="" />
                    </div>
                </div>
                <div v-else class="container">
                    <div class="img">
                        <img :src="detailImage" alt="" />
                    </div>
                    <div class="text">
                        <h2>{{ $t('dma.detail.title') }}</h2>
                        <div
                            v-for="item in detailList"
                            :key="item.title"
                            style="padding-bottom: 40px;"
                        >
                            <div class="box"></div>
                            <strong>{{ item.title }}</strong
                            ><span>{{ item.text }}</span>
                        </div>
                    </div>
                </div>
            </section>
        </DmaCollapse>
        <DmaCollapse
            :title="$t('dma.service.title')"
            background-color="#2C4D7E"
        >
            <section id="five" class="part-7">
                <div class="container">
                    <div class="img part-7-img">
                        <img :src="serviceImage" alt="" />
                    </div>
                    <div class="text">
                        <h2>{{ $t('dma.service.title') }}</h2>
                        <div>{{ $t('dma.service.text') }}</div>
                        <Button :on-click="navigateToQuestion">{{
                            $t('dma.service.question')
                        }}</Button>
                    </div>
                </div>
            </section>
        </DmaCollapse>
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Button from '@/components/Button.vue';
import Carousel from '@/components/Carousel.vue';
import DmaCollapse from '@/components/DmaCollapse.vue';

import bannerImage from '@/assets/more/summer/banner.png';
import bgImage from '@/assets/more/bg.png';
import selectImage from '@/assets/more/select.png';
import detailImage from '@/assets/more/detail.png';
import serviceImage from '@/assets/more/service.png';
import carouselImage from '@/assets/more/carousel.png';
import one from '@/assets/more/1.png';
import two from '@/assets/more/2.png';
import three from '@/assets/more/3.png';
import four from '@/assets/more/4.png';
import five from '@/assets/more/5.png';
import six from '@/assets/more/6.png';
import schoolImage from '@/assets/more/school.png';

export default {
    components: {
        Banner,
        Button,
        Carousel,
        DmaCollapse,
    },
    data() {
        return {
            bannerImage,
            schoolImage,
            bgImage,
            selectImage,
            detailImage,
            serviceImage,
            screenWidth: document.body.clientWidth,
        };
    },
    computed: {
        envLeftList() {
            return [
                {
                    title: this.$t('dma.stayEnv.envLeftList.title1'),
                    src: one,
                },
                {
                    title: this.$t('dma.stayEnv.envLeftList.title2'),
                    src: two,
                },
                {
                    title: this.$t('dma.stayEnv.envLeftList.title3'),
                    src: three,
                },
            ];
        },
        envRightList() {
            return [
                {
                    title: this.$t('dma.stayEnv.envRightList.title1'),
                    src: four,
                },
                {
                    title: this.$t('dma.stayEnv.envRightList.title2'),
                    src: five,
                },
                {
                    title: this.$t('dma.stayEnv.envRightList.title3'),
                    src: six,
                },
            ];
        },
        schoolList() {
            return [
                {
                    name: this.$t('dma.location.schoolList.west'),
                    data: [
                        {
                            name: this.$t(
                                'dma.location.schoolList.westList.name1',
                            ),
                            link:
                                'https://www.digitalmediaacademy.org/northern-california-tech-camps/stanford-university/',
                        },
                        {
                            name: this.$t(
                                'dma.location.schoolList.westList.name2',
                            ),
                            link:
                                'https://www.digitalmediaacademy.org/southern-california-tech-camps/university-of-california-san-diego/',
                        },
                        {
                            name: this.$t(
                                'dma.location.schoolList.westList.name3',
                            ),
                            link:
                                'https://www.digitalmediaacademy.org/washington-tech-camps/university-of-washington/',
                        },
                    ],
                },
                {
                    name: this.$t('dma.location.schoolList.center'),
                    data: [
                        {
                            name: this.$t(
                                'dma.location.schoolList.centerList.name1',
                            ),
                            link:
                                'https://www.digitalmediaacademy.org/illinois-tech-camps/university-of-chicago/',
                        },
                        {
                            name: this.$t(
                                'dma.location.schoolList.centerList.name2',
                            ),
                            link:
                                'https://www.digitalmediaacademy.org/texas-tech-camps/austin/',
                        },
                    ],
                },
                {
                    name: this.$t('dma.location.schoolList.east'),
                    data: [
                        {
                            name: this.$t(
                                'dma.location.schoolList.eastList.name1',
                            ),
                            link:
                                'https://www.digitalmediaacademy.org/massachusetts-tech-camps/cambridge/',
                        },
                        {
                            name: this.$t(
                                'dma.location.schoolList.eastList.name2',
                            ),
                            link:
                                'https://www.digitalmediaacademy.org/new-york-metro-area-tech-camps/new-york-university/',
                        },
                        {
                            name: this.$t(
                                'dma.location.schoolList.eastList.name3',
                            ),
                            link:
                                'https://www.digitalmediaacademy.org/washington-dc-tech-camps/george-washington-university/',
                        },
                    ],
                },
                {
                    name: this.$t('dma.location.schoolList.canada'),
                    data: [
                        {
                            name: this.$t(
                                'dma.location.schoolList.canadaList.name1',
                            ),
                            link:
                                'https://www.digitalmediaacademy.org/canada-tech-camps/university-of-british-columbia/',
                        },
                        {
                            name: this.$t(
                                'dma.location.schoolList.canadaList.name2',
                            ),
                            link:
                                'https://www.digitalmediaacademy.org/canada-tech-camps/university-of-toronto/',
                        },
                    ],
                },
            ];
        },
        detailList() {
            return [
                {
                    title: this.$t('dma.detail.ageTitle'),
                    text: this.$t('dma.detail.ageText'),
                },
                {
                    title: this.$t('dma.detail.dateTitle'),
                    text: this.$t('dma.detail.dateText'),
                },
                {
                    title: this.$t('dma.detail.languageTitle'),
                    text: this.$t('dma.detail.languageText'),
                },
            ];
        },
        serviceList() {
            return [
                {
                    title: this.$t('dma.serviceList.title1'),
                    backgroundColor: '#54BEF5',
                    text: this.$t('dma.serviceList.text'),
                    image: carouselImage,
                    position: '#one',
                },
                {
                    title: this.$t('dma.serviceList.title2'),
                    backgroundColor: '#4BA3D9',
                    text: this.$t('dma.serviceList.text'),
                    image: carouselImage,
                    position: '#two',
                },
                {
                    title: this.$t('dma.serviceList.title3'),
                    backgroundColor: '#4187BC',
                    text: this.$t('dma.serviceList.text'),
                    image: carouselImage,
                    position: '#three',
                },
                {
                    title: this.$t('dma.serviceList.title4'),
                    backgroundColor: '#36699C',
                    text: this.$t('dma.serviceList.text'),
                    image: carouselImage,
                    position: '#four',
                },
                {
                    title: this.$t('dma.serviceList.title5'),
                    backgroundColor: '#2C4D7E',
                    text: this.$t('dma.serviceList.text'),
                    image: carouselImage,
                    position: '#five',
                },
            ];
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    max-width: 1180px;
    margin: 0 auto;
}
section {
    padding: 0;
}
.bg {
    background: url('../../assets/more/bg.png') no-repeat;
    background-position: left 0px top 410px;
}
.content div {
    display: inline-block;
    vertical-align: middle;
}
.content p {
    display: inline-block;
    white-space: pre-wrap;
    font-size: 16px;
    line-height: 31px;
    letter-spacing: 0.02em;
    margin: 0;
}
.img-con {
    width: 47px;
    height: 47px;
    background-color: #fda63b;
    border-radius: 50%;
    text-align: center;
    line-height: 60px;
}
.left {
    text-align: right;
}
.row {
    width: 33%;
}
.row .col {
    padding: 30px 0;
}
.left .col:nth-child(2) {
    padding-right: 40px;
}
.right .col:nth-child(2) {
    padding-left: 40px;
}
.left .img-con {
    margin-left: 20px;
}
.left .content {
    text-align: right;
}
.right .img-con {
    margin-right: 20px;
    vertical-align: middle;
}
.right .content {
    text-align: left;
}
.circle {
    width: 200px;
    height: 200px;
    background-color: #2c4d7e;
    border-radius: 50%;
    color: #fff;
    font-size: 24px;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
}
.circle p {
    padding-top: 40px;
}
.row {
    display: inline-block;
    vertical-align: middle;
}
.con {
    text-align: center;
}
.part-2 {
    h2 {
        padding-bottom: 0px;
    }
}
.part-3 {
    width: 100%;
    height: 100%;
    position: relative;
    background: url('../../assets/more/school.png') no-repeat;
    background-size: cover;
    padding: 70px 0 125px 0;
    h2 {
        padding-bottom: 40px;
    }
}
.part-3 img {
    width: 100%;
}
.part-3 .bgc {
    color: #fff;
}
.part-3 .flex {
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.super-link {
    position: relative;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    padding-bottom: 3px;
}
.super-link::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: currentColor;
    transform: scale(0);
    transition: all 0.5s;
}
.super-link:hover::after {
    transform: scale(1);
}
.move::after {
    transform-origin: left;
}
.part-4 {
    background-color: rgba(133, 133, 133, 0.56);
    display: flex;
}
.school-container {
    color: #fff;
    display: inline-block;
    vertical-align: top;
    text-align: left;
}
.school-container span {
    font-size: 24px;
    line-height: 33px;
    padding-bottom: 5px;
    border-bottom: 3px solid #fda63b;
    transform: matrix(1, 0, 0, -1, 0, 0);
}
.school-container li {
    list-style: none;
    font-size: 16px;
    line-height: 31px;
    letter-spacing: 0.02em;
}
.college-container {
    display: inline-block;
    width: 33.33%;
    text-align: center;
    font-size: 24px;
    text-align: center;
    letter-spacing: 0.05em;
    height: 521px;
}
.college-container:first-child {
    background: url('../../assets/more/col-1.png') no-repeat;
    border-top: 15px solid #34bbc9;
    border-bottom: 30px solid #34bbc9;
}
.college-container:nth-child(2) {
    background: url('../../assets/more/col-2.png') no-repeat;
    border-top: 15px solid #c9d74a;
    border-bottom: 30px solid #c9d74a;
}
.college-container:last-child {
    background: url('../../assets/more/col-3.png') no-repeat;
    border-top: 15px solid #f96291;
    border-bottom: 30px solid #f96291;
}
.college-container a {
    color: #fff;
    text-decoration: none;
}
.rgba-con {
    height: 100%;
    background-color: rgba(133, 133, 133, 0.56);
    display: flex;
    align-items: center;
    justify-content: center;
}
.rgba-con:hover {
    background-color: rgba(255, 255, 255, 0.4);
}
.more {
    font-size: 16px;
    height: 30px;
    line-height: 30px;
    float: right;
    padding-right: 130px;
}
ul {
    padding-left: 0;
}
.part-5 {
    padding: 60px 0;
}
.part-5 {
    .text {
        padding-right: 80px;
    }
}
.text {
    width: 45%;
    font-size: 16px;
    line-height: 31px;
    letter-spacing: 0.02em;
    display: inline-block;
    vertical-align: middle;
    white-space: pre-line;
}
.img {
    display: inline-block;
    vertical-align: middle;
}
.part-6 {
    background-color: #e2edf6;
    h2 {
        padding-left: 28px;
    }
    .text {
        padding-right: 120px;
    }
}
.part-6 .box {
    width: 10px;
    height: 10px;
    border: 2px solid #29bbca;
    display: inline-block;
    vertical-align: middle;
}
.part-6 div strong {
    font-size: 16px;
    letter-spacing: 0.02em;
    margin: 0;
    padding: 0 5px 0 15px;
}
.part-6 span {
    font-size: 16px;
    letter-spacing: 0.02em;
}
.part-6 > div {
    padding-top: 36px;
}
.part-7 {
    padding-bottom: 130px;
    .img {
        padding-right: 88px;
    }
}
.part-7 button {
    margin-top: 50px;
}
.part-7-img {
    vertical-align: middle;
    padding-right: 60px;
}
h2 {
    margin: 0;
    padding: 60px 0 20px 0;
}

@media (max-width: 1024px) {
    .bg {
        background-image: none;
    }
    .part-1 {
        padding-top: 40px;
        h2 {
            padding: 0 30px;
        }
        p {
            padding: 0 30px;
            line-height: 31px;
            letter-spacing: 0.02em;
        }
    }
    .part-2 {
        .con {
            margin: 0 30px 0 90px;
        }
        h2 {
            display: none;
        }
        .row {
            display: block;
            width: 100%;
        }
        .circle {
            display: none;
        }
        .left .content {
            text-align: left;
        }
        .col {
            padding: 20px 0;
        }
        .content {
            position: relative;
            p {
                font-size: 14px;
                line-height: 31px;
                letter-spacing: 0.02em;
            }
            .img-con {
                top: 50%;
                position: absolute;
                left: -65px;
                margin-top: -22px;
            }
        }
        .left .col:nth-child(2) {
            padding-right: 0px;
        }
        .right .col:nth-child(2) {
            padding-left: 0px;
        }
        .left .img-con {
            margin-left: 0px;
        }
        .right {
            padding-bottom: 20px;
        }
    }
    .part-3 {
        background-position: center;
        position: static;
        background: url('../../assets/more/schoolbg.png') no-repeat;
        background-size: cover;
        padding-bottom: 0;
        padding: 0;
        .bgc {
            padding: 50px 30px;
        }
        h2 {
            display: none;
        }
        .flex {
            display: block;
            .school-container {
                display: block;
            }
        }
    }
    .part-4 {
        h2 {
            display: none;
        }
        width: 100%;
        display: block;
        background: #fff;
        text-align: center;
        .college-container {
            width: 348px;
            height: 384px;
            border: none;
            border-radius: 10px;
            margin: auto;
            margin-top: 15px;
            display: table;
            &:last-child {
                margin-bottom: 60px;
            }
            .more {
                color: #11a4da;
                padding-right: 0px;
                padding-top: 10px;
                font-size: 14px;
            }
        }
    }
    .part-5,
    .part-6,
    .part-7 {
        padding: 0 30px;
        h2 {
            display: none;
        }
        .text {
            width: 100%;
            text-align: left;
            padding: 0;
        }
        .part-7-img {
            padding-right: 0px;
        }
    }
    .part-5 {
        text-align: center;
        .img {
            width: 541px;
            margin-top: 70px;
            text-align: center;
        }
        .text {
            padding: 0;
            div {
                padding: 80px 0;
            }
        }
    }
    .part-6 {
        text-align: center;
        h2 {
            display: none;
        }
        .img {
            width: 495px;
            margin: 40px 0;
            text-align: center;
        }
    }
    .part-6 > div {
        padding-top: 0px;
    }
    .part-7 {
        text-align: center;
        padding-bottom: 30px;
        .container {
            padding-top: 56px;
        }
        .img {
            width: 516px;
            margin: 40px 0;
            text-align: center;
        }
    }
}
@media (max-width: 576px) {
    .part-5,
    .part-6,
    .part-7 {
        .img {
            width: 100%;
            img {
                width: 100%;
            }
        }
    }
}
@media (max-width: 374px) {
    .part-4 {
        .college-container {
            width: 300px;
        }
    }
}
</style>
