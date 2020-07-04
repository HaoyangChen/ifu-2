<template>
    <div>
        <div class="row-1">
            <section>
                <h2>{{ $t('career.staff.joinSection.title') }}</h2>
                <p v-html="$t('career.staff.joinSection.description')" />
            </section>
            <div>
                <img src="@/assets/career/staff/staff.png" />
            </div>
        </div>
        <section class="join-section">
            <p>
                感谢您对我们的认可，IFU目前暂无工作人员岗位招聘。考虑作为志愿者加入我们？
            </p>
            <a @click="$router.go({ path: localePath('/career'), force: true })"
                >查看志愿者招募职位>>></a
            >
        </section>
        <section class="clipart-section">
            <div>
                <img src="@/assets/career/staff/clipart.svg" />
            </div>
        </section>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.row-1 {
    display: flex;
    background: $background-light-blue;
    line-height: 2em;

    > section,
    > div {
        flex-basis: 50%;
    }

    div {
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
}

.join-section,
.clipart-section {
    text-align: center;
}

.join-section {
    p,
    a {
        margin: 15px auto;
    }

    p {
        width: 100%;
        text-align: center;
    }

    a {
        display: block;
        width: 50%;
        text-align: right;
        color: $button-color;
        text-decoration: none;

        &:hover {
            color: $dark-pink;
            cursor: pointer;
        }
    }
}

.clipart-section {
    img {
        width: 100%;
    }
}

@media (max-width: $mobile-max-width) {
    .row-1 {
        flex-wrap: wrap;

        > section,
        > div {
            flex-basis: 100%;
        }
    }
}
</style>
