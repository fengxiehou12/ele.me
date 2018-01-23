<template>
    <div class="limit">
        <div class="limit-tit">
            <span class="line-left"></span>
            <i></i>
            <span class="title">限时好礼</span>
            <span class="line-right"></span>
        </div>
        <p class="descrition">金币换好礼</p>
        <div class="limit-msg">
            <div class="limit-detail" v-for="(item,index) in limitData" :key="index">
                <a class="limit-list" v-show="index<3" :href="item.url"> 
                    <span class="discount">{{item.corner_marker}}</span>
                    <img :src="item.img">
                    <p class="discount-msg">{{item.title}}</p>
                    <p class="sell">¥{{item.points_required}}金币</p> 
                    <i class="oldprice">¥{{item.original_price}}</i>
                </a>
            </div>
        </div>
        <p class="more">查看更多></p>
    </div>
</template>

<script>                  
import {getlimit} from '../../service/DiscoverService' 
export default {
    name: 'limit-active',
     data(){
        return{
            limitData: []
        }
    },
    methods: {
        requestData(){
            getlimit()
            .then((result)=>{
                this.limitData = result
            })
        }
    },
    mounted(){
        this.requestData();
    }
}
</script>
<style scoped>
.limit{
    width: 100%;
    height: 2.91rem;
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-bottom: 0.1rem;
}
.limit-tit{
    text-align: center;
    margin-top: 0.2rem;
}
.line-left{
    display: inline-block;
    border: 1px solid #333;
    width: 0.17rem;
    height: 0;
    margin-bottom: 0.05rem;
    position: relative;
}
.line-left::after{
    content: '';
    position: absolute;
    width: 0.05rem;
    height: 0.05rem;
    border-radius: 50%;
    background: #333;
    right: -0.01rem;
    top: -0.02rem;
}
.line-right{
    display: inline-block;
    border: 1px solid #333;
    width: 0.17rem;
    height: 0;
    margin-bottom: 0.05rem;
    position: relative;
}
.line-right::before{
    content: '';
    position: absolute;
    width: 0.05rem;
    height: 0.05rem;
    border-radius: 50%;
    background: #333;
    left: -0.01rem;
    top: -0.02rem;
}
.title{
    font-size: 0.17rem;
    font-weight: bold;
}
.descrition{
    font-size: 0.11rem;
    color: #999;
    text-align: center;
}
.limit-msg{
    margin-top: 0.2rem;
    margin-left: 0.14rem;
    
}
.limit-detail{
    display: inline-block;
}
.limit-list{
    display: inline-block;
    overflow: hidden;
    margin-right: 0.06rem;
    position: relative;
}
.discount{
    color: #fff;
    background: #413d3c;
    font-size: 0.11rem;
    padding: 0.01rem 0.03rem;

    position: absolute;
    left: 0;
    top: 0;

}
.limit-msg img{
    width: 1.07rem;
    height: 1.04rem;
}
.discount-msg{
    font-size: 0.12rem;
    color: #333;
    margin-top: 0.13rem;
}
.sell{
    display: inline;
    font-size: 0.12rem;
    color: #ff5339;
}
.oldprice{
    font-size: 0.09rem;
    color: #aaa;
    text-decoration: line-through;
}
.more{
    font-size: 0.13rem;
    color: #999;
    text-align: center;
    margin-top: 0.24rem;
}
</style>



