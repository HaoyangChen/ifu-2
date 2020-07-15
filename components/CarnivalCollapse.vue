<template>
    <div>
        <div class="title-bar" @click="toggleOpen">
            <div class="time">{{ time }}</div>
            <div class="title">{{ title }}</div>
        </div>
        <div v-if="open" class="content-section">
            <div class="guest">
                <div v-for="(guest, index) in guestList" :key="index">
                    <p>{{ guest }}</p>
                </div>
            </div>
            <div class="content">
                <div v-for="(content, index) in contentList" :key="index">
                    <p>
                        <b>{{ content.title }}</b>
                    </p>
                    <p v-for="(p, i) in content.p" :key="i">{{ p }}</p>
                </div>
            </div>
            <div class="guest-description">
                <div
                    v-for="(guest, index) in guestDescriptionList"
                    :key="index"
                >
                    <p>
                        <b>{{ guest.title }}</b>
                    </p>
                    <p>{{ guest.description }}</p>
                </div>
            </div>
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
    data() {
        return {
            open: false,
        };
    },
    methods: {
        toggleOpen() {
            this.open = !this.open;
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

    &:hover {
        font-weight: bold;
        cursor: pointer;
    }

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
    border-bottom: 2px solid $button-color;

    .guest {
        flex-basis: 20%;
    }

    .content {
        flex-basis: 50%;
        padding-right: 50px;

        div {
            margin: 30px 0;
        }
        p {
            margin: 0;
        }
    }

    .guest-description {
        flex-basis: 30%;

        div {
            margin: 30px 0;
        }
        p {
            margin: 0;
        }
    }
}
</style>
