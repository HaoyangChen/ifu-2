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
    color: $text-color;
    font-size: $text-size;
    word-spacing: 0.02rem;
}

body {
    max-width: $page-max-width;
    margin: auto;
}

*,
*:before,
*:after {
    box-sizing: inherit; // 默认所有 DOM 为 border-box
    // 避免被边框影响设置好的长宽
}

#app {
    overflow: inherit;
}

section {
    margin: 0 auto;
    padding: $padding-vertical $padding-horizontal;

    h1 {
        font-size: $h1-size;
        font-weight: normal;
    }

    h2 {
        font-size: $h2-size;
        font-weight: 600;
    }
}

/* Responsive Design */
.desktop {
    display: block;
}

.mobile {
    display: none;
}

@media (max-width: $mobile-max-width) {
    #app {
        overflow: hidden;
    }

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
            font-size: $h2-size;
        }
    }
}
</style>
