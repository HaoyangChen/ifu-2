<template>
    <div>
        <div class="row">
            <div class="text-container">
                <p>
                    {{ $t('other.otherService.otherService1')
                    }}<b>{{ $t('other.otherService.otherService2') }}</b
                    >{{ $t('other.otherService.otherService3')
                    }}<b>{{ $t('other.otherService.otherService4') }}</b
                    >{{ $t('other.otherService.otherService5') }}
                </p>
                <p>
                    {{ $t('other.otherService.otherService6')
                    }}<b>{{ $t('other.otherService.otherService7') }}</b
                    >{{ $t('other.otherService.otherService8')
                    }}<b>{{ $t('other.otherService.otherService9') }}</b
                    >{{ $t('other.otherService.otherService10')
                    }}<b> {{ $t('other.otherService.otherService11') }}</b
                    >。
                </p>
                <p>
                    {{ $t('other.otherService.otherService12') }}
                </p>
            </div>
            <div class="desktop">
                <img :src="section1Image" />
            </div>
        </div>
        <div class="row blue-background">
            <div class="text-container">
                <h2>{{ $t('other.legalService.legalTitle') }}</h2>
                <p>
                    {{ $t('other.legalService.legal1')
                    }}<b>{{ $t('other.legalService.legal2') }}</b
                    >{{ $t('other.legalService.legal3') }}
                </p>
                <p>
                    {{ $t('other.legalService.legal4')
                    }}<b>{{ $t('other.legalService.legal5') }}</b
                    >。 {{ $t('other.legalService.legal6')
                    }}<b>{{ $t('other.legalService.legal7') }}</b
                    >{{ $t('other.legalService.legal8') }}
                </p>
                <Button
                    id="more-info"
                    external
                    to="https://weidian.com/item.html?itemID=2880968105&wfr=c&spider_token=d187"
                    >{{ $t('other.legalService.legalLearnMoreBtn') }}</Button
                >
            </div>
            <div class="desktop">
                <img :src="section2Image" />
            </div>
        </div>
        <div class="row">
            <div class="desktop">
                <img :src="section3Image" />
            </div>
            <div class="text-container">
                <h2>{{ $t('other.greTraining.trainingTitle') }}</h2>
                <p>
                    <b>{{ $t('other.greTraining.training1') }}</b
                    >{{ $t('other.greTraining.training2')
                    }}<b>{{ $t('other.greTraining.training3') }}</b
                    >{{ $t('other.greTraining.training4')
                    }}<b>{{ $t('other.greTraining.training5') }}</b
                    >{{ $t('other.greTraining.training6') }}
                </p>
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
import section1Image from '@/assets/more/other/section1.png';
import section2Image from '@/assets/more/other/section2.png';
import section3Image from '@/assets/more/other/section3.png';

export default {
    components: {
        Button,
    },
    data() {
        return {
            section1Image,
            section2Image,
            section3Image,
        };
    },
};
</script>

<style scoped>
.row {
    display: flex;
}

.row > div {
    flex-basis: 50%;
}

p {
    line-height: 31px;
}

img {
    height: 100%;
    width: 100%;
}

.text-container {
    padding: 80px 130px;
}

.blue-background {
    background: rgba(168, 221, 250, 0.27);
}

#more-info {
    margin-top: 12%;
}
</style>

<style lang="scss" scoped>
@media (max-width: 1024px) {
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
