<template>
    <div class="wrapper home-swiper">
        <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
                <div
                    v-for="(item, index) in list"
                    :key="index"
                    class="swiper-slide"
                >
                    <div class="img">
                        <p>{{ item.title }}</p>
                        <p>{{ item.subTitle }}</p>
                        <div>
                            <div class="line"></div>
                            <p>{{ item.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import 'swiper/css/swiper.css';
import { directive } from 'vue-awesome-swiper';
export default {
    directives: {
        swiper: directive,
    },
    props: {
        list: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                paginationClickable: true,
                slidesPerView: 1,
                spaceBetween: 10,
                breakpoints: {
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                },
            },
        };
    },
};
</script>
<style>
.container
    .home-swiper
    .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
    background: white;
    opacity: 0.8;
}
</style>
<style lang="scss" scoped>
.img {
    text-align: center;
}
.swiper-pagination {
    padding-top: 10px;
    position: static;
}
.swiper-button-prev,
.swiper-button-next {
    background-image: none;
    width: 0;
    height: 0;
    margin-top: -20px;
    top: 100%;
}
.swiper-button-prev {
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid #54bef5;
    margin: -20px auto;
    margin-left: 43%;
}
.swiper-button-next {
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid #54bef5;
    right: 44%;
}
.wrapper {
    background: url('../assets/home/service_totoro.png') no-repeat;
    border-radius: 10px;
    background-size: cover;
    padding-bottom: 30px;
    .img {
        color: #fff;
        text-align: left;
        margin: 30px;
        p {
            margin: 0;
        }
        p:first-child {
            font-size: 30px;
        }
        p:nth-child(2) {
            font-size: 18px;
            font-weight: 700;
        }
        div {
            margin: 30px 0 10px 0;
            .line {
                width: 110px;
                border: 2px solid #fe4c31;
            }
            p:last-child {
                font-size: 14px;
                line-height: 31px;
                letter-spacing: 0.02em;
                font-weight: 500;
            }
        }
    }
}
</style>
