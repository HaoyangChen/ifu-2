<template>
    <div>
        <div class="title">
            <div :style="titleStyle(1)" @click="changeTab(1)">
                美东场（7.18）
            </div>
            <div :style="titleStyle(2)" @click="changeTab(2)">
                加拿大&英国场（7.19）
            </div>
            <div :style="titleStyle(3)" @click="changeTab(3)">
                美西场（7.19）
            </div>
        </div>
        <div class="content">
            <div v-if="activeTab === 1" class="tab-1">
                <carnival-collapse
                    v-for="(item, index) in carnival1Json"
                    :key="index"
                    :time="item.time"
                    :title="item.title"
                    :guest-list="item.guestList"
                    :content-list="item.contentList"
                    :guest-description-list="item.guestDescriptionList"
                />
            </div>
            <div v-else-if="activeTab === 2" class="tab-2">2</div>
            <div v-else class="tab-3">3</div>
        </div>
    </div>
</template>

<script>
import CarnivalCollapse from '@/components/CarnivalCollapse.vue';
import carnival1Json from '@/data/carnival-1.json';

export default {
    components: {
        CarnivalCollapse,
    },
    data() {
        return {
            activeTab: 1,
            carnival1Json,
        };
    },
    methods: {
        changeTab(index) {
            this.activeTab = index;
        },
        titleStyle(index) {
            if (this.activeTab === index) {
                return {
                    borderBottom: '3px solid #22a5d8',
                };
            }
            return {};
        },
    },
};
</script>

<style lang="scss" scoped>
.title {
    display: flex;
    border-bottom: 2px solid $button-color;

    > div {
        flex-basis: 33.3%;
        height: 100px;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        line-height: 100px;

        &:nth-of-type(2) {
            flex-basis: 33.4%;
        }

        &:hover {
            color: $button-color;
            cursor: pointer;
        }
    }
}
</style>
