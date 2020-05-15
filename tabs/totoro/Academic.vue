<template>
    <div>
        <section class="academic-section">
            <section class="row">
                <div class="col-half">
                    <div class="academic-image">
                        <img
                            :src="syncDiagram"
                            alt="image in academic section"
                        />
                    </div>
                </div>
                <div class="col-half">
                    <h2>{{ $t('totoro.academic.heading1') }}</h2>
                    <p>
                        {{ $t('totoro.academic.text1')
                        }}<b>{{ $t('totoro.academic.text2') }}</b>
                        {{ $t('totoro.academic.text3')
                        }}<b>{{ $t('totoro.academic.text4') }}</b>
                        {{ $t('totoro.academic.text5')
                        }}<b>{{ $t('totoro.academic.text6') }}</b>
                        {{ $t('totoro.academic.text7') }}
                    </p>
                    <p>
                        {{ $t('totoro.academic.text8')
                        }}<b>{{ $t('totoro.academic.text9') }}</b>
                    </p>
                </div>
            </section>
            <div class="row group-class-row">
                <section class="col-half col-half-center section-scan">
                    <img class="totoro-qr" :src="totoroQr" />
                    <p>{{ $t('totoro.academic.scanqr1') }}</p>
                    <p>{{ $t('totoro.academic.scanqr2') }}</p>
                </section>
                <div class="col-half col-half-half col-flex">
                    <div class="icon-register half-to-half icon-one-to-one">
                        <img :src="onetooneImage" alt="one to one image" />
                        <span>{{ $t('totoro.academic.oneToOne') }}</span>
                    </div>
                    <div
                        class="icon-register half-to-half group-top icon-one-to-more"
                    >
                        <img
                            src="@/assets/totoro/onetoonephd.png"
                            alt="one to one image"
                        />
                        <span>{{ $t('totoro.academic.oneToOnePhd') }}</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import academicImage from '@/assets/totoro/academic-img.png';
import syncDiagram from '@/assets/totoro/sync-diagram.png';
import ifuLogo from '@/assets/totoro/ifu-logo.png';
import onetooneImage from '@/assets/totoro/onetoone.png';
import totoroQr from '@/assets/totoro/totoro-qr.png';

export default {
    name: 'Academic',
    components: {},
    data() {
        return {
            academicImage,
            ifuLogo,
            syncDiagram,
            onetooneImage,
            totoroQr,
        };
    },
};
</script>

<style lang="scss" scoped>
.totoro-qr {
    float: left;
    margin-right: 50px;
}

.group-class-row > section > p:first-of-type {
    margin-top: 70px;
}

.icon-register {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        height: 100px;
    }
}

.half-to-half {
    flex: 0 0 45%;
    max-width: 45%;
}

.col-half-half {
    display: flex;
}

.group-class-row {
    background: #f1f9ff;
    font-weight: 600;
}

.icon-register > img {
    margin-bottom: 22px;
}

.icon-register > button {
    margin-top: 40px;
}

#ifu-logo-img {
    width: 128px;
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
    white-space: pre-line;
    box-sizing: border-box;

    p {
        white-space: normal;
    }
}

.academic-image {
    text-align: center;
}

.academic-image > img {
    width: 500px;
    height: 270px;
}

.col-half > p,
.col-half > h2 {
    padding-left: 80px;
}

.col-half > p {
    font-size: 16px;
    line-height: 31px;
    letter-spacing: 0.02em;
}

.col-half > img {
    padding-left: 15%;
}

.academic-section {
    padding: 0 0 0 0 !important;
    border-bottom: 6px solid #54bef5;
}

.flex-top-left {
    display: flex;
    align-items: flex-start;
}

.flex-bottom-right {
    display: flex;
    flex-direction: row-reverse;
}

.color-box {
    background-color: #f1f1f1;
    width: 275px;
    text-align: center;
    height: 119px;
    font-size: 30px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.row-flex-end {
    align-items: flex-start;
}

.orange {
    background: #fda63b;
}

.pink {
    background: #f96191;
}

.blue {
    background: #34bbc9;
}

.green {
    background: #c9d74a;
}
#scan-qr {
    line-height: inherit;
}

.section-scan {
    padding-right: 0;
}

@media (max-width: 1024px) {
    .row {
        flex-direction: column;
        margin: 0;
        width: 100%;
        box-sizing: border-box;
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
            margin: 15px auto 22px auto;
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

    .color-box {
        font-size: 23px;
    }
    .academic-section {
        padding: 0 0 0 0 !important;
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
            max-width: 80%;
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
