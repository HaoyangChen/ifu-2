<template>
    <div>
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

<style>
html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 0.02rem;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}
</style>

<style lang="scss" scoped>
/* Global Style Variables */

// Colors
$teal: #34bbc9;
$darkpink: #f96191;
$lightpnk: #ffc2d6;
$purple: #cc8abd;
$green: #c9d74a;
$orange: #fda63b;
$darkblue: #54bef5;
$lightblue: #a9defa;
$red: #fe4c31;
</style>

<style>
#app {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: 0.5px;
    color: #202020;
    font-size: 16px;
}

#app-inner {
    max-width: 1440px;
    margin: auto;
}

section {
    margin: 0 auto;
    /* padding: 120px 130px; */
    padding: 80px 130px;
}

section h2 {
    font-weight: normal;
}

/* Responsive Design */
.desktop {
    display: block;
}

.mobile {
    display: none;
}

@media (max-width: 1024px) {
    #app {
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
    }

    section > h2 {
        font-size: 23px;
    }
}
</style>
