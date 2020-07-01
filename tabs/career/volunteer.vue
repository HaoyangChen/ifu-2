<template>
    <div>
        <div class="row-1">
            <section>
                <h2>加入志愿者团队</h2>
                <p>
                    IFU的志愿者分为<b>项目型志愿者</b>以及<b>校园志愿者</b>。志愿者需要有留学背景或者希望对留学群体作出帮助、贡献的人；需要有一颗乐于助人，对公共事业有热忱的人。目前，IFU志愿者地区划分为美东、美西、以及加拿大，志愿者管理团队志愿者管理工作人员是由地区负责人以及其助理组成，带领着全体IFU志愿者一同完成组织“让留学家庭更安心”的社会目标。
                </p>
            </section>
            <div>
                <img src="@/assets/career/volunteer/volunteer.png" />
            </div>
        </div>
        <section class="volunteer-section">
            <Application
                v-for="(volunteer, index) in volunteers"
                :key="index"
                :name="volunteer.name"
                :department="volunteer.department"
                :description="volunteer.description"
                :requirement="volunteer.requirement"
                :reward="volunteer.reward"
                :people="volunteer.people"
                :time="volunteer.time"
                :link="
                    volunteer.link ||
                        'https://docs.google.com/forms/d/e/1FAIpQLScxv4rY_MMRqShfJRdAPHx50t2R_slZxQVTSJh1Tt_numq-tA/viewform'
                "
                :urgent="volunteer.urgent || false"
            />
        </section>
    </div>
</template>

<script>
import Application from '@/components/Application.vue';
import volunteers from '@/data/volunteer.json';

export default {
    components: {
        Application,
    },
    data() {
        return {
            volunteers,
        };
    },
};
</script>

<style lang="scss" scoped>
.row-1 {
    display: flex;
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

.volunteer-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: $background-light-blue;

    > * {
        flex-basis: 48%;
        margin-bottom: 50px;
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

    .volunteer-section {
        justify-content: center;

        > * {
            flex-basis: 100%;
        }
    }
}
</style>
