<template>
    <div class="emergency-contact">
        <section>
            <div class="image-container">
                <img src="@/assets/contact/emergency.png" />
            </div>
            <h2>{{ $t('contact.emergency.contact') }}</h2>
            <p v-html="$t('contact.emergency.p1')" />
            <p v-html="$t('contact.emergency.p2')" />
            <Button external to="https://a2.rabbitpre.com/m2/aUe1ZjLN6f">{{
                $t('contact.emergency.buttonText')
            }}</Button>
        </section>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
    components: {
        Button,
    },
};
</script>

<style lang="scss" scoped>
.emergency-contact {
    position: relative;
    p {
        width: 45%;
        line-height: 31px;
        margin-bottom: 50px;

        /deep/ span {
            color: #11a4da;
        }
    }
    .image-container {
        position: absolute;
        top: 80px;
        right: 0;
        max-width: 50%;
        height: 100%;

        img {
            width: 100%;
        }
    }
}

@media (max-width: $mobile-max-width) {
    .emergency-contact {
        p {
            width: 100%;
        }
        .image-container {
            position: relative;
            top: 0;
            max-width: 100%;
        }
    }
}
</style>
