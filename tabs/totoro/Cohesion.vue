<template>
    <div>
        <section class="cohesion-section">
            <div class="row row-reverse">
                <section class="col-half col-half-center">
                    <h2>{{ $t('totoro.cohesion.heading1') }}</h2>
                    <p>
                        {{ $t('totoro.cohesion.text1')
                        }}<b>{{ $t('totoro.cohesion.description2') }}</b
                        >{{ $t('totoro.cohesion.description3')
                        }}<b>{{ $t('totoro.cohesion.description4') }}</b
                        >{{ $t('totoro.cohesion.description5')
                        }}<b>{{ $t('totoro.cohesion.description6') }}</b
                        >{{ $t('totoro.cohesion.description7')
                        }}<b>{{ $t('totoro.cohesion.description8') }}</b
                        >{{ $t('totoro.cohesion.description9')
                        }}<b>{{ $t('totoro.cohesion.description10') }}</b
                        >{{ $t('totoro.cohesion.description11')
                        }}<b>{{ $t('totoro.cohesion.description12') }}</b
                        >{{ $t('totoro.cohesion.description13') }}
                    </p>
                </section>
                <div class="col-half ">
                    <div class="cohesion-image">
                        <img
                            src="@/assets/totoro/cohesion.png"
                            alt="image in cohesion section"
                        />
                    </div>
                </div>
            </div>
            <div class="row light-blue-row">
                <section class="col-half larger-half">
                    <img
                        class="cohesion-diagram"
                        :src="cohesionDiagram[$i18n.locale]"
                    />
                </section>
                <section class="col-half smaller-half">
                    <h2>{{ $t('totoro.cohesion.subjectHeading') }}</h2>
                    <p>
                        {{ $t('totoro.cohesion.subject1')
                        }}<b>{{ $t('totoro.cohesion.subject2') }}</b
                        >{{ $t('totoro.cohesion.subject3') }}
                    </p>
                </section>
            </div>
            <div class="row row-reverse">
                <section class="col-half col-half-center">
                    <h2>{{ $t('totoro.cohesion.courseSettingHeading') }}</h2>
                    <p>
                        {{ $t('totoro.cohesion.courseSetting1')
                        }}<b>{{ $t('totoro.cohesion.courseSetting2') }}</b
                        >{{ $t('totoro.cohesion.courseSetting3')
                        }}<b>{{ $t('totoro.cohesion.courseSetting4') }}</b
                        >{{ $t('totoro.cohesion.courseSetting5')
                        }}<b>{{ $t('totoro.cohesion.courseSetting6') }}</b>
                    </p>
                    <p>{{ $t('totoro.cohesion.courseSetting7') }}</p>
                </section>
                <div class="col-half ">
                    <div class="cohesion-image3">
                        <img
                            src="@/assets/totoro/cohesion-section-3.png"
                            alt="image in cohesion section"
                        />
                    </div>
                </div>
            </div>
            <div class="row follow-us">
                <section class="col-half">
                    <h2>{{ $t('totoro.cohesion.followUs.title') }}</h2>
                    <p>
                        {{ $t('totoro.cohesion.followUs.p1') }}
                    </p>
                    <p>
                        <b>{{ $t('totoro.cohesion.followUs.p2') }}</b>
                    </p>
                </section>
                <section class="col-half">
                    <img src="@/assets/totoro/qr-with-totoro.png" />
                </section>
            </div>
            <div class="row group-class-row">
                <section class="col-half col-half-center section-scan">
                    <img class="totoro-qr" src="@/assets/totoro/qr-1.png" />
                    <img class="totoro-qr" src="@/assets/totoro/qr-2.png" />
                    <p>{{ $t('totoro.cohesion.scanqr1') }}</p>
                    <p>{{ $t('totoro.cohesion.scanqr2') }}</p>
                </section>
                <div class="col-half col-half-half col-flex">
                    <div class="icon-register half-to-half icon-one-to-one">
                        <img
                            src="@/assets/totoro/onetoone.png"
                            alt="one to one image"
                        />
                        <span>{{ $t('totoro.cohesion.oneToone') }}</span>
                    </div>
                    <div
                        class="icon-register half-to-half group-top icon-one-to-more"
                    >
                        <img
                            src="@/assets/totoro/small-group.png"
                            alt="one to one image"
                        />
                        <span>{{ $t('totoro.cohesion.smallGroup') }}</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import cohesionDiagramImage from '@/assets/totoro/cohesion-diagram.png';
import cohesionDiagramImageEn from '@/assets/totoro/cohesion-diagram-en.png';

