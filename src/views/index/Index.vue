<template>
    <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- 首屏 -->
            <div class="swiper-slide slide1">
                <div class="slide1-head">
                    <div class="head-left">
                        <div class="head-logo"></div>
                        <div class="logo-txt">
                            <div class="logo-title">心愿秘境</div>
                            <div>你的愿望，我来实现</div>
                        </div>
                    </div>
                    <div class="head-right" @click="handleContact">联系我们</div>
                </div>
                <div class="slide1-main">
                    <div class="xq"></div>
                    <div class="main-head">年轻人的圆梦星空</div>
                    <div class="main-tag">梦幻星空 / 心愿流星 / 心灵驿站 / 冥想空间 / 圆梦互助</div>
                    <div class="main-wechat">
                        <div class="black-chat">
                            <i class="iconfont icon-xiaochengxu"></i>
                            微信小程序
                        </div>
                        <div class="code-box">
                            <div class="box-arrow"></div>
                            <div class="code-img"></div>
                            <div class="code-txt">微信扫码</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide slide2">
                <div class="star-txt">
                    心愿秘境是一款心愿发布及互助小程序，在这里你可以放飞一个愿望、送出一份祝福、收获一片希望、
                    点亮一颗星光，这片浩瀚星空，承载着无数梦想，让你思维明亮、让你心灵自由飞翔。
                </div>
                <div id="map"></div>
                <div class="star-txt2">
                    在这里每一颗心愿都被认真对待，让我们一起在这个充满奇迹的星辰大海中，种下一颗颗希望的种子，静待开花。
                </div>
            </div>
            <!-- 开启全新的心愿之旅 -->
            <div class="swiper-slide slide3">
                <div class="content">
                    <div class="bg"></div>
                    <div class="label">
                        <div class="label-title">
                            <div class="label-bg">JOURNEY OF WISHES</div>
                            开启全新的心愿之旅
                        </div>
                        <div class="label-main">
                            在璀璨的星空中，为自己或亲朋好友许下一个美好的愿望吧！在这个充满魔力的空间里，每一颗心愿都有机会遇到有缘人，并得到他们的帮助以实现梦想。为亲朋许愿时，只需输入TA的手机号码，就能将这份温暖的心愿直接传递给对方。无论庆祝生日、节日祝福还是日常生活中的美好瞬间，这款神奇的小程序都能帮你完美传达心意。
                        </div>
                    </div>
                </div>
            </div>
            <!-- 心愿互助梦想成真 -->
            <div class="swiper-slide slide4">
                <div class="content">
                    <div class="label">
                        <div class="label-title">
                            <div class="label-bg">WISH MUTUAL ASSISTANCE</div>
                            心愿互助梦想成真
                        </div>
                        <div class="label-main">
                            我们坚信每个人的心愿都值得被看见、被实现。这里不仅是一个释放心灵的福地，更是一个充满爱与支持的港湾。当你勇敢地分享自己的愿望时，也就开启了帮助他人圆梦的大门。在这里，每一个小小的行动都能汇聚成一股强大的力量，让梦想照进现实。让我们携手同行，在这条共同追求美好生活的旅程上，不仅为自己点亮希望之光，也为他人带来温暖与光明。加入我们，一起见证更多心愿成真的奇迹吧！
                        </div>
                    </div>
                    <div class="bg"></div>
                </div>
            </div>
            <!-- 表达真实心声 -->
            <div class="swiper-slide slide5">
                <div class="content">
                    <div class="bg"></div>
                    <div class="label">
                        <div class="label-title">
                            <div class="label-bg">EXPRESS ONE'S TRUE FEELINGS</div>
                            表达真实心声
                        </div>
                        <div class="label-main">
                            在这里，你可以自由地表达真实心声，不仅记录生活中的有趣瞬间，也别忘了大方地点赞和评论。无论是一个小小的想法还是微妙的情绪波动，都能迅速获得回应和支持。让我们一起分享生活的点点滴滴，感受彼此之间的温暖与共鸣吧！
                        </div>
                    </div>
                </div>
            </div>
            <!-- 心愿力机制加持 -->
            <div class="swiper-slide slide6">
                <div class="content">
                    <div class="label">
                        <div class="label-title">
                            <div class="label-bg">WISHFUL THINKING MECHANISM BLESSING</div>
                            心愿力机制加持
                        </div>
                        <div class="label-main">
                            当你许下心愿、分享心愿、为他人的心愿助力、援助他人实现愿望或每天登录签到时，你的每一个动作都会为你增加心愿力值，这些心愿力值不仅能够助你参与幸运抽奖，还能用来兑换精美的礼品和服务支持。通过积极互动与贡献，你不仅能为自己带来更多的机会和奖励，还能在帮助他人的同时感受到满满的成就感。
                        </div>
                    </div>
                    <div class="bg"></div>
                </div>
            </div>
            <!-- 联系我们 -->
            <div class="swiper-slide slide7">
                <div class="content">
                    <div class="bg"></div>
                    <div class="label">
                        <div class="label-title">
                            <div class="label-bg">CONTACT US</div>
                            联系我们
                        </div>
                        <div class="contact-item" v-for="(item, index) in contactData" :key="index">
                            <div class="contact-label">
                                <span>{{ item.label }}</span>
                                <span class="word">{{ item.word }}</span>
                            </div>
                            <div class="line"></div>
                            <div class="contact-txt">{{ item.txt }}</div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <span>心愿秘境小程序官方网站</span>
                        <span @click="handleBA" class="ba-box">豫ICP备2024100561号-1</span>
                        <span>联系我们：0379-64569290</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import Swiper from 'swiper';
import { Mousewheel } from 'swiper/modules';
import { init, init2D } from '../../utils/spthree.js';
import 'swiper/css';

let swiper;
// 初始化
const initSwiper = () => {
    swiper = new Swiper(
        '.swiper',
        //  {
        //     // speed: 400,
        //     spaceBetween: 100,
        //     direction: 'vertical',
        //     mousewheel: true
        // }
        {
            modules: [Mousewheel],
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 30,
            mousewheel: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        }
    );
};

const contactData = [
    {
        label: '电话',
        word: 'Tel',
        txt: '0379-64569290、13210502188、18697792299'
    },
    {
        label: 'QQ',
        word: 'Qq',
        txt: '807524250'
    },
    {
        label: '地址',
        word: 'Address',
        txt: '河南省洛阳市高新区北航科技园4号楼6F'
    },
    {
        label: '网址',
        word: 'Website',
        txt: 'www.deepjs.com.cn'
    }
];
const initMap = () => {
    init({
        containerRoot: document.getElementById('map'),
        canvas: document.querySelector('#starrySkyThree'),
        stats: false
    });
};

const handleContact = () => {
    const lastIndex = swiper.slides.length - 1;
    // 跳转到最后一页
    swiper.slideTo(lastIndex);
};

const handleBA = () => {
    window.open('https://beian.miit.gov.cn');
};
onMounted(() => {
    initSwiper();
    initMap();
});
</script>
<style lang="scss" scoped>
@use '../../assets/styles/spthree.css';
@use './index.scss';
</style>
