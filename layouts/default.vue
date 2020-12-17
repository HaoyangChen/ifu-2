<template>
    <div id="app">
        <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
        />
        <div id="anchor"></div>
        <Header />
        <nuxt />
        <Footer />
        <a href="#anchor">
            <div
                class="navbar navtop"
                :class="{ 'navbar--hidden': !showNavbar }"
            >
                <span class="material-icons"> keyboard_arrow_up </span>
            </div>
        </a>
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
    data() {
        return {
            showNavbar: false,
            lastScrollPosition: 0,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        onScroll() {
            // Get the current scroll position
            const currentScrollPosition =
                window.pageYOffset || document.documentElement.scrollTop;
            // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
            if (currentScrollPosition < 0) {
                return;
            }
            if (
                Math.abs(currentScrollPosition - this.lastScrollPosition) < 60
            ) {
                return;
            }
            // Here we determine whether we need to show or hide the navbar
            this.showNavbar = currentScrollPosition < this.lastScrollPosition;
            // Set the current scroll position as the last scroll position
            this.lastScrollPosition = currentScrollPosition;
        },
    },
};
</script>

<style lang="scss">
.navtop {
    width: 56px;
    height: 56px;
    position: fixed;
    bottom: 35px;
    right: 110px;
    border-radius: 50%;
    background-color: rgba(109, 205, 255, 0.5);
    transform: scale(1);
    transition: transform 0.5s;
    display: flex;
    z-index: 2;
    justify-content: center;
}
.navtop .material-icons {
    font-size: 60px;
    color: white;
}
.navtop:hover {
    transform: scale(1.2);
    background-color: rgba(109, 205, 255, 1);
}
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
.navbar {
    opacity: 0;
    transition: opacity 2s;
}
.navbar.navbar--hidden {
    opacity: 1;
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
    .navtop {
        position: fixed;
        right: 3%;
        bottom: 13%;
    }
}
</style>
