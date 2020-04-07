<template>
    <button @click="onClick">
        <slot />
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        onClick: {
            type: Function,
            default: () => {
                // Empty default function
            },
        },
    },
};
</script>

<style scoped>
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
        margin-bottom: 35px;
    }
}
</style>
