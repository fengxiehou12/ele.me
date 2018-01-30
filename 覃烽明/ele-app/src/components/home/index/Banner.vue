<template>
    <div>
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
        <div class="swiper-pagination pages" v-show="bannerData.length > 1"></div>
        
    </div>
    <div class="adv">
            <img src="https://fuss10.elemecdn.com/3/c8/45b2ec2855ed55d90c45bf9b07abbpng.png?imageMogr/format/webp/thumbnail/!710x178r/gravity/Center/crop/710x178/">
    </div>
    </div>
</template>

<script>
import {getBannerdata} from '../../../service/HomeService'
import Vuex from 'vuex'
export default {
    name: 'home-banner',
    data(){
        return {
            bannerData: []
        }
    },
    computed: {
        ...Vuex.mapState({
            lon: state=>state.location.lon,
            lat: state=>state.location.lat
        })
    },
    methods: {
        initData(){
            //请求banner数据
            getBannerdata(this.$store.state.location.lat, this.$store.state.location.lon, [
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
        this.$watch('lat',()=>{
            if (this.$store.state.location.lat) {
                 this.initData();
            }
        })
       
    }
}
</script>
<style scoped>
.banner{
    width: 100%;
    height: 1.72rem;
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
    margin: 0.1rem auto 0;
}
.meun li img{
    width: 0.42rem;
    margin: 0 auto;
}
.meun li span{
    font-size: 0.12rem;
    color: #666;
    text-align: center;
}
.adv{
    width: 100%;
    height: 0.95rem;
}
.adv img{
    width: 90%;
    height: 0.78rem; 
    margin: 0 auto;
}
.pages{

    bottom: 0;
}
</style>