<template>
    <div class="orgStructure">
        <Banner
            :title="$t('orgStructure.banner.title')"
            :button-text="$t('orgStructure.banner.buttonText')"
            to="#"
            :background="bannerImage"
        >
            <p v-html="$t('orgStructure.banner.description')" />
        </Banner>
        <div class="structure">
            <div class="title">
                {{ $t('orgStructure.structure.title') }}
            </div>
            <div class="content">
                {{ $t('orgStructure.structure.content') }}
            </div>
            <div class="content">
                {{ $t('orgStructure.structure.content2') }}
            </div>

            <div><img src="@/assets/orgStructure/chart.png" alt="image" /></div>
        </div>
        <div class="container">
            <div class="left text">
                <div class="title">
                    {{ $t('orgStructure.executive.title') }}
                </div>
                <div class="content">
                    {{ $t('orgStructure.executive.content') }}
                </div>
            </div>
            <div class="right">
                <img
                    src="@/assets/orgStructure/executive.png"
                    alt="executive"
                />
            </div>
        </div>
        <div class="container">
            <div class="left">
                <img
                    src="@/assets/orgStructure/volunteer.png"
                    alt="executive"
                />
            </div>
            <div class="right text">
                <div class="title">
                    {{ $t('orgStructure.volunteer.title') }}
                </div>
                <div class="content">
                    {{ $t('orgStructure.volunteer.content') }}
                </div>
            </div>
        </div>
        <div class="container">
            <div class="left text">
                <div class="title">{{ $t('orgStructure.members.title') }}</div>
                <div class="content">
                    {{ $t('orgStructure.members.para1') }}
                </div>
                <div class="content">
                    {{ $t('orgStructure.members.para2') }}
                </div>
                <Button to="#"> Member details </Button>
            </div>
            <div class="right">
                <img
                    src="@/assets/orgStructure/executive.png"
                    alt="executive"
                />
            </div>
        </div>

        <img src="@/assets/orgStructure/ifuPic.png" alt="" />
        <div class="blue-section">
            <div class="container">
                <div class="title">
                    {{ $t('orgStructure.blueSection.title1') }}
                </div>
                <div class="content">
                    {{ $t('orgStructure.blueSection.content1') }}
                </div>
            </div>
            <div class="container">
                <div class="title">
                    {{ $t('orgStructure.blueSection.title2') }}
                </div>
                <div class="content">
                    {{ $t('orgStructure.blueSection.content2') }}
                </div>
            </div>
            <div class="row">
                <div class="left text">
                    <div class="title">
                        {{ $t('orgStructure.blueSection.title3') }}
                    </div>
                    <div class="content">
                        {{ $t('orgStructure.blueSection.content3') }}
                    </div>
                    <Button to="#"> Learn about campus volunteer </Button>
                </div>
                <div class="right">
                    <img src="@/assets/orgStructure/blue1.png" alt="" />
                </div>
            </div>
            <div class="row">
                <div class="left">
                    <img src="@/assets/orgStructure/blue2.png" alt="" />
                </div>
                <div class="right text">
                    <div class="title">
                        {{ $t('orgStructure.blueSection.title4') }}
                    </div>
                    <div class="content">
                        {{ $t('orgStructure.blueSection.content4') }}
                    </div>
                    <Button to="#"> Become a project volunteer </Button>
                </div>
            </div>
        </div>
        <div class="department">
            <div class="container">
                <div class="title">
                    {{ $t('orgStructure.department.title1') }}
                </div>
                <div class="content">
                    {{ $t('orgStructure.department.content1') }}
                </div>
            </div>
            <div class="row">
                <div class="left">
                    <div class="title">
                        {{ $t('orgStructure.department.title2') }}
                    </div>
                    <div class="content">
                        {{ $t('orgStructure.department.content2') }}
                    </div>
                    <Button to="#"> Learn more about Totoroad Academy </Button>
                </div>
                <div class="right">
                    <img src="@/assets/orgStructure/de1.png" alt="" />
                </div>
            </div>
            <div class="row">
                <div class="left">
                    <img src="@/assets/orgStructure/de2.png" alt="" />
                </div>
                <div class="right">
                    <div class="title">
                        {{ $t('orgStructure.department.title3') }}
                    </div>
                    <div class="content">
                        {{ $t('orgStructure.department.content3') }}
                    </div>
                    <Button to="#">
                        Learn more about Peer Mentor program
                    </Button>
                </div>
            </div>
        </div>
        <img src="@/assets/orgStructure/ifuPic2.png" alt="" />
        <div class="department2">
            <div class="row">
                <div class="text">
                    <div class="title">
                        {{ $t('orgStructure.department2.title1') }}
                    </div>
                    <div class="content">
                        {{ $t('orgStructure.department2.content1') }}
                    </div>
                </div>
                <div>
                    <img src="@/assets/orgStructure/op1.png" alt="" />
                </div>
            </div>
            <div class="row">
                <div>
                    <img src="@/assets/orgStructure/op2.png" alt="" />
                </div>
                <div class="text">
                    <div class="title">
                        {{ $t('orgStructure.department2.title2') }}
                    </div>
                    <div class="content">
                        {{ $t('orgStructure.department2.content2') }}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="text">
                    <div class="title">
                        {{ $t('orgStructure.department2.title2') }}
                    </div>
                    <div class="content">
                        {{ $t('orgStructure.department2.content2') }}
                    </div>
                </div>
                <div>
                    <img src="@/assets/orgStructure/op3.png" alt="" />
                </div>
            </div>
        </div>
        <div class="join">
            <div class="title">
                Ready to join the conversation and stay tuned?
            </div>
            <div class="content">
                if you don’t have time to serve the social mission but still
                want to be part of it. Join the monthly newsletter. What is
                going to include and why you should join? blablabla. And feel
                free to follow us on any social media blablabla... sample text
                sample text. sample text sample text. sample text sample
                text.sample text sample text.sample text sample text.
            </div>
            <Button to="#">
                Subscribe to the membership newsletter for free
            </Button>
        </div>
    </div>
