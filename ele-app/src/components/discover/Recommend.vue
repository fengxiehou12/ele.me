<template>
    <div class="recommend">
        <div class="recommend-tit">
            <span class="line-left"></span>
            <i></i>
            <span class="title">每日推荐</span>
            <span class="line-right"></span>
        </div>
        <p class="descrition">你的口味,我都懂得</p>
        <div class="recommend-msg">
           <ul>
               <li class="detail-list" v-for="item in recommendData">
                   <a href="#">
                       <img :src="item.img"/>
                       <div class="detail-msg">
                            <h3>{{item.name}}</h3>
                            <p>月售{{item.month_sales}}份 {{item.satisfy_rate}} 好评率100% </p>
                            <span class="money">¥<i>{{item.price}}</i></span>
                            <span class="det-discount" v-if="item.discount_activity">{{item.discount_activity}}</span>
                            <div class="shopbox">
                                <span></span>
                                <span class="shopname">{{item.restaurant_name}}</span>
                            </div>
                       </div>
                   </a>
               </li>
           </ul>
        </div>
        <p class="more">查看更多></p>
    </div>
</template>

<script>
import {getRecommend} from '../../service/DiscoverService'

export default {
    name: 'recommend',
    data(){
        return{
            recommendData: []
        }
    },
    methods: {
        requestData(){
            getRecommend(31.23037, 121.473701, 0, 6)
            .then((result)=>{
                this.recommendData = result
            })
        }
    },
    mounted(){
        this.requestData();
    }
}
</script>
<style>
.recommend{
    width: 100%;
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-bottom: 0.1rem;
}

.recommend-tit{
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
.recommend-msg{
    margin-top: 0.2rem;
    
}
.recommend-msg ul{
    overflow: hidden;
}
.recommend-list{
    display: inline-block;
    overflow: hidden;
    margin-right: 0.06rem;
    position: relative;
}

.detail-list{
    width: 1.66rem;
    height: 2.52rem;
    border: 1px solid #eee;
    margin-left: 0.08rem;
    margin-bottom: 0.08rem;
    float: left;
}
.detail-list a>img{
    width: 100%;
}
.detail-msg{
    padding-left: 0.09rem;
    padding-right: 0.08rem;
}
.detail-msg h3{
    font-size: 0.14rem;
    font-weight: bold;
    margin-top: 0.01rem;
}
.detail-msg p{
    font-size: 0.07rem;
    color: #666;
}
.money{
    font-size: 0.07rem;
    color: #fc5d02;
}
.money i{
    font-size: 0.15rem;
    font-weight: bold;
}
.det-discount{
    font-size: 0.05rem;
    color: #f6697a;
    border: 1px solid #f6697a; 

}
.shopbox{
    border-top: 1px dashed #eee;
    margin-top: 0.05rem;
    height: 0.16rem;
    line-height: 0.16rem;
}
.shopname{
    font-size: 0.1rem;
    color: #999;
}
.recommend .more{
    font-size: 0.13rem;
    color: #999;
    text-align: center;
    margin-top: 0.14rem;
    margin-bottom: 0.14rem;
}
</style>



