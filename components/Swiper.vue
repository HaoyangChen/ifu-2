<template>
    <div class="wrapper">
        <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
                <div
                    v-for="(item, index) in profileList"
                    :key="index"
                    class="swiper-slide"
                >
                    <div class="img">
                        <img :src="item.image" />
                        <p>{{ item.title }}</p>
                        <p>{{ item.subTitle }}</p>
                    </div>
                </div>
            </div>
            <div slot="button-prev" class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
            <div slot="button-next" class="swiper-button-next"></div>
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
                slidesPerView: 1,
                spaceBetween: 0,
                breakpoints: {
                    1300: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 2,
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

.swiper-button-prev,
.swiper-button-next {
    &:hover {
        color: rgba(84, 190, 245, 0.3);
    }
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

        &::after {
            content: none;
        }
    }
    .swiper-button-prev {
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid #54bef5;
        top: 38%;

        &:hover {
            border-right: 10px solid rgba(84, 190, 245, 0.3);
        }
    }
    .swiper-button-next {
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid #54bef5;
        right: 0;
        top: 38%;

        &:hover {
            border-left: 10px solid rgba(84, 190, 245, 0.3);
        }
    }
}
</style>
