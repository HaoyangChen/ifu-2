<template>
    <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOption">
            <swiper-slide v-for="(item, index) in profileList" :key="index">
                <div class="img">
                    <img :src="item.image" />
                    <p>{{ item.title }}</p>
                    <p>{{ item.subTitle }}</p>
                </div>
            </swiper-slide>
            <div slot="button-prev" class="swiper-button-prev"></div>
            <div slot="pagination" class="swiper-pagination"></div>
            <div slot="button-next" class="swiper-button-next"></div>
        </swiper>
    </div>
</template>
<script>
import 'swiper/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
    components: {
        swiper,
        swiperSlide,
    },
    props: {
        profileList: {
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
                slidesPerView: 3,
                spaceBetween: 20,
                breakpoints: {
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                },
            },
        };
    },
};
</script>
<style lang="scss" scoped>
.img {
    text-align: center;
    img {
        width: 300px;
    }
}
.swiper-pagination {
    padding-top: 10px;
    position: static;
}
.swiper-button-prev {
    left: 0;
}
.swiper-button-next {
    right: 0;
}
p {
    margin: 8px 0;

    &:first-of-type {
        font-weight: 600;
    }

    &:last-of-type {
        color: #6c7b8a;
    }
}
</style>
<style lang="scss" scoped>
@media (max-width: 1024px) {
    .swiper-button-prev {
        top: 38%;
    }
    .swiper-button-next {
        right: 0;
        top: 38%;
    }
}
@media (max-width: 480px) {
    .img {
        padding: 0 20px;
        img {
            width: 180px;
        }
    }
    .swiper-button-prev,
    .swiper-button-next {
        background-image: none;
        width: 0;
        height: 0;
        margin-top: -20px;
    }
    .swiper-button-prev {
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid #54bef5;
        top: 38%;
    }
    .swiper-button-next {
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid #54bef5;
        right: 0;
        top: 38%;
    }
}
</style>
