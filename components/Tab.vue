<template>
    <div class="tab">
        <div class="desktop tab-list">
            <div
                v-for="(tab, index) in list"
                :key="index"
                class="tab-title"
                :style="getTabTitleStyle(index)"
                @click="changeTab(index)"
                @mouseenter="onHover(index)"
                @mouseleave="onLeave"
            >
                {{ tab.title }}
            </div>
        </div>
        <div class="desktop tab-content">
            <component :is="list[activeIndex].content" />
        </div>
        <div class="mobile tab-mobile">
            <DmaCollapse
                v-for="(item, index) in list"
                :key="index"
                :title="item.title"
                :background-color="item.color"
                :default-show="item.defaultShow || false"
            >
                <div class="tab-content-mobile">
                    <component :is="item.content" />
                </div>
            </DmaCollapse>
        </div>
    </div>
</template>

<script>
import DmaCollapse from '@/components/DmaCollapse.vue';

export default {
    name: 'Tab',
    components: {
        DmaCollapse,
    },
    props: {
        list: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            activeIndex: 0,
            hoverIndex: null,
        };
    },
    methods: {
        changeTab(newIndex) {
            this.activeIndex = newIndex;
        },
        getTabTitleStyle(index) {
            const style = {
                borderBottom: `20px solid ${this.list[index].color}`,
            };
            const color = this.list[index].color;
            if (index === 0) {
                style.borderTopRightRadius = '30px';
            } else if (index === this.list.length - 1) {
                style.borderTopLeftRadius = '30px';
            } else {
                style.borderTopLeftRadius = '30px';
                style.borderTopRightRadius = '30px';
            }
            if (this.hoverIndex !== null && this.hoverIndex === index) {
                style.color = color;
                style.background = `rgba(${this.hexToRgb(color)}, 0.2)`;
                return style;
            }
            if (index === this.activeIndex) {
                style.color = color;
                return style;
            }
            return style;
        },
        getTabTitleMobileStyle(index) {
            return {
                color: 'white',
                padding: '18px',
                background: this.list[index].color,
                boxSizing: 'border-box',
            };
        },
        onHover(index) {
            this.hoverIndex = index;
        },
        onLeave() {
            this.hoverIndex = null;
        },
        hexToRgb(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
                hex,
            );
            return result
                ? `${parseInt(result[1], 16)}, ${parseInt(
                      result[2],
                      16,
                  )}, ${parseInt(result[3], 16)}`
                : '0, 0, 0';
        },
    },
};
</script>

<style lang="scss" scoped>
.tab-list {
    width: 100%;
    height: 142px;
    display: flex;
    justify-content: space-evenly;
}

.tab-title {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    line-height: 40px;
    white-space: pre-line;
    text-align: center;
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
}
.tab-content {
    overflow: hidden;
}

/* Mobile */
.tab-title-mobile {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 91px;
    line-height: 91px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}

.tab-arrow-mobile-open,
.tab-arrow-mobile-close {
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 12px solid white;
    margin-right: 10px;
}

.tab-arrow-mobile-close {
    transform: rotateZ(-90deg);
}
</style>