</template>

<script>
// import VueI18n from 'vue-i18n';
import Banner from '@/components/Banner.vue';
import bannerImage from '@/assets/orgStructure/banner.png';
import Button from '@/components/Button.vue';
export default {
    name: 'OrgStructure',
    components: {
        Banner,
        Button,
    },
    data() {
        return {
            bannerImage,
        };
    },
};
</script>
<style lang="scss" scoped>
.structure {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 80%;
    margin: auto;
    img {
    }
    .title {
        font-size: 20px;
    }
    .content {
        font-size: 14px;
        line-height: 26px;
    }
}
.container {
    display: flex;
    flex-direction: row;
    height: 500px;
    img {
        width: 670px;
        height: 450px;
    }
    .text {
        font-size: 14px;
        padding: 80px;
        line-height: 28px;
        box-sizing: border-box;
    }
    .title {
        font-size: 20px;
    }
    button {
        margin-top: 60px;
    }
}
.blue-section {
    background-color: #f1f9ff;
    .container {
        width: 80%;
        margin: auto;
        flex-direction: column;
        height: 200px;
        padding: 40px;
        box-sizing: border-box;
    }
    .content {
        line-height: 30px;
        font-size: 14px;
    }
    .row {
        display: flex;
        flex-direction: row;
        .text {
            padding: 40px;
        }
    }
    .title {
        font-size: 20px;
    }
}
.department {
    .container {
        display: flex;
        flex-direction: column;
    }
    .row {
        display: flex;
        flex-direction: row;
    }
    .left,
    .right {
        width: 50%;
        text-align: center;
    }

    .title {
        font-size: 20px;
    }
    .content {
        font-size: 14px;
        padding: 40px;
        line-height: 30px;
    }
}
.department2 {
    .row {
        display: flex;
        flex-direction: row;
        text-align: center;
        div {
            width: 50%;
        }
        .text {
            padding: 40px;
            box-sizing: border-box;
        }
        .title {
            font-weight: bold;
        }
        .content {
            font-size: 14px;
            line-height: 28px;
        }
    }
}
.join {
    background-color: #f1f9ff;
    height: 400px;
    text-align: center;
    .title {
        font-weight: bold;
    }
    .content {
        width: 40%;
        margin: auto;
        color: #fc6e62;
    }
}
</style>
