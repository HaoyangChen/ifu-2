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
    width: 185px;
    height: 50px;
    background-color: #22a5d8;
    box-shadow: 0px 10px 15px rgba(78, 189, 247, 0.25);
    border: none;
    border-radius: 30px;
    color: white;
    font-size: 16px;
}

button:hover {
    cursor: pointer;
    background-color: white;
    color: #22a5d8;
    border: 1px solid #22a5d8;
}

@media (max-width: 1024px) {
    button {
        font-size: 14px;
        width: 140px;
        height: 45px;
        margin: 35px 0;
    }
}
</style>
