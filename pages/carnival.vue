<template>
    <div class="carnival">
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
                        <h2>{{ $t('home.carnival.subTitle') }}</h2>
                        <div class="carnival-description">
                            <p v-html="$t('home.carnival.description')" />
                        </div>
                        <div class="carnival-btn">
                            <!-- <Button
                                external
                                to="https://mp.weixin.qq.com/s/7ljBJF4sphtmxkAYwzNMdA"
                                >{{ $t('home.carnival.buttonText') }}</Button
                            > -->
                            <Button :to="localePath('/carnival')">{{
                                $t('home.carnival.buttonText')
                            }}</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section class="section-1">
            <div>
                <div>
                    <img src="@/assets/carnival/section-1-icon-1.svg" />
                    <h3>真实留学生活 & 优质信息</h3>
                    <p>
                        让拥有丰富留学经验和故事的学长学姐启发你的留学旅程；让各行业的嘉宾、学校国际学生办公室代表，为你带来更权威的信息。
                    </p>
                </div>
                <div class="div-3">
                    <img src="@/assets/carnival/section-1-icon-3.svg" />
                    <h3>一次性了解完留学前中后期的信息</h3>
                    <p>
                        从留学准备到留学途中，再到留学即将结束，一次性找各校学长学姐获取留学这条马拉松的干活咨询吧！
                    </p>
                </div>
            </div>
            <div>
                <img src="@/assets/carnival/section-1.svg" />
            </div>
            <div>
                <div>
                    <img src="@/assets/carnival/section-1-icon-2.svg" />
                    <h3>跨国跨校跨年龄高质量社交圈</h3>
                    <p>
                        认识不同年龄、留学阶段、学校、来自全国各地的同学和家长，有机会跟活动中的嘉宾、学长学姐成为好朋友，建立更大的互动平台。
                    </p>
                </div>
                <div class="div-4">
                    <img src="@/assets/carnival/section-1-icon-4.svg" />
                    <h3>无时间与地区局限性</h3>
                    <p>
                        摆脱烦人的交通、时差、餐旅费问题，并摘掉口罩在线上与我们“见面”畅谈吧！
                    </p>
                </div>
            </div>
        </section>
        <section class="section-2">
            <div class="card">
                <h3>活动时间（北京时间）</h3>
                <p>
                    美东场 — 7月18日 周六 上午十点
                    <br />
                    加拿大&英国场 — 7月19日 周日 上午十点
                    <br />
                    美西场 — 7月19日 周日 下午一点
                </p>
                <br />
                <h3>活动地点（线上）</h3>
                <p>
                    Zoom线上举办；
                    <br />
                    同时在Bilibili和微信嘉年华活动群内转播
                </p>
            </div>
        </section>
        <div class="section-3">
            <div class="title">活动内容</div>
            <section>
                <div>
                    <img src="@/assets/carnival/section-3-icon-1.svg" />
                    <h3>— 学长学姐 Panel —</h3>
                    <p>
                        留学经验丰富的学长学姐将与您分享留学路上的重点话题：衣食住行、学术、职业、社交、校园资源等等。
                    </p>
                </div>
                <div>
                    <img src="@/assets/carnival/section-3-icon-2.svg" />
                    <h3>— 嘉宾宣讲 —</h3>
                    <p>
                        IFU邀请到了各行业的精英嘉宾带来留学政策、海外法律等目前的热门留学话题。
                    </p>
                </div>
                <div>
                    <img src="@/assets/carnival/section-3-icon-3.svg" />
                    <h3>— 自由畅谈环节 —</h3>
                    <p>
                        届时IFU将根据学校或地区把您邀请入不同的现场群聊，让您与有经验的学长学姐深入讨论更多留学话题。
                    </p>
                </div>
            </section>
        </div>
        <section class="section-4">
            <h3>IFU学长学姐嘉年华 志愿者招募</h3>
            <p>演讲分享人 | 管理专员 | 宣传专员</p>
        </section>
        <div class="section-5">
            <section class="div-1">
                <h3>— 如果你 —</h3>
                <ul>
                    <li>想为留学家庭做些什么，用自己的经验影响身边的留学生</li>
                    <li>想了解非营利组织是如何运作的</li>
                    <li>想学习用户运营、社群运营、锻炼public</li>
                    <li>speaking并积攒经验，却一直没有机会接触</li>
                </ul>
                <p>
                    —— 欢迎加入IFU学长学姐嘉年华志愿者团队！
                </p>
            </section>
            <section class="div-2">
                <h3>— 你可以 —</h3>
                <ul>
                    <li>以过来人的视角传递留学经验，帮助更多留学家庭</li>
                    <li>结识不同背景的优秀小伙伴</li>
                    <li>提升策划、管理、演讲、宣传能力</li>
                    <li>
                        经过优秀的志愿工作后，获得一份NGO (非营利非政府组织)
                        的志愿者证明
                    </li>
                    <li>更多嘉年华志愿者专属福利等你解锁！</li>
                </ul>
            </section>
        </div>
        <section class="section-6">
            <div>
                <div class="title">演讲分享人</div>
                <h3>职位介绍</h3>
                <p>
                    在嘉年华中的学长学姐Panel、自由畅谈Break-out
                    Session、以及嘉年华后的学长学姐茶话会中，分享你最宝贵的留学故事和建议。让你的故事启发并鼓励更多留学生。
                    <br />
                    <b>(急需加拿大&英国志愿者)</b>
                </p>
                <br />
                <h3>要求</h3>
                <p>
                    有演讲经历，具备流利沟通表达能力；自信有感染力；拥有一年以上留学经历。
                </p>
            </div>
            <div>
                <div class="title">管理专员</div>
                <h3>职位介绍</h3>
                <p>
                    在活动前中后期进行社群运营以及用户运营管理，在嘉年华活动群中解答同学们与家长们的疑虑，负责协助嘉年华活动进行中的Zoom、Bilibili平台管理。
                </p>
                <br />
                <h3>要求</h3>
                <p>
                    能熟悉操作Zoom或Bilibili平台；有良好的文字编辑能力；有良好的沟通交流能力。
                </p>
            </div>
            <div>
                <div class="title">宣传专员</div>
                <h3>职位介绍</h3>
                <p>
                    协助活动宣传海报及文案制作，记录活动过程，采访嘉宾和活动参与者，完成活动回顾报道以及社交媒体平台运营。
                </p>
                <br />
                <h3>要求</h3>
                <p>
                    熟悉操作Zoom或Bilibili平台；熟悉推文编辑、有良好的文字功底；有基础视频剪辑、海报制作能力；有良好的交流沟通能力。(需提供你曾经完成过的海报或视频或写作样本)
                </p>
            </div>
        </section>
        <div class="section-7">
            <div class="title">志愿者申请及工作流程</div>
            <section>
                <div class="div-1"><p>填写报名表</p></div>
                <div class="div-2"><p>IFU嘉年华工作团队审核资料</p></div>
                <div class="div-3"><p>一周内发放面试通知邮件</p></div>
                <div class="div-4"><p>面试</p></div>
                <div class="div-5"><p>面试三天后发放结果通知</p></div>
                <div class="div-6"><p>志愿者培训</p></div>
                <div class="div-7"><p>嘉年华彩排</p></div>
                <div class="div-8"><p>嘉年华活动</p></div>
                <div class="div-9"><p>学长学姐茶话会</p></div>
                <div class="div-10">
                    <div class="text">
                        <h3>准备好了？扫描二维码报名吧！</h3>
                        <p>
                            也欢迎添加IFU小助手2号微信，进入2020
                            IFU学长学姐志愿者申请答疑群，向IFU嘉年华工作团队提出任何对嘉年华活动及志愿者工作的疑问。
                        </p>
                    </div>
                    <div class="image">
                        <div>
                            <img src="@/assets/carnival/section-7-qr-1.png" />
                            <p>嘉年华志愿者报名</p>
                        </div>
                        <div>
                            <img src="@/assets/carnival/section-7-qr-1.png" />
                            <p>嘉年华志愿者报名</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';
