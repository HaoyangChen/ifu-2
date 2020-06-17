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

import tangejiawenImage from '@/assets/team/tangjiawen.png';
import wangkuixingImage from '@/assets/team/wangkuixing.png';
import xinyuanchuImage from '@/assets/team/xinyuanchu.png';
import zhanzixuanImage from '@/assets/team/zhanzixuan.png';
import zhuohanwenImage from '@/assets/team/zhuohanwen.png';
import jianghanqinImage from '@/assets/team/jianghanqin.png';
import zhaoshiyueImage from '@/assets/team/zhaoshiyue.png';
import wangshuyiImage from '@/assets/team/wangshuyi.png';
import wangqinImage from '@/assets/team/wangqin.png';
import luoyanranImage from '@/assets/team/luoyanran.png';
import gaoyingImage from '@/assets/team/gaoying.png';
import hemanjiangImage from '@/assets/team/hemanjiang.png';
import wangchujunImage from '@/assets/team/wangchujun.png';
import shenzichenImage from '@/assets/team/shenzichen.png';
import shijingyiImage from '@/assets/team/shijingyi.png';
import yangyuImage from '@/assets/team/yangyu.png';
import husiruiImage from '@/assets/team/husirui.png';
import xuyifanImage from '@/assets/team/xuyifan.png';
import zhoukaitongImage from '@/assets/team/zhoukaitong.png';
import guixiaoqinImage from '@/assets/team/guixiaoqin.png';
import lihaoImage from '@/assets/team/lihao.png';
import mayutaoImage from '@/assets/team/mayutao.png';
import hexinyiImage from '@/assets/team/hexinyi.png';
import chenhaoyangImage from '@/assets/team/chenhaoyang.png';
import huangwentaoImage from '@/assets/team/huangwentao.png';
import xuzhiqiImage from '@/assets/team/xuzhiqi.png';
import wangcaiweiImage from '@/assets/team/wangcaiwei.png';
import fanyixuanImage from '@/assets/team/fanyixuan.png';
import sunxiaoqiaoImage from '@/assets/team/sunxiaoqiao.png';
import chenxinyiImage from '@/assets/team/chenxinyi.png';

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
                            image: tangejiawenImage,
                            title: this.$t('team.title1'),
                            subTitle: this.$t('team.name1'),
                        },
                    ],
                },
                {
                    title: this.$t('team.department2'),
                    data: [
                        {
                            image: zhuohanwenImage,
                            title: this.$t('team.title2'),
                            subTitle: this.$t('team.name2'),
                        },
                        {
                            image: zhanzixuanImage,
                            title: this.$t('team.title3'),
                            subTitle: this.$t('team.name3'),
                        },
                        {
                            image: xinyuanchuImage,
                            title: this.$t('team.title4'),
                            subTitle: this.$t('team.name4'),
                        },
                        {
                            image: wangkuixingImage,
                            title: this.$t('team.title5'),
                            subTitle: this.$t('team.name5'),
                        },
                    ],
                },
                {
                    title: this.$t('team.department3'),
                    data: [
                        {
                            image: jianghanqinImage,
                            title: this.$t('team.title6'),
                            subTitle: this.$t('team.name6'),
                        },
                        {
                            image: zhaoshiyueImage,
                            title: this.$t('team.title7'),
                            subTitle: this.$t('team.name7'),
                        },
                        {
                            image: wangshuyiImage,
                            title: this.$t('team.title8'),
                            subTitle: this.$t('team.name8'),
                        },
                        {
                            image: wangqinImage,
                            title: this.$t('team.title9'),
                            subTitle: this.$t('team.name9'),
                        },
                    ],
                },
                {
                    title: this.$t('team.department4'),
                    data: [
                        {
                            image: luoyanranImage,
                            title: this.$t('team.title10'),
                            subTitle: this.$t('team.name10'),
                        },
                        {
                            image: gaoyingImage,
                            title: this.$t('team.title11'),
                            subTitle: this.$t('team.name11'),
                        },
                        {
                            image: hemanjiangImage,
                            title: this.$t('team.title12'),
                            subTitle: this.$t('team.name12'),
                        },
                        {
                            image: wangchujunImage,
                            title: this.$t('team.title13'),
                            subTitle: this.$t('team.name13'),
                        },
                        {
                            image: shenzichenImage,
                            title: this.$t('team.title14'),
                            subTitle: this.$t('team.name14'),
                        },
                        {
                            image: shijingyiImage,
                            title: this.$t('team.title15'),
                            subTitle: this.$t('team.name15'),
                        },
                        {
                            image: yangyuImage,
                            title: this.$t('team.title16'),
                            subTitle: this.$t('team.name16'),
                        },
                        {
                            image: husiruiImage,
                            title: this.$t('team.title17'),
                            subTitle: this.$t('team.name17'),
                        },
                        {
                            image: xuyifanImage,
                            title: this.$t('team.title18'),
                            subTitle: this.$t('team.name18'),
                        },
                        {
                            image: zhoukaitongImage,
                            title: this.$t('team.title19'),
                            subTitle: this.$t('team.name19'),
                        },
                    ],
                },
                {
                    title: this.$t('team.department5'),
                    data: [
                        {
                            image: guixiaoqinImage,
                            title: this.$t('team.title20'),
                            subTitle: this.$t('team.name20'),
                        },
                        {
                            image: mayutaoImage,
                            title: this.$t('team.title21'),
                            subTitle: this.$t('team.name21'),
                        },
                        {
                            image: chenhaoyangImage,
                            title: this.$t('team.title22'),
                            subTitle: this.$t('team.name22'),
                        },
                        {
                            image: lihaoImage,
                            title: this.$t('team.title23'),
                            subTitle: this.$t('team.name23'),
                        },
                        {
                            image: hexinyiImage,
                            title: this.$t('team.title24'),
                            subTitle: this.$t('team.name24'),
                        },
                        {
                            image: huangwentaoImage,
                            title: this.$t('team.title25'),
                            subTitle: this.$t('team.name25'),
                        },
                    ],
                },
                {
                    title: this.$t('team.department6'),
                    data: [
                        {
                            image: xuzhiqiImage,
                            title: this.$t('team.title26'),
                            subTitle: this.$t('team.name26'),
                        },
                        {
                            image: wangcaiweiImage,
                            title: this.$t('team.title27'),
                            subTitle: this.$t('team.name27'),
                        },
                        {
                            image: fanyixuanImage,
                            title: this.$t('team.title28'),
                            subTitle: this.$t('team.name28'),
                        },
                        {
                            image: sunxiaoqiaoImage,
                            title: this.$t('team.title29'),
                            subTitle: this.$t('team.name29'),
                        },
                        {
                            image: chenxinyiImage,
                            title: this.$t('team.title30'),
                            subTitle: this.$t('team.name30'),
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
