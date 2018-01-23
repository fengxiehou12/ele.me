<template>

    <div class="welfare-list">
        <ul>
            <li class="wel-menu" v-for="item in topData">
                <div class="wel-tit">
                    <p>{{item.title}}</p>
                    <span>{{item.subtitle}}</span>
                </div>
                <div class="wel-img">
                    <img :src="item.img"/>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
import {getDiscoverTop} from '../../service/DiscoverService'

export default {
    name: "discover-welfare",
    data(){
        return{
            topData: []
        }
    },
    methods: {
        requestData(){
            getDiscoverTop(1, 0, 31.23037, 121.473701)
            .then((result)=>{
                this.topData = result
            })
        }
    },
    mounted(){
        this.requestData();
    }
}
</script>
<style>
.welfare-list{
    width: 100%;
    height: 2.31rem;
    background: #fff;
}
.welfare-list>ul>li:nth-of-type(2n){
    border-right: none;
}
.wel-menu{
    float: left;
    width: 1.793rem;
    height: 0.76rem;
    display: flex;
    position: relative;
    border-bottom: 1px solid #eee;
    border-right: 1px solid #eee;
}
.wel-tit{
    display: inline-block;
    margin-top: 0.21rem;
    margin-left: 0.14rem;
}
.wel-tit p{
    font-size: 0.14rem;
}
.wel-tit span{
    font-size: 0.11rem;
}
.wel-img{
    display: inline-block;
    position: absolute;
    right: 0.15rem;
    top: 0.19rem;
    /* overflow: hidden; */
}
.wel-img img{
    width: 0.46rem;
    
   
}
</style>



