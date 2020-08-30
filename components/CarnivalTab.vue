<template>
    <div>
        <div class="title">
            <div :style="titleStyle(1)" @click="changeTab(1)">
                {{ $t('carnival.section-schedule.tab-1.title') }}
            </div>
            <div :style="titleStyle(2)" @click="changeTab(2)">
                {{ $t('carnival.section-schedule.tab-2.title') }}
            </div>
            <div :style="titleStyle(3)" @click="changeTab(3)">
                {{ $t('carnival.section-schedule.tab-3.title') }}
            </div>
        </div>
        <div class="content">
            <div v-if="activeTab === 1" key="tab-1" class="tab-1">
                <carnival-collapse
                    v-for="(item, index) in carnival1Json[$i18n.locale]"
                    :key="index"
                    :time="item.time"
                    :title="item.title"
                    :guest-list="item.guestList"
                    :content-list="item.contentList"
                    :guest-description-list="item.guestDescriptionList"
                />
            </div>
            <div v-else-if="activeTab === 2" key="tab-2" class="tab-2">
                <carnival-collapse
                    v-for="(item, index) in carnival2Json[$i18n.locale]"
                    :key="index"
                    :time="item.time"
                    :title="item.title"
                    :guest-list="item.guestList"
                    :content-list="item.contentList"
                    :guest-description-list="item.guestDescriptionList"
                />
            </div>
            <div v-else key="tab-3" class="tab-3">
                <carnival-collapse
                    v-for="(item, index) in carnival3Json[$i18n.locale]"
                    :key="index"
                    :time="item.time"
                    :title="item.title"
                    :guest-list="item.guestList"
                    :content-list="item.contentList"
                    :guest-description-list="item.guestDescriptionList"
                />
            </div>
        </div>
    </div>
</template>

<script>
import CarnivalCollapse from '@/components/CarnivalCollapse.vue';
import carnival1JsonZh from '@/data/carnival-1.json';
import carnival1JsonEn from '@/data/carnival-1-en.json';
import carnival2JsonZh from '@/data/carnival-2.json';
import carnival2JsonEn from '@/data/carnival-2-en.json';
import carnival3JsonZh from '@/data/carnival-3.json';
import carnival3JsonEn from '@/data/carnival-3-en.json';

export default {
    components: {
        CarnivalCollapse,
    },
    data() {
        return {
            activeTab: 1,
            carnival1Json: {
                zh: carnival1JsonZh,
                en: carnival1JsonEn,
            },
            carnival2Json: {
                zh: carnival2JsonZh,
                en: carnival2JsonEn,
            },
            carnival3Json: {
                zh: carnival3JsonZh,
                en: carnival3JsonEn,
            },
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
                    color: '#22A5D8',
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
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        word-break: keep-all;

        &:nth-of-type(2) {
            flex-basis: 33.4%;
        }

        &:hover {
            color: $button-color;
            cursor: pointer;
            border-bottom: 2.3px solid $button-color;
        }
    }
}

@media (max-width: $mobile-max-width) {
    .title {
        display: flex;
        border-bottom: 2px solid $button-color;

        > div {
            font-size: 18px;
        }
    }
}
</style>
