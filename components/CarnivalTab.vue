<template>
    <div>
        <div class="title">
            <div @click="changeTab(1)">美东场（7.18）</div>
            <div @click="changeTab(2)">加拿大&英国场（7.19）</div>
            <div @click="changeTab(3)">美西场（7.19）</div>
        </div>
        <div class="content">
            <div v-if="activeTab === 1" class="tab-1">
                <carnival-collapse
                    v-for="(item, index) in carnivalList"
                    :key="index"
                    :time="item.time"
                    :title="item.title"
                    :content-list="item.contentList"
                />
            </div>
            <div v-else-if="activeTab === 2" class="tab-2">2</div>
            <div v-else class="tab-3">3</div>
        </div>
    </div>
</template>

<script>
import CarnivalCollapse from '@/components/CarnivalCollapse.vue';

export default {
    components: {
        CarnivalCollapse,
    },
    data() {
        return {
            activeTab: 1,
        };
    },
    computed: {
        carnivalList() {
            return [
                {
                    time: '09:50 AM',
                    title: '活动入场',
                    contentList: [
                        '参与活动的大家陆续进入Zoom会场，等待的同时先认识一下参与分享的学长学姐吧！',
                    ],
                },
            ];
        },
    },
    methods: {
        changeTab(index) {
            this.activeTab = index;
        },
    },
};
</script>

<style lang="scss" scoped>
.title {
    display: flex;

    > div {
        flex-basis: 33%;
        height: 100px;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        line-height: 100px;
    }
}
</style>
