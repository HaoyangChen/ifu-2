<template>
    <div>
        <Banner
            title="IFU 朋辈项目"
            description="IFU朋辈项目，伴你度过留学路上的底谷时光。
IFU朋辈导师 (Peer Mentor) 将作为学生的倾听、陪伴者，让学生能够安心诉说烦恼和担忧，为学生分担由于各种因素带来的忧虑和不安情绪；朋辈导师也将通过一对一面谈和小组活动的方式，用自身的经验和能力，指导、鼓舞学生解决问题。
"
            button-text="成为学员"
            :background="bannerImage"
            external
            to="https://forms.gle/qrmRz8E6TgFFD7BK7"
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
                <img
                    src="@/assets/peermentor/peer_mentor_program.svg"
                    alt="peer mentor program"
                />
            </div>
        </div>
        <section class="whypeermentor">
            <h2>为什么要实行IFU朋辈咨询项目？</h2>
            <div class="whypeermentor-upper">
                <p>
                    今年的留学生涯，真的是越发的难过了，疫情隔离，游行暴乱，校园关闭等。对于今年毕业的学子，未来是否回国，还是升学读研，一切都是未知数，当面临着越来越多的困难决定时，留学生所面对生活上的、心理上的压力的问题也是不能忽略的。
                </p>
                <p>
                    通过IFU这几年处理的紧急事件的经验，和各种线上下活动的反馈，以及平时对学生家长疑惑的收集，我们发现以下几点。IFU秉承“让留学家庭更安心”的使命，感觉到守护留学生的心理健康问题，不容延迟。
                </p>
            </div>
            <div class="fourreason-outside">
                <div class="one-fourth">
                    <div class="circle-image">
                        <img
                            src="@/assets/peermentor/icon_pressure.svg"
                            alt="pressue icon"
                        />
                    </div>
                    <h3 class="center">压力</h3>
                    <p>心理压力过大，是超过一半留学生失踪事件发生的原因。</p>
                </div>
                <div class="one-fourth">
                    <div class="circle-image">
                        <img
                            src="@/assets/peermentor/icon_company.svg"
                            alt="company icon"
                        />
                    </div>
                    <h3 class="center">陪伴</h3>
                    <p>
                        大部分的留学生都表示需要陪伴，时常感到孤独和抑郁，特别是在疫情时期。
                    </p>
                </div>
                <div class="one-fourth">
                    <div class="circle-image">
                        <img
                            src="@/assets/peermentor/icon_help.svg"
                            alt="help icon"
                        />
                    </div>
                    <h3 class="center">帮助</h3>
                    <p>
                        大多学生都表示希望可以在求职、社交上，得到拓展和帮助等。
                    </p>
                </div>
                <div class="one-fourth">
                    <div class="circle-image">
                        <img
                            src="@/assets/peermentor/icon_ignore.svg"
                            alt="ignore icon"
                        />
                    </div>
                    <h3 class="center">忽视</h3>
                    <p>
                        留学生群体极容易被主流社会忽视，该项目也可最大程度的帮助这类人群，实现NGO的职责。
                    </p>
                </div>
            </div>
        </section>
        <section class="project-process">
            <div class="project-process-title">
                <h1>项目流程与提供服务</h1>
            </div>
            <div class="project-process-images">
                <div class="bubbles-content">
                    <div class="bubbles-content-blue">
                        <h3>一对一面谈</h3>
                        <ul>
                            <li>陪伴倾听</li>
                            <li>朋辈咨询</li>
                            <li>生活经验分享</li>
                            <li>学习经验分享</li>
                            <li>简历修改，求职信修改</li>
                            <li>求职工作经验分享</li>
                        </ul>
                    </div>
                    <div class="bubbles-content-green">
                        <h3>小组活动</h3>
                        <ul>
                            <li>朋辈导师讲座</li>
                            <li>其他精彩活动</li>
                        </ul>
                    </div>
                    <div class="bubbles-content-right">
                        <h3>准备好加入我们了吗</h3>
                        <ul>
                            <li>成为导师帮助倾听他人</li>
                            <li>成为学员找到自己的陪伴</li>
                        </ul>
                        <button>立即报名</button>
                    </div>
                </div>
                <img
                    class="blue-person"
                    src="@/assets/peermentor/blue_person.png"
                    alt="blue person"
                />
                <img
                    src="@/assets/peermentor/process_bubbles.png"
                    alt="process bubbles"
                />
            </div>
            <div class="project-process-table">
                <div class="table-content">
                    <div class="row-content">
                        <h2>第一阶段</h2>
                        <p>
                            <span>IFU朋辈导师（Mentor）招募:</span>
                            每个学期初，通过IFU的各个社交平台发布导师招募邀请。
                        </p>
                    </div>
                    <div class="row-content">
                        <h2>第二阶段</h2>
                        <p>
                            <span>学生（Mentee）申请表递交:</span>
                            想要申请和IFU朋辈导师进行沟通交流的学生，填写项目申请报名表。项目负责人将会进行科学的配对导师和学生。
                        </p>
                    </div>
                    <div class="row-content">
                        <h2>第三阶段</h2>
                        <p>
                            <span>导师联系学生:</span>
                            学生会收到导师的预约链接；学生可根据自己的时间sign
                            up，与导师进行线上一对一的沟通和交流。
                        </p>
                    </div>
                    <div class="row-content">
                        <h2>第四阶段</h2>
                        <p>
                            <span>导师学生交流:</span>
                            导师与学生将每月进行至少两次30-40分钟线下或线上会谈。导师计划为学期制，导师和学生也可在双方同意的基础上延长辅导。
                        </p>
                    </div>
                    <div class="row-content">
                        <h2>第五阶段</h2>
                        <p>
                            <span>季末反馈:</span>
                            每季度导师计划结束后，学生则会通过表格填写的形式，进行对项目的反馈和导师的评估。
                        </p>
                    </div>
                </div>
                <img
                    src="@/assets/peermentor/project-process-table.png"
                    alt="project process table"
                />
            </div>
        </section>
        <section class="join-peermentor">
            <div class="peermentor-envelop">
                <img src="@/assets/peermentor/envelop.png" alt="envelop" />
                <div class="letter-content">
                    <h2 class="half-center">加入成为我们IFU学员吧！</h2>
                    <p class="half-center">
                        如果近期因为学业繁忙，课程困难，而感到焦虑；如果生活中遇到不顺心的事，而感到郁闷，甚至不安；如果有任何事情让你产生困扰，请注册成为我们的学员，让我们帮助你吧！
                    </p>
                    <div class="letterpart-with-graph fit-letter">
                        <img
                            src="@/assets/peermentor/letter_left_graph.svg"
                            alt="letter left graph"
                        />
                        <p>IFU朋辈项目，伴你度过留学路上的底谷时光。</p>
                        <img
                            src="@/assets/peermentor/letter_right_group.svg"
                            alt="letter left graph"
                        />
                    </div>
                    <p class="half-center">
                        我们会一直在这里，陪伴着你走出这段低谷时光。你和我们分享的所有信息和内容都是保密性质的，你可以放心的和我们倾述你的苦恼，让我们一起分摊你的担忧。
                    </p>
                    <p class="half-center">
                        IFU朋辈导师们是受过特定培训，在各个领域都有有所涉猎。希望我们能够以倾听者，陪伴者和协助者的三重身份，帮助到你，让你不再迷茫和无助。
                    </p>
                    <div class="must-know-part half-center">
                        <h2>学员咨询须知</h2>
                        <ul>
                            <li>愿意主动与导师联系</li>
                            <li>尊重导师，要守时</li>
                            <li>在该学期内和导师进行谈话</li>
                            <li>
                                通过电子邮件/微信/电话与导师跟进，并将进展/困难告与导师
                            </li>
                            <li>正面看待导师反馈</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <div class="section-requirement">
            <div class="half-half-nop half-half orange-color">
                <h2>朋辈导师 要求</h2>
                <ul>
                    <li>有一颗愿意帮助他人，有志愿者精神的人；</li>
                    <li>乐于分享，享受帮助他人成长的感觉；</li>
                    <li>拥有积极向上，勇于求进的热情;</li>
                    <li>有良好的学术背景和优质的学生品行；</li>
                    <li>在不同领域有一定的经验 (领域不限);</li>
                    <li>能够参加朋辈导师团队的每月会议，培训和各类活动</li>
                </ul>
            </div>
            <div class="half-half-nop half-half blue-color">
                <h2>朋辈导师 福利</h2>
                <ul>
                    <li>获得定期的资深培训；</li>
                    <li>获得IFU志愿者证书；</li>
                    <li>有机会评选“年度优秀 导师服务奖”;</li>
                    <li>锻炼自身的领导和咨询的能力；</li>
                    <li>
                        收获自我的成长，通过反思和复盘获得对自我新的认知;
                    </li>
                    <li>拓展人际关系网，结实一群志同道合的小伙伴；</li>
                    <li>
                        IFU社交平台将会对优秀导师和学生的感人故事和真诚分享进行系列报道
                    </li>
                </ul>
            </div>
        </div>

        <!-- Keep the following commented code -->
        <!-- <section>
            <button class="button" @click="openEnvelope">
                OPEN
            </button>

            <div class="email">
                <div class="envelope">
                    <div class="back paper"></div>
                    <div class="note">
                        <div class="form-wrapper">
                            <form>
                                <label
                                    >Send a personal message to someone.</label
                                >
                                <textarea
                                    placeholder="What would you like to say?"
                                ></textarea>

                                <button type="submit">Share</button>
                            </form>
                        </div>
                    </div>
                    <div class="front paper"></div>
                </div>
            </div>
        </section> -->
        <section>
            <h2>IFU朋辈咨询项目火热招募进行中...</h2>
            <p class="peermentor-recruit-p">
                如果你希望找到一个群体、倾听、陪伴者，或是用自身的经验和能力，指导、鼓舞他人，就赶快点击下方链接报名加入吧！
            </p>
            <div class="section-requirement">
                <div class="half-half-nop">
                    <a
                        href="https://forms.gle/3EYR58psCfqTsR4Z7"
                        target="_blank"
                    >
                        <img
                            class="recruit-image"
                            src="@/assets/peermentor/tutor_graphic.svg"
                            alt="tutor recruitment"
                        />
                    </a>
                </div>
                <div class="half-half-nop">
                    <a
                        href="https://forms.gle/qrmRz8E6TgFFD7BK7"
                        target="_blank"
                    >
                        <img
                            class="recruit-image"
                            src="@/assets/peermentor/student_graphic.svg"
                            alt="tutor recruitment"
                        />
                    </a>
                </div>
            </div>
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
    methods: {
        openEnvelope() {},
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

h2 {
    font-weight: 600;
}

.peer-mentor-intro-section {
    border-top: 10px solid rgba(38, 156, 209, 0.8);
    border-bottom: 10px solid rgba(38, 156, 209, 0.8);
}

.whypeermentor {
    padding-bottom: 0px;
    .whypeermentor-upper {
        width: 70%;
    }

    .fourreason-outside {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 6%;

        .one-fourth {
            flex-basis: 21%;

            .circle-image {
                height: 135px;
                width: 135px;
                background: #c4c4c4;
                border-radius: 50%;
                margin-left: auto;
                margin-right: auto;
            }

            .center {
                text-align: center;
            }
        }
    }
}

.project-process {
    padding: 80px 0;

    .project-process-title {
        height: 97px;
        width: auto;
        background-color: rgba(38, 156, 209, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 100px;

        h1 {
            color: white;
        }
    }

    .project-process-images {
        height: auto;
        text-align: center;
        margin-bottom: 75px;

        .blue-person {
            margin: -100px 0 300px 295px;
            position: absolute;
        }
    }
    .bubbles-content {
        position: absolute;

        .bubbles-content-blue {
            margin: 75px 0 0 140px;

            li {
                text-align: left;
                padding: 0.25em 0;
            }

            h3 {
                text-align: left;
                margin: 0 0 0 25px;
            }
        }

        .bubbles-content-green {
            margin: -30px 0 0 400px;

            li {
                text-align: left;
                padding: 0.25em 0;
            }

            h3 {
                text-align: left;
                margin: 0 0 0 25px;
            }
        }

        .bubbles-content-right {
            margin: -260px 0 0 1050px;

            li {
                text-align: left;
                padding: 0.25em 0;
            }

            h3 {
                text-align: left;
                margin: 0 0 0 25px;
            }
            button {
                background-color: rgba(38, 156, 209, 0.8);
                text-align: center;
                margin-left: 32px;
                padding: 1em 4em;
            }
        }
    }
    .project-process-table {
        .table-content {
            position: absolute;
            width: 1440px;
            height: 803px;

            .row-content {
                display: grid;
                grid-template-columns: 169px 300px 118px auto 202px;
                grid-auto-rows: 160px;

                span {
                    font-weight: bold;
                }

                h2 {
                    margin: 10px 0 0 0;
                    grid-column: 2 / 3;
                    align-self: center;
                    justify-self: center;
                }
                p {
                    margin: 0;
                    grid-column: 4 / 5;
                    align-self: center;
                }
            }
        }
    }
}

.join-peermentor {
    padding-top: 0px;
    .peermentor-envelop {
        display: flex;
        justify-content: center;
        position: relative;

        .letter-content {
            position: absolute;
            // width: 50%;
            top: 6%;

            .half-center {
                width: 50%;
                margin-left: auto;
                margin-right: auto;
            }

            .fit-letter {
                width: 60%;
                margin-left: auto;
                margin-right: auto;
            }

            .letterpart-with-graph {
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-weight: bold;
            }

            .must-know-part {
                width: 50%;
                line-height: 31px;
                letter-spacing: 0.03em;
                background: #ffffff;
                padding: 20px 20px;
                border: 5px solid #efcbab;
                h2 {
                    margin-left: 20px;
                }
                ul {
                    width: 50%;
                }
            }
        }
    }
}

.section-requirement {
    display: flex;
    justify-content: center;

    .half-half-nop {
        flex-basis: 50%;
        text-align: center;
        color: #ffffff;
        ul {
            text-align: left;
            line-height: 31px;
        }

        .recruit-image {
            width: 350px;
            height: 100%;
        }
    }

    .half-half {
        padding: 80px 7%;
    }

    .orange-color {
        background: #ff9843;
    }
    .blue-color {
        background: #54bef5;
    }
}

.peermentor-recruit-p {
    width: 45%;
}

p {
    line-height: 31px;
    margin-bottom: 30px;

    &:last-of-type {
        margin-bottom: 50px;
    }
}

@media (max-width: $mobile-max-width) {
    .row {
        > div {
            flex-basis: 100%;
        }
    }

    .whypeermentor {
        .whypeermentor-upper {
            width: 100%;
        }

        .fourreason-outside {
            flex-direction: column;
        }
    }

    .section-requirement {
        flex-direction: column;
    }
}
</style>

<style>
/* letter animation style goes here */
button,
.button {
    -moz-border-radius: 25px;
    -webkit-border-radius: 25px;
    border-radius: 25px;
    background: #f7941e;
    border: none;
    color: #fff;
    display: block;
    float: left;
    margin-top: 5px;
    padding: 7px 17px;
    text-decoration: none;
    text-transform: uppercase;
}
button:hover,
.button:hover {
    background: #f9ab4f;
}
button:active,
.button:active {
    background: #da7a08;
}

.email {
    display: block;
    float: left;
    position: relative;
    width: 100%;
}
.email .envelope {
    display: block;
    height: 400px;
    margin: 0 auto;
    position: relative;
    width: 500px;
}
.email .envelope .paper {
    display: block;
    left: 0;
    position: absolute;
    top: 0;
}
.email .envelope .back:before {
    content: '';
    display: block;
    border-style: solid;
    border-width: 200px 250px 0px 250px;
    border-color: transparent transparent #999 transparent;
    height: 0px;
    width: 0px;
}
.email .envelope .back:after {
    content: '';
    display: block;
    background-color: #999;
    width: 500px;
    height: 200px;
}
.email .envelope .back.animate:before {
    -moz-transition: border-width;
    -o-transition: border-width;
    -webkit-transition: border-width;
    transition: border-width;
    -moz-transition-duration: 1s;
    -o-transition-duration: 1s;
    -webkit-transition-duration: 1s;
    transition-duration: 1s;
    border-width: 0 250px 200px 250px;
}
.email .envelope .front {
    top: 200px;
}
.email .envelope .front:after {
    content: '';
    display: block;
    background-color: #808285;
    height: 100px;
    width: 500px;
}
.email .envelope .front:before {
    content: '';
    display: block;
    border-style: solid;
    border-width: 200px 250px 0px 250px;
    border-color: transparent #808285;
    height: 0px;
    width: 0px;
}
.email .envelope .note {
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
    opacity: 0;
    display: block;
    height: 280px;
    margin: 0 auto;
    position: relative;
    top: 200px;
    width: 500px;
}
.email .envelope .note.animate {
    -moz-transition-property: top;
    -o-transition-property: top;
    -webkit-transition-property: top;
    transition-property: top;
    -moz-transition-duration: 2s;
    -o-transition-duration: 2s;
    -webkit-transition-duration: 2s;
    transition-duration: 2s;
    -moz-transition-delay: 1s;
    -o-transition-delay: 1s;
    -webkit-transition-delay: 1s;
    transition-delay: 1s;
    filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
    opacity: 1;
    top: 50px;
}
.email .envelope .form-wrapper {
    background: #fff;
    height: auto;
    margin: 10px auto 0 auto;
    padding: 20px;
    width: 90%;
}
.email .envelope .form-wrapper form {
    border: 1px dotted #000;
    height: 210px;
    padding: 20px;
}
.email .envelope .form-wrapper label {
    display: block;
    font-family: Helvetica, Arial, sans-serif;
    margin-bottom: 5px;
}
.email .envelope .form-wrapper textarea {
    display: block;
    float: left;
    min-height: 100px;
    overflow: scroll;
    width: 100%;
}
</style>
