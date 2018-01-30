<template>
    <div>
        <div class="leftMenu">
            <ul>
                <li class="left-menu" v-for="(item, index) in titleData" :key="index" @click="toTarget(index)">
                    <span class="menu-img" v-if="item.title_icon"><img :src="item.title_icon"/></span>
                    <span class="menu-left">{{item.title}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {getSellerDetailData} from '../../../service/DetailService'
import Vuex from 'vuex'
export default {
    name: 'shop-leftmenu',
    data(){
        return {
            titleData: []
        }
    },
    methods: {
        getTitleData(){
            getSellerDetailData(this.$route.query.id)
            .then((result)=>{
                this.titleData=result;
            })
        },
        toTarget(index){
            // this.className+="active";
        }
    },
    mounted(){
        this.getTitleData();
    }
}
</script>

<style>
.leftMenu{
    float: left;
    width: 0.74rem;
    background: #fff;
}
.left-menu{
    width: 0.74rem;
    padding: 0.15rem 0.08rem;
    line-height: 0.12rem;
    border-bottom: 1px solid #e7e7e7;
    background: #f8f8f8;
    padding-left: 0.07rem;
    box-sizing: border-box;

}
.left-menu.active{
    background: #fff;
}
.menu-img{
    width: 0.13rem;
    height: 0.13rem;
    margin-top: 0.16rem;
    display: inline-block;
}
.menu-img img{
    width: 0.13rem;
}
.menu-left{
    font-size: 0.11rem;
    color: #666;
}
</style>