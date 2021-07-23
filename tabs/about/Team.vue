<template>
    <div class="team-container">
        <Banner
            class="desktop"
            :title="$t('team.title')"
            :button-text="$t('team.buttonText')"
            :image="teamImage"
            external
            to="https://mp.weixin.qq.com/s/f4UJoB2zt9fBTmfGFN1XCA"
        />
        <div class="banner mobile">
            <h2>{{ $t('team.title') }}</h2>
            <Button
                external
                to="https://mp.weixin.qq.com/s/f4UJoB2zt9fBTmfGFN1XCA"
            >
                {{ $t('team.buttonText') }}
            </Button>
            <div class="img">
                <img :src="teamImage" alt="" />
            </div>
        </div>
        <section
            v-for="(item, index) in profileList"
            :key="index"
            class="container"
        >
            <h2>{{ item.title }}</h2>
            <Swiper :profile-list="item.data" />
        </section>
    </div>
</template>
<script>
import Banner from '@/components/Banner.vue';
import Swiper from '@/components/Swiper.vue';
import teamImage from '@/assets/team/banner.png';
import Button from '@/components/Button.vue';

import tangKimmyImage from '@/assets/newteam/tang-kimmy.png';
import guiSherryImage from '@/assets/newteam/gui-sherry.png';
import wangRichardImage from '@/assets/newteam/wang-richard.png';
import xinYuanchuImage from '@/assets/newteam/xin-yuanchu.png';
import wangKuixingImage from '@/assets/newteam/wang-kuixing.png';
import jiangJessicaImage from '@/assets/newteam/jiang-jessica.png';
import zhaoShiyueImage from '@/assets/newteam/zhao-shiyue.png';
import caiMandyImage from '@/assets/newteam/cai-mandy.png';
import zhangAnnieImage from '@/assets/newteam/zhang-annie.png';
import pangJingImage from '@/assets/newteam/pang-jing.png';
import liRenaImage from '@/assets/newteam/li-rena.png';
import liuHeyuanImage from '@/assets/newteam/liu-heyuan.png';
import xuTonyImage from '@/assets/newteam/xu-tony.png';
import henriksAndreaImage from '@/assets/newteam/henriks-andrea.png';
import wuAliceImage from '@/assets/newteam/wu-alice.png';
import linPatrickImage from '@/assets/newteam/lin-patrick.png';
import yenJudyImage from '@/assets/newteam/yen-judy.png';
import longAliImage from '@/assets/newteam/long-ali.png';
import sobereScottImage from '@/assets/newteam/sobere-scott.png';
import zhangHanyuImage from '@/assets/newteam/zhang-hanyu.png';
import chenEricImage from '@/assets/newteam/chen-eric.png';
import zanettiNickImage from '@/assets/newteam/zanetti-nick.png';
import jiangTigoImage from '@/assets/newteam/jiang-tigo.png';
import jinDanniImage from '@/assets/newteam/jin-danni.png';
import huangSteckvonImage from '@/assets/newteam/huang-steckvon.png';
import huangLilyImage from '@/assets/newteam/huang-lily.png';
import wangVickyImage from '@/assets/newteam/wang-vicky.png';
import luoYanranImage from '@/assets/newteam/luo-yanran.png';
import foxAidanImage from '@/assets/newteam/fox-aidan.png';
import wuJonathanImage from '@/assets/newteam/wu-jonathan.png';
import huKatherineImage from '@/assets/newteam/hu-katherine.png';
import zhangRuixiImage from '@/assets/newteam/zhang-ruixi.png';
import fengLiyaImage from '@/assets/newteam/feng-liya.png';
import jiangYikunImage from '@/assets/newteam/jiang-yikun.png';
import qiuTianjieImage from '@/assets/newteam/qiu-tianjie.png';
import gaoLangImage from '@/assets/newteam/gao-lang.png';
import zhangXinerImage from '@/assets/newteam/zhang-xiner.png';
import zhangClaireImage from '@/assets/newteam/zhang-claire.png';
import sunSelinaImage from '@/assets/newteam/sun-selina.png';
import yangPinyiImage from '@/assets/newteam/yang-pinyi.png';
import blueTopImage from '@/assets/newteam/blue-top.png';
import luQiwenImage from '@/assets/newteam/lu-qiwen.png';
import golfImage from '@/assets/newteam/golf.png';

