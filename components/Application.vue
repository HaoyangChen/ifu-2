<template>
    <div
        class="application"
        :style="{
            boxShadow: '0 4px 4px ' + color,
        }"
    >
        <div
            class="title"
            :style="{
                background: color,
            }"
        >
            {{ title }}
            <div
                class="tag"
                :style="{
                    border: '1px solid ' + color,
                    color: color,
                }"
            >
                急聘
                <div
                    class="tag-tail"
                    :style="{
                        borderLeft: '1px solid ' + color,
                    }"
                />
            </div>
        </div>
        <div class="content">
            <slot />
        </div>
        <div class="button-list">
            <div
                class="button-1"
                :style="{
                    borderTop: '1px solid ' + color,
                }"
            >
                <div
                    class="ifuicon"
                    :style="{
                        color: color,
                    }"
                >
                    &#xe600;
                </div>
                <p>
                    招募 <b>{{ button1Text }}</b>
                </p>
            </div>
            <div
                class="button-2"
                :style="{
                    borderTop: '1px solid ' + color,
                    borderLeft: '1px solid ' + color,
                }"
            >
                <div
                    class="ifuicon"
                    :style="{
                        color: color,
                    }"
                >
                    &#xe601;
                </div>
                <p>
                    志愿周期 <b>{{ button2Text }}</b>
                </p>
            </div>
            <a
                class="apply-button"
                :style="applyButtonStyle"
                :href="to"
                target="_blank"
                ><b>{{ button3Text }}</b></a
            >
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        button1Text: {
            type: String,
            required: true,
        },
        button2Text: {
            type: String,
            required: true,
        },
        button3Text: {
            type: String,
            required: true,
        },
        hoverColor: {
            type: String,
            required: true,
        },
        to: {
            type: String,
            required: true,
        },
    },
    computed: {
        applyButtonStyle() {
            return {
                '--color': this.color,
                '--hover-color': this.hoverColor,
            };
        },
    },
};
</script>

<style lang="scss" scoped>
.application {
    max-width: 568px;
    height: 660px;
    background: white;
}

.title {
    color: white;
    width: 100%;
    height: 87px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 137px 0 47px;
    font-size: 23px;
    position: relative;
    font-weight: 600;

    .tag {
        position: absolute;
        right: -11px;
        top: 22px;
        background: white;
        width: 101px;
        height: 47px;
        line-height: 47px;
        text-align: center;
        font-size: 16px;

        .tag-tail {
            content: '';
            position: absolute;
            right: -10px;
            bottom: -18px;
            width: 20px;
            height: 12px;
            transform: rotate(60deg);
        }
    }
}

.content {
    overflow: auto;
    width: 100%;
    height: 464px;
    padding: 50px 47px;
}

.button-list {
    width: 100.1%; // 100% 可能会导致 1px 的误差
    height: 109px;
    display: flex;
    text-align: center;

    .button-1,
    .button-2,
    .apply-button {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .button-1,
    .button-2 {
        flex-basis: 33.3%;

        p {
            margin: 0;
        }
    }

    .ifuicon {
        font-size: 35px;
    }

    .apply-button {
        flex-basis: 33.4%;
        background: var(--color);
        text-decoration: none;
        color: white;
        font-size: 23px;

        &:hover {
            background: var(--hover-color);
            cursor: pointer;
        }
    }
}

@media (max-width: $mobile-max-width) {
    .application {
        height: 560px;
    }

    .title {
        padding: 0 110px 0 20px;
        font-size: 16px;
    }

    .content {
        height: 404px;
        padding: 30px 20px;
    }

    .button-list {
        height: 69px;

        .ifuicon {
            font-size: 20px;
        }

        .apply-button {
            font-size: 16px;
        }
    }
}
</style>
