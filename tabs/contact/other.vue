<template>
    <div class="contact-other">
        <section>
            <div class="desktop">
                <img src="@/assets/contact/shapes.png" />
            </div>
            <div>
                <p>
                    <b>{{ $t('contact.other.business.title') }}</b>
                </p>
                <p class="divide">
                    {{ $t('contact.other.business.description') }}
                    <a href="mailto:internationalfamilyunion@gmail.com"
                        >internationalfamilyunion@gmail.com</a
                    >
                </p>
                <!-- <p class="mobile">
                    {{ $t('contact.other.business.mobileDescription') }}
                </p> -->
                <!-- <p class="divide mobile">
                    {{ $t('contact.other.business.mobileEmail') }}
                </p> -->
                <p>
                    <b>{{ $t('contact.other.other.title') }}</b>
                </p>
                <p class="desktop">{{ $t('contact.other.other.p1') }}</p>
                <!-- <p class="mobile">{{ $t('contact.other.other.p1Mobile') }}</p> -->
                <br />
                <p>
                    {{ $t('contact.other.other.p2a') }}
                </p>
                <p>
                    {{ $t('contact.other.other.p2') }}
                    <a
                        href="https://mp.weixin.qq.com/s/eYz1LNXvSUoB8vOx4tVe4A"
                        target="_blank"
                        >ifu-china</a
                    >
                </p>
                <p>
                    {{ $t('contact.other.other.p3') }}
                    <a
                        href="https://www.zhihu.com/people/ifuguo-ji-jia-chang-hui"
                        target="_blank"
                        >@IFU守护留学家庭</a
                    >
                </p>
                <p>
                    {{ $t('contact.other.other.p4') }}
                    <a
                        href="https://space.bilibili.com/399581752?from=search&seid=11939231855676865019"
                        target="_blank"
                        >@IFU留学日记</a
                    >
                </p>
                <p>
                    {{ $t('contact.other.other.p5') }}
                    <a
                        href="https://www.instagram.com/ifu_i_family_u/"
                        target="_blank"
                        >@ifu_i_family_u</a
                    >
                </p>
                <p>
                    {{ $t('contact.other.other.p6') }}
                    <a
                        href="https://weibo.com/u/6422822665?topnav=1&wvr=6&topsug=1"
                        target="_blank"
                        >@IFU国际家长汇</a
                    >
                </p>
            </div>
        </section>
        <div class="image-container">
            <img src="@/assets/contact/other.png" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.contact-other {
    position: relative;

    section {
        height: 600px;
        > div {
            width: 50%;
            float: left;
        }
    }

    p.divide {
        margin-bottom: 50px;
    }

    .image-container {
        width: 100%;
        position: relative;
        bottom: -20px;

        img {
            width: 100%;
        }
    }

    a {
        color: $button-color;

        &:hover {
            color: $dark-pink;
        }
    }
}

@media (max-width: $mobile-max-width) {
    .contact-other {
        position: relative;

        section {
            margin: 50px 0;

            > div {
                width: 100%;
            }
        }

        p {
            line-height: 31px;
        }

        p.divide {
            margin-bottom: 50px;
        }
    }
}
</style>
