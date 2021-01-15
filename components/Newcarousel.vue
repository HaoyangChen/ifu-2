<template>
    <div class="carousel">
        <div class="list">
            <a
                v-for="(item, i) in list"
                :id="setId(i)"
                :key="i"
                :class="'googleTag'"
                @mouseover="changeItem(item, i)"
            >
                <div class="list-item">
                    <!-- <div class="num">{{ '0' + (i + 1) }}</div> -->
                    <div class="content">
                        <div class="num">
                            <span :style="numHover(i, item.color)">{{
                                '0' + (i + 1)
                            }}</span>
                            <p :style="titleHover(i)">
                                {{ item.title }}
                            </p>
                        </div>

                        <p :style="subTitleColor(i, item.color)">
                            {{ item.subTitle }}
                        </p>
                    </div>
                </div>
            </a>
        </div>
        <div
            class="active-item"
            :style="{
                backgroundImage: `url(${activeItem.backgroundImage})`,
                backgroundSize: 'cover',
            }"
        >
            <div class="inner">
                <h1 :style="{ color: activeItem.color }">
                    {{ activeItem.bodyTitle }}
                </h1>
                <h2>
                    {{
                        activeItem.bodySubTitle
                            ? activeItem.bodySubTitle
                            : activeItem.title
                    }}
                </h2>
                <div
                    class="line"
                    :style="{ backgroundColor: activeItem.color }"
                ></div>
                <p v-html="activeItem.text" />

                <!-- Save this button logic  -->
                <!-- :style="listStyle(list.length, i, item.backgroundColor)" -->
                <!-- <div v-if="activeItem.link">
                    <Button :to="localePath('/' + activeItem.link)">{{
                        activeItem.buttonText
                    }}</Button>
                </div> -->
            </div>
            <div class="bottom" :style="{ backgroundColor: activeItem.color }">
                <p>{{ activeItem.bottomText }}</p>
                <a :href="localePath('/' + activeItem.link)" target="blank"
                    ><img :src="activeItem.arrowImage" alt="arrow-image"
                /></a>
            </div>
        </div>
    </div>
</template>

<script>
// import Button from '@/components/Button.vue';
export default {
    name: 'Newcarousel',
    // components: {
    //     Button,
    // },
    props: {
        list: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            activeItem: this.list[0],
            title: this.list[0].title,
            subTitle: this.list[0].subTitle,
            bodyTitle: this.list[0].bodyTitle,
            text: this.list[0].text,
            index: 0,
            activeIndex: null,
            hoverIndex: null,
        };
    },

    watch: {
        list(val) {
            this.activeItem = val[this.index];
            this.title = val[this.index];
            this.bodyTitle = val[this.index].bodyTitle;
            this.subTitle = val[this.index].subTitle;
            this.text = val[this.index].text;
        },
    },

    methods: {
        changeItem(newItem, index) {
            this.index = index;
            this.activeItem = newItem;
            this.bodyTitle = newItem.bodyTitle;
            this.subTitle = newItem.subTitle;
            this.text = newItem.text;
            this.hoverIndex = index;
            if (newItem.position) {
                document.querySelector(newItem.position).scrollIntoView(true);
            }
        },
        subTitleColor(index, color) {
            const style = {};
            if (this.hoverIndex !== null && this.hoverIndex === index) {
                style.color = color;
                style.fontSize = '22px';
            }
            return style;
        },
        titleHover(index) {
            const style = {};
            if (this.hoverIndex !== null && this.hoverIndex === index) {
                style.fontWeight = 'bold';
                style.fontSize = '40px';
                style.color = 'black';
            }
            return style;
        },
        numHover(index, color) {
            const style = {};
            if (this.hoverIndex !== null && this.hoverIndex === index) {
                style.color = color;
                style.fontWeight = 500;
                style.fontSize = '40px';
            }
            return style;
        },
        setId(index) {
            let idName;
            if (index === 0) {
                idName = 'TOTOROAD_01';
            } else if (index === 1) {
                idName = 'MEMBERSHIP_03';
            } else if (index === 2) {
                idName = 'PARTNERS_SERVICES_04';
            }
            return idName;
        },
    },
};
</script>

