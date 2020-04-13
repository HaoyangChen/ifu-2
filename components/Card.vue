<template>
    <div class="Card">
        <div class="image-div">
            <img :src="image" />
        </div>
        <p class="description">{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        image: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.Card {
    width: 354px;
    height: 354px;
    text-align: center;
    box-shadow: 0px 5px 15px rgba(226, 234, 247, 0.5);

    .image-div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50%;
        padding-top: 10%;

        > img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            max-width: 90%;
            height: auto;
        }
    }

    .description {
        position: relative;
        width: 90%;
        text-align: center;
        color: #202020;
        margin-top: 5%;
        font-size: 16px;
        line-height: 31px;
        height: 50%;
    }
}
</style>
