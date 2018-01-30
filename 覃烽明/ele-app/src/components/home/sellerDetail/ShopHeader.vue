<template>
    <div class="header">
        <span class="back" @click="goback()"> ＜ </span>
        <div class="top-bg">
            <img :src="headerData.bgimg">
        </div>
        <div class="shop-logo">
            <img :src="headerData.logo">
        </div>
        <div class="shop-main-msg">
            <div class="shop-name">
                <h2>{{headerData.name}}</h2>
            </div>
            <div class="shop-msg">
                <span>{{headerData.rating}}</span>
                <span>月售{{headerData.recent_order_num}}单</span>
                <span>{{headerData.delivery_mode}} 约{{headerData.time}}分钟</span>
                <span>距离{{headerData.distance}}m</span>
            </div>
            <div class="shop-tips">
                <span>{{headerData.promotion_info}}</span>
            </div>
        </div>
        <div class="shop-active" @click="goActivepage()">
            <div class="detail-act">
                <span class="active" v-for="(act, index) in headerData.activities" :key="index"
                    v-show="index<1">
                    <charter-icon :name="act.icon_name" :color="act.icon_color"></charter-icon>
                    <span>{{act.description}}</span>
                </span>
               
            </div>
            <div class="detail-act-num" v-if="headerData.activities">{{headerData.activities.length}}个活动</div>
        </div>
        <div class="shop-welfare">
            <div class="wel-box">
                <p class="welfare">5元专享红包</p>
                <a class="gethb">领取</a>
            </div>
        </div>
        
    </div>
</template>
<script>
import {getSellerData} from '../../../service/DetailService'
import CharterIcon from '../../../common/CharterIcon.vue'
import Vuex from 'vuex'
export default {
    name: 'shop-header',
    components: {
        [CharterIcon.name]: CharterIcon
    },
    data(){
        return {
            headerData: []
        }
    },
        computed: {
        ...Vuex.mapState({
            lon: state=>state.location.lon,
            lat: state=>state.location.lat
        })
    },
    methods: {
        requestData(){
            getSellerData(this.$route.query.id, this.lat, this.lon)
            .then((result)=>{
                this.headerData=result;
                
            });
        },
        goback(){
            this.$router.back();
        },
        goActivepage(){
            this.center.$emit("getshow")
        }
    },
    mounted(){
        this.requestData();
    }
}
</script>
<style>
.header{
    width: 100%;
    background: #fff;
    z-index: 10;
    position: relative;
}
.back{
    display: block;
    width: 0.4rem;
    height: 0.4rem;
    font-size: 0.3rem;
    position: absolute;
    left: 0.1rem;
    top: 0.1rem;
    color: #fff;
}
.top-bg{
    width: 100%;
    height: 0.65rem;
    background: #60505d;
}
.top-bg img{
    width: 100%;
    height: 0.65rem;
    background-size: cover;
}
.shop-logo{
    width: 0.62rem;
    height: 0.62rem;
    position: absolute;
    left: 50%;
    margin-left: -0.32rem;
    margin-top: -0.42rem;
}
.shop-logo img{
    width: 100%;
}
.shop-main-msg{
    margin-top: 0.29rem;
}
.shop-name h2{
    text-align: center;
    font-size: 0.2rem;
    font-weight: bold;
}
.shop-msg{
    text-align: center;
}
.shop-msg span{
    font-size: 0.11rem;
    margin-right: 0.05rem;
}
.shop-tips{
    margin-top: 0.06rem;
    width: 100%;
}
.shop-tips span{
    display: inline-block;
    margin-left: 0.77rem;
    width: 2.05rem;
    font-size: 0.09rem;
    text-align: center;
    color: #999;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.shop-active{
    display: flex;
    padding: 0.02rem 0.04rem;
    border: 1px solid #eee;
    margin: 0.1rem 0.25rem 0;
    position: relative;
}
.active{
    font-size: 0.08rem;
}
.detail-act{
    display: inline-block;
    font-size: 0.11rem;
    color: #999;
    
}
.detail-act-num{
    display: inline-block;
    font-size: 0.08rem;
    color: #999;
    position: absolute;
    right: 0.2rem;
}
.detail-act-num::after{
    position: absolute;
    top: 0.05rem;
    right: -0.13rem;
    content: '';
    display: block;
    width: 0;
    height: 0;
    border: 5px solid #999;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
}
.shop-welfare{
    width: 100%;
    margin-top: 0.08rem;
}
.wel-box{
    text-align: center;
    width: 1.18rem;
    height: 0.25rem;
    background: url('/static/img/hbbg.png');
    background-size: contain;
    margin: 0 auto;
}
.welfare{
    color: #5c1603;
    font-size: 0.11rem;
    font-weight: bold;
    display: inline-block;
}
.shop-welfare .gethb{
    font-size: 0.11rem;
    font-weight: bold;
    color: #5c1603;
    display: inline-block;
    margin-left: 0.09rem;
}

</style>