<template>
    <volunteer-application
        :title="department + ' - ' + name"
        :color="departmentColorMap[department]"
        :button1-text="people + '人'"
        :button2-text="time + '个月'"
        button3-text="提交申请"
        :hover-color="hoverColorMap[department]"
        :to="link"
    >
        <p><b>申请人基本条件</b></p>
        <p>{{ requirement }}</p>
        <p><b>职位具体介绍</b></p>
        <p>{{ description }}</p>
        <p><b>结束任期回报</b></p>
        <p>{{ reward }}</p>
    </volunteer-application>
</template>

<script>
import VolunteerApplication from '@/components/Application.vue';

export default {
    components: {
        VolunteerApplication,
    },
    props: {
        name: {
            type: String,
            required: true,
        },
        department: {
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
        people: {
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
};
</script>
