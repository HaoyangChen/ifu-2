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
                            <Button :click="popupClick">
                                {{ $t('carnival.banner.buttonText') }}
                            </Button>
                            <div v-if="showPopup" class="popup">
                                <img src="@/assets/carnival/popup-qr.svg" />
                                <div>立即扫码报名吧！</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
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
        <section class="section-2">
            <div class="card">
                <div class="tag">
                    {{ $t('carnival.section-2.tag') }}
                </div>
                <h3>{{ $t('carnival.section-2.div-1.title') }}</h3>
                <p v-html="$t('carnival.section-2.div-1.description')" />
                <br />
                <h3>{{ $t('carnival.section-2.div-2.title') }}</h3>
                <p v-html="$t('carnival.section-2.div-2.description')" />
            </div>
        </section>
        <div class="section-3">
            <div class="title">{{ $t('carnival.section-3.title') }}</div>
            <section>
                <div>
                    <img src="@/assets/carnival/section-3-icon-1.svg" />
                    <h3>{{ $t('carnival.section-3.div-1.title') }}</h3>
                    <p>
                        {{ $t('carnival.section-3.div-1.description') }}
                    </p>
                </div>
                <div>
                    <img src="@/assets/carnival/section-3-icon-2.svg" />
                    <h3>{{ $t('carnival.section-3.div-2.title') }}</h3>
                    <p>{{ $t('carnival.section-3.div-2.description') }}</p>
                </div>
                <div>
                    <img src="@/assets/carnival/section-3-icon-3.svg" />
                    <h3>{{ $t('carnival.section-3.div-3.title') }}</h3>
                    <p>{{ $t('carnival.section-3.div-3.description') }}</p>
                </div>
            </section>
        </div>
        <div class="section-schedule">
            <div class="title">日程安排（北京时间）</div>
            <section>
                <carnival-tab />
                <div class="qr-card">
                    <div class="text">
                        <h3>已经等不及啦？快扫描二维码报名吧！</h3>
                        <p>
                            这个夏天，让我们摆脱疫情、时区、地区的限制，认识各校学长学姐，获取专业嘉宾的留学趋势分析，一起在线上“见面”吧！
                        </p>
                    </div>
                    <div class="image">
                        <img src="@/assets/carnival/section-schedule-qr.svg" />
                    </div>
                </div>
            </section>
        </div>
        <section class="section-4">
            <h3 v-html="$t('carnival.section-4.title')" />
            <p>{{ $t('carnival.section-4.description') }}</p>
        </section>
        <div class="section-5">
            <section class="div-1">
                <h3>{{ $t('carnival.section-5.div-1.title') }}</h3>
                <ul>
                    <li v-html="$t('carnival.section-5.div-1.li-1')" />
                    <li v-html="$t('carnival.section-5.div-1.li-2')" />
                    <li v-html="$t('carnival.section-5.div-1.li-3')" />
                </ul>
                <p v-html="$t('carnival.section-5.div-1.p')" />
            </section>
            <section class="div-2">
                <h3>{{ $t('carnival.section-5.div-2.title') }}</h3>
                <ul>
                    <li v-html="$t('carnival.section-5.div-2.li-1')" />
                    <li v-html="$t('carnival.section-5.div-2.li-2')" />
                    <li v-html="$t('carnival.section-5.div-2.li-3')" />
                    <li v-html="$t('carnival.section-5.div-2.li-4')" />
                    <li v-html="$t('carnival.section-5.div-2.li-5')" />
                </ul>
            </section>
        </div>
        <section class="section-6">
            <div>
                <div class="title">
                    {{ $t('carnival.section-6.div-1.name') }}
                </div>
                <h3>{{ $t('carnival.section-6.descriptionTitle') }}</h3>
                <p v-html="$t('carnival.section-6.div-1.description')" />
                <br />
                <h3>{{ $t('carnival.section-6.requirementTitle') }}</h3>
                <p>
                    {{ $t('carnival.section-6.div-1.requirement') }}
                </p>
            </div>
            <div>
                <div class="title">
                    {{ $t('carnival.section-6.div-2.name') }}
                </div>
                <h3>{{ $t('carnival.section-6.descriptionTitle') }}</h3>
                <p>
                    {{ $t('carnival.section-6.div-2.description') }}
                </p>
                <br />
                <h3>{{ $t('carnival.section-6.requirementTitle') }}</h3>
                <p>
                    {{ $t('carnival.section-6.div-2.requirement') }}
                </p>
            </div>
            <div>
                <div class="title">
                    {{ $t('carnival.section-6.div-3.name') }}
                </div>
                <h3>{{ $t('carnival.section-6.descriptionTitle') }}</h3>
                <p>
                    {{ $t('carnival.section-6.div-3.description') }}
                </p>
                <br />
                <h3>{{ $t('carnival.section-6.requirementTitle') }}</h3>
                <p>{{ $t('carnival.section-6.div-3.requirement') }}</p>
            </div>
        </section>
        <div class="section-7">
            <div class="title">{{ $t('carnival.section-7.title') }}</div>
            <section>
                <div class="div-1">
                    <p>{{ $t('carnival.section-7.div-1') }}</p>
                </div>
                <div class="div-2">
                    <p>{{ $t('carnival.section-7.div-2') }}</p>
                </div>
                <div class="div-3">
                    <p>{{ $t('carnival.section-7.div-3') }}</p>
                </div>
                <div class="div-4">
                    <p>{{ $t('carnival.section-7.div-4') }}</p>
                </div>
                <div class="div-5">
                    <p>{{ $t('carnival.section-7.div-5') }}</p>
                </div>
                <div class="div-6">
                    <p>{{ $t('carnival.section-7.div-6') }}</p>
                </div>
                <div class="div-7">
                    <p>{{ $t('carnival.section-7.div-7') }}</p>
                </div>
                <div class="div-8">
                    <p>{{ $t('carnival.section-7.div-8') }}</p>
                </div>
                <div class="div-9">
                    <p>{{ $t('carnival.section-7.div-9') }}</p>
                </div>
                <div class="div-10">
                    <div class="text">
                        <h3>{{ $t('carnival.section-7.div-10.title') }}</h3>
                        <p>
                            {{ $t('carnival.section-7.div-10.description') }}
                        </p>
                    </div>
                    <div class="image">
                        <div>
                            <img src="@/assets/carnival/section-7-qr-1.png" />
                            <p>{{ $t('carnival.section-7.div-10.qr-1') }}</p>
                        </div>
                        <div>
                            <img src="@/assets/carnival/section-7-qr-2.png" />
                            <p>{{ $t('carnival.section-7.div-10.qr-2') }}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
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
            showPopup: false,
        };
    },
    methods: {
        popupClick() {
            this.showPopup = !this.showPopup;
        },
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

            .popup {
                padding: 61px 57px 0 57px;
                background: $dark-blue;
                border-radius: 30px;
                width: 454px;
                height: 454px;
                position: absolute;
                top: -500px;
                left: 75px;

                img {
                    width: 340px;
                    height: 317px;
                }

                div {
                    color: white;
                    font-size: 24px;
                    margin-top: 16px;
                    font-weight: 600;
                }
            }
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
        padding: 99px 71px;
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
            padding: 5px 0 7px 15px;
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
        height: 220px;
        padding: 38px 41px;
        background: white;
        border: 3px solid $button-color;
        box-shadow: 0px 5px 15px rgba(34, 165, 216, 0.25);
        display: flex;
        align-items: center;

        .text {
            h3 {
                font-size: 24px;
            }

            p {
                padding-right: 20px;
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
        text-transform: uppercase;
        line-height: 1.3;
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
        padding: 37px 20px 7px 20px;
        position: relative;

        .title {
            position: absolute;
            width: 68%;
            height: 28px;
            top: -25px;
            left: 16%;
            text-align: center;
            font-size: 22px;
            font-weight: 600;
            color: #466eb6;
            background: white;
            overflow-wrap: break-word;
        }

        h3 {
            margin-bottom: 0;
        }

        p {
            margin-top: 0;
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
            text-align: center;
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
            text-align: left;

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

                    p {
                        margin: 0;
                        line-height: 10px;
                    }
                }
            }
        }
    }
}

