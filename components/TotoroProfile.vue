<template>
    <div class="profile">
        <img :src="image" />
        <div class="text">
            <span>{{ title }}</span>
            <p>
                <strong>{{ staff.subTitle1 }}</strong>
            </p>
            <p>
                <strong>{{ staff.subTitle2 }}</strong
                >{{ staff.subTitle3 }}
            </p>
            <p>
                <strong>{{ staff.subTitle4 }}</strong> {{ staff.subTitle5 }}
            </p>
        </div>
        <div v-for="(contentItem, index) in contentList" :key="index">
            <span>{{ contentItem.title }}</span>
            <p>{{ contentItem.content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TotoroProfile',
    props: {
        image: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        contentList: {
            type: Array,
            default: () => [],
        },
        staff: {
            type: Object,
            default: null,
        },
    },
};
</script>

<style scoped>
.profile {
    text-align: left;
    padding-bottom: 20px;
    white-space: pre-line;
}

img {
    width: 346px;
}

span,
p {
    display: block;
}
p {
    font-size: 14px;
    line-height: 22px;
    margin: 8px 0;
    letter-spacing: 0.02em;
}
strong {
    font-weight: 600;
}
span {
    font-size: 23px;
    font-weight: 600;
}
.text {
    padding: 15px 0 15px 0;
}
</style>
<style lang="scss" scoped>
@media (max-width: 1024px) {
    .profile {
        flex-basis: 100%;
    }
    p {
        font-size: 14px;
    }
}

@media (max-width: 400px) {
    img {
        width: 100%;
    }
}
</style>
