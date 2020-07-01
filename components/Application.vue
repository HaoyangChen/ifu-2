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
                height: titleHeight + 'px',
            }"
        >
            <p v-if="department.length < 10">{{ department + ' - ' + name }}</p>
            <p v-else>{{ department }}<br />{{ '- ' + name }}</p>
            <div
                v-show="urgent"
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
        <div
            class="content"
            :style="{
                height: contentHeight + 'px',
            }"
        >
            <p><b>申请人基本条件</b><br />{{ requirement }}</p>
            <p><b>职位具体介绍</b><br />{{ description }}</p>
            <p><b>结束任期回报</b><br />{{ reward }}</p>
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
                    招募 <b>{{ people }}</b>
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
                    志愿周期 <b>{{ time }}</b>
                </p>
            </div>
            <a
                class="apply-button"
                :style="applyButtonStyle"
                :href="to"
                target="_blank"
                ><b>提交申请</b></a
            >
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        people: {
            type: String,
            required: true,
        },
        requirement: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        reward: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        urgent: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            departmentColorMap: {
                行政部: '#C9D74A',
                运营部: '#FDA63B',
                技术部: '#54BEF5',
                多多罗: '#F96191',
                志愿者团队: '#CC8ABD',
                '2020学长学姐嘉年华': '#FDA63B',
            },
            hoverColorMap: {
                行政部: '#B7C348',
                运营部: '#EA9A38',
                技术部: '#4FAFE1',
                多多罗: '#E15682',
                志愿者团队: '#A37297',
                '2020学长学姐嘉年华': '#EA9A38',
            },
        };
    },
    computed: {
        applyButtonStyle() {
            return {
                '--color': this.color,
                '--hover-color': this.hoverColor,
            };
        },
        color() {
            return this.departmentColorMap[this.department];
        },
        hoverColor() {
            return this.hoverColorMap[this.department];
        },
        titleHeight() {
            return this.department.length < 10 ? 87 : 114;
        },
        contentHeight() {
            return 660 - 109 - this.titleHeight;
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
    overflow: hidden;
    width: 100%;
    padding: 47px 47px;

    p {
        line-height: 31px;
        margin-bottom: 25px;
    }
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
