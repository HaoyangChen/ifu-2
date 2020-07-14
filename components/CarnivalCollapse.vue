<template>
    <div>
        <div class="title-bar">
            <div class="time">{{ time }}</div>
            <div class="title">{{ title }}</div>
        </div>
        <div class="content-section">
            <div class="guest"></div>
            <div class="content">
                <p v-for="(content, index) in contentList" :key="index">
                    {{ content }}
                </p>
            </div>
            <div class="guest-description"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        time: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        guestList: {
            type: Array,
            required: true,
        },
        contentList: {
            type: Array,
            required: true,
        },
        guestDescriptionList: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.title-bar {
    height: 64px;
    display: flex;
    font-size: 16px;
    border-bottom: 2px solid $button-color;
    align-items: center;

    .time {
        flex-basis: 20%;
        text-align: center;
    }

    .title {
        flex-basis: 80%;
    }
}

.content-section {
    display: flex;
    color: #466eb6;
    font-weight: 600;
    border-bottom: 2px solid $button-color;

    .guest {
        flex-basis: 20%;
    }

    .content {
        flex-basis: 50%;
    }

    .guest-description {
        flex-basis: 30%;
    }
}
</style>
