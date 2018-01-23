<template>
    <div class="header">
        <div class="top-bg"></div>
        <div class="shop-logo">
            <img src="https://fuss10.elemecdn.com/e/da/c4e5abab06dea4b64d041495a9381png.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/">
        </div>
        <div class="shop-main-msg">
            <div class="shop-name">
                <h2>永和大王</h2>
            </div>
            <div class="shop-msg">
                <span>5</span>
                <span>月销960单</span>
                <span>蜂鸟转送 约23分钟</span>
                <span>距离798m</span>
            </div>
            <div class="shop-tel">客服电话: 4000979797</div>
        </div>
        <div class="shop-active">
            <div class="detail-act">
                <span>首单</span>
                <span>新用户下单立减17元</span>
            </div>
            <div class="detail-act-num">3个活动</div>
        </div>
        <div class="shop-welfare">
            <div class="wel-box">
                <p class="welfare">5元专享红包</p>
                <button>领取</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'shop-header'
  
}
</script>
<style>
.header{
    width: 100%;
    
}
.top-bg{
    width: 100%;
    height: 0.65rem;
    background: #60505d;
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
.shop-tel{
    font-size: 0.11rem;
    text-align: center;
    color: #999;
    margin-top: 0.06rem;
}
.shop-active{
    display: flex;
    padding: 0.02rem 0.04rem;
    border: 1px solid #eee;
    margin: 0.1rem 0.25rem 0;
    position: relative;
}
.detail-act{
    display: inline-block;
    font-size: 0.11rem;
    color: #999;
    
}
.detail-act-num{
    display: inline-block;
    font-size: 0.11rem;
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
     border: 1px solid #fde6e3;
}
.welfare{
    color: #5c1603;
    font-size: 0.11rem;
    font-weight: bold;
    display: inline-block;
}
.shop-welfare button{
    border: none;
    font-size: 0.11rem;
    font-weight: bold;
    background-color: #fff;
    color: #5c1603;
    display: inline-block;
}
</style>