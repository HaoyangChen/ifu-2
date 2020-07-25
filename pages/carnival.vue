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
                        <h2 v-html="$t('home.carnival.subTitle')" />
                        <div class="carnival-description">
                            <p v-html="$t('home.carnival.description')" />
                        </div>
                        <div class="carnival-btn">
                            <Button scroll to="#review">
                                {{ $t('carnival.banner.buttonText') }}
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section class="section-0">
            <h2>{{ $t('carnival.section-0.title') }}</h2>
            <div>
                <div class="title">
                    {{ $t('carnival.section-0.div-1.title') }}
                </div>
                <div class="description">
                    {{ $t('carnival.section-0.div-1.description') }}
                </div>
            </div>
            <div>
                <div class="title">
                    {{ $t('carnival.section-0.div-2.title') }}
                </div>
                <div class="description">
                    {{ $t('carnival.section-0.div-2.description') }}
                </div>
            </div>
        </section>
        <section class="section-1 desktop">
            <div>
                <div class="div-1">
                    <img src="@/assets/carnival/section-1-icon-1.svg" />
                    <h3>{{ $t('carnival.section-1.div-1.title') }}</h3>
                    <p>
                        {{ $t('carnival.section-1.div-1.description') }}
                    </p>
                </div>
                <div class="div-3">
                    <img src="@/assets/carnival/section-1-icon-3.svg" />
                    <h3>{{ $t('carnival.section-1.div-3.title') }}</h3>
                    <p>
                        {{ $t('carnival.section-1.div-3.description') }}
                    </p>
                </div>
            </div>
            <div class="clipart">
                <img src="@/assets/carnival/section-1.svg" />
            </div>
            <div>
                <div class="div-2">
                    <img src="@/assets/carnival/section-1-icon-2.svg" />
                    <h3>{{ $t('carnival.section-1.div-2.title') }}</h3>
                    <p>
                        {{ $t('carnival.section-1.div-2.description') }}
                    </p>
                </div>
                <div class="div-4">
                    <img src="@/assets/carnival/section-1-icon-4.svg" />
                    <h3>{{ $t('carnival.section-1.div-4.title') }}</h3>
                    <p>
                        {{ $t('carnival.section-1.div-4.description') }}
                    </p>
                </div>
            </div>
        </section>
        <section class="section-1-mobile mobile">
            <div class="div-1">
                <img src="@/assets/carnival/section-1-icon-1.svg" />
                <h3>{{ $t('carnival.section-1.div-1.title') }}</h3>
                <p>
                    {{ $t('carnival.section-1.div-1.description') }}
                </p>
            </div>
            <div class="div-2">
                <img src="@/assets/carnival/section-1-icon-2.svg" />
                <h3>{{ $t('carnival.section-1.div-2.title') }}</h3>
                <p>
                    {{ $t('carnival.section-1.div-2.description') }}
                </p>
            </div>
            <div class="div-3">
                <img src="@/assets/carnival/section-1-icon-3.svg" />
                <h3>{{ $t('carnival.section-1.div-3.title') }}</h3>
                <p>
                    {{ $t('carnival.section-1.div-3.description') }}
                </p>
            </div>
            <div class="div-4">
                <img src="@/assets/carnival/section-1-icon-4.svg" />
                <h3>{{ $t('carnival.section-1.div-4.title') }}</h3>
                <p>
                    {{ $t('carnival.section-1.div-4.description') }}
                </p>
            </div>
        </section>
        <div class="section-3">
            <div class="title">{{ $t('carnival.section-3.title') }}</div>
            <section>
                <div>
                    <img src="@/assets/carnival/section-3-icon-1.svg" />
                    <h3>{{ $t('carnival.section-3.div-1.title') }}</h3>
                    <p v-html="$t('carnival.section-3.div-1.description')" />
                </div>
                <div>
                    <img src="@/assets/carnival/section-3-icon-2.svg" />
                    <h3>{{ $t('carnival.section-3.div-2.title') }}</h3>
                    <p v-html="$t('carnival.section-3.div-2.description')" />
                </div>
                <div>
                    <img src="@/assets/carnival/section-3-icon-3.svg" />
                    <h3>{{ $t('carnival.section-3.div-3.title') }}</h3>
                    <p v-html="$t('carnival.section-3.div-3.description')" />
                </div>
            </section>
        </div>
        <section class="section-2">
            <div class="card">
                <div class="tag">
                    {{ $t('carnival.section-2.tag') }}
                </div>
                <p v-html="$t('carnival.section-2.p')" />
            </div>
        </section>
        <div class="section-schedule">
            <div class="title">{{ $t('carnival.section-schedule.title') }}</div>
            <section>
                <carnival-tab />
                <div class="qr-card">
                    <div class="text">
                        <h3>
                            {{ $t('carnival.section-schedule.qr-card.title') }}
                        </h3>
                        <p>
                            {{
                                $t(
                                    'carnival.section-schedule.qr-card.description',
                                )
                            }}
                        </p>
                    </div>
                    <div class="image">
                        <img src="@/assets/carnival/section-schedule-qr.svg" />
                    </div>
                </div>
            </section>
        </div>
        <section id="review" class="us-east-section">
            <div>
                <img src="@/assets/carnival/us-east.png" />
            </div>
            <div class="text">
                <h2>美东场</h2>
                <p>
                    作为今年IFU学长学姐嘉年华的第一场，美东场邀请到超过10位海外<b>高校在读学长学姐</b>进行<b>分享</b>，同时，我们邀请的中外专业嘉宾的<b>“留学政策解析”、“中美教育系统对比”、“疫情下留学生应对措施”</b>也不容错过！
                </p>
                <Button external>回顾视频</Button>
            </div>
        </section>
        <section class="canada-uk-section">
            <div class="text">
                <h2>加拿大英国场</h2>
                <p>
                    今年是IFU面向加拿大和英国举办学长学姐嘉年华的第一年，很高兴我们的学长学姐能就<b>加英留学生活、学术准备、工作申请</b>方面进行经验分享。加拿大英国场IFU邀请到了极富留学工作经验的嘉宾为大家带来<b
                        >“英国留学优势及Top 100大学介绍”</b
                    >，作为2020留学白皮书中国留学家庭第一选择留学国家，对英国留学感兴趣的同学们家长们，赶紧戳视频看看吧！
                </p>
                <Button external>回顾视频</Button>
            </div>
            <div>
                <img src="@/assets/carnival/canada-uk.png" />
            </div>
        </section>
        <section class="us-west-section">
            <div>
                <img src="@/assets/carnival/us-west.png" />
            </div>
            <div class="text">
                <h2>美西场</h2>
                <p>
                    美西场是我们今年IFU学长学姐嘉年华的收官场，学长学姐们以及嘉宾们带来的干货更是重量级。除了有来自美国西部的十余位神仙学长学姐对<b>美西留学全方面</b>的精彩经验分享，美西场还有专业留学法律咨询律师带来的<b>“留学生合法身份与签证正确解读”</b>及<b>“留学生常遇到的法律问题及如何避雷”</b>的精彩分享！
                </p>
                <Button external>回顾视频</Button>
            </div>
        </section>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';
