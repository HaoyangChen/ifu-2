<template>
    <volunteer-application :title="department + ' - ' + name" color="#C9D74A">
        <p><b>申请人基本条件</b></p>
        <p>有中文翻译经验优先</p>
        <p><b>职位具体介绍</b></p>
        <p>翻译组织更新的各种文件</p>
        <p><b>结束任期回报</b></p>
        <p>志愿者证书：Certificate of Appreciation</p>
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
    },
};
</script>
