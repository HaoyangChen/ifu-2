<template>
    <footer class="footer">
        <div class="top">
            <div class="logo">
                <div class="ifu-underline">IFU</div>
                <div class="zh">
                    <p>{{ $t('footer.subTitle1') }}</p>
                    <p>{{ $t('footer.subTitle2') }}</p>
                </div>
                <p class="rights-reserved light-blue">
                    © 2019 IFU All Rights Reserved
                </p>
            </div>
            <div class="decoration-line decoration-line1"></div>
            <div class="contact-us">
                <span class="light-blue">{{ $t('footer.contactUs') }}</span>
                <div class="mgt-separate">
                    <nuxt-link :to="localePath('/career')">{{
                        $t('footer.joinUs')
                    }}</nuxt-link>
                </div>
                <div>
                    <nuxt-link :to="localePath('/support')">{{
                        $t('footer.supportUs')
                    }}</nuxt-link>
                </div>
            </div>
            <div class="decoration-line decoration-line2"></div>
            <div class="more-info">
                <span class="light-blue">{{ $t('footer.moreInfo') }}</span>
                <div class="mgt-separate">
                    <a>{{ $t('footer.resourceShare') }}</a>
                </div>
                <div>
                    <nuxt-link :to="localePath('/membership')">{{
                        $t('footer.vipDetail')
                    }}</nuxt-link>
                </div>
            </div>
            <div class="decoration-line decoration-line3"></div>
            <div class="follow">
                <p class="light-blue">{{ $t('footer.followUs') }}</p>
                <div class="icon-container">
                    <a
                        v-for="(item, index) in followList"
                        :key="index"
                        :href="item.link"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <img :src="item.image" alt="" />
                        <!-- <img :src="gongzhonghaoImg" class="qrcode" alt="" /> -->
                        <div class="qrcode">
                            <img :src="gongzhonghaoImg" alt="" />
                            <span>gekogeko</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <!-- <div class="bottom">
            <p>© 2019 IFU All Rights Reserved</p>
        </div> -->
    </footer>
</template>

<script>
import wechatIcon from '@/assets/footer/wechat_icon.svg';
import facebookIcon from '@/assets/footer/fb_icon.svg';
import weiboIcon from '@/assets/footer/weibo_icon.svg';
import zhihuIcon from '@/assets/footer/zhihu_icon.svg';
import bilibiliIcon from '@/assets/footer/bilibili_icon.svg';
import linkedinIcon from '@/assets/footer/linkedin_icon.svg';
import instagramIcon from '@/assets/footer/instagram_icon.svg';
import gongzhonghaoImg from '@/assets/footer/gongzhonghao.png';

