<template>
    <div ref="banner" class="banner swiper-container">
        <div class="swiper-wrapper">
            <ul ref="slide" class="meun swiper-slide" v-for="(data, index) in bannerData" :key="index">
                <li v-for="(bannerItem, index) in data" :key="index">
                    <img :src="bannerItem.img"/>
                    <span>{{bannerItem.name}}</span>
                </li>
            </ul>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- <div class="adv">
            <img src="https://fuss10.elemecdn.com/3/c8/45b2ec2855ed55d90c45bf9b07abbpng.png?imageMogr/format/webp/thumbnail/!710x178r/gravity/Center/crop/710x178/">
        </div> -->
    </div>
</template>

<script>
import {getBannerdata} from '../../../server/HomeService'
export default {
    name: 'home-banner',
    data(){
        return {
            bannerData: []
        }
    },
    methods: {
        initData(){
            //请求banner数据
            getBannerdata('22.625871', '113.83794', [
                'main_template',
                'favourable_template',
                'svip_template'
            ])
            .then(result=>{
                this.bannerData = result;
                this.$nextTick(()=>{
                    this.bannerSwiper.update();
                })
            })
        }
        
    },
    mounted(){
        this.bannerSwiper = new Swiper(this.$refs.banner, {
            pagination: '.swiper-pagination'
        });
        this.initData();
    }
}
</script>
<style scoped>
.banner{
    width: 100%;
    height: 2.68rem;
    background: #fff;
}
.menu{
    height:1.73rem;
    width: 100%;
    
}
.meun li{
    float: left;
    width: 25%;
    height: 0.72rem;
    text-align: center;
    margin: 0.1rem auto;
}
.meun li img{
    width: 0.45rem;
    height: 0.45rem;
    margin: 0 0.2rem;
}
.meun li span{
    font-size: 0.12rem;
    color: #666;
}
.adv{
    width: 100%;
    height: 0.95rem;
}
.adv img{
    width: 3.4rem;
    height: 0.78re;
    margin: 0 auto;
}
</style>