<style lang="scss" scoped>
.carousel {
    display: flex;
}

.list {
    color: rgba(124, 124, 124, 0.8);
    font-family: DIN Alternate;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 33px;
    width: 422px;
    margin: 92px 60px auto 0;
}
.list-item {
    display: flex;
    justify-content: flex-end;

    .num {
        display: flex;
        justify-content: flex-end;
        p {
            text-transform: uppercase;
        }
        span {
            margin-right: 0.3em;
        }
    }

    .content {
        text-align: right;
        margin-bottom: 31px;

        p {
            margin: 0;
        }
        > p {
            font-size: 14px;
        }
    }
}
.list-item:hover {
    cursor: pointer;
}
.active-item {
    width: 840px;
    height: 565px;
    position: relative;

    .inner {
        margin: 94px 273px 158px 117px;
    }
    h2 {
        color: #7c7c7c;
        font-size: 24px;
        line-height: 28px;
    }
    h1,
    h2 {
        font-family: DIN Alternate;
    }

    .line {
        width: 110px;
        height: 5px;
        border-radius: 2px;
    }

    p {
        line-height: 31px;
    }
    .bottom {
        display: flex;
        justify-content: center;
        place-items: center;
        height: 80px;
        width: 100%;
        position: absolute;
        bottom: 0;
        top: 485px;

        p {
            color: white;
            font-size: 18px;
            font-weight: bold;
            margin-right: 30px;
        }
    }
}

//     p {
//         margin: 10px 0 0 0;
//         font-size: $text-size;
//         line-height: 31px;
//         letter-spacing: 0.02em;
//     }

//     .inner {
//         background: rgba(0, 0, 0, 0.7);
//         height: 100%;
//         padding: 30px 15px 30px 45px;
//         justify-content: space-evenly;
//         display: flex;
//         flex-direction: column;
//     }
// }

// .list {
//     width: 328px;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
// }
// .list a {
//     text-decoration: none;
//     color: #fff;
//     flex: 1;
//     box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
//     position: relative;
// }

// // .list-item span {
// //     font-size: 28px;
// //     display: block;
// // }

// .list a:hover .num {
//     color: inherit;
// }

// .num {
//     font-size: 50px;
//     // color: rgba(255, 255, 255, 0.21);
//     color: inherit;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     padding-left: 10px;
// }
// .num span {
//     display: block;
// }
// .content {
//     display: inline-block;
//     float: right;
//     text-align: right;
//     right: 20px;
//     position: absolute;
//     bottom: 20px;
// }
// .subTitle {
//     margin: 0;
//     font-size: 18px;
// }
// .line {
//     display: inline-block;
//     width: 110px;
//     border: 2px solid $red;
//     // position: absolute;
//     // top: 25px;
//     // left: -20px;
// }
// .text-container {
//     display: inline-block;
//     position: relative;
// }

// @media (max-width: $mobile-max-width) {
//     .list {
//         display: none;
//     }
//     .line {
//         transform: rotate(90deg);
//         top: -60px;
//         left: 56px;
//     }
//     .active-item {
//         background-size: 100% 100%;
//         width: 100%;
//         padding: 50px 30px 50px 30px;
//         p {
//             font-size: 14px;
//             line-height: 27px;
//         }
//     }
// }
// @media (max-width: 414px) {
//     .carousel {
//         height: inherit;
//     }
//     .active-item {
//         background-size: 100% 100%;
//         width: 100%;
//         padding: 50px 30px 50px 30px;
//         background-image: url('../assets/home/mobilebg.png') !important;
//         background-repeat: no-repeat;
//     }
// }
</style>
