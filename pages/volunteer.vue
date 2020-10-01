<template>
    <div>
        <Banner
            title="IFU 校园志愿者"
            description="IFU校园志愿者是IFU全体志愿者中的一类。 其职责是在围绕着“让留学家庭更安心”的使命上，参与紧急事件援助、正确翻译、传播学校信息、社群答疑，以减少留学家庭之间信息差，留学生海外焦虑问题。目前IFU校园志愿者遍布北美25所高校，以学生社团或单人志愿者的形式在校园存在。"
            button-text="成为校园志愿者"
            external
            to="https://forms.gle/KvsV5GiSb4nMtLER7"
            :background="bannerImage"
        />
        <div class="section-mission">
            <section>
                <h2>校园志愿者的使命</h2>
                <p>
                    IFU全体志愿者的使命是达成IFU
                    NGO“让留学家庭更安心”的社会目标。我们想要减少或解决一直被社会所忽视的留学生群体及背后家庭所面临的问题，例如留学安全、心理压力、文化冲突、学术就职压力等等。我们希望通过减少学生家长之间的信息代沟，在紧急情况时为家长提供校方联系，为学生提供法律、学术、心理援助等方式来完成我们的使命与组织的社会目标。
                </p>
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
                <h2>紧急情况</h2>
                <p>
                    IFU能够在紧急情况发生时，例如：失联、心理精神、法律、学术问题，及时地帮助家长通过联系IFU工作人员以及相对应校园志愿者获得帮助。
                </p>
            </div>
            <div>
                <img src="@/assets/volunteer/icon-info.svg" alt="info icon" />
                <h2>信息传递</h2>
                <p>
                    IFU通过线上和线下信息分享的方式来减少留学家庭之间的信息代沟。分享内容包括：校园官方信息、留学生第一视角的校园、生活体验、学长学姐经验等。让留学生父母更了解孩子海外生活，也让孩子更理解父母所忧，成为彼此之间的信息桥梁。
                </p>
            </div>
            <div>
                <img
                    src="@/assets/volunteer/icon-program.svg"
                    alt="program icon"
                />
                <h2>特定项目</h2>
                <p>
                    IFU针对部分留学问题制定了特定项目去解决。例如：IFU Peer
                    Mentor Program、多多罗学术项目、暑期学长学姐高校嘉年华等。
                </p>
            </div>
        </div>
        <section class="section-school">
            <div>
                <h2 class="color-underline east-color title">美国东部</h2>
                <p>伊利诺伊大学香槟分校</p>
                <p>罗切斯特大学</p>
                <p>弗里吉尼亚联邦大学</p>
                <p>乔治华盛顿大学</p>
                <p>俄亥俄州立大学</p>
                <p>波士顿大学</p>
                <p>纽约大学</p>
                <p>威斯康辛麦迪逊大学</p>
                <p>北卡州立大学</p>
                <p>佐治亚大学</p>
                <p>奥本大学</p>
                <p>杜兰大学</p>
            </div>
            <div>
                <h2 class="color-underline west-color title">美国西部</h2>
                <p>加州大学欧文分校</p>
                <p>加州大学圣地亚哥分校</p>
                <p>加州大学洛杉矶分校</p>
                <p>加州大学圣塔芭芭拉分校</p>
                <p>加州大学戴维斯分校</p>
                <p>加州大学伯克利分校</p>
                <p>南加州大学</p>
                <p>华盛顿大学</p>
            </div>
            <div>
                <h2 class="color-underline canada-color title">加拿大&英国</h2>
                <p>英属哥伦比亚大学</p>
                <p>西蒙菲莎大学</p>
                <p>阿尔伯塔大学</p>
                <p>维多利亚大学</p>
                <p>伦敦大学学院</p>
            </div>
            <div>
                <h2 class="color-underline singapore-color title">新加坡</h2>
                <p>新加坡国立大学</p>
            </div>
            <div class="pic">
                <h3>持续扩展中...</h3>
                <span>想要成为校园志愿者，为<br />留学生群体尽一份力吗？</span>
                <br />
                <a class="link" href="https://forms.gle/KvsV5GiSb4nMtLER7"
                    >加入我们>>>
                </a>
            </div>
        </section>
        <section class="event-review">
            <h2>活动回顾</h2>
            <p>
                月报、年报总结。加下载report 链接。月报、年报总结。加下载report
                链接。月报、年报总结。加下载report
                链接。月报、年报总结。加下载report
                链接。月报、年报总结。加下载report
                链接。月报、年报总结。加下载report 链接。
            </p>
        </section>
        <div class="swiper-section">
            <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                    <div
                        v-for="(item, index) in swiperList"
                        :key="index"
                        class="swiper-slide"
                    >
                        <div class="img">
                            <img :src="item.image" />
                            <p>{{ item.title }}</p>
                            <p>{{ item.subTitle }}</p>
                        </div>
                    </div>
                </div>
                <div slot="button-prev" class="swiper-button-prev"></div>
                <div slot="button-next" class="swiper-button-next"></div>
            </div>
        </div>
        <section class="become-campus-volunteer">
            <div class="volunteer-become">
                <h2>成为校园志愿者</h2>
                <p>
                    IFU致力于减少留学安全问题，提升留学家庭和谐度，改善留学家庭信息不对称，减少留学在外不平等的社会问题，着重服务于留学生家长，以及关注其孩子的心理健康问题。我们将通过3大核心方式来完成我们的使命：<strong
                        >紧急情况、信息传递、校园官方信息翻译。</strong
                    >
                </p>
            </div>
            <div class="campus-volunteer-lr">
                <div class="requirement">
                    <p>作为校园志愿者你将会</p>
                    <ul>
                        <li>
                            在紧急情况发生时，及时帮助家长联系到校园志愿者获得帮助。
                        </li>
                        <li>
                            通过传递留学生第一视角的校园、生活信息，来减少留学家庭之间的信息代沟。
                        </li>
                        <li>
                            在各学校官方发出重大政策通知时，及时把学校官方信息进行翻译，传递给家长学生。
                        </li>
                    </ul>
                    <br />
                    <p>作为校园志愿者你需要是</p>
                    <ul>
                        <li>
                            海外大学在读学生或毕业生
                        </li>
                        <li>
                            中英双语熟练优先
                        </li>
                    </ul>
                </div>
                <div class="ready-to-join">
                    <div class="content">
                        <h2>准备好加入我们了吗？</h2>
                        <p>
                            感谢你愿意为留学群体，为IFU让留学家<br />庭更安心的使命做出一份贡献～
                        </p>
                        <Button
                            external
                            to="https://forms.gle/KvsV5GiSb4nMtLER7"
                            >提交申请</Button
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
                    image: swiperImage1,
                },
                {
                    title: 'IFU X Shelter Helper 募集善款活动',
                    image: swiperImage2,
                },
                {
                    title: '农历新年聚会',
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
            padding: 0 50px;
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
    .pic {
        width: 337px;
        height: 289px;
        background-image: url(~assets/volunteer/bubble.png);
        position: relative;
        left: 70%;
        box-sizing: border-box;
        padding-left: 75px;
        padding-top: 50px;
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
    }
}

.event-review {
    width: 70%;
    margin-left: 0px;
    line-height: 31px;
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
        }
    }
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
                padding-left: 50px;
                padding-top: 50px;
                line-height: 30px;
                h2 {
                    font-weight: bolder;
                }
            }
            img {
                position: relative;
                left: 400px;
            }
        }
    }
}
</style>
