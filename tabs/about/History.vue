<template>
    <div class="history">
        <div class="blue-background" />
        <div class="timeline-container">
            <div class="time-2018-background mobile" />
            <img class="time-background desktop" :src="timelineImage" />
            <div class="time-background-container">
                <img
                    class="time-background mobile"
                    :src="timelineImageMobile"
                />
            </div>
            <section class="time-2017">
                <div class="time-item">
                    <div v-t="'about.history.2017.july'" class="time" />
                    <div v-t="'about.history.2017.text1'" class="text" />
                </div>
                <div class="time-item">
                    <div v-t="'about.history.2017.oct'" class="time" />
                    <div v-t="'about.history.2017.text2'" class="text" />
                </div>
                <div class="time-item">
                    <div v-t="'about.history.2017.dec'" class="time" />
                    <div v-t="'about.history.2017.text3'" class="text" />
                </div>
            </section>
            <section class="time-2018">
                <div class="time-item">
                    <div v-t="'about.history.2018.march'" class="time" />
                    <div v-t="'about.history.2018.text1'" class="text" />
                </div>
                <div class="time-item">
                    <div v-t="'about.history.2018.march'" class="time" />
                    <div v-t="'about.history.2018.text2'" class="text" />
                </div>
                <div class="time-item">
                    <div v-t="'about.history.2018.july'" class="time" />
                    <div v-t="'about.history.2018.text3'" class="text" />
                </div>
                <div class="time-item">
                    <div v-t="'about.history.2018.oct'" class="time" />
                    <div v-t="'about.history.2018.text4'" class="text" />
                </div>
                <div class="time-item">
                    <div v-t="'about.history.2018.oct'" class="time" />
                    <div v-t="'about.history.2018.text5'" class="text" />
                </div>
                <div class="time-item">
                    <div v-t="'about.history.2018.nov'" class="time" />
                    <div v-t="'about.history.2018.text6'" class="text" />
                </div>
                <div class="time-item">
                    <div v-t="'about.history.2018.dec'" class="time" />
                    <div v-t="'about.history.2018.text7'" class="text" />
                </div>
                <div class="time-item">
                    <div v-t="'about.history.2018.dec'" class="time" />
                    <div v-t="'about.history.2018.text8'" class="text" />
                </div>
            </section>
            <section class="time-2019">
                <div class="time-item">
                    <div v-t="'about.history.2019.feb'" class="time" />
                    <div v-t="'about.history.2019.text1'" class="text" />
                </div>
                <div class="time-item">
                    <div v-t="'about.history.2019.june'" class="time" />
                    <div v-t="'about.history.2019.text2'" class="text" />
                </div>
                <div class="time-item">
                    <div v-t="'about.history.2019.june'" class="time" />
                    <div v-t="'about.history.2019.text3'" class="text" />
                </div>
                <div class="time-item">
                    <div v-t="'about.history.2019.july'" class="time" />
                    <div v-t="'about.history.2019.text4'" class="text" />
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import timelineImage from '@/assets/about/history/timeline.png';
import timelineImageMobile from '@/assets/about/history/timeline-mobile.jpg';

export default {
    name: 'History',
    data() {
        return {
            timelineImage,
            timelineImageMobile,
        };
    },
};
</script>

<style lang="scss" scoped>
section {
    padding: 0;
}

.time-background {
    width: 100%;
    position: absolute;
    z-index: -1;
}

.history {
    position: relative;
}

.timeline-container {
    width: 100%;
    height: 2700px;
    position: relative;
    margin: auto;
}

.time-item {
    width: 200px;
    padding: 28px;
    position: absolute;
    margin: auto;
}

.time-item .text {
    margin-top: 15px;
    width: 225px;
}

.time {
    width: 122px;
    height: 40px;
    border-radius: 10px;
    color: white;
    text-align: center;
    line-height: 40px;
}

.time-2017,
.time-2018,
.time-2019 {
    position: relative;
}

.time-2017 {
    height: 662px;

    .time {
        background: #c9d74a;
    }

    .time-item:nth-child(1) {
        left: 570px;
        top: 200px;
    }

    .time-item:nth-child(2) {
        left: 570px;
        top: 330px;
    }

    .time-item:nth-child(3) {
        left: 570px;
        top: 495px;
    }
}

.blue-background {
    display: none;
}

.time-2018 {
    height: 1119px;

    .time {
        background: #34bbc9;
    }

    .time-item:nth-child(1) {
        top: 90px;
        left: 700px;
        text-align: right;

        .time {
            left: 100px;
            position: relative;
        }
    }

    .time-item:nth-child(2) {
        top: 300px;
        left: 685px;
    }

    .time-item:nth-child(3) {
        top: 300px;
        left: 435px;
    }

    .time-item:nth-child(4) {
        top: 365px;
        left: 90px;
    }

    .time-item:nth-child(5) {
        top: 570px;
        left: 435px;
    }

    .time-item:nth-child(6) {
        top: 570px;
        left: 685px;
    }

    .time-item:nth-child(7) {
        top: 730px;
        left: 700px;
        text-align: right;

        .time {
            left: 100px;
            position: relative;
        }
    }

    .time-item:nth-child(8) {
        top: 875px;
        left: 700px;
        text-align: right;
        .time {
            left: 100px;
            position: relative;
        }
    }
}