export default {
    name: 'Footer',
    data() {
        return {
            gongzhonghaoImg,
            followList: [
                {
                    image: wechatIcon,
                    link:
                        'https://mp.weixin.qq.com/s?__biz=MzU1MTE2MDkxOQ==&mid=100010050&idx=2&sn=884d96ee07af997401e4e2d47d17b224&scene=19#wechat_redirect',
                },
                {
                    image: weiboIcon,
                    link:
                        'https://www.weibo.com/u/6422822665?refer_flag=1001030103_&is_hot=1',
                },
                {
                    image: zhihuIcon,
                    link:
                        'https://www.zhihu.com/people/ifuguo-ji-jia-chang-hui/activities',
                },
                {
                    image: bilibiliIcon,
                    link: 'https://space.bilibili.com/399581752',
                },
                {
                    image: facebookIcon,
                    link:
                        'https://www.facebook.com/International-Family-Union-775710742807913/',
                },
                {
                    image: instagramIcon,
                    link: 'https://www.instagram.com/ifu_i_family_u/?hl=en',
                },
                {
                    image: linkedinIcon,
                    link: 'https://www.linkedin.com/company/ifu-china/',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
img {
    width: 36px;
    height: 36px;
    margin-right: 10px;
}
.footer {
    width: 100%;
    text-align: center;
    text-align: left;
    background-color: $dark-blue;
    min-height: 175px;
    width: 100%;
    position: relative;
    color: #fff;
}
.top {
    padding: 0 $padding-horizontal;
    min-height: 120px;
    .logo {
        color: #fff;
        display: inline-block;
        padding-top: 20px;
        div {
            display: inline-block;
            vertical-align: middle;
            .zh {
                font-size: $text-size;
                line-height: 31px;
                letter-spacing: 0.25em;
            }
            &:first-child {
                font-size: 60px;
                line-height: 84px;
                padding-right: 15px;
            }
            p {
                margin: 0px;
            }
        }

        .rights-reserved {
            margin-top: auto;
        }
    }
    .logo-en {
        color: #fff;
        display: inline-block;
        div {
            display: inline-block;
            vertical-align: middle;
            .zh {
                font-size: $text-size;
                line-height: 31px;
                letter-spacing: 0.25em;
            }
            &:first-child {
                font-size: 60px;
                line-height: 84px;
                margin-right: 15px;
                margin-bottom: 10px;
            }
            p {
                margin: 0px;
            }
        }
    }
}

.decoration-line {
    background-color: #a9defa;
    height: 80px;
    width: 2px;
    position: absolute;
    top: 43px;
}

.decoration-line1 {
    left: 480px;
}

.decoration-line2 {
    left: 710px;
}

.decoration-line3 {
    right: 482px;
}

.contact-us {
    position: absolute;
    top: 41px;
    left: 555px;

    .mgt-separate {
        margin-top: 20px;
    }

    a {
        text-decoration: none;
        color: white;
    }

    a:hover {
        text-decoration: underline;
    }
}

.more-info {
    position: absolute;
    top: 41px;
    left: 795px;

    a {
        text-decoration: none;
        color: white;
    }

    a:hover {
        text-decoration: underline;
    }

    .mgt-separate {
        margin-top: 20px;
    }
}

.light-blue {
    color: #a9defa;
}

.follow {
    color: #fff;
    // font-size: 14px;
    line-height: $text-size;
    letter-spacing: 0.03em;
    display: inline-block;
    padding-top: 43px;
    position: absolute;
    right: 120px;
    p {
        margin: 0;
        margin-bottom: 10px;
    }

    a {
        // background: white;
        width: 36px;
        height: 36px;
        display: inline-block;
        border-radius: 7px;
        margin-right: 10px;

        img {
            width: 100%;
            height: 100%;

            &:hover {
                opacity: 0.7;
            }
        }
    }

    .icon-container {
        margin-top: 29px;

        a:first-of-type {
            position: relative;
            div.qrcode {
                position: absolute;
                z-index: 99;
                top: -135px;
                right: -52px;
                width: 7.5rem;
                max-width: none;
                height: 7.5rem;
                transform: scale(0);
                transform-origin: bottom;
                opacity: 0;
                -webkit-transition: all 0.4s ease-in-out;
                -o-transition: all 0.4s ease-in-out;
                transition: all 0.4s ease-in-out;
            }
        }

        a:first-of-type:hover {
            div.qrcode {
                transform: scale(1);
                opacity: 1;
            }
        }

        a:not(:first-child) {
            div.qrcode {
                display: none;
            }
        }
    }
}
.bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.26);
    line-height: 60px;
    color: #fff;
    text-align: center;
    p {
        margin: 0;
        font-size: $text-size;
        letter-spacing: 0.025em;
    }
}
.code {
    height: 100%;
    width: 106px;
    background-color: #fff;
    position: absolute;
    top: 0px;
    right: $padding-horizontal;
    text-align: center;
    color: $dark-blue;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: 0.05em;
    img {
        width: 77px;
        height: 77px;
        margin: 34px 0 12px 0;
    }
    p {
        margin: 0;
    }
    .en {
        font-family: Helvetica;
        letter-spacing: 0.1em;
    }
}

@media (max-width: $mobile-max-width) {
    .top {
        padding: 0 20px;
    }
    .code {
        right: 30px;
    }
    .follow {
        right: 170px;
    }
    .zh {
        letter-spacing: 0.25em;
    }
}

@media (max-width: 1425px) {
    footer {
        min-height: 260px !important;
    }

    .more-info {
        top: 145px;
        left: 555px;
    }

    .top {
        .logo {
            .rights-reserved {
                margin-top: 100px;
                margin-left: 27%;
            }
        }
    }

    .decoration-line1 {
        height: 182px;
    }

    .decoration-line2 {
        display: none;
    }

    .decoration-line3 {
        display: none;
    }

    .follow {
        right: 230px;
    }
}

@media (max-width: 1250px) {
    .top {
        .contact-us {
            left: 530px;
            top: 143px;
        }

        .more-info {
            top: 143px;
            left: 705px;
        }
    }
    .decoration-line1 {
        left: 460px;
    }
}

@media (max-width: 1096px) {
    footer {
        min-height: 360px !important;
    }

    .decoration-line1 {
        height: 59px;
        left: 50%;
        transform: translate(-50%, 0%);
    }

    .decoration-line {
        top: 167px;
    }

    .top {
        .logo {
            position: absolute;
            transform: translate(-50%, 0%);
            left: 50%;

            .rights-reserved {
                margin-top: auto;
                margin-left: auto;
                position: absolute;
                top: 300px;
                left: 50%;
                transform: translate(-50%, 0%);
                width: fit-content;
            }

            div {
                text-align: center;
                display: block;
            }
        }

        .more-info {
            top: 163px;
            left: 55%;
            .mgt-separate {
                margin-top: 10px;
            }
        }

        .contact-us {
            top: 163px;
            left: 37%;
            .mgt-separate {
                margin-top: 10px;
            }
        }

        .follow {
            padding-top: 0px;
            left: 50%;
            right: auto;
            transform: translate(-50%, 0%);
            top: 220px;
            > .light-blue {
                display: none;
                padding-top: 0px;
            }
        }
    }
}

@media (max-width: 768px) {
    .footer {
        text-align: center;
        // height: 380px;
    }
    .top {
        height: 450px;
        .follow {
            // top: 100px;
            // left: 50%;
            // margin-left: -135px;
            text-align: left;
            width: 280px;
            font-size: $text-size;
            line-height: $text-size;
            letter-spacing: 0.03em;

            a {
                background: none;
                width: 60px;
                height: 60px;
                margin-bottom: 20px;
            }
        }

        .logo {
            position: relative;
            transform: none;
            left: auto;

            .ifu-underline {
                border-bottom: 1px solid #fff;
                width: fit-content;
                display: block;
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 10px;
            }

            .rights-reserved {
                top: 407px;
            }
        }

        .contact-us {
            left: 23%;
        }
    }
    .bottom {
        border: none;
        height: 60px;
        p {
            font-size: 10px;
        }
    }
    .code {
        height: 145px;
        top: 160px;
        right: 50%;
        margin-right: -$padding-horizontal;
        img {
            margin: 10px 0;
        }
    }
    .en {
        padding-bottom: 40px;
    }
    // .zh {
    //     border-left: 1px solid #fff;
    //     padding-left: 20px;
    // }
    .top-en {
        height: 400px;
        .follow {
            top: 160px;
        }
        .code {
            top: 220px;
        }
        .logo-en div {
            &:first-child {
                border-bottom: 1px solid #fff;
                display: block;
            }
        }
    }
}

@media (max-width: 498px) {
    .follow {
        .icon-container {
            margin-top: 45px;
        }
    }

    .top {
        .contact-us {
            left: 23%;
            top: 175px;
        }

        .more-info {
            top: 175px;
        }

        .logo {
            .rights-reserved {
                top: 416px;
            }
        }
    }
}
</style>
