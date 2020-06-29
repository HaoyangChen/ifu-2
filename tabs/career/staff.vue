<template>
    <div>
        <div class="row-1">
            <section>
                <h2>加入工作人员团队</h2>
                <p>
                    IFU的工作人员负责组织的日常运营。组织分为运营、志愿者管理、行政、项目、技术、对外关系六大部门。工作人员直接申请要求有至少3个月以上的工作经验，需通过递交简历申请、面试、General
                    Test和3个月的考核期，通过后将根据考核结果进入对应职位带领志愿者达成组织使命。
                </p>
            </section>
            <div>
                <img src="@/assets/career/staff/staff.png" />
            </div>
        </div>
        <section class="join-section">
            <p>
                感谢您对我们的认可，IFU目前暂无工作人员岗位招聘。考虑作为志愿者加入我们？
            </p>
            <nuxt-link :to="localePath('/career')"
                >查看志愿者招募职位>>></nuxt-link
            >
        </section>
        <section class="clipart-section">
            <div>
                <img src="@/assets/career/staff/clipart.png" />
            </div>
        </section>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.row-1 {
    overflow: auto;
    background: $background-light-blue;
    line-height: 2em;

    > section,
    > div {
        width: 50%;
        float: left; // 并排两个 block
    }

    div {
        img {
            height: 100%;
            width: 100%;
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
        }
    }
}

@media (max-width: $mobile-max-width) {
    .row-1 {
        > section,
        > div {
            width: 100%;
            float: none;
        }
    }
}
</style>
