<template>
    <header>
        <div class="header-inner">
            <nuxt-link class="desktop logo" :to="localePath('/')" exact>
                <img src="../assets/header/logo_mobile.png" />
            </nuxt-link>
            <nuxt-link class="mobile logo-mobile" :to="localePath('/')" exact>
                <img src="../assets/header/logo_mobile.png" />
            </nuxt-link>
            <p class="mobile title">
                INTERNATIONAL FAMILY UNION
                <br />
            </p>
            <div class="header-menu">
                <n-link class="n-link" :to="localePath('/')" exact>{{
                    $t('header.home')
                }}</n-link>
                <n-link class="n-link" :to="localePath('/about')">{{
                    $t('header.about')
                }}</n-link>
                <div class="service">
                    <a
                        :class="isServicePath ? 'nuxt-link-active' : ''"
                        @click="toggleServiceMenu"
                    >
                        {{ $t('header.service') }}
                        <div class="arrow desktop" />
                        <div
                            v-if="showServiceMenu"
                            class="close-arrow mobile"
                        />
                        <div v-else class="open-arrow mobile" />
                    </a>
                    <div class="service-menu desktop">
                        <div class="service-menu-separator" />
                        <div class="service-menu-inner">
                            <n-link
                                class="n-link"
                                :to="localePath('/totoro')"
                                >{{ $t('header.totoro') }}</n-link
                            >
                            <n-link
                                class="n-link"
                                :to="localePath('/peermentor')"
                                >{{ $t('header.peermentor') }}</n-link
                            >
                            <n-link
                                class="n-link"
                                :to="localePath('/membership')"
                                >{{ $t('header.membership') }}</n-link
                            >
                            <n-link class="n-link" :to="localePath('/more')">{{
                                $t('header.more')
                            }}</n-link>
                        </div>
                    </div>
                </div>
                <div v-if="showServiceMenu" class="service-menu-mobile mobile">
                    <n-link :to="localePath('/totoro')">{{
                        $t('header.totoro')
                    }}</n-link>
                    <n-link :to="localePath('/membership')">{{
                        $t('header.membership')
                    }}</n-link>
                    <n-link :to="localePath('/more')">{{
                        $t('header.more')
                    }}</n-link>
                </div>
                <n-link
                    :class="isContactPath ? 'nuxt-link-active' : 'n-link'"
                    :to="localePath('/contact')"
                    >{{ $t('header.contact') }}</n-link
                >
                <n-link class="n-link" :to="localePath('/support')">{{
                    $t('header.support')
                }}</n-link>
                <div class="desktop">
                    <nuxt-link :to="switchLocalePath('zh')" exact
                        >中文</nuxt-link
                    >
                    <span> / </span>
                    <nuxt-link :to="switchLocalePath('en')" exact>EN</nuxt-link>
                </div>
                <div class="mobile change-lang">
                    <nuxt-link :to="switchLocalePath('zh')" exact
                        >中文</nuxt-link
                    >
                    <nuxt-link :to="switchLocalePath('en')" exact>EN</nuxt-link>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            showServiceMenu: false,
        };
    },
    computed: {
        currentPath() {
            return this.$route.path;
        },
        isServicePath() {
            return (
                this.currentPath === '/totoro' ||
                this.currentPath === '/membership' ||
                this.currentPath === '/more' ||
                this.currentPath === '/carnival' ||
                this.currentPath === '/zh/totoro' ||
                this.currentPath === '/zh/membership' ||
                this.currentPath === '/zh/more' ||
                this.currentPath === '/zh/carnival'
            );
        },
        isContactPath() {
            return (
                this.currentPath === '/contact' ||
                this.currentPath === '/career' ||
                this.currentPath === '/zh/contact' ||
                this.currentPath === '/zh/career'
            );
        },
    },
    watch: {
        $route(to, from) {
            this.showServiceMenu = false;
        },
    },
    methods: {
        toggleServiceMenu() {
            this.showServiceMenu = !this.showServiceMenu;
        },
    },
};
</script>

<style lang="scss" scoped>
header {
    width: 100%;
    border-bottom: 1px solid #e8e9ed;

    .logo {
        position: relative;
        left: -12px; // 使 Logo 图对齐左 padding 线
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo > img {
        width: auto;
        height: auto;
    }
}

.header-inner {
    width: 100%;
    height: 111px;
    margin: auto;
    padding: 0px $padding-horizontal;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-menu {
    width: 50%;
    display: flex;
    justify-content: space-between;
}

.service {
    position: relative;
    cursor: default;
}

.service-menu {
    display: none;
    position: absolute;
}

.service-menu-separator {
    height: 40px;
    position: relative;
    left: -100px;
}

.service-menu-inner {
    width: 259px;
    height: 167px;
    left: -100px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    background-color: #ddf2fd;
    .nuxt-link-active {
        color: black;
    }
}

.arrow {
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 8px solid $text-color;
    transform: rotateZ(180deg);
}

.service:hover {
    .service-menu {
        display: block;
    }

    .arrow {
        transform: rotateZ(-90deg);
    }
}

a {
    height: 33px;
    text-decoration: none;
    color: $text-color;
    font-family: 'Helvetica Neue', sans-serif;
    line-height: 33px;
    text-transform: uppercase;
}

.n-link:hover {
    box-sizing: border-box;
    border-bottom: 3px solid $light-blue;
}

.nuxt-link-active {
    color: $dark-blue;
}

.desktop {
    font-family: 'Helvetica Neue', sans-serif;
    line-height: 33px;
}

span {
    cursor: pointer;
}

/* Mobile style */
@media (max-width: $mobile-max-width) {
    header {
        border-bottom: none;
    }

    .logo-mobile {
        height: 87px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .title {
        text-align: center;
    }

    .header-inner {
        flex-direction: column;
        padding: 0px;
        width: 100%;
        height: 100%;
    }

    .header-menu {
        width: 100%;
        height: 100%;
        text-align: center;
        display: block;
    }

    .n-link:hover {
        border-bottom: none;
    }

    .service-menu-mobile {
        background: #ddf2fd;
    }

    .service,
    a {
        display: block;
        width: 100%;
        text-align: center;
        line-height: 54px;
        height: 54px;
    }

    .service-menu {
        left: 50px;
    }

    .open-arrow,
    .close-arrow {
        display: inline-block;
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-right: 8px solid $text-color;
    }

    .open-arrow {
        transform: rotateZ(180deg);
    }

    .close-arrow {
        transform: rotateZ(-90deg);
    }

    .nuxt-link-active:not(.logo-mobile) {
        color: black;
        background: $light-blue;
        border-bottom: none;
    }

    .change-lang {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
}
</style>
