<template>
    <div class="profile">
        <div class="profile-image-container">
            <img :src="image" />
        </div>
        <span>{{ title }}</span>
        <p>{{ subTitle }}</p>
        <div v-for="(contentItem, index) in contentList" :key="index">
            <span>{{ contentItem.title }}</span>
            <p>{{ contentItem.content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    props: {
        image: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        subTitle: {
            type: String,
            required: true,
        },
        contentList: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style scoped>
.profile {
    text-align: center;
    padding-bottom: 20px;
    white-space: pre-line;
}

.profile-image-container {
    height: 280px;
}

img {
    width: 346px;
}

span,
p {
    display: block;
}

span {
    font-weight: bold;
}
</style>
<style lang="scss" scoped>
@media (max-width: 1024px) {
    .profile-image-container {
        height: 260px;
    }

    .profile {
        flex-basis: 100%;
    }

    p {
        margin: 0;
    }
}

@media (max-width: 400px) {
    img {
        width: 100%;
        // height: 100%;
    }
}
</style>
