<template>
    <div>
        <Banner
            title="IFU 朋辈项目"
            description="IFU朋辈项目，伴你度过留学路上的底谷时光。
IFU朋辈导师 (Peer Mentor) 将作为学生的倾听、陪伴者，让学生能够安心诉说烦恼和担忧，为学生分担由于各种因素带来的忧虑和不安情绪；朋辈导师也将通过一对一面谈和小组活动的方式，用自身的经验和能力，指导、鼓舞学生解决问题。
"
            button-text="成为学员"
            :to="localePath('/peermentor')"
            :background="bannerImage"
        />
        <div class="row peer-mentor-intro-section">
            <div class="text-container left">
                <h2>什么是IFU朋辈项目？</h2>
                <p>
                    今年6月，从最初的朋辈项目策划和试营，历经两个月整，通过IFU各部门工作人员和超过15名志愿者努力，IFU朋辈项目才能正式顺利推出。
                    “IFU朋辈项目”项目由鼎恒留学提供全额赞助资金运营支持，该项目将完全免费面向所有海外留学生。IFU朋辈导师
                    (Peer Mentor)
                    将作为学生的倾听、陪伴者，让学生能够安心诉说烦恼和担忧，为学生分担由于各种因素带来的忧虑和不安情绪；朋辈导师也将通过一对一面谈和小组活动的方式，用自身的经验和能力，指导、鼓舞学生解决问题。
                </p>
            </div>
            <div class="img-container desktop">
                <img src="@/assets/peermentor/peer_mentor_program.png" />
            </div>
        </div>
        <section>
            <h2>为什么要实行IFU朋辈咨询项目？</h2>
            <p>
                今年的留学生涯，真的是越发的难过了，疫情隔离，游行暴乱，校园关闭等。对于今年毕业的学子，未来是否回国，还是升学读研，一切都是未知数，当面临着越来越多的困难决定时，留学生所面对生活上的、心理上的压力的问题也是不能忽略的。
                通过IFU这几年处理的紧急事件的经验，和各种线上下活动的反馈，以及平时对学生家长疑惑的收集，我们发现以下几点。IFU秉承“让留学家庭更安心”的使命，感觉到守护留学生的心理健康问题，不容延迟。
            </p>
        </section>
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
// import Button from '@/components/Button.vue';
import bannerImage from '@/assets/volunteer/banner.png';

export default {
    components: {
        Banner,
        // Button,
    },
    data() {
        return {
            bannerImage,
        };
    },
};
</script>

<style lang="scss" scoped>
.row {
    display: flex;

    > div {
        flex-basis: 50%;
    }

    .text-container.left {
        padding: 80px 50px 80px $padding-horizontal;
    }

    .text-container.right {
        padding: 80px $padding-horizontal 80px 50px;
    }

    .img-container {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            max-height: 100%;
            max-width: 100%;
        }
    }
}

.peer-mentor-intro-section {
    border-top: 10px solid rgba(38, 156, 209, 0.8);
    border-bottom: 10px solid rgba(38, 156, 209, 0.8);
}

p {
    line-height: 31px;
    margin-bottom: 30px;

    &:last-of-type {
        margin-bottom: 50px;
    }
}
</style>
