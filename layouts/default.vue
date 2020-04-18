<template>
    <div id="app">
        <Header />
        <nuxt />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
    components: {
        Header,
        Footer,
    },
};
</script>

<style lang="scss">
html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    color: #202020;
    font-size: 16px;
    word-spacing: 0.02rem;
}

body {
    max-width: 1440px;
    margin: auto;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

#app {
    overflow: hidden;
}

section {
    margin: 0 auto;
    padding: 80px 130px;

    h1 {
        font-size: 40px;
        font-weight: normal;
    }

    h2 {
        font-size: 23px;
        font-weight: normal;
    }
}

/* Responsive Design */
.desktop {
    display: block;
}

.mobile {
    display: none;
}

@media (max-width: 1024px) {
    html {
        font-size: 14px;
    }

    .desktop {
        display: none !important;
    }

    .mobile {
        display: block;
    }

    section {
        padding: 15px 30px;

        > h2 {
            font-size: 23px;
        }
    }
}
</style>
