<template>
    <a v-if="external" :href="to" target="_blank">
        <button>
            <slot />
        </button>
    </a>
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
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
button {
    // width: 185px;
    height: 50px;
    background-color: $button-color;
    box-shadow: 0px 10px 15px rgba(78, 189, 247, 0.25);
    border: none;
    border-radius: 30px;
    color: white;
    font-size: $text-size;
    padding: 0 45px;
}

button:hover {
    cursor: pointer;
    background-color: white;
    color: $button-color;
    border: 1px solid $button-color;
    box-shadow: 0px 10px 15px white;
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
