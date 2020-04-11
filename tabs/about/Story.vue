<template>
    <div>
        <Book :list="storyList" />
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

export default {
    name: 'Story',
    components: {
        Book,
    },
    data() {
        return {
            storyList: [
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
        };
    },
};
</script>

<style scoped>
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

.achievement-item img {
    float: left;
    margin: 24px;
}

.achievement-item p {
    margin: 24px;
}
</style>

<style scoped>
@media (max-width: 1024px) {
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
    }

    .achievement-item:nth-child(1) {
        background: #34bbc9;
    }

    .achievement-item:nth-child(3) {
        background: #c9d74a;
    }

    .achievement-item:nth-child(5) {
        background: #1296db;
    }

    .achievement-item:nth-child(7) {
        background: #cc8abd;
    }

    .achievement-item:nth-child(9) {
        background: #f96291;
    }

    .achievement-item:nth-child(2) {
        background: #1296db;
    }

    .achievement-item:nth-child(4) {
        background: #cc8abd;
    }

    .achievement-item:nth-child(6) {
        background: #f96291;
    }

    .achievement-item:nth-child(8) {
        background: #c9d74a;
    }

    .achievement-item:nth-child(10) {
        background: #34bbc9;
    }
}
</style>

<style lang="scss">
/* 因为 span 是动态加载进来的，需要非scoped的style */
.about .achievement-item p span {
    color: #54bef5;
}

@media (max-width: 1024px) {
    .about .achievement-item p span {
        color: white;
        text-decoration: underline;
    }
}
</style>