import carnivalPerson1 from '@/assets/home/carnival_person1.png';
import carnivalPerson2 from '@/assets/home/carnival_person2.png';
import carnivalPerson3 from '@/assets/home/carnival_person3.png';
import carnivalBackground from '@/assets/home/carnival_bg.png';

export default {
    components: {
        Button,
    },
    data() {
        return {
            carnivalBackground,
            carnivalPerson1,
            carnivalPerson2,
            carnivalPerson3,
        };
    },
};
</script>

<style lang="scss" scoped>
.carnival {
    line-height: 31px;
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
        }

        h2 {
            text-align: center;
            padding-top: 20px;
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

.section-1 {
    background: $background-light-blue;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        font-size: 18px;
    }

    > div {
        flex-basis: 33%;
    }

    p {
        padding-right: 50px;
    }

    .div-3,
    .div-4 {
        margin-top: 80px;
    }
}

.section-2 {
    background: url(~assets/carnival/section-2.svg);
    min-height: 500px;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    height: 617px;

    .card {
        background: url(~assets/carnival/section-2-card.svg);
        background-repeat: no-repeat;
        background-size: cover;
        width: 482px;
        height: 457px;
        padding: 99px 71px;

        > h3 {
            margin-top: 0;
        }
    }
}

.section-3 {
    .title {
        background: #f2d07e;
        height: 97px;
        width: 100%;
        text-align: center;
        color: white;
        font-size: 30px;
        line-height: 97px;
        font-weight: 600;
    }

    > section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff3d9;

        > div {
            flex-basis: 33%;
            text-align: center;

            > h3 {
                color: $button-color;
            }

            > p {
                text-align: left;
                padding: 0 70px;
            }
        }
    }
}

