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
                {{ $t('application.urgent') }}
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
                lineHeight: lineHeight[$i18n.locale],
            }"
        >
            <p>
                {{ description }}
            </p>
            <h3>{{ $t('application.staff.tasks') }}</h3>
            <p>{{ task }}</p>
            <h3>{{ $t('application.staff.requirements') }}</h3>
            <p>{{ requirement }}</p>
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
                    {{ $t('application.people') }}
                    <b>{{ people + $t('application.peopleUnit') }}</b>
                </p>
            </div>
            <a
                class="apply-button"
                :style="applyButtonStyle"
                :href="link"
                target="_blank"
                ><b>{{ $t('application.submit') }}</b></a
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
        description: {
            type: String,
            required: true,
        },
        requirement: {
            type: String,
            required: true,
        },
        task: {
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
                'Administration & Finance': '#C9D74A',
                运营部: '#FDA63B',
                Operation: '#FDA63B',
                技术部: '#54BEF5',
                'Design & Technology': '#54BEF5',
                多多罗: '#F96191',
                志愿者团队: '#CC8ABD',
                'Volunteer Management': '#CC8ABD',
                '2020学长学姐嘉年华': '#FDA63B',
                '2020 IFU College Carnival': '#FDA63B',
            },
            hoverColorMap: {
                行政部: '#B7C348',
                'Administration & Finance': '#B7C348',
                运营部: '#EA9A38',
                Operation: '#EA9A38',
                技术部: '#4FAFE1',
                'Design & Technology': '#4FAFE1',
                多多罗: '#E15682',
                志愿者团队: '#A37297',
                'Volunteer Management': '#A37297',
                '2020学长学姐嘉年华': '#EA9A38',
                '2020 IFU College Carnival': '#EA9A38',
            },
            lineHeight: {
                zh: '30px',
                en: '23px',
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
            return 888 - 109 - this.titleHeight;
        },
    },
};
</script>

<style lang="scss" scoped>
.application {
    max-width: 568px;
    height: 888px;
    background: white;
    position: relative;
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
    padding: 27px 47px;

    p {
        margin: 0;
    }

    h3 {
        font-size: 16px;
        margin-bottom: 0;
    }
}

.button-list {
    width: 100.1%; // 100% 可能会导致 1px 的误差
    height: 109px;
    display: flex;
    text-align: center;
    position: absolute;
    bottom: 0;

    .button-1,
    .apply-button {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .button-1 {
        flex-basis: 50%;

        p {
            margin: 0;
        }
    }

    .ifuicon {
        font-size: 35px;
    }

    .apply-button {
        flex-basis: 50%;
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

@media (max-width: 1200px) {
    .application {
        height: 929px;
    }

    .title {
        font-size: 20px;
        padding: 0 117px 0 27px;
    }
}

@media (max-width: $mobile-max-width) {
    .application {
        height: fit-content;
    }

    .title {
        padding: 0 110px 0 20px;
        font-size: 16px;
    }

    .content {
        height: fit-content !important;
        padding: 20px;
    }

    .button-list {
        height: 69px;
        position: relative;

        .ifuicon {
            font-size: 20px;
        }

        .apply-button {
            font-size: 16px;
        }
    }
}
</style>
