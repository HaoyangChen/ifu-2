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
        <section class="staff-section">
            <staff-application
                v-for="(staff, index) in staffs[$i18n.locale]"
                :key="index"
                :name="staff.name"
                :department="staff.department"
                :description="staff.description"
                :task="staff.task"
                :requirement="staff.requirement"
                :people="staff.people"
                :link="staff.link"
                :urgent="staff.urgent || false"
            />
        </section>
        <section class="clipart-section">
            <div>
                <img src="@/assets/career/staff/clipart.svg" />
            </div>
        </section>
    </div>
</template>

<script>
import StaffApplication from '@/components/StaffApplication.vue';
import staffData from '@/data/staff.json';
import staffDataEn from '@/data/staff-en.json';

export default {
    components: {
        StaffApplication,
    },
    data() {
        return {
            staffs: {
                zh: staffData,
                en: staffDataEn,
            },
        };
    },
};
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

.staff-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > * {
        flex-basis: 48%;
        margin-bottom: 50px;
    }
}

.clipart-section {
    text-align: center;

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

    .staff-section {
        justify-content: center;

        > * {
            flex-basis: 100%;
        }
    }
}
</style>
