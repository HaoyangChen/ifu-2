<template>
    <div
        class="application"
        :style="{
            border: '1px solid ' + color,
            boxShadow: '0 4px 4px ' + color,
        }"
    >
        <div
            class="title"
            :style="{
                background: color,
            }"
        >
            {{ title }}
        </div>
        <div class="content">
            <slot />
        </div>
        <div class="button-list">
            <div
                class="button-1"
                :style="{
                    borderTop: '1px solid ' + color,
                }"
            >
                1
            </div>
            <div
                class="button-2"
                :style="{
                    borderTop: '1px solid ' + color,
                    borderLeft: '1px solid ' + color,
                }"
            >
                2
            </div>
            <div
                class="apply-button"
                :style="{
                    background: color,
                }"
            >
                提交申请
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.application {
    width: 568px;
    height: 660px;
}

.title {
    color: white;
    width: 100%;
    height: 87px;
    line-height: 87px;
    padding: 0 47px;
    font-size: 23px;
}

.content {
    overflow: auto;
    width: 100%;
    height: 462px;
    padding: 50px 47px;
}

.button-list {
    width: 100%;
    height: 109px;
    display: flex;
    line-height: 109px;
    text-align: center;

    .button-1,
    .button-2 {
        flex-basis: 33.3%;
    }

    .apply-button {
        flex-basis: 33.4%;
        color: white;
    }
}
</style>
