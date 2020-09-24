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
                    <p>{{ $t('peermentor.why.pics.description1') }}</p>
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
                    <p>
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
                    <p>
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
                    <p>
                        {{ $t('peermentor.why.pics.description4') }}
                    </p>
                </div>
            </div>
        </section>
        <section class="project-process">
            <div class="project-process-title">
                <h1>{{ $t('peermentor.services.title') }}</h1>
            </div>
            <div class="project-process-images">
                <div class="bubbles-content-blue">
                    <h3>{{ $t('peermentor.services.blueBubble.title') }}</h3>
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
                    </ul>
                </div>
                <div class="bubbles-content-green">
                    <h3>{{ $t('peermentor.services.greenBubble.title') }}</h3>
                    <ul>
                        <li>
                            {{ $t('peermentor.services.greenBubble.item1') }}
                        </li>
                        <li>
                            {{ $t('peermentor.services.greenBubble.item2') }}
                        </li>
                    </ul>
                </div>
                <div class="bubbles-content-right">
                    <h3>{{ $t('peermentor.services.rightBubble.title') }}</h3>
                    <ul>
                        <li>
                            {{ $t('peermentor.services.rightBubble.item1') }}
                        </li>
                        <li>
                            {{ $t('peermentor.services.rightBubble.item2') }}
                        </li>
                    </ul>
                    <Button scroll to="#peermentor-recruit-p">
                        {{ $t('peermentor.services.rightBubble.buttonText') }}
                    </Button>
                </div>

                <img
                    class="blue-person"
                    src="@/assets/peermentor/blue_person.png"
                    alt="blue person"
                />
                <img
                    src="@/assets/peermentor/process_bubbles.png"
                    alt="process bubbles"
                />
            </div>
            <div class="project-process-table">
                <div class="table-content">
                    <div class="row-content">
                        <h2>
                            {{ $t('peermentor.programstreams.stage1.title') }}
                        </h2>
                        <p
                            v-html="
                                $t(
                                    'peermentor.programstreams.stage1.description',
                                )
                            "
                        />
                    </div>
                    <div class="row-content">
                        <h2>
                            {{ $t('peermentor.programstreams.stage2.title') }}
                        </h2>
                        <p
                            v-html="
                                $t(
                                    'peermentor.programstreams.stage2.description',
                                )
                            "
                        />
                    </div>
                    <div class="row-content">
                        <h2>
                            {{ $t('peermentor.programstreams.stage3.title') }}
                        </h2>
                        <p
                            v-html="
                                $t(
                                    'peermentor.programstreams.stage3.description',
                                )
                            "
                        />
                    </div>
                    <div class="row-content">
                        <h2>
                            {{ $t('peermentor.programstreams.stage4.title') }}
                        </h2>
                        <p
                            v-html="
                                $t(
                                    'peermentor.programstreams.stage4.description',
                                )
                            "
                        />
                    </div>
                    <div class="row-content">
                        <h2>
                            {{ $t('peermentor.programstreams.stage5.title') }}
                        </h2>
                        <p
                            v-html="
                                $t(
                                    'peermentor.programstreams.stage5.description',
                                )
                            "
                        />
                    </div>
                </div>
                <img
                    src="@/assets/peermentor/project-process-table.png"
                    alt="project process table"
                />
            </div>
        </section>
        <section class="join-peermentor">
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

        <!-- Keep the following commented code -->
        <!-- <section>
            <button class="button" @click="openEnvelope">
                OPEN
            </button>

            <div class="email">
                <div class="envelope">
                    <div class="back paper"></div>
                    <div class="note">
                        <div class="form-wrapper">
                            <form>
                                <label
                                    >Send a personal message to someone.</label
                                >
                                <textarea
                                    placeholder="What would you like to say?"
                                ></textarea>

                                <button type="submit">Share</button>
                            </form>
                        </div>
                    </div>
                    <div class="front paper"></div>
                </div>
            </div>
        </section> -->
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
                            src="@/assets/peermentor/tutor_graphic.svg"
                            alt="tutor recruitment"
                        />
                    </a>
                </div>
                <div class="half-half-nop">
                    <a
                        href="https://forms.gle/qrmRz8E6TgFFD7BK7"
                        target="_blank"
                    >
                        <img
                            class="recruit-image"
                            src="@/assets/peermentor/student_graphic.svg"
                            alt="tutor recruitment"
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

