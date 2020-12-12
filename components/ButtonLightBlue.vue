<template>
    <a v-if="external" :href="to" target="_blank">
        <button>
            <slot />
        </button>
    </a>
    <a v-else-if="scroll" :href="to">
        <button>
            <slot />
        </button>
    </a>
    <button v-else-if="click" @click="click">
        <slot />
    </button>
    <nuxt-link v-else :to="to">
        <button>
            <slot />
        </button>
    </nuxt-link>
</template>

<script>
export default {
    name: 'Button',
    props: {
        // If points to external link
        external: {
            type: Boolean,
            default: false,
        },
        to: {
            type: String,
            default: null,
        },
        click: {
            type: Function,
            default: null,
        },
        scroll: {
            type: String,
            default: null,
        },
    },
};
</script>

<style lang="scss" scoped>
button {
    // width: 185px;
    height: 50px;
    background-color: $button-light-blue-color;
    box-shadow: 0px 10px 15px rgba(78, 189, 247, 0.25);
    border: none;
    border-radius: 30px;
    color: white;
    font-size: $text-size;
    padding: 0 45px;
    margin-right: 50px;
}

button:hover {
    cursor: pointer;
    background-color: #d5f1fc;
    color: $button-color;
    border: 1px solid $button-light-blue-color;
    box-shadow: 0px 10px 15px $button-light-blue-color;
}

@media (max-width: $mobile-max-width) {
    button {
        font-size: 14px;
        // width: 140px;
        height: 45px;
        margin: 35px 0;
        padding: 0 30px;
    }
}
</style>
