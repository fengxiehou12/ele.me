<template>
    <sub-page pageId="address" class="address-page">
        <header-top title="请选择收货地址" @goBack="goBackAction()"></header-top>
        <div class="address-search">
            <input class="inps" type="search" v-model="keyword" placeholder="请输入地址"/>    
        </div>
        <div class="current-address" v-show="!isSearch"> 
            <h2>当前地址:</h2>
            <div class="getpositon">
                <span class="cur-addr">{{this.$store.state.location.address}}</span>
                <span class="refresh">重新定位</span>
            </div>
            
            </div>
        <ul v-show="isSearch">
            <li class="address-item one-bottom-px" v-for="(item, index) in addressList" :key="index"
            @click="selectAction(index)">
            <h4 class="local-name">{{item.name}}</h4>
            <p class="local-detail">{{item.address}}</p>
        </li>
        </ul>
    </sub-page>
</template>

<script>
import SubPage from '../../common/SubPage.vue'
import Top from '../../common/Top.vue'
import { searchAddressList } from '../../service/HomeService'
import Vuex from 'vuex'
export default {
    components: {
        [SubPage.name]: SubPage,
        [Top.name]:Top
        
    },
    data(){
        return {
            keyword: '',
            isSearch: false,
            addressList: [],
            limit: 20
        }
    },
    computed: {
        ...Vuex.mapState({
            lon: state=>state.location.lon,
            lat: state=>state.location.lat
        }),
        offset(){
            return this.addressList.length;
        }
    },
    watch: {
        keyword(){
            clearTimeout(this.timer);
            this.timer = setTimeout(()=>{
                if(this.keyword){
                    this.requestData();
                    this.isSearch = true;
                }else{
                    this.isSearch = false;
                }
            }, 500);
        }
    },
    methods: {
        goBackAction(){
            this.$router.back();
        },
        //搜索地址请求事件
        requestData(){
            searchAddressList(
                this.keyword,
                this.offset,
                this.limit,
                this.lat,
                this.lon
            ).then(result=>{
                this.addressList = result;
            })
        },
        //选择地址的事件
        selectAction(index){
            console.log(this.addressList[index]);
            //修改全局的地址相关的状态
            this.$store.dispatch('location/modifyLocationAction', {
                lon: this.addressList[index].lon,
                lat: this.addressList[index].lat,
                address: this.addressList[index].name
            });
            //返回上一页
            this.goBackAction();
        }
    }
}
</script>
<style>
.address-page{
    background: #f4f4f4;
}
.address-search{
    width: 100%;
    height: 0.54rem;
    background: #fff;
    padding: 0.1rem 0.14rem;
    box-sizing: border-box;
}
.inps{
    background: #f2f2f2;
    border: none;
    width: 100%;
    height: 100%;
}
.current-address>h2{
    height: 0.38rem;
    line-height: 0.38rem;
    width: 100%;
    padding-left: 0.14rem;
    font-size: 0.12rem;
    color: #666;
    background: #f4f4f4;
}
.getpositon{
    width: 100%;
    height: 0.42rem;
    line-height: 0.42rem;
    background: #fff;
    display: flex;
    padding: 0 0.18rem;
    position: relative;
}
.cur-addr{
    font-size: 0.14rem;
    font-weight: bold;
}
.refresh{
    font-size: 0.14rem;
    color: #2395ff;
    position: absolute;
    right: 0.5rem;
}
ul .address-item{
    width: 100%;
    height: 0.56rem;
    background: #fff;
    padding: 0 0.14rem;
}
.local-name{
    font-size: 0.14rem;
    font-weight: bold;
    color: #333;
}
.local-detail{
    font-size: 0.11rem;
    color: #333;
}
</style>
