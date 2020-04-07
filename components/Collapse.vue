<template>
    <div class="collapse" @click="toggle">
        <div class="header">
            <div class="title">{{ title }}</div>
            <svg
                :class="show ? 'arrow-up' : 'arrow-down'"
                width="28"
                height="18"
                viewBox="0 0 28 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M2 16L14.6154 4L26 16"
                    stroke="#34BBC9"
                    stroke-width="5"
                />
            </svg>
        </div>
        <div v-if="show" class="content">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Collapse',
    props: {
        title: String,
    },
    data() {
        return {
            show: false,
        };
    },
    methods: {
        toggle() {
            this.show = !this.show;
        },
    },
};
</script>

<style scoped>
.collapse {
    box-sizing: border-box;
    width: 100%;
    min-height: 80px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px 32px;
}

.header {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
}

.content {
    width: 100%;
    min-height: 40px;
}

.content > img {
    width: 100%;
}

.arrow-down {
    float: right;
    transform: rotateZ(180deg);
}

.arrow-down path {
    stroke: black;
}
</style>

<style scoped>
@media (max-width: 1024px) {
    .header {
        height: auto;
    }
}
</style>