@media (max-width: $mobile-max-width) {
    .bg-carnival {
        #carnival-person1,
        #carnival-person2,
        #carnival-person3 {
            display: none;
        }
        div.carnival-event {
            width: auto !important;
            padding: 10px !important;

            h1 {
                font-size: 23px;
            }

            h2 {
                font-size: 14px;
            }
            .carnival-btn {
                margin-top: 0px;
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

    .section-4 {
        background: url(~assets/carnival/section-4-mobile.svg);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        height: 435px;
        margin: 0;
        text-align: center;

        h3 {
            margin-top: 1em;
            font-size: 18px;
        }
    }

    .section-5 {
        flex-direction: column;

        > section {
            width: 100%;
            padding-top: 51px;
            padding-bottom: 51px;

            h3 {
                font-size: 18px;
            }
        }

        ul {
            padding: 0 0 0 16px;
        }

        .div-1 {
            p {
                padding-left: 0;
            }
        }
    }

    .section-6 {
        flex-direction: column;

        > div {
            flex-basis: 100%;
            margin: 50px 0;
        }
    }

    .section-7 {
        .title {
            height: 80px;
            font-size: 23px;
            line-height: 80px;
        }

        section {
            justify-content: space-evenly;

            > div {
                width: 230px;
                height: 214px;
                margin: 30px 0;
            }

            .div-10 {
                width: 100%;
                height: unset;
                padding: 50px 35px;
                flex-direction: column;

                .text {
                    flex-basis: 100%;
                    margin-bottom: 7px;

                    h3 {
                        font-size: 23px;
                        margin-top: 0;
                    }
                }

                .image {
                    width: 100%;
                    justify-content: space-evenly;

                    > div {
                        margin-left: 0;
                    }

                    p {
                        margin: 0;
                    }
                }
            }
        }
    }
}
</style>
