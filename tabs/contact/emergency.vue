<template>
    <div class="emergency-contact">
        <section>
            <div class="image-container">
                <img :src="emergencyImage" />
            </div>
            <h2>{{ $t('contact.emergency.contact') }}</h2>
            <p v-html="$t('contact.emergency.p1')" />
            <p v-html="$t('contact.emergency.p2')" />
            <a href="https://a2.rabbitpre.com/m2/aUe1ZjLN6f" target="_blank"
                ><Button>{{ $t('contact.emergency.buttonText') }}</Button></a
            >
        </section>
    </div>
</template>

<script>
import Button from '../../components/Button.vue';
import emergencyImage from '../../assets/contact/emergency.png';

export default {
    components: {
        Button,
    },
    data() {
        return {
            emergencyImage,
        };
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

@media (max-width: 1024px) {
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

<style lang="scss">
/* 因为用v-html载入，需要非scoped的style */
.contact {
    .emergency-contact {
        p {
            span {
                color: #11a4da;
            }
        }
    }
}
</style>
