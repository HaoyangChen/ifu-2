<template>
    <div class="carousel">
        <div
            class="active-item"
            :style="{
                backgroundImage: `url(${activeItem.image})`,
                backgroundSize: 'cover',
            }"
        >
            <div class="inner">
                <div>
                    <p style="font-size: 36px; margin: 0">{{ title }}</p>
                    <p style="font-size: 20px; font-weight: 700">{{ text }}</p>
                </div>
                <div class="text-container">
                    <div class="line"></div>
                    <p>{{ activeItem.text }}</p>
                </div>
                <div>
                    <Button :to="localePath('/' + activeItem.link)">{{
                        activeItem.buttonText
                    }}</Button>
                </div>
            </div>
        </div>
        <div class="list">
            <a
                v-for="(item, i) in list"
                :key="i"
                :style="listStyle(list.length, i, item.backgroundColor)"
                @click="changeItem(item, i)"
            >
                <div class="list-item">
                    <div class="num">{{ '0' + (i + 1) }}</div>
                    <div class="content">
                        <div>
                            <img :src="item.icon" alt="" />
                            <span style="white-space: pre-line">{{
                                useSubtitle ? item.subTitle : item.title
                            }}</span>
                            <p v-if="!useSubtitle" class="subTitle">
                                {{ item.subTitle }}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';
export default {
    name: 'Carousel',
    components: {
        Button,
    },
    props: {
        list: {
            type: Array,
            required: true,
        },
        useSubtitle: Boolean,
    },
    data() {
        return {
            activeItem: this.list[0],
            title: this.list[0].title,
            text: this.list[0].subTitle,
            index: 0,
            activeIndex: null,
            hoverIndex: null,
        };
    },
    watch: {
        list(val) {
            this.activeItem = val[this.index];
            this.title = val[this.index].title;
            this.text = val[this.index].subTitle;
        },
    },
    methods: {
        changeItem(newItem, index) {
            this.index = index;
            this.activeItem = newItem;
            this.title = newItem.title;
            this.text = newItem.subTitle;
            this.hoverIndex = index;
            if (newItem.position) {
                document.querySelector(newItem.position).scrollIntoView(true);
            }
        },
        // onHover(index) {
        //     this.hoverIndex = index;
        // },
        // onLeave() {
        //     this.hoverIndex = null;
        // },
        listStyle(length, index, backgroundColor) {
            const style = {
                zIndex: length - index,
            };
            if (index === 0) {
                style.borderRadius = '0 10px 0 0';
            } else if (index === length - 1) {
                style.borderRadius = '0 0 10px 0';
            }
            if (this.hoverIndex !== null && this.hoverIndex === index) {
                style.backgroundColor = 'white';
                style.border = `1px solid ${backgroundColor}`;
                style.color = backgroundColor;
                return style;
            }
            style.backgroundColor = backgroundColor;
            return style;
        },
    },
};
</script>

<style lang="scss" scoped>
.carousel {
    height: 520px;
    display: flex;
    color: white;
}
.active-item {
    width: 825px;
    // height: 100%;
    // padding: 30px 15px 30px 45px;
    box-sizing: border-box;
    background-repeat: no-repeat;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    border-radius: 10px 0 0 10px;

    p {
        margin: 10px 0 0 0;
        font-size: $text-size;
        line-height: 31px;
        letter-spacing: 0.02em;
    }

    .inner {
        background: rgba(0, 0, 0, 0.5);
        height: 100%;
        padding: 30px 15px 30px 45px;
        justify-content: space-evenly;
        display: flex;
        flex-direction: column;
    }
}

.list {
    width: 328px;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.list a {
    text-decoration: none;
    color: #fff;
    flex: 1;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    position: relative;
}
.list-item span {
    font-size: 28px;
    display: block;
}
.list a:hover .num {
    color: inherit;
}
.num {
    font-size: 50px;
    color: rgba(255, 255, 255, 0.21);
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
}
.num span {
    display: block;
}
.content {
    display: inline-block;
    float: right;
    text-align: right;
    right: 20px;
    position: absolute;
    bottom: 20px;
}
.subTitle {
    margin: 0;
    font-size: 18px;
}
.line {
    display: inline-block;
    height: 110px;
    border: 2px solid $red;
    position: absolute;
    top: 25px;
    left: -20px;
}
.text-container {
    display: inline-block;
    position: relative;
}

@media (max-width: $mobile-max-width) {
    .list {
        display: none;
    }
    .line {
        transform: rotate(90deg);
        top: -60px;
        left: 56px;
    }
    .active-item {
        background-size: 100% 100%;
        width: 100%;
        padding: 50px 30px 50px 30px;
        p {
            font-size: 14px;
            line-height: 27px;
        }
    }
}
@media (max-width: 414px) {
    .carousel {
        height: inherit;
    }
    .active-item {
        background-size: 100% 100%;
        width: 100%;
        padding: 50px 30px 50px 30px;
        background-image: url('../assets/home/mobilebg.png') !important;
        background-repeat: no-repeat;
    }
}
</style>
