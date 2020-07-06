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
                            <Button
                                external
                                to="https://mp.weixin.qq.com/s/7ljBJF4sphtmxkAYwzNMdA"
                                >{{ $t('carnival.banner.buttonText') }}</Button
                            >
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section class="section-1">
            <div>
                <div>
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
                <div>
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
        <section class="section-2">
            <div class="card">
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
        text-transform: uppercase;
        font-weight: 600;
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

    /deep/ b {
        color: $button-color;
    }

    .card {
        background: url(~assets/carnival/section-2-card.svg);
        background-repeat: no-repeat;
        background-size: cover;
        width: 482px;
        height: 457px;
        padding: 99px 71px;

        > h3 {
            margin-top: 0;
            font-weight: 600;
            text-transform: uppercase;
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

    .section-1 {
        flex-direction: column;

        > div {
            flex-basis: 100%;
            margin-top: 61px;
        }

        .clipart {
            display: none;
        }

        p {
            padding-right: 0;
        }
    }

    .section-2 {
        background-size: contain;
        background-position: bottom;

        .card {
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
                flex-basis: 100%;
                margin-bottom: 52px;

                > p {
                    padding: 0;
                }
            }
        }
    }

    .section-4 {
        height: 435px;
        background-size: 626px 477px;
        margin: 0;

        h3 {
            font-size: 18px;
        }
    }

    .section-5 {
        flex-direction: column;

        > section {
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
                width: 159px;
                height: 147px;
                margin: 30px 0;
                padding: 0 25px 0 38px;
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
