<template>
    <div class="calendar-swiper-container">
        <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
                <!-- <p class="month">September</p> -->
                <div
                    v-for="(item, index) in list"
                    :key="index"
                    class="swiper-slide"
                >
                    <img :src="item.numImage" />
                    <p>{{ item.title }}</p>
                    <p>{{ item.description }}</p>

                    <Button
                        external
                        to="https://docs.google.com/forms/d/e/1FAIpQLSfQSwvr7oNnFr5_T2SEKr79CwxXJglFjs6zFslk8mEweCJsMw/viewform"
                        >Sign Up</Button
                    >
                </div>
            </div>
            <img
                src="@/assets/newhome/swiper-next.svg"
                alt=""
                class="swiper-button-next"
            />
        </div>
    </div>
</template>

<script>
import 'swiper/css/swiper.css';
import { directive } from 'vue-awesome-swiper';
import Button from '@/components/Button.vue';
// import Button from '@/components/Button.vue';

export default {
    components: {
        Button,
    },
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
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                paginationClickable: true,
                slidesPerView: 4,
                spaceBetween: 20,
                // breakpoints: {
                //     1024: {
                //         slidesPerView: 3,
                //         spaceBetween: 20,
                //     },
                // },
            },
        };
    },
};
</script>
<style lang="scss" scoped>
/* Use /deep/ selector to penetrate Swiper component */
// /deep/ .swiper-pagination-bullet {
//     background: $red;

//     &:not(.swiper-pagination-bullet-active) {
//         background: white;
//         opacity: 1;
//     }
// }

.swiper-wrapper {
    border: 4px solid white;
    border-radius: 5px;
    padding: 15px;
}
.month {
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #fc6e62;
    background-color: white;
    // background-color: #f1f9ff;
    position: absolute;
    top: -35px;
    z-index: 1;
}
.swiper-slide {
    height: 469px;
    // // width: 380px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    justify-content: center;
    border-radius: 0px 0px 18px 18px;

    p:nth-child(3) {
        line-height: 31px;
        margin-bottom: 100px;
    }
    p:nth-child(2) {
        font-weight: bold;
        margin-top: 35px;
    }
}
.swiper-button-next {
    height: 80px;
    width: auto;
}
</style>
