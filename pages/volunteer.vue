<template>
    <div>
        <Banner
            title="IFU 校园志愿者"
            description="IFU校园志愿者是IFU全体志愿者中的一类。 其职责是在围绕着“让留学家庭更安心”的使命上，参与紧急事件援助、正确翻译、传播学校信息、社群答疑，以减少留学家庭之间信息差，留学生海外焦虑问题。目前IFU校园志愿者遍布北美25所高校，以学生社团或单人志愿者的形式在校园存在。"
            button-text="成为校园志愿者"
            :to="localePath('/career')"
            :background="bannerImage"
        />
        <div class="section-mission">
            <section>
                <h2>校园志愿者的使命</h2>
                <p>
                    IFU全体志愿者的使命是达成IFU
                    NGO“让留学家庭更安心”的社会目标。我们想要减少或解决一直被社会所忽视的留学生群体及背后家庭所面临的问题，例如留学安全、心理压力、文化冲突、学术就职压力等等。我们希望通过减少学生家长之间的信息代沟，在紧急情况时为家长提供校方联系，为学生提供法律、学术、心理援助等方式来完成我们的使命与组织的社会目标。
                </p>
            </section>
            <div>
                <img src="@/assets/volunteer/section-mission.png" />
            </div>
        </div>
        <div class="section-activity">
            <div>
                <img />
                <h2>紧急情况</h2>
                <p>
                    IFU能够在紧急情况发生时，例如：失联、心理精神、法律、学术问题，及时地帮助家长通过联系IFU工作人员以及相对应校园志愿者获得帮助。
                </p>
            </div>
            <div>
                <img />
                <h2>信息传递</h2>
                <p>
                    IFU通过线上和线下信息分享的方式来减少留学家庭之间的信息代沟。分享内容包括：校园官方信息、留学生第一视角的校园、生活体验、学长学姐经验等。让留学生父母更了解孩子海外生活，也让孩子更理解父母所忧，成为彼此之间的信息桥梁。
                </p>
            </div>
            <div>
                <img />
                <h2>特定项目</h2>
                <p>
                    IFU针对部分留学问题制定了特定项目去解决。例如：IFU Peer
                    Mentor Program、多多罗学术项目、暑期学长学姐高校嘉年华等。
                </p>
            </div>
        </div>
        <section class="section-school">
            <div>
                <h2>美国东部</h2>
            </div>
            <div><h2>美国西部</h2></div>
            <div><h2>加拿大&英国</h2></div>
            <div><h2>新加坡</h2></div>
        </section>
        <section>
            <h2>活动回顾</h2>
            <p>
                月报、年报总结。加下载report 链接。月报、年报总结。加下载report
                链接。月报、年报总结。加下载report
                链接。月报、年报总结。加下载report
                链接。月报、年报总结。加下载report
                链接。月报、年报总结。加下载report 链接。
            </p>
        </section>
        <section>
            <div>
                <h2>成为校园志愿者</h2>
                <p>
                    IFU致力于减少留学安全问题，提升留学家庭和谐度，改善留学家庭信息不对称，减少留学在外不平等的社会问题，着重服务于留学生家长，以及关注其孩子的心理健康问题。我们将通过3大核心方式来完成我们的使命：紧急情况、信息传递、校园官方信息翻译。
                </p>
            </div>
            <div>
                <div>
                    <h3>作为校园志愿者你将会</h3>
                    <ul>
                        <li>
                            在紧急情况发生时，及时帮助家长联系到校园志愿者获得帮助。
                        </li>
                        <li>
                            通过传递留学生第一视角的校园、生活信息，来减少留学家庭之间的信息代沟。
                        </li>
                        <li>
                            在各学校官方发出重大政策通知时，及时把学校官方信息进行翻译，传递给家长学生。
                        </li>
                    </ul>
                    <br />
                    <h3>作为校园志愿者你需要是</h3>
                    <ul>
                        <li>
                            海外大学在读学生或毕业生
                        </li>
                        <li>
                            中英双语熟练优先
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>准备好加入我们了吗？</h2>
                    <p>
                        感谢你愿意为留学群体，为IFU让留学家庭更安心的使命做出一份贡献～
                    </p>
                    <Button to="/career">提交申请</Button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Button from '@/components/Button.vue';
import bannerImage from '@/assets/volunteer/banner.png';

export default {
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
