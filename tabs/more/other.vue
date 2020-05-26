<template>
    <div>
        <div class="row">
            <div class="text-container left">
                <p v-html="$t('other.otherService.otherService1')" />
                <p v-html="$t('other.otherService.otherService2')" />
                <p v-html="$t('other.otherService.otherService3')" />
            </div>
            <div class="img-container desktop">
                <img src="@/assets/more/other/section1.png" />
            </div>
        </div>
        <div class="row">
            <div class="text-container left blue-background">
                <h2>{{ $t('other.legalService.legalTitle') }}</h2>
                <p v-html="$t('other.legalService.legal1')" />
                <p v-html="$t('other.legalService.legal2')" />
                <Button
                    id="more-info"
                    external
                    to="https://weidian.com/item.html?itemID=2880968105&wfr=c&spider_token=d187"
                    >{{ $t('other.legalService.legalLearnMoreBtn') }}</Button
                >
            </div>
            <div class="desktop">
                <img src="@/assets/more/other/section2.png" />
            </div>
        </div>
        <div class="row">
            <div class="desktop">
                <img src="@/assets/more/other/section3.png" />
            </div>
            <div class="text-container right">
                <h2>{{ $t('other.greTraining.trainingTitle') }}</h2>
                <p v-html="$t('other.greTraining.training1')" />
                <Button
                    external
                    to="https://mp.weixin.qq.com/s/ccDYcTP8n6IGUa3mud3JJw"
                    >{{ $t('other.greTraining.learnMoreBtn') }}</Button
                >
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
    components: {
        Button,
    },
};
</script>

<style lang="scss" scoped>
.row {
    display: flex;

    > div {
        flex-basis: 50%;
    }
}

p {
    line-height: 31px;
    margin-bottom: 30px;

    &:last-of-type {
        margin-bottom: 50px;
    }
}

.img-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    max-height: 100%;
    max-width: 100%;
}

.text-container.left {
    padding: 80px 50px 80px $padding-horizontal;
}

.text-container.right {
    padding: 80px $padding-horizontal 80px 50px;
}

.blue-background {
    background: rgba(168, 221, 250, 0.27);
}

#more-info {
    margin-top: 12%;
}

@media (max-width: $mobile-max-width) {
    .row > div {
        flex-basis: 100%;
    }

    .row {
        padding-bottom: 30px;
    }

    #more-info {
        margin-top: 18px;
    }

    .text-container {
        padding: 30px;
    }
}
</style>