export default {
    components: {
        Banner,
        Button,
    },
    data() {
        return {
            bannerImage,
        };
    },
    methods: {
        openEnvelope() {},
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
    padding-bottom: 0px;
    .whypeermentor-upper {
        width: 70%;
    }

    .fourreason-outside {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
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
    padding-top: 0px;
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

            .letterpart-with-graph {
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-weight: bold;
            }

            .must-know-part {
                width: 50%;
                line-height: 31px;
                letter-spacing: 0.03em;
                background: #ffffff;
                padding: 20px 20px;
                border: 5px solid #efcbab;
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
    margin-bottom: 30px;

    &:last-of-type {
        margin-bottom: 50px;
    }
}

@media (max-width: $mobile-max-width) {
    .row {
        > div {
            flex-basis: 100%;
        }
    }

    .whypeermentor {
        .whypeermentor-upper {
            width: 100%;
        }

        .fourreason-outside {
            flex-direction: column;
        }
    }

    .section-requirement {
        flex-direction: column;
    }
}
</style>

<style>
/* letter animation style goes here */
button,
.button {
    -moz-border-radius: 25px;
    -webkit-border-radius: 25px;
    border-radius: 25px;
    background: #f7941e;
    border: none;
    color: #fff;
    display: block;
    float: left;
    margin-top: 5px;
    padding: 7px 17px;
    text-decoration: none;
    text-transform: uppercase;
}
button:hover,
.button:hover {
    background: #f9ab4f;
}
button:active,
.button:active {
    background: #da7a08;
}

.email {
    display: block;
    float: left;
    position: relative;
    width: 100%;
}
.email .envelope {
    display: block;
    height: 400px;
    margin: 0 auto;
    position: relative;
    width: 500px;
}
.email .envelope .paper {
    display: block;
    left: 0;
    position: absolute;
    top: 0;
}
.email .envelope .back:before {
    content: '';
    display: block;
    border-style: solid;
    border-width: 200px 250px 0px 250px;
    border-color: transparent transparent #999 transparent;
    height: 0px;
    width: 0px;
}
.email .envelope .back:after {
    content: '';
    display: block;
    background-color: #999;
    width: 500px;
    height: 200px;
}
.email .envelope .back.animate:before {
    -moz-transition: border-width;
    -o-transition: border-width;
    -webkit-transition: border-width;
    transition: border-width;
    -moz-transition-duration: 1s;
    -o-transition-duration: 1s;
    -webkit-transition-duration: 1s;
    transition-duration: 1s;
    border-width: 0 250px 200px 250px;
}
.email .envelope .front {
    top: 200px;
}
.email .envelope .front:after {
    content: '';
    display: block;
    background-color: #808285;
    height: 100px;
    width: 500px;
}
.email .envelope .front:before {
    content: '';
    display: block;
    border-style: solid;
    border-width: 200px 250px 0px 250px;
    border-color: transparent #808285;
    height: 0px;
    width: 0px;
}
.email .envelope .note {
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
    opacity: 0;
    display: block;
    height: 280px;
    margin: 0 auto;
    position: relative;
    top: 200px;
    width: 500px;
}
.email .envelope .note.animate {
    -moz-transition-property: top;
    -o-transition-property: top;
    -webkit-transition-property: top;
    transition-property: top;
    -moz-transition-duration: 2s;
    -o-transition-duration: 2s;
    -webkit-transition-duration: 2s;
    transition-duration: 2s;
    -moz-transition-delay: 1s;
    -o-transition-delay: 1s;
    -webkit-transition-delay: 1s;
    transition-delay: 1s;
    filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
    opacity: 1;
    top: 50px;
}
.email .envelope .form-wrapper {
    background: #fff;
    height: auto;
    margin: 10px auto 0 auto;
    padding: 20px;
    width: 90%;
}
.email .envelope .form-wrapper form {
    border: 1px dotted #000;
    height: 210px;
    padding: 20px;
}
.email .envelope .form-wrapper label {
    display: block;
    font-family: Helvetica, Arial, sans-serif;
    margin-bottom: 5px;
}
.email .envelope .form-wrapper textarea {
    display: block;
    float: left;
    min-height: 100px;
    overflow: scroll;
    width: 100%;
}
</style>
