<template>
    <div>
        <Banner
            :title="$t('peermentor.banner.title')"
            :description="$t('peermentor.banner.description')"
            :button-text="$t('peermentor.banner.buttonText')"
            :background="bannerImage"
            external
            to="https://forms.gle/qrmRz8E6TgFFD7BK7"
        />
        <div class="row peer-mentor-intro-section">
            <div class="text-container left">
                <h2>{{ $t('peermentor.introduction.title') }}</h2>
                <p>
                    {{ $t('peermentor.introduction.description') }}
                </p>
            </div>
            <div class="img-container desktop">
                <img
                    src="@/assets/peermentor/peer_mentor_program.svg"
                    alt="peer mentor program"
                />
            </div>
        </div>
        <section class="whypeermentor">
            <h2>{{ $t('peermentor.why.title') }}</h2>
            <div class="whypeermentor-upper">
                <p>
                    {{ $t('peermentor.why.description1') }}
                </p>
                <p>
                    {{ $t('peermentor.why.description2') }}
                </p>
            </div>
            <div class="fourreason-outside">
                <div class="one-fourth">
                    <div class="circle-image">
                        <img
                            src="@/assets/peermentor/icon_pressure.svg"
                            alt="pressue icon"
                        />
                    </div>
                    <h3 class="center">
                        {{ $t('peermentor.why.pics.title1') }}
                    </h3>
                    <p class="text-center">
                        {{ $t('peermentor.why.pics.description1') }}
                    </p>
                </div>
                <div class="one-fourth">
                    <div class="circle-image">
                        <img
                            src="@/assets/peermentor/icon_company.svg"
                            alt="company icon"
                        />
                    </div>
                    <h3 class="center">
                        {{ $t('peermentor.why.pics.title2') }}
                    </h3>
                    <p class="text-center">
                        {{ $t('peermentor.why.pics.description2') }}
                    </p>
                </div>
                <div class="one-fourth">
                    <div class="circle-image">
                        <img
                            src="@/assets/peermentor/icon_help.svg"
                            alt="help icon"
                        />
                    </div>
                    <h3 class="center">
                        {{ $t('peermentor.why.pics.title3') }}
                    </h3>
                    <p class="text-center">
                        {{ $t('peermentor.why.pics.description3') }}
                    </p>
                </div>
                <div class="one-fourth">
                    <div class="circle-image">
                        <img
                            src="@/assets/peermentor/icon_ignore.svg"
                            alt="ignore icon"
                        />
                    </div>
                    <h3 class="center">
                        {{ $t('peermentor.why.pics.title4') }}
                    </h3>
                    <p class="text-center">
                        {{ $t('peermentor.why.pics.description4') }}
                    </p>
                </div>
            </div>
        </section>
        <div class="blue-section">
            <div class="project-process-title">
                <h1>{{ $t('peermentor.services.title') }}</h1>
            </div>
            <div class="project-process-section">
                <div class="blue-bubble-section">
                    <img
                        src="@/assets/peermentor/blue_bubble.svg"
                        alt="blue bubble"
                    />
                    <div class="blue-bubble-inner">
                        <h3>
                            {{ $t('peermentor.services.blueBubble.title') }}
                        </h3>
                        <ul>
                            <li>
                                {{ $t('peermentor.services.blueBubble.item1') }}
                            </li>
                            <li>
                                {{ $t('peermentor.services.blueBubble.item2') }}
                            </li>
                            <li>
                                {{ $t('peermentor.services.blueBubble.item3') }}
                            </li>
                            <li>
                                {{ $t('peermentor.services.blueBubble.item4') }}
                            </li>
                            <li>
                                {{ $t('peermentor.services.blueBubble.item5') }}
                            </li>
                            <li>
                                {{ $t('peermentor.services.blueBubble.item6') }}
                            </li>
                            <li>
                                {{ $t('peermentor.services.blueBubble.item7') }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="green-bubble-section">
                    <img
                        src="@/assets/peermentor/green_bubble.svg"
                        alt="green bubble"
                    />
                    <div class="green-bubble-inner">
                        <h3>
                            {{ $t('peermentor.services.greenBubble.title') }}
                        </h3>
                        <ul>
                            <li>
                                {{
                                    $t('peermentor.services.greenBubble.item1')
                                }}
                            </li>
                            <li>
                                {{
                                    $t('peermentor.services.greenBubble.item2')
                                }}
                            </li>
                            <li>
                                {{
                                    $t('peermentor.services.greenBubble.item3')
                                }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="blue-person-section">
                    <img
                        src="@/assets/peermentor/blue_person.svg"
                        alt="blue person"
                    />
                </div>
                <div class="blue-outline-section">
                    <img
                        src="@/assets/peermentor/blue_outline_bubble.svg"
                        alt="blue outline bubble"
                    />
                    <div class="blue-outline-inner">
                        <h3>
                            {{ $t('peermentor.services.rightBubble.title') }}
                        </h3>
                        <ul>
                            <li>
                                {{
                                    $t('peermentor.services.rightBubble.item1')
                                }}
                            </li>
                            <li>
                                {{
                                    $t('peermentor.services.rightBubble.item2')
                                }}
                            </li>
                        </ul>
                        <Button scroll to="#peermentor-recruit-p">
                            {{
                                $t('peermentor.services.rightBubble.buttonText')
                            }}
                        </Button>
                    </div>
                </div>
                <!-- height of section -->
                <div class="project-process-height"></div>
                <!-- phases -->
                <div class="project-process-phases">
                    <div class="phase-flex phase1-background">
                        <p class="phase-number">
                            {{ $t('peermentor.programstreams.stage1.title') }}
                        </p>
                        <img
                            class="phase-lines"
                            src="@/assets/peermentor/line_process.svg"
                            alt="line process"
                        />
                        <div class="phase-circle"></div>
                        <p
                            class="phase-description"
                            v-html="
                                $t(
                                    'peermentor.programstreams.stage1.description',
                                )
                            "
                        />
                    </div>
                    <div class="phase-flex phase2-background">
                        <p class="phase-number">
                            {{ $t('peermentor.programstreams.stage2.title') }}
                        </p>
                        <img
                            class="phase-lines"
                            src="@/assets/peermentor/line_process.svg"
                            alt="line process"
                        />
                        <div class="phase-circle"></div>
                        <p
                            class="phase-description"
                            v-html="
                                $t(
                                    'peermentor.programstreams.stage2.description',
                                )
                            "
                        />
                    </div>
                    <div class="phase-flex phase3-background">
                        <p class="phase-number">
                            {{ $t('peermentor.programstreams.stage3.title') }}
                        </p>
                        <img
                            class="phase-lines"
                            src="@/assets/peermentor/line_process.svg"
                            alt="line process"
                        />
                        <div class="phase-circle"></div>
                        <p
                            class="phase-description"
                            v-html="
                                $t(
                                    'peermentor.programstreams.stage3.description',
                                )
                            "
                        />
                    </div>
                    <div class="phase-flex phase4-background">
                        <p class="phase-number">
                            {{ $t('peermentor.programstreams.stage4.title') }}
                        </p>
                        <img
                            class="phase-lines"
                            src="@/assets/peermentor/line_process.svg"
                            alt="line process"
                        />
                        <div class="phase-circle"></div>
                        <p
                            class="phase-description"
                            v-html="
                                $t(
                                    'peermentor.programstreams.stage4.description',
                                )
                            "
                        />
                    </div>
                    <div class="phase-flex phase5-background">
                        <p class="phase-number">
                            {{ $t('peermentor.programstreams.stage5.title') }}
                        </p>
                        <img
                            class="phase-lines"
                            src="@/assets/peermentor/line_process.svg"
                            alt="line process"
                        />
                        <div class="phase-circle"></div>
                        <p
                            class="phase-description"
                            v-html="
                                $t(
                                    'peermentor.programstreams.stage5.description',
                                )
                            "
                        />
                    </div>
                </div>
            </div>
        </div>
        <!-- <section class="join-peermentor">
            <div class="peermentor-envelop">
                <img src="@/assets/peermentor/envelop.png" alt="envelop" />
                <div class="letter-content">
                    <h2 class="half-center">
                        {{ $t('peermentor.envelope.letter.title') }}
                    </h2>
                    <p class="half-center">
                        {{ $t('peermentor.envelope.letter.content1') }}
                    </p>
                    <div class="letterpart-with-graph fit-letter">
                        <img
                            src="@/assets/peermentor/letter_left_graph.svg"
                            alt="letter left graph"
                        />
                        <p>{{ $t('peermentor.envelope.letter.content2') }}</p>
                        <img
                            src="@/assets/peermentor/letter_right_group.svg"
                            alt="letter left graph"
                        />
                    </div>
                    <p class="half-center">
                        {{ $t('peermentor.envelope.letter.content3') }}
                    </p>
                    <p class="half-center">
                        {{ $t('peermentor.envelope.letter.content4') }}
                    </p>
                    <div class="must-know-part half-center">
                        <h2>{{ $t('peermentor.envelope.mustKnow.title') }}</h2>
                        <ul>
                            <li>
                                {{ $t('peermentor.envelope.mustKnow.item1') }}
                            </li>
                            <li>
                                {{ $t('peermentor.envelope.mustKnow.item2') }}
                            </li>
                            <li>
                                {{ $t('peermentor.envelope.mustKnow.item3') }}
                            </li>
                            <li>
                                {{ $t('peermentor.envelope.mustKnow.item4') }}
                            </li>
                            <li>
                                {{ $t('peermentor.envelope.mustKnow.item5') }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section> -->
        <section class="peermentor-letter-section">
            <div class="peermentor-letter-innersection">
                <h2>
                    {{ $t('peermentor.envelope.letter.title') }}
                </h2>
                <p>
                    {{ $t('peermentor.envelope.letter.content1a') }}
                </p>
                <p>
                    {{ $t('peermentor.envelope.letter.content1b') }}
                </p>
                <p>
                    {{ $t('peermentor.envelope.letter.content1c') }}
                </p>
                <!-- <div class="three-in-onerow">
                    <img
                        src="@/assets/peermentor/letter_left_graph.svg"
                        alt="letter left graph"
                    />
                    <p>{{ $t('peermentor.envelope.letter.content2') }}</p>
                    <img
                        src="@/assets/peermentor/letter_right_group.svg"
                        alt="letter left graph"
                    />
                </div> -->
                <div class="three-in-onerow-mobile">
                    <img
                        src="@/assets/peermentor/three_in_row.svg"
                        alt="three graphics in one row"
                    />
                </div>
                <p>
                    {{ $t('peermentor.envelope.letter.content3') }}
                </p>
                <p>
                    {{ $t('peermentor.envelope.letter.content4') }}
                </p>
                <div class="must-know-part">
                    <h2>{{ $t('peermentor.envelope.mustKnow.title') }}</h2>
                    <ul>
                        <li>
                            {{ $t('peermentor.envelope.mustKnow.item1') }}
                        </li>
                        <li>
                            {{ $t('peermentor.envelope.mustKnow.item2') }}
                        </li>
                        <li>
                            {{ $t('peermentor.envelope.mustKnow.item3') }}
                        </li>
                        <li>
                            {{ $t('peermentor.envelope.mustKnow.item4') }}
                        </li>
                        <li>
                            {{ $t('peermentor.envelope.mustKnow.item5') }}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <div class="section-requirement">
            <div class="half-half-nop half-half orange-color">
                <h2>{{ $t('peermentor.requirements.title') }}</h2>
                <ul>
                    <li>{{ $t('peermentor.requirements.item1') }}</li>
                    <li>{{ $t('peermentor.requirements.item2') }}</li>
                    <li>{{ $t('peermentor.requirements.item3') }}</li>
                    <li>{{ $t('peermentor.requirements.item4') }}</li>
                    <li>{{ $t('peermentor.requirements.item5') }}</li>
                    <li>{{ $t('peermentor.requirements.item6') }}</li>
                </ul>
            </div>
            <div class="half-half-nop half-half blue-color">
                <h2>{{ $t('peermentor.benefits.title') }}</h2>
                <ul>
                    <li>{{ $t('peermentor.benefits.item1') }}</li>
                    <li>{{ $t('peermentor.benefits.item2') }}</li>
                    <li>{{ $t('peermentor.benefits.item3') }}</li>
                    <li>{{ $t('peermentor.benefits.item4') }}</li>
                    <li>
                        {{ $t('peermentor.benefits.item5') }}
                    </li>
                    <li>{{ $t('peermentor.benefits.item6') }}</li>
                    <li>
                        {{ $t('peermentor.benefits.item7') }}
                    </li>
                </ul>
            </div>
        </div>
        <section>
            <h2>{{ $t('peermentor.recruiting.title') }}</h2>
            <p id="peermentor-recruit-p" class="peermentor-recruit-p">
                {{ $t('peermentor.recruiting.description') }}
            </p>
            <div class="section-requirement">
                <div class="half-half-nop">
                    <a
                        href="https://forms.gle/3EYR58psCfqTsR4Z7"
                        target="_blank"
                    >
                        <img
                            class="recruit-image"
                            :src="currentMentorImage"
                            alt="tutor recruitment"
                            @mouseover="changeMentorImageWhen('over')"
                            @mousedown="changeMentorImageWhen('down')"
                            @mouseout="changeMentorImageWhen('out')"
                            @mouseup="changeMentorImageWhen('up')"
                        />
                    </a>
                </div>
                <div class="half-half-nop second-nop">
                    <a
                        href="https://forms.gle/qrmRz8E6TgFFD7BK7"
                        target="_blank"
                    >
                        <img
                            class="recruit-image"
                            :src="currentStudentImage"
                            alt="student recruitment"
                            @mouseover="changeStudentImageWhen('over')"
                            @mousedown="changeStudentImageWhen('down')"
                            @mouseout="changeStudentImageWhen('out')"
                            @mouseup="changeStudentImageWhen('up')"
                        />
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Button from '@/components/Button.vue';
import bannerImage from '@/assets/volunteer/banner.png';
import becomeMentorImg from '@/assets/peermentor/tutor_graphic.svg';
import becomeMentorHoverImg from '@/assets/peermentor/tutor_graphic_hover.svg';
import becomeStudentImg from '@/assets/peermentor/student_graphic.svg';
import becomeStudentHoverImg from '@/assets/peermentor/student_graphic_hover.svg';

export default {
    components: {
        Banner,
        Button,
    },
    data() {
        return {
            imagesMentor: {
                out: becomeMentorImg,
                over: becomeMentorHoverImg,
                up: becomeMentorHoverImg,
                down: becomeMentorHoverImg,
            },
            imagesStudent: {
                out: becomeStudentImg,
                over: becomeStudentHoverImg,
                up: becomeStudentHoverImg,
                down: becomeStudentHoverImg,
            },
            bannerImage,
            currentMentorImage: becomeMentorImg,
            currentStudentImage: becomeMentorImg,
        };
    },
    created() {
        this.currentMentorImage = this.imagesMentor.out;
        this.currentStudentImage = this.imagesStudent.out;
    },
    methods: {
        openEnvelope() {},
        changeMentorImageWhen(state) {
            this.currentMentorImage = this.imagesMentor[state];
        },
        changeStudentImageWhen(state) {
            this.currentStudentImage = this.imagesStudent[state];
        },
    },
};
</script>

<style lang="scss" scoped>
.row {
    display: flex;

    > div {
        flex-basis: 50%;
    }

    .text-container.left {
        padding: 80px 50px 80px $padding-horizontal;
    }

    .text-container.right {
        padding: 80px $padding-horizontal 80px 50px;
    }

    .img-container {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            max-height: 100%;
            max-width: 100%;
        }
    }
}

h2 {
    font-weight: 600;
}

.peer-mentor-intro-section {
    border-top: 10px solid rgba(38, 156, 209, 0.8);
    border-bottom: 10px solid rgba(38, 156, 209, 0.8);
}

.whypeermentor {
    .whypeermentor-upper {
        width: 70%;
    }

    .fourreason-outside {
        display: flex;
        justify-content: space-between;
        // align-items: flex-start;
        margin-top: 6%;

        .one-fourth {
            flex-basis: 21%;

            .circle-image {
                height: 135px;
                width: 135px;
                background: #c4c4c4;
                border-radius: 50%;
                margin-left: auto;
                margin-right: auto;
            }

            .center {
                text-align: center;
            }
        }
    }
}

.blue-section {
    .project-process-title {
        background-color: rgba(38, 156, 209, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 100px;

        h1 {
            color: white;
            font-size: 30px;
            font-weight: 600;
        }
    }

    .project-process-section {
        line-height: 30px;
        position: relative;

        letter-spacing: 0.02em;
        .blue-bubble-section {
            position: absolute;
            left: 8%;

            img {
                width: 110%;
            }

            .blue-bubble-inner {
                position: absolute;
                top: 33px;
                left: 39px;
                padding-left: 13%;
                ul {
                    padding-left: 10%;
                    width: max-content;
                }

                h3 {
                    line-height: 0px;
                }
            }

            :lang(en).blue-bubble-inner {
                position: absolute;
                left: 8%;
                line-height: 25px;
                letter-spacing: 0;
                h3 {
                    margin-left: 20px;
                }
            }
        }
        :lang(en).blue-bubble-section {
            position: absolute;
            left: 4%;
        }
        .green-bubble-section {
            position: absolute;
            left: 27%;
            top: 190px;

            img {
                width: 115%;
            }

            .green-bubble-inner {
                position: absolute;
                top: 20px;
                left: 53px;

                ul {
                    padding-left: 10%;
                    width: max-content;
                }

                h3 {
                    line-height: 0px;
                }
            }
            :lang(en).green-bubble-inner {
                position: absolute;
                line-height: 40px;
                letter-spacing: 0;
                top: 20px;
                left: 35px;
                ul {
                    // margin-left: 0;
                    padding-left: 20px;
                    width: max-content;
                }
                h3 {
                    margin-left: 15px;
                }
            }
        }
        .blue-person-section {
            position: absolute;
            top: -97px;
            left: 26%;
            z-index: 1;
        }

        .blue-outline-section {
            position: absolute;
            // left: 70%;
            top: 0px;
            right: 8%;
            .blue-outline-inner {
                position: absolute;
                top: 69px;
                left: 71px;
                h3 {
                    margin-left: 10%;
                }
            }
            :lang(en).blue-outline-inner {
                position: absolute;
                line-height: 25px;
                letter-spacing: 0;
            }
        }
    }

    .project-process-height {
        height: 470px;
    }

    .project-process-phases {
        .phase-flex {
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding-left: 10%;
            padding-right: 10%;

            .phase-number {
                background: #fff;
                border-radius: 34px;
                height: 70px;
                width: 331px;
                text-align: center;
                align-items: center;
                line-height: 70px;
                font-size: 24px;
            }

            .phase-circle {
                height: 24px;
                width: 24px;
                border-radius: 50%;
                background-color: #fff;
            }

            .phase-description {
                width: 60%;
                padding-top: 62px;
                padding-bottom: 62px;
                padding-left: 27px;
            }
        }

        .phase1-background {
            background-color: #bee1f1;
        }
        .phase2-background {
            background-color: #a8d7ed;
        }
        .phase3-background {
            background-color: #92cde8;
        }
        .phase4-background {
            background-color: #7dc4e3;
        }
        .phase5-background {
            background-color: #67badf;
        }
    }
}

.project-process {
    padding: 80px 0;

    .project-process-title {
        height: 97px;
        width: auto;
        background-color: rgba(38, 156, 209, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 100px;

        h1 {
            color: white;
            font-size: 30px;
            font-weight: 600;
        }
    }

    .project-process-images {
        height: auto;
        margin-bottom: 75px;
        position: relative;
        text-align: center;

        img {
            display: block;
            width: 100%;
        }

        div {
            position: absolute;
        }

        .blue-person {
            width: 50%;
            height: auto;
            left: 25%;
            bottom: 0.4%;
            position: absolute;
        }

        .bubbles-content-blue {
            top: 15%;
            left: 5%;

            li {
                text-align: left;
                padding: 0.25em 0;
            }

            h3 {
                text-align: left;
                margin: 0 0 0 25px;
            }
        }

        .bubbles-content-green {
            top: 65%;
            left: 25%;

            li {
                text-align: left;
                padding: 0.25em 0;
            }

            h3 {
                text-align: left;
                margin: 0 0 0 25px;
            }
        }

        .bubbles-content-right {
            top: 25%;
            left: 75%;

            li {
                text-align: left;
                padding: 0.25em 0;
            }

            h3 {
                text-align: left;
                margin: 0 0 0 25px;
            }
        }
    }

    .project-process-table {
        img {
            height: auto;
            max-width: 1440px;
        }
        .table-content {
            position: absolute;
            width: 1440px;
            height: 803px;

            .row-content {
                display: grid;
                grid-template-columns: 169px 300px 118px auto 202px;
                grid-auto-rows: 160px;

                /deep/ span {
                    font-weight: bold;
                }

                h2 {
                    margin: 10px 0 0 0;
                    grid-column: 2 / 3;
                    align-self: center;
                    justify-self: center;
                }
                p {
                    margin: 0;
                    grid-column: 4 / 5;
                    align-self: center;
                }
            }
        }
    }
}

.join-peermentor {
    padding-top: 80px;
    .peermentor-envelop {
        display: flex;
        justify-content: center;
        position: relative;

        .letter-content {
            position: absolute;
            // width: 50%;
            top: 6%;

            .half-center {
                width: 50%;
                margin-left: auto;
                margin-right: auto;
            }

            .fit-letter {
                width: 60%;
                margin-left: auto;
                margin-right: auto;
            }
            // :lang(en).fit-letter {
            //     p {
            //         text-align: center;
            //     }
            // }

            .letterpart-with-graph {
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-weight: bold;
            }

            .must-know-part {
                line-height: 31px;
                letter-spacing: 0.03em;
                background: #ffffff;
                padding: 20px 20px;
                border: 5px solid #efcbab;
                width: 50%;

                h2 {
                    margin-left: 20px;
                }
                ul {
                    width: 50%;
                }
            }
        }
    }
}

.peermentor-letter-section {
    .peermentor-letter-innersection {
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        background: url('../assets/peermentor/letter_paper.svg') repeat;
        padding: 8% 13%;
        background-size: cover;

        // .three-in-onerow {
        //     display: flex;
        //     align-items: center;
        // }

        // .three-in-onerow-mobile {
        //     display: none;
        // }

        .three-in-onerow-mobile {
            img {
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
        }

        .must-know-part {
            line-height: 31px;
            letter-spacing: 0.03em;
            background: #ffffff;
            padding: 20px 20px;
            border: 5px solid #efcbab;
            width: 85%;
            margin-left: auto;
            margin-right: auto;
            h2 {
                margin-left: 20px;
            }
            ul {
                width: 100%;
            }
        }
        :lang(en).must-know-part {
            width: 70%;

            ul {
                width: 100%;
            }
        }
    }
}

.section-requirement {
    display: flex;
    justify-content: center;

    .half-half-nop {
        flex-basis: 50%;
        text-align: center;
        color: #ffffff;
        ul {
            text-align: left;
            line-height: 31px;
        }

        .recruit-image {
            width: 350px;
            height: 100%;
        }
    }

    .half-half {
        padding: 80px 7%;
    }

    .orange-color {
        background: #ff9843;
    }
    .blue-color {
        background: #54bef5;
    }
}

.peermentor-recruit-p {
    width: 45%;
}

p {
    line-height: 31px;
}

@media (max-width: $mobile-max-width) {
    .row {
        > div {
            flex-basis: 100%;
        }
    }

    .whypeermentor {
        padding: 25px 8%;
        .whypeermentor-upper {
            width: 100%;
        }

        .fourreason-outside {
            flex-direction: column;

            .one-fourth {
                margin-top: 74px;
                .text-center {
                    text-align: center;
                    width: 100%;
                    // margin-left: auto;
                    // margin-right: auto;
                }
            }
        }
    }

    .section-requirement {
        flex-direction: column;
    }

    .peermentor-letter-section {
        padding: 0px;
        .peermentor-letter-innersection {
            width: 100%;

            // .three-in-onerow {
            //     display: none;
            // }

            // .three-in-onerow-mobile {
            //     display: block;

            //     img {
            //         width: 100%;
            //     }
            // }
            .must-know-part {
                width: 100%;

                ul {
                    width: 100%;
                }
            }

            :lang(en).must-know-part {
                width: 100%;

                ul {
                    width: 100%;
                }
            }
        }
    }

    .peermentor-recruit-p {
        width: 100%;
    }

    .text-center {
        text-align: center;
    }
}

.blue-section {
    .project-process-title {
        margin-bottom: 21px;
    }
}

@media (max-width: 1472px) {
    .blue-section {
        .project-process-section {
            .blue-person-section {
                top: -62px;
                left: 30%;
                img {
                    width: 70%;
                }
            }

            .green-bubble-section {
                left: 29%;
                top: 220px;
            }
        }
    }
}

@media (max-width: 1225px) {
    .blue-section {
        .project-process-section {
            .blue-person-section {
                top: -27px;
                left: 30%;
                img {
                    width: 50%;
                }
            }
        }
    }
}

@media (max-width: 948px) {
    .blue-section {
        .project-process-section {
            .blue-person-section {
                top: 0px;
                left: 30%;
                img {
                    width: 40%;
                }
            }
        }
    }
}

@media (max-width: 807px) {
    .blue-section {
        .project-process-phases {
            .phase-flex {
                flex-direction: column;

                .phase-circle {
                    display: none;
                }

                .phase-lines {
                    display: none;
                }

                .phase-description {
                    width: 100%;
                    padding-top: 20px;
                }

                .phase-number {
                    margin-top: 84px;
                }
            }
        }

        .project-process-height {
            height: 1050px;
        }

        .project-process-section {
            .blue-bubble-section {
                left: 8%;
                img {
                    width: 100%;
                }
            }

            .green-bubble-section {
                left: 17%;
                top: 298px;
            }

            .blue-person-section {
                left: 8%;
                top: 417px;
                z-index: 1;
                img {
                    width: 90%;
                }
            }

            .blue-outline-section {
                top: 616px;
                right: 8%;
                z-index: 2;
                left: 8%;
                .blue-outline-inner {
                    h3 {
                        padding-left: 10%;
                    }
                }

                img {
                    width: auto;
                }
            }
        }
    }

    .section-requirement {
        .half-half-nop {
            .recruit-image {
                width: 80%;
            }
        }

        .second-nop {
            margin-top: 46px;
        }
    }

    .whypeermentor {
        .fourreason-outside {
            .one-fourth {
                .text-center {
                    text-align: left;
                    width: 100%;
                }
            }
        }
    }
}
</style>
