<template>
    <div>
        <Book :list="storyList[$i18n.locale]" />
        <section>
            <h2>{{ $t('about.story.achievement') }}</h2>
            <div class="achievement-list">
                <div class="achievement-item">
                    <img src="@/assets/about/story/achievement_1.png" />
                    <p v-html="$t('about.story.text1')" />
                </div>
                <div class="achievement-item">
                    <img src="@/assets/about/story/achievement_2.png" />
                    <p v-html="$t('about.story.text2')" />
                </div>
                <div class="achievement-item">
                    <img src="@/assets/about/story/achievement_3.png" />
                    <p v-html="$t('about.story.text3')" />
                </div>
                <div class="achievement-item">
                    <img src="@/assets/about/story/achievement_4.png" />
                    <p v-html="$t('about.story.text4')" />
                </div>
                <div class="achievement-item">
                    <img src="@/assets/about/story/achievement_5.png" />
                    <p v-html="$t('about.story.text5')" />
                </div>
                <div class="achievement-item">
                    <img src="@/assets/about/story/achievement_6.png" />
                    <p v-html="$t('about.story.text6')" />
                </div>
                <div class="achievement-item">
                    <img src="@/assets/about/story/achievement_7.png" />
                    <p v-html="$t('about.story.text7')" />
                </div>
                <div class="achievement-item">
                    <img src="@/assets/about/story/achievement_8.png" />
                    <p v-html="$t('about.story.text8')" />
                </div>
                <div class="achievement-item">
                    <img src="@/assets/about/story/achievement_9.png" />
                    <p v-html="$t('about.story.text9')" />
                </div>
                <div class="achievement-item">
                    <img src="@/assets/about/story/achievement_10.png" />
                    <p v-html="$t('about.story.text10')" />
                </div>
                <div class="achievement-item">
                    <img src="@/assets/about/story/achievement_11.png" />
                    <p v-html="$t('about.story.text11')" />
                </div>
                <div class="achievement-item">
                    <img src="@/assets/about/story/achievement_12.png" />
                    <p v-html="$t('about.story.text12')" />
                </div>
                <div class="achievement-item">
                    <img src="@/assets/about/story/achievement_13.png" />
                    <p v-html="$t('about.story.text13')" />
                </div>
                <div class="achievement-item">
                    <img src="@/assets/about/story/achievement_14.png" />
                    <p v-html="$t('about.story.text14')" />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Book from '@/components/Book.vue';
import story1 from '@/assets/about/story/story_1.png';
import story2 from '@/assets/about/story/story_2.png';
import story3 from '@/assets/about/story/story_3.jpg';
import story4 from '@/assets/about/story/story_4.jpg';
import story5 from '@/assets/about/story/story_5.jpg';
import story6 from '@/assets/about/story/story_6.jpg';
import story7 from '@/assets/about/story/story_7.jpg';
import story8 from '@/assets/about/story/story_8.jpg';
import story9 from '@/assets/about/story/story_9.jpg';

import story1En from '@/assets/about/story/en/story_1.jpg';
import story2En from '@/assets/about/story/en/story_2.jpg';
import story3En from '@/assets/about/story/en/story_3.jpg';
import story4En from '@/assets/about/story/en/story_4.jpg';
import story5En from '@/assets/about/story/en/story_5.jpg';
import story6En from '@/assets/about/story/en/story_6.jpg';
import story7En from '@/assets/about/story/en/story_7.jpg';
import story8En from '@/assets/about/story/en/story_8.jpg';
import story9En from '@/assets/about/story/en/story_9.jpg';

export default {
    name: 'Story',
    components: {
        Book,
    },
    data() {
        return {
            storyList: {
                zh: [
                    story1,
                    story2,
                    story3,
                    story4,
                    story5,
                    story6,
                    story7,
                    story8,
                    story9,
                ],
                en: [
                    story1En,
                    story2En,
                    story3En,
                    story4En,
                    story5En,
                    story6En,
                    story7En,
                    story8En,
                    story9En,
                ],
            },
        };
    },
};
</script>

<style lang="scss" scoped>
.achievement-list {
    display: flex;
    flex-wrap: wrap;
}

.achievement-item {
    flex-basis: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.achievement-item {
    img {
        float: left;
        margin: 24px;
    }

    &:nth-of-type(odd) {
        img {
            margin: 24px 24px 24px 0;
        }
    }
}

.achievement-item {
    p {
        width: 100%;
        margin: 24px 0;

        /deep/ span {
            color: $dark-blue;
            font-weight: bold;
        }
    }
}

@media (max-width: $mobile-max-width) {
    .achievement-list {
        justify-content: center;
    }

    .achievement-item {
        position: relative;
        flex-basis: 90%;
        border-radius: 10px;
        color: white;
        margin-top: 51px;
    }

    .achievement-item img {
        position: absolute;
        left: -34px;
        margin: 0px;
    }

    .achievement-item p {
        margin: 32px 24px 32px 60px;

        /deep/ span {
            color: white;
            text-decoration: underline;
        }
    }

    .achievement-item:nth-child(1) {
        background: $teal;
    }

    .achievement-item:nth-child(3) {
        background: $green;
    }

    .achievement-item:nth-child(5) {
        background: #1296db;
    }

    .achievement-item:nth-child(7) {
        background: $purple;
    }

    .achievement-item:nth-child(9) {
        background: $dark-pink;
    }

    .achievement-item:nth-child(2) {
        background: #1296db;
    }

    .achievement-item:nth-child(4) {
        background: $purple;
    }

    .achievement-item:nth-child(6) {
        background: $dark-pink;
    }

    .achievement-item:nth-child(8) {
        background: $green;
    }

    .achievement-item:nth-child(10) {
        background: $teal;
    }

    .achievement-item {
        &:nth-child(11) {
            background: $purple;
        }

        &:nth-child(12) {
            background: $orange;
        }

        &:nth-child(13) {
            background: $dark-pink;
        }

        &:nth-child(14) {
            background: $teal;
        }
    }
}
</style>
