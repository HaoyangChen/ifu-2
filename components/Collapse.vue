<template>
    <div class="collapse">
        <div
            class="header"
            :style="{ background: `${backgroundColor}` }"
            @click="toggle"
        >
            <div class="arrow" :class="show ? 'arrow-up' : 'arrow-down'"></div>
            <div
                :class="lang === 'zh' ? 'title-zh' : 'title-en'"
                class="title-en"
            >
                {{ title }}
            </div>
        </div>
        <div v-if="show" class="container">
            <slot class="test" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Collapse',
    props: {
        title: {
            type: String,
            required: true,
        },
        backgroundColor: {
            type: String,
            required: true,
        },
        defaultShow: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            show: this.defaultShow,
            lang: this.$i18n.locale,
        };
    },
    methods: {
        toggle() {
            this.show = !this.show;
        },
    },
};
</script>

<style lang="scss" scoped>
.collapse {
    width: 100%;
}
.header {
    width: 100%;
    min-height: 85px;
    float: right;
    font-size: 24px;
    display: none;
    color: #fff;
}
.arrow-down {
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid #fff;
}
.arrow {
    display: inline-block;
    margin-right: 20px;
}
.arrow-up {
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-top: 10px solid #fff;
}
.title-en {
    display: inline-block;
    margin-right: 30px;
}
.test {
    padding-top: 100px;
}

@media (max-width: $mobile-max-width) {
    .collapse {
        min-height: 85px;
    }
    .header {
        width: 100%;
        min-height: 85px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 24px;
        color: #fff;
        float: inherit;
    }
    .title-en {
        font-size: 18px;
        text-align: right;
        white-space: pre-line;
    }
}
</style>
