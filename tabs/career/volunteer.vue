<template>
    <div>
        <div class="row-1">
            <section>
                <h2>{{ $t('career.volunteer.joinSection.title') }}</h2>
                <p v-html="$t('career.volunteer.joinSection.description')" />
            </section>
            <div>
                <img src="@/assets/career/volunteer/volunteer.png" />
            </div>
        </div>
        <section class="volunteer-section">
            <Application
                v-for="(volunteer, index) in volunteers[$i18n.locale]"
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
import volunteersEn from '@/data/volunteer-en.json';

export default {
    components: {
        Application,
    },
    data() {
        return {
            volunteers: {
                zh: volunteers,
                en: volunteersEn,
            },
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