.time-2019 {
    height: 919px;

    .time {
        background: #f96291;
    }

    .time-item:nth-child(1) {
        left: 570px;
        top: 110px;
    }

    .time-item:nth-child(2) {
        left: 570px;
        top: 265px;
    }

    .time-item:nth-child(3) {
        left: 570px;
        top: 420px;
    }

    .time-item:nth-child(4) {
        left: 570px;
        top: 555px;
    }
}

@media (max-width: 1440px) {
    .timeline-container {
        width: 1180px;
        height: 2200px;
    }

    .time-item .text {
        width: 270px;
    }

    .time-2017 {
        height: 542px;

        .time-item:nth-child(1) {
            left: 460px;
            top: 160px;
        }

        .time-item:nth-child(2) {
            left: 460px;
            top: 270px;
        }

        .time-item:nth-child(3) {
            left: 460px;
            top: 400px;
        }
    }

    .blue-background {
        display: block;
        width: 100%;
        height: 917px;
        position: absolute;
        top: 542px;
        background: #f1f9ff;
        z-index: -1;
    }

    .time-2018 {
        height: 917px;

        .time-item:nth-child(1) {
            top: 65px;
            left: 470px;
            text-align: right;

            .time {
                left: 150px;
                position: relative;
            }
        }

        .time-item:nth-child(2) {
            top: 240px;
            left: 585px;
        }

        .time-item:nth-child(3) {
            top: 240px;
            left: 315px;
        }

        .time-item:nth-child(4) {
            top: 290px;
            left: -10px;
        }

        .time-item:nth-child(5) {
            top: 455px;
            left: 230px;
        }

        .time-item:nth-child(6) {
            top: 455px;
            left: 510px;
        }

        .time-item:nth-child(7) {
            top: 590px;
            left: 485px;

            .time {
                left: 145px;
            }
        }

        .time-item:nth-child(8) {
            top: 720px;
            left: 485px;

            .time {
                left: 145px;
            }
        }
    }

    .time-2019 {
        height: 741px;

        .time-item:nth-child(1) {
            left: 460px;
            top: 60px;
        }

        .time-item:nth-child(2) {
            left: 460px;
            top: 195px;
        }

        .time-item:nth-child(3) {
            left: 460px;
            top: 330px;
        }

        .time-item:nth-child(4) {
            left: 460px;
            top: 450px;
        }
    }
}

@media (max-width: 1024px) {
    .history {
        width: 100%;
        height: 2877px;
        overflow: hidden;
    }

    .time-background-container,
    .time-background,
    .time-2017,
    .time-2018,
    .time-2019 {
        width: 375px;
    }

    .time-background-container {
        margin: auto;
    }

    .time-2017 {
        height: 641px;
    }

    .time-2018 {
        height: 1401px;
    }

    .time-2018-background {
        background: #f1f8fe;
        width: 100%;
        height: 1401px;
        width: 100%;
        position: absolute;
        top: 641px;
        z-index: -10;
    }

    .time-2019 {
        height: 835px;
    }

    .history .time-2017 .time-item,
    .history .time-2018 .time-item,
    .history .time-2019 .time-item {
        left: 55px;
        text-align: left;
    }

    .history .time-2017 .time-item .time,
    .history .time-2018 .time-item .time,
    .history .time-2019 .time-item .time {
        left: 0px;
    }

    .time-2017 .time-item:nth-child(1) {
        top: 140px;
    }

    .time-2017 .time-item:nth-child(2) {
        top: 265px;
    }

    .time-2017 .time-item:nth-child(3) {
        top: 435px;
    }

    .time-2018 .time-item:nth-child(1) {
        top: 145px;
    }

    .time-2018 .time-item:nth-child(2) {
        top: 320px;
    }

    .time-2018 .time-item:nth-child(3) {
        top: 490px;
    }

    .time-2018 .time-item:nth-child(4) {
        top: 635px;
    }

    .time-2018 .time-item:nth-child(5) {
        top: 785px;
    }

    .time-2018 .time-item:nth-child(6) {
        top: 930px;
    }

    .time-2018 .time-item:nth-child(7) {
        top: 1075px;
    }

    .time-2018 .time-item:nth-child(8) {
        top: 1195px;
    }

    .time-2019 .time-item:nth-child(1) {
        top: 140px;
    }

    .time-2019 .time-item:nth-child(2) {
        top: 310px;
    }

    .time-2019 .time-item:nth-child(3) {
        top: 480px;
    }

    .time-2019 .time-item:nth-child(4) {
        top: 630px;
    }
}

@media (max-width: 350px) {
    .time-item .text {
        font-size: 13px;
        width: 200px;
    }
}
</style>
