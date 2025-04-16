<template>
    <header class="header">
        <img src="../../assets/images/logo.png" alt="" />
    </header>
    <main class="main">
        <div class="title">
            <div class="title-text">
                <p>一款简单的线上许愿工具，</p>
                <p>在这里，每一个愿望都会被认真对待，让我们一起在这个充满奇迹的小程序中，</p>
                <p>种下一颗颗希望的种子，静待花开</p>
            </div>
        </div>
        <div class="desc">
            <div class="desc-title">
                <div>产品简介</div>
                <div>Product description</div>
            </div>
            <div class="desc-cont">
                <div class="desc-item" v-for="item in descData" :key="item.id">
                    <div class="desc-item-text">
                        <div>{{ item.title }}</div>
                        <div>{{ item.subTitle }}</div>
                    </div>
                    <div class="desc-item-img">
                        <img :src="getImg(item.imgUrl)" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer class="footer">
        <div class="footer-text">
            <p>心愿秘境小程序官方网站</p>
            <p @click="handleBA" class="ba-box">豫ICP备2024100561号-1</p>
            <p>联系我们：0379-64569290</p>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import img1 from '../../assets/images/1.png';
import img2 from '../../assets/images/2.png';
import img3 from '../../assets/images/3.png';
import img4 from '../../assets/images/4.png';
import img5 from '../../assets/images/5.png';
const descData = ref([
    {
        id: 1,
        title: '开启你的秘境',
        subTitle: '探秘之旅由此启',
        imgUrl: img1
    },
    {
        id: 2,
        title: '种下愿望的种子',
        subTitle: '愿望种子待花开',
        imgUrl: img2
    },
    {
        id: 3,
        title: '助力TA人的愿望',
        subTitle: '助梦飞翔愿成真',
        imgUrl: img3
    },
    {
        id: 4,
        title: '许愿秘境空间',
        subTitle: '秘境藏愿梦成真',
        imgUrl: img4
    },
    {
        id: 5,
        title: '我的愿望清单',
        subTitle: '清单载梦愿相随',
        imgUrl: img5
    }
]);

const getImg = (url: string) => {
    return new URL(url, import.meta.url).href;
};

const handleBA = () => {
    window.open('https://beian.miit.gov.cn');
};
</script>

<style scoped lang="scss">
@use './home.scss';
</style>
