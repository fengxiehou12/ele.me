<template>
<header class="header">
    <div class="local-address" @click="addressAction()">{{address}}</div>
    <search-bar></search-bar>
</header>
</template>

<script>
import Search from './Search'
import Vuex from 'vuex'
import { getLocation } from '../../../service/HomeService'

export default {
    name: 'home-header',
    components: {
        [Search.name]: Search
    },
    data(){
        return {
            address: ''
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
            getLocation(this.lat, this.lon)
                .then(result=>{
                    this.address = result;
                    this.$store.dispatch('location/modifyAddressAction', {
                        address: this.address
                    })
                })
        },
        addressAction(){
            //进入选择地址页面
            this.$router.push('/home/address');
        }
    },
    mounted(){
        //初始化请求
        if(this.lat && this.lon){
            this.requestData();
        }
        //监听到经纬度的变化, 重新请求地址
        this.$watch('lat', ()=>{
            if(this.lat && this.lon){
                this.requestData();
            }
        })
    }
}
</script>
<style scoped>
.header{
    width: 100%;
    height: 0.92rem;
    background-image: linear-gradient(90deg,#0af,#0085ff)
}
.local-address{
    width: 100%;
    height: 0.44rem;
    line-height: 0.44rem;
    padding-left: 0.1rem;
    color: #fff;
    font-size: 0.17rem;
    font-weight: bolder;
    box-sizing: border-box;
}
</style>