export default {
    name: 'Cohesion',
    data() {
        return {
            cohesionDiagram: {
                zh: cohesionDiagramImage,
                en: cohesionDiagramImageEn,
            },
        };
    },
};
</script>

<style lang="scss" scoped>
.cohesion-diagram {
    width: 500px;
    height: 330px;
}

.cohesion-image3 {
    padding: 50px;
    box-sizing: border-box;
}

.totoro-qr {
    float: left;
    margin-right: 20px;
}

.group-class-row > section > p:first-of-type {
    margin-top: 90px;
    margin-bottom: 0;
}

.group-class-row > section > p {
    margin-top: 0;
    margin-bottom: 0;
}

.row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

.col-half {
    flex: 0 0 50%;
    max-width: 50%;
    box-sizing: border-box;
}

.larger-half {
    width: 50%;
}

.smaller-half {
    width: 50%;
}

.cohesion-image {
    text-align: left;
}

.col-half > p {
    font-size: $text-size;
    line-height: 31px;
    letter-spacing: 0.02em;
}

.cohesion-section {
    border-bottom: 6px solid $green;
    padding: 0 0 0 0 !important;
}

.flex-top-left {
    display: flex;
    align-items: flex-start;
}

.flex-middle-right {
    display: flex;
    flex-direction: row-reverse;
}

.color-box {
    background-color: #f1f1f1;
    width: 300px;
    text-align: center;
    line-height: 119px;
    font-size: 24px;
    color: #ffffff;
}

.blue {
    background: $teal;
}

.green {
    background: $green;
}

.purple {
    background: $purple;
}

.orange {
    background: $orange;
}

.blue-light {
    background: $dark-blue;
}

.pink {
    background: $dark-pink;
}

.middle-margin {
    margin-right: 50px;
}
.en-middle-margin {
    margin-right: 20px;
}

.end-margin {
    margin-left: 70px;
}

.light-blue-row {
    background: $background-light-blue;
}

.icon-register {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.half-to-half {
    flex: 0 0 45%;
    max-width: 45%;
}

.col-half-half {
    display: flex;
}

.section-scan {
    font-weight: 600;
}

.icon-register > img {
    margin-bottom: 22px;
}

.icon-register > button {
    margin-top: 40px;
}

.display-mobile {
    display: none;
}

.display-desktop {
    display: block;
}
.cohesion-image > img {
    width: 100%;
}
.section-scan {
    padding-right: 0;
}

.follow-us {
    background: $background-light-blue;

    section {
        height: 100%;
        background: $background-light-blue;
    }
}

@media (max-width: $mobile-max-width) {
    .row {
        flex-direction: column;
        margin: 0;
        width: 100%;
    }

    .col-half {
        flex: auto;
        max-width: 100%;
    }

    .col-half > img {
        width: 100%;
    }

    .cohesion-diagram,
    .cohesion-image3 img {
        height: 100%;
        width: 100%;
    }

    .cohesion-image3 {
        padding: 0;
    }

    .smaller-half,
    .larger-half {
        width: 100%;
    }

    .row-reverse {
        flex-direction: column-reverse;
    }

    .cohesion-image > img {
        width: 100%;
    }

    .display-mobile {
        display: block;
    }

    .display-desktop {
        display: none;
    }

    .middle-margin {
        margin-right: auto;
    }

    .end-margin {
        margin-left: auto;
    }

    .col-half {
        flex: auto;
        max-width: 100%;
        width: 100%;
        img {
            display: block;
            padding-left: 0px;
            width: 100%;
            height: 100%;
            margin: 0px auto 15px auto;
        }
        h2 {
            padding-left: 0;
        }
        p {
            display: block;
            margin-left: auto;
            margin-right: auto;
            padding-left: 0px;
            padding-right: 0px;
        }
        #scan-qr {
            text-align: center;
        }
    }

    .group-class-row {
        margin-top: 25px;
        padding: 20px 0 50px 0;
        text-align: center;

        .col-half,
        .col-half-half {
            display: block;
        }

        .half-to-half {
            margin: auto;
            max-width: unset;
        }

        .totoro-qr {
            float: none;
        }

        > section > p {
            text-align: center;
            margin: 15px !important;
        }

        .col-flex {
            display: flex;
            max-width: 80% !important;
        }
    }

    .group-class-row > section > p {
        margin-top: 15px;
    }

    .icon-one-to-one > img {
        height: 99px;
        width: 100px;
    }

    .icon-one-to-more > img {
        height: 99px;
        width: 165px;
    }

    .section-scan {
        p {
            line-height: 10px;
        }

        img {
            height: 180px;
            width: 180px;
        }
    }
}
</style>
