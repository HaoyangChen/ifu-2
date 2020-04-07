<template>
    <div class="tab">
        <div class="desktop tab-list">
            <div
                v-for="(tab, index) in list"
                :key="index"
                class="tab-title"
                :style="getTabTitleStyle(index)"
                @click="changeTab(index)"
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
import Academic from '@/tabs/totoro/Academic.vue';
import Cohesion from '@/tabs/totoro/Cohesion.vue';

export default {
    name: 'Tab',
    components: {
        DmaCollapse,
        Academic,
        Cohesion,
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
        };
    },
    methods: {
        changeTab(newIndex) {
            this.activeIndex = newIndex;
        },
        getTabTitleStyle(index) {
            if (index === this.activeIndex) {
                return {
                    color: this.list[index].color,
                    textDecoration: 'underline',
                    textUnderlinePosition: 'under',
                    borderBottom: `20px solid ${this.list[index].color}`,
                };
            }
            return {
                borderBottom: `20px solid ${this.list[index].color}`,
            };
        },
        getTabTitleMobileStyle(index) {
            return {
                color: 'white',
                padding: '18px',
                background: this.list[index].color,
                boxSizing: 'border-box',
            };
        },
    },
};
</script>

<style scoped>
.tab-list {
    width: 100%;
    height: 138px;
    display: flex;
    justify-content: space-evenly;
}

.tab-title {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    /* line-height: 138px; */
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
</style>

<style scoped>
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