.section-4 {
    background: url(~assets/carnival/section-4.svg);
    height: 612px;
    background-position: center;
    background-repeat: no-repeat;
    margin: 80px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
        font-size: 30px;
        font-weight: 600;
        margin-top: 0;
    }
}

.section-5 {
    display: flex;

    > section {
        flex-basis: 50%;

        > h3 {
            text-align: center;
        }
    }

    .div-1 {
        background: #466eb6;
        color: white;

        p {
            padding-left: 20px;
        }
    }

    .div-2 {
        background: $background-light-blue;
        color: #466eb6;
    }
}

.section-6 {
    display: flex;
    justify-content: space-between;

    > div {
        flex-basis: 30%;
        border: 8px solid #466eb6;
        border-radius: 20px;
        padding: 37px 41px;
        position: relative;

        .title {
            position: absolute;
            width: 50%;
            height: 25px;
            top: -20px;
            left: 25%;
            text-align: center;
            font-size: 24px;
            font-weight: 600;
            color: #466eb6;
            background: white;
        }
    }
}

.section-7 {
    .title {
        background: #f2d07e;
        height: 97px;
        width: 100%;
        text-align: center;
        color: white;
        font-size: 30px;
        line-height: 97px;
        font-weight: 600;
    }

    section {
        display: flex;
        flex-wrap: wrap;

        > div {
            width: 237px;
            height: 224px;
            margin: 80px 30px;
            padding: 0 38px 0 68px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .div-1 {
            background: url(~assets/carnival/section-7-icon-1.svg);
            background-size: cover;
            background-repeat: no-repeat;
        }

        .div-2 {
            background: url(~assets/carnival/section-7-icon-2.svg);
            background-size: cover;
            background-repeat: no-repeat;
        }

        .div-3 {
            background: url(~assets/carnival/section-7-icon-3.svg);
            background-size: cover;
            background-repeat: no-repeat;
        }

        .div-4 {
            background: url(~assets/carnival/section-7-icon-4.svg);
            background-size: cover;
            background-repeat: no-repeat;
        }

        .div-5 {
            background: url(~assets/carnival/section-7-icon-5.svg);
            background-size: cover;
            background-repeat: no-repeat;
        }

        .div-6 {
            background: url(~assets/carnival/section-7-icon-6.svg);
            background-size: cover;
            background-repeat: no-repeat;
        }

        .div-7 {
            background: url(~assets/carnival/section-7-icon-7.svg);
            background-size: cover;
            background-repeat: no-repeat;
        }

        .div-8 {
            background: url(~assets/carnival/section-7-icon-8.svg);
            background-size: cover;
            background-repeat: no-repeat;
        }

        .div-9 {
            background: url(~assets/carnival/section-7-icon-9.svg);
            background-size: cover;
            background-repeat: no-repeat;
        }

        .div-10 {
            border: 3px solid #f2d07e;
            width: 767px;
            height: 220px;
            padding: 38px 41px;
            box-shadow: 0px 5px 15px rgba(242, 208, 126, 0.25);

            .text {
                flex-basis: 70%;
            }

            .image {
                flex-basis: 30%;
                display: flex;
                font-size: 10px;
                text-align: center;
                justify-content: space-between;

                > div {
                    margin-left: 26px;
                }
            }
        }
    }
}
</style>