import CarnivalTab from '@/components/CarnivalTab.vue';
import carnivalPerson1 from '@/assets/home/carnival_person1.png';
import carnivalPerson2 from '@/assets/home/carnival_person2.png';
import carnivalPerson3 from '@/assets/home/carnival_person3.png';
import carnivalBackground from '@/assets/home/carnival_bg.png';

export default {
    components: {
        Button,
        CarnivalTab,
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
            font-weight: bold;
        }

        h2 {
            margin-left: auto;
            margin-right: auto;
            width: 86%;
            text-align: left;
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
            position: relative;
        }
    }
}

.section-0 {
    border-top: 10px solid rgba(34, 165, 216, 0.5);
    border-bottom: 10px solid rgba(34, 165, 216, 0.5);

    h2 {
        width: 100%;
        text-align: center;
        font-weight: 600;
        margin-bottom: 50px;
    }

    > div {
        margin: 11px auto;
        width: 70%;
        height: 118px;
        display: flex;

        .title {
            flex-basis: 20%;
            height: 100%;
            background: #f2d07e;
            font-size: 24px;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .description {
            flex-basis: 80%;
            background: #d4effc;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 0 65px;
        }
    }
}

.section-1 {
    background: $background-light-blue;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .clipart {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 680px;
    }

    h3 {
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 600;
    }

    > div {
        flex-basis: 33%;
    }

    .div-1,
    .div-2 {
        height: 350px;
    }

    .div-3,
    .div-4 {
        height: 250px;
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
    background-position: bottom;
    display: flex;
    justify-content: center;
    height: 617px;

    /deep/ b {
        color: $button-color;
    }

    .card {
        border: 3px solid #f2d07e;
        box-shadow: 0px 5px 15px rgba(242, 208, 126, 0.25);
        width: 482px;
        height: 457px;
        padding: 99px 45px;
        position: relative;

        .tag {
            position: absolute;
            font-size: 14px;
            top: 31px;
            left: -11px;
            background: url(~assets/carnival/section-2-card.svg);
            width: 146px;
            height: 47px;
            background-size: contain;
            background-repeat: no-repeat;
            color: white;
            font-weight: 600;
            padding: 5px 0 7px 45px;
        }

        > h3 {
            margin: 0;
            font-weight: 600;
            text-transform: uppercase;
        }

        > p {
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
        align-items: flex-start;
        background: #fff3d9;

        > div {
            flex-basis: 33%;
            text-align: center;

            > h3 {
                color: $button-color;
                text-transform: uppercase;
                font-size: 16px;
            }

            > p {
                text-align: left;
                padding: 0 50px;
            }
        }
    }
}

.section-schedule {
    background: $background-light-blue;

    .title {
        width: 100%;
        height: 97px;
        background: $button-color;
        color: white;
        text-align: center;
        font-size: 30px;
        line-height: 97px;
    }

    .qr-card {
        margin-top: 50px;
        margin-left: 8%;
        width: 669px;
        height: fit-content;
        padding: 38px 41px;
        background: white;
        border: 3px solid $button-color;
        box-shadow: 0px 5px 15px rgba(34, 165, 216, 0.25);
        display: flex;
        align-items: center;

        .text {
            h3 {
                font-size: 24px;
                margin-bottom: 0;
            }

            p {
                padding-right: 20px;
            }
        }
    }
}

.us-east-section {
    background: #fff3d9;
    display: flex;

    .text {
        padding-left: 8%;
    }
}

.canada-uk-section {
    display: flex;

    .text {
        padding-right: 8%;
    }
}

.us-west-section {
    background: #fff3d9;
    display: flex;

    .text {
        padding-left: 8%;
    }
}

@media (max-width: $mobile-max-width) {
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

    .section-0 {
        h2 {
            width: 100%;
            text-align: center;
            font-weight: 600;
            margin-bottom: 50px;
        }

        > div {
            margin: 11px auto;
            width: 100%;
            height: 158px;

            .title {
                flex-basis: 25%;
                font-size: 18px;
                text-align: center;
            }

            .description {
                flex-basis: 75%;
                padding: 0 15px;
                line-height: 22px;
            }
        }
    }

    .section-1-mobile {
        background: url(~assets/carnival/section-1-mobile.svg);
        display: flex;
        flex-direction: column;

        h3 {
            font-size: 18px;
            text-transform: uppercase;
            font-weight: 600;
            margin-bottom: 0;
        }

        p {
            margin-top: 0;
        }

        > div {
            flex-basis: 100%;
        }

        .div-1 {
            margin-top: 56px;
            margin-bottom: 61px;
        }

        .div-2 {
            margin-top: 0;
            margin-bottom: 61px;
        }

        .div-3 {
            margin-top: 0;
            margin-bottom: 61px;
        }

        .div-4 {
            margin-top: 0;
            margin-bottom: 95px;
        }
    }

    .section-2 {
        background: url(~assets/carnival/section-2-mobile.svg);
        background-size: 100% 200px;
        background-position: bottom;
        background-repeat: no-repeat;
        padding-bottom: 225px;
        height: fit-content;

        .card {
            height: fit-content;
            width: 100%;
            padding: 91px 14px 52px 29px;
        }
    }

    .section-3 {
        .title {
            height: 80px;
            font-size: 23px;
            line-height: 80px;
        }

        > section {
            flex-direction: column;
            padding-top: 50px;
            padding-bottom: 78px;

            > div {
                width: 100%;
                flex-basis: 100%;
                margin-bottom: 52px;

                img {
                    width: 144px;
                    height: 144px;
                }

                > p {
                    padding: 0;
                }
            }
        }
    }

    .section-schedule {
        .title {
            height: 80px;
            font-size: 23px;
            line-height: 80px;
        }

        .qr-card {
            margin-left: 0;
            width: 100%;
            height: fit-content;
            padding: 8%;
            flex-direction: column;
            align-items: center;

            .text {
                h3 {
                    font-size: 18px;
                    margin: 0;
                }

                p {
                    padding-right: 0;
                }
            }
        }
    }
}
</style>
