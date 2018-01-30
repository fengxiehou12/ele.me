<template>
    <div class="rightDetail">
        <ul>
            <li class="menu-list" v-for="(item, index) in dataList" :key="index">
                <div>
                    <div class="hot-adv">
                        <span class="hot-sell">{{item.title}}</span>
                        <span class="hot-descr">{{item.description}}</span>
                    </div>
                    <div class="main-msg" v-for="(res, index) in item.food" :key="index">
                        <div v-if="res.price>0">
                            <div class="imgs">
                                <img :src="res.img"/>
                            </div>
                            <div class="menu-msg">
                                <h4 class="menu-tit">{{res.name}}</h4>
                                <p class="menu-descr">{{res.description}}</p>
                                <p class="sale-rating">月售{{res.month_sales}}份 好评率{{res.satisfy_rate}}%</p>
                                <!-- <div class="shop-discount" v-if="res.activity!=null">
                                    <span class="discount">{{res.activity.activity_text}}</span>
                                    <span class="discount-num">{{res.activity.benefit_text}}</span>
                                </div> -->
                                <div class="menu-chos">
                                <span class="discount-price">¥ <em>{{res.price}}</em></span>
                                    <!-- <span class="origin-price">¥{{res.specfoods.original_price}}</span> -->
                                    <div class="add-order">
                                    <!-- <span class="my-add">－</span>
                                        <span class="my-num">2</span> --> 
                                        <span class="my-add">+</span>
                                        <!-- <span class="my-size">选规格</span> -->
                                    </div>
                                    <!-- <div class="choose-size"></div>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </li>
        </ul>
    </div>
</template>

<script>
import {getSellerDetailData} from '../../../service/DetailService'
import Vuex from 'vuex'
export default {
    name: 'shop-detailmenu',
    data(){
        return {
            dataList: []
        }
    },
    methods: {
        requestData(){
             getSellerDetailData(this.$route.query.id)
            .then((result)=>{
                this.dataList=result;
                
            });
        }
    },
    mounted(){
        this.requestData();
    }
}
</script>

<style scoped>
.rightDetail{
    float: left;
    width: 2.85rem;
    padding-left: 0.1rem;
    background: #fff;
    box-sizing: border-box;
}
.menu-list{
    overflow: hidden;
    padding-bottom: 0.2rem;
}
.hot-adv{
    width: 100%;
    height: 0.27rem;
    line-height: 0.27rem;
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 0.09rem;
}
.hot-sell{
    font-size: 0.13rem;
    font-weight: bolder;
    color:#666;
    float: left;
}
.hot-descr{
    font-size: 0.09rem;
    color: #999;
    width: 1.6rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    margin-left: 0.08rem;
}
.main-msg{
    overflow: hidden;
    margin-bottom: 0.1rem;
}
.imgs{
    float: left;
    width: 0.72rem;
    height: 0.73rem;
}
.imgs img{
    width: 0.72rem;
    border-radius: 0.01rem;
}
.menu-msg{
    width: 1.83rem;
    float: left;
    margin-left: 0.1rem;
}
.menu-tit{
    width: 1.7rem;
    font-size: 0.14rem;
    color: #333;
    font-weight: bolder;
}
.menu-descr{
    margin-top: 0.02rem;
    width: 1.68rem;
    font-size: 0.06rem;
    color: #999;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.sale-rating{
    margin-top: 0.03rem;
    font-size: 0.1rem;
    color: #666;
    margin-bottom: 0.05rem;
}
.shop-discount{
    display: block;
    overflow: hidden;
}
.discount{
    padding: 0.005rem 0.025rem;
    height: 0.13rem;
    font-size: 0.1rem;
    color: #fff;
    background-image:linear-gradient(90deg,#ff7416,#ff3c15 98%);
    float: left;
}
.discount-num{
    font-size: 0.07rem;
    color: #f07373;
    border: 1px solid #ff3c15;
    border-left: none;
    float: left;
    padding: 0 0.02rem;
}
.menu-chos{
    position: relative;
}
.discount-price{
    font-size: 0.1rem;
    color: #f60;
}
.discount-price>em{
    font-size: 0.16rem;
    font-weight: bolder;
}
.origin-price{
    font-size: 0.1rem;
    color: #666;
    text-decoration: line-through;
}
.add-order{
    position: absolute;
    right: 0;
    top: 0;
}
.add-order .my-add{
    width: 0.2rem;
    height: 0.2rem;
    line-height: 0.18rem;
    border-radius: 50%;
    background: #3199e8;
    color: #fff;
    font-size: 0.2rem;
    font-weight: bolder;
    text-align: center;
    display: inline-block;
}
.my-size{
    width: 0.5rem;
    height: 0.24rem;
    line-height: 0.24rem;
    background: #3199e8;
    font-size: 0.12rem;
    color: #fff;
    display: inline-block;
    text-align: center;
    border-radius: 0.2rem;
}
.my-num{
    width: 0.24rem;
    height: 0.24rem;
    line-height: 0.24rem;
    text-align: center;
    font-size: 0.15rem;
    color: #666;
    display: inline-block;
}
</style>