export default {
    components: {
        Banner,
        Swiper,
        Button,
    },
    data() {
        return {
            teamImage,
            activeIndex: 0,
            buttonText: '联系我们',
        };
    },
    computed: {
        profileList() {
            return [
                {
                    title: this.$t('team.department1'),
                    data: [
                        {
                            image: tangKimmyImage,
                            title: this.$t('team.title1'),
                            subTitle: this.$t('team.name1'),
                        },
                        {
                            image: guiSherryImage,
                            title: this.$t('team.title2'),
                            subTitle: this.$t('team.name2'),
                        },
                        {
                            image: wangRichardImage,
                            title: this.$t('team.title3'),
                            subTitle: this.$t('team.name3'),
                        },
                    ],
                },
                {
                    title: this.$t('team.department2'),
                    data: [
                        {
                            image: tangKimmyImage,
                            title: this.$t('team.title4'),
                            subTitle: this.$t('team.name4'),
                        },
                        {
                            image: xinYuanchuImage,
                            title: this.$t('team.title5'),
                            subTitle: this.$t('team.name5'),
                        },
                        {
                            image: wangKuixingImage,
                            title: this.$t('team.title6'),
                            subTitle: this.$t('team.name6'),
                        },
                    ],
                },
                {
                    title: this.$t('team.department3'),
                    data: [
                        {
                            image: jiangJessicaImage,
                            title: this.$t('team.title7'),
                            subTitle: this.$t('team.name7'),
                        },
                        {
                            image: zhaoShiyueImage,
                            title: this.$t('team.title8'),
                            subTitle: this.$t('team.name8'),
                        },
                        {
                            image: caiMandyImage,
                            title: this.$t('team.title9'),
                            subTitle: this.$t('team.name9'),
                        },
                        {
                            image: zhangAnnieImage,
                            title: this.$t('team.title10'),
                            subTitle: this.$t('team.name10'),
                        },
                        {
                            image: pangJingImage,
                            title: this.$t('team.title11'),
                            subTitle: this.$t('team.name11'),
                        },
                        {
                            image: liRenaImage,
                            title: this.$t('team.title12'),
                            subTitle: this.$t('team.name12'),
                        },
                        {
                            image: liuHeyuanImage,
                            title: this.$t('team.title13'),
                            subTitle: this.$t('team.name13'),
                        },
                        {
                            image: xuTonyImage,
                            title: this.$t('team.title14'),
                            subTitle: this.$t('team.name14'),
                        },
                    ],
                },
                {
                    title: this.$t('team.department4'),
                    data: [
                        {
                            image: guiSherryImage,
                            title: this.$t('team.title15'),
                            subTitle: this.$t('team.name15'),
                        },
                        {
                            image: henriksAndreaImage,
                            title: this.$t('team.title16'),
                            subTitle: this.$t('team.name16'),
                        },
                        {
                            image: wuAliceImage,
                            title: this.$t('team.title17'),
                            subTitle: this.$t('team.name17'),
                        },
                        {
                            image: linPatrickImage,
                            title: this.$t('team.title18'),
                            subTitle: this.$t('team.name18'),
                        },
                        {
                            image: yenJudyImage,
                            title: this.$t('team.title19'),
                            subTitle: this.$t('team.name19'),
                        },
                        {
                            image: longAliImage,
                            title: this.$t('team.title20'),
                            subTitle: this.$t('team.name20'),
                        },
                        {
                            image: sobereScottImage,
                            title: this.$t('team.title21'),
                            subTitle: this.$t('team.name21'),
                        },
                        {
                            image: zhangHanyuImage,
                            title: this.$t('team.title22'),
                            subTitle: this.$t('team.name22'),
                        },
                        {
                            image: chenEricImage,
                            title: this.$t('team.title23'),
                            subTitle: this.$t('team.name23'),
                        },
                        {
                            image: zanettiNickImage,
                            title: this.$t('team.title24'),
                            subTitle: this.$t('team.name24'),
                        },
                        {
                            image: jiangTigoImage,
                            title: this.$t('team.title25'),
                            subTitle: this.$t('team.name25'),
                        },
                        {
                            image: jinDanniImage,
                            title: this.$t('team.title26'),
                            subTitle: this.$t('team.name26'),
                        },
                        {
                            image: huangSteckvonImage,
                            title: this.$t('team.title27'),
                            subTitle: this.$t('team.name27'),
                        },
                        {
                            image: huangLilyImage,
                            title: this.$t('team.title28'),
                            subTitle: this.$t('team.name28'),
                        },
                        {
                            image: wangVickyImage,
                            title: this.$t('team.title29'),
                            subTitle: this.$t('team.name29'),
                        },
                    ],
                },
                {
                    title: this.$t('team.department5'),
                    data: [
                        {
                            image: luoYanranImage,
                            title: this.$t('team.title30'),
                            subTitle: this.$t('team.name30'),
                        },
                        {
                            image: foxAidanImage,
                            title: this.$t('team.title31'),
                            subTitle: this.$t('team.name31'),
                        },
                        {
                            image: wuJonathanImage,
                            title: this.$t('team.title46'),
                            subTitle: this.$t('team.name46'),
                        },
                        {
                            image: huKatherineImage,
                            title: this.$t('team.title32'),
                            subTitle: this.$t('team.name32'),
                        },
                        {
                            image: zhangRuixiImage,
                            title: this.$t('team.title33'),
                            subTitle: this.$t('team.name33'),
                        },
                        {
                            image: fengLiyaImage,
                            title: this.$t('team.title34'),
                            subTitle: this.$t('team.name34'),
                        },
                        {
                            image: jiangYikunImage,
                            title: this.$t('team.title35'),
                            subTitle: this.$t('team.name35'),
                        },
                        {
                            image: qiuTianjieImage,
                            title: this.$t('team.title36'),
                            subTitle: this.$t('team.name36'),
                        },
                        {
                            image: gaoLangImage,
                            title: this.$t('team.title37'),
                            subTitle: this.$t('team.name37'),
                        },
                        {
                            image: zhangXinerImage,
                            title: this.$t('team.title38'),
                            subTitle: this.$t('team.name38'),
                        },
                    ],
                },
                {
                    title: this.$t('team.department6'),
                    data: [
                        {
                            image: zhangClaireImage,
                            title: this.$t('team.title39'),
                            subTitle: this.$t('team.name39'),
                        },
                        {
                            image: guiSherryImage,
                            title: this.$t('team.title40'),
                            subTitle: this.$t('team.name40'),
                        },
                        {
                            image: sunSelinaImage,
                            title: this.$t('team.title41'),
                            subTitle: this.$t('team.name41'),
                        },
                        {
                            image: yangPinyiImage,
                            title: this.$t('team.title42'),
                            subTitle: this.$t('team.name42'),
                        },
                        {
                            image: blueTopImage,
                            title: this.$t('team.title43'),
                            subTitle: this.$t('team.name43'),
                        },
                        {
                            image: luQiwenImage,
                            title: this.$t('team.title44'),
                            subTitle: this.$t('team.name44'),
                        },
                        {
                            image: golfImage,
                            title: this.$t('team.title45'),
                            subTitle: this.$t('team.name45'),
                        },
                    ],
                },
            ];
        },
    },
};
</script>

<style lang="scss" scoped>
.team-container {
    padding-bottom: 30px;
}
section {
    padding-top: 0;

    &:first-of-type {
        padding-top: 80px;
    }
}
h2 {
    margin: 0;
    padding: 40px 0 30px 0;
}

@media (max-width: $mobile-max-width) {
    section {
        &:first-of-type {
            padding-top: 15px;
        }
    }

    .container {
        text-align: center;
    }
    .banner {
        text-align: center;
    }
    h2 {
        font-weight: normal;
    }
    .img {
        padding: 30px;
        border-bottom: 15px solid $red;
        img {
            width: 100%;
        }
    }
}
</style>
