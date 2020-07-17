<template>
    <div>
        <div class="title-bar" @click="toggleOpen">
            <div class="time">{{ time }}</div>
            <div class="title">{{ title }}</div>
        </div>
        <div v-if="open" class="content-section">
            <div class="guest">
                <div v-for="(guest, index) in guestList" :key="index">
                    <img :src="guestImages[guest]" />
                    <p>{{ guest }}</p>
                </div>
            </div>
            <div class="content">
                <div v-for="(content, index) in contentList" :key="index">
                    <p>
                        <b>{{ content.title }}</b>
                    </p>
                    <p v-for="(p, i) in content.p" :key="i">{{ p }}</p>
                    <ul>
                        <li v-for="(li, i) in content.list" :key="i">
                            {{ li }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="guest-description">
                <div
                    v-for="(guest, index) in guestDescriptionList"
                    :key="index"
                >
                    <p>
                        <b>{{ guest.title }}</b>
                    </p>
                    <p>{{ guest.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Benjamin from '@/assets/carnival/guests/Benjamin.svg';
import Brittany from '@/assets/carnival/guests/Brittany.svg';
import 胡欣培 from '@/assets/carnival/guests/胡欣培.svg';
import 卢浩宇 from '@/assets/carnival/guests/卢浩宇.svg';
import 李真阳 from '@/assets/carnival/guests/李真阳.svg';
import 阮锦龙 from '@/assets/carnival/guests/阮锦龙.svg';
import 汤嘉雯 from '@/assets/carnival/guests/汤嘉雯.svg';
import 王奎星 from '@/assets/carnival/guests/王奎星.svg';
import 王汐羽 from '@/assets/carnival/guests/王汐羽.svg';
import 赵浩君 from '@/assets/carnival/guests/赵浩君.svg';
import 郑雅盈 from '@/assets/carnival/guests/郑雅盈.svg';
import 詹梓萱 from '@/assets/carnival/guests/詹梓萱.svg';
import 张乐佳 from '@/assets/carnival/guests/张乐佳.svg';
import 王胤娴 from '@/assets/carnival/guests/王胤娴.svg';
import 赵兴宇 from '@/assets/carnival/guests/赵兴宇.svg';
import 陶然 from '@/assets/carnival/guests/陶然.svg';
import 谭诒蔚 from '@/assets/carnival/guests/谭诒蔚.svg';
import 杨品怡 from '@/assets/carnival/guests/杨品怡.svg';
import 程知禹 from '@/assets/carnival/guests/程知禹.svg';
import 邹扬帆 from '@/assets/carnival/guests/邹扬帆.svg';
import 刘汝辰 from '@/assets/carnival/guests/刘汝辰.svg';
import Aman from '@/assets/carnival/guests/Aman.svg';
import 甘林 from '@/assets/carnival/guests/甘林.svg';
import 孙千雅 from '@/assets/carnival/guests/孙千雅.svg';
import 吕佳鹭 from '@/assets/carnival/guests/吕佳鹭.svg';
import 周凯彤 from '@/assets/carnival/guests/周凯彤.svg';
import 罗嫣然 from '@/assets/carnival/guests/罗嫣然.svg';

export default {
    props: {
        time: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        guestList: {
            type: Array,
            required: true,
        },
        contentList: {
            type: Array,
            required: true,
        },
        guestDescriptionList: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            open: false,
            guestImages: {
                郑雅盈,
                'Yaying Zheng': 郑雅盈,
                阮锦龙,
                'Jinlong Ruan': 阮锦龙,
                胡欣培,
                'Xinpei Hu': 胡欣培,
                '卢浩宇 Henry': 卢浩宇,
                'Haoyu Lu (Henry)': 卢浩宇,
                '汤嘉雯 Kimmy': 汤嘉雯,
                'Jiawen Tang (Kimmy)': 汤嘉雯,
                'Benjamin Nicholson': Benjamin,
                李真阳,
                'Zhenyang Li': 李真阳,
                赵浩君,
                'Haojun Zhao': 赵浩君,
                王汐羽,
                'Xiyu Wang': 王汐羽,
                詹梓萱,
                'Zixuan Zhan': 詹梓萱,
                王奎星,
                'Kuixing Wang': 王奎星,
                张乐佳,
                'Lejia Zhang': 张乐佳,
                王胤娴,
                'Yinxian Wang': 王胤娴,
                赵兴宇,
                'Xingyu Zhao': 赵兴宇,
                陶然,
                'Ran Tao': 陶然,
                'Brittany Bi': Brittany,
                谭诒蔚,
                'Yiwei Tan': 谭诒蔚,
                杨品怡,
                'Pinyi Yang': 杨品怡,
                程知禹,
                'Zhiyu Cheng': 程知禹,
                邹扬帆,
                'Yangfan Zou': 邹扬帆,
                '刘汝辰 Bobo': 刘汝辰,
                'Ruchen Liu (Bobo)': 刘汝辰,
                甘林,
                'Lin Gan': 甘林,
                孙千雅,
                'Qianya Sun': 孙千雅,
                吕佳鹭,
                'Jialu Lv': 吕佳鹭,
                Aman,
                周凯彤,
                Kaitong: 周凯彤,
                罗嫣然,
                'Yanran Luo': 罗嫣然,
            },
        };
    },
    methods: {
        toggleOpen() {
            this.open = !this.open;
        },
    },
};
</script>

<style lang="scss" scoped>
.title-bar {
    height: 64px;
    display: flex;
    font-size: 16px;
    border-bottom: 2px solid $button-color;
    align-items: center;

    &:hover {
        font-weight: bold;
        cursor: pointer;
    }

    .time {
        flex-basis: 20%;
        text-align: center;
    }

    .title {
        flex-basis: 80%;
    }
}

.content-section {
    display: flex;
    color: #466eb6;
    border-bottom: 2px solid $button-color;

    .guest {
        flex-basis: 20%;
        text-align: center;

        > div {
            margin: 28px;
        }

        p {
            margin: 0;
            font-size: 12px;
        }
    }

    .content {
        flex-basis: 50%;
        padding-right: 50px;

        div {
            margin: 30px 0;
        }
        p {
            margin: 0;
        }

        ul {
            margin: 0;
            padding-left: 0;
        }
    }

    .guest-description {
        flex-basis: 30%;

        div {
            margin: 30px 0;
        }
        p {
            margin: 0;
        }
    }
}

@media (max-width: $mobile-max-width) {
    .title-bar {
        font-size: 16px;

        .time {
            flex-basis: 30%;
        }

        .title {
            flex-basis: 70%;
        }
    }

    .content-section {
        flex-direction: column;

        .guest {
            display: flex;
            justify-content: space-evenly;

            > div {
                margin: 30px 0 0 0;
            }

            img {
                height: 45px;
                width: 45px;
            }
        }

        .content {
            padding: 0 4%;
            p {
                margin: 0;
            }
        }

        .guest-description {
            padding: 0 4%;
            div {
                margin: 0 0 30px 0;
            }
        }
    }
}
</style>
