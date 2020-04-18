<template>
    <div class="event">
        <a :href="link" target="_blank">
            <img :src="image" alt="" />
            <img id="arrow" src="@/assets/home/Arrow.png" alt="arrow" />
            <div class="event-text">{{ text }}</div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'Event',
    props: {
        image: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.event {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
}

.event:hover {
    background: #000;
    img {
        opacity: 0.5;
    }

    #arrow {
        opacity: 1;
        position: absolute;
        top: 25%; // 稍微上移显得更居中一些
        left: 40%;
        height: auto;
        min-width: auto;
        display: flex;
    }
}

.event-text {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    box-sizing: border-box;
    position: absolute;
    bottom: 0px;
    background-color: rgba(78, 189, 247, 0.9);
    color: white;
}

img {
    height: 100%;
    min-width: 100%;
}

#arrow {
    display: none;
}
</style>
