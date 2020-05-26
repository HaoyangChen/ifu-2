<template>
    <div class="contact-other">
        <section>
            <div class="desktop">
                <img src="@/assets/contact/shapes.png" />
            </div>
            <div>
                <p>
                    <b>{{ $t('contact.other.business.title') }}</b>
                </p>
                <p class="divide">
                    {{ $t('contact.other.business.description') }}
                    <a href="mailto:internationalfamilyunion@gmail.com"
                        >internationalfamilyunion@gmail.com</a
                    >
                </p>
                <p>
                    <b>{{ $t('contact.other.other.title') }}</b>
                </p>
                <p>{{ $t('contact.other.other.p1') }}</p>
                <p>{{ $t('contact.other.other.p2') }}</p>
                <p>{{ $t('contact.other.other.p3') }}</p>
                <p>{{ $t('contact.other.other.p4') }}</p>
            </div>
        </section>
        <div class="image-container">
            <img src="@/assets/contact/other.png" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.contact-other {
    position: relative;

    section {
        > div {
            width: 50%;
            float: left;
        }
    }

    p.divide {
        margin-bottom: 50px;
    }

    .image-container {
        width: 100%;
        position: relative;
        bottom: -20px;

        img {
            width: 100%;
        }
    }

    a {
        color: $button-color;

        &:hover {
            color: $dark-pink;
        }
    }
}

@media (max-width: $mobile-max-width) {
    .contact-other {
        position: relative;

        section {
            margin: 50px 0;

            > div {
                width: 100%;
            }
        }

        p {
            line-height: 31px;
        }

        p.divide {
            margin-bottom: 50px;
        }
    }
}
</style>
