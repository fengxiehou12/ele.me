<template>
<sub-page class="bg">
    <div class="active-list">
        <div class="listData">
            <h2>优惠活动</h2>
            <span class="close" @click="closeList()">X</span>
            <ul class="ulbox">
                <li class="act-detail" v-for="(act, index) in activeData.activities" :key="index">
                    <charter-icon :name="act.icon_name" :color="act.icon_color"></charter-icon>
                    <span>{{act.description}}</span>
                </li>
            </ul>
        </div>
    </div>
</sub-page>
</template>

<script>
import SubPage from '../../../common/SubPage.vue'
import {getSellerData} from '../../../service/DetailService'
import CharterIcon from '../../../common/CharterIcon.vue'
import Vuex from 'vuex'
export default {
    name: 'shop-actlist',
    components: {
        [SubPage.name]: SubPage,
        [CharterIcon.name]: CharterIcon
    },
    data(){
        return {
            activeData: []
        }
    },
    computed: {
        ...Vuex.mapState({
            lon: state=>state.location.lon,
            lat: state=>state.location.lat
        })
    },
    methods: {
        getActiveData(){
            getSellerData(this.$route.query.id, this.lat, this.lon)
            .then((result)=>{
                this.activeData=result;
            })
        },
        closeList(){
            this.center.$emit('handleClose')
        }
    },
    mounted(){
        this.getActiveData();
    }
}
</script>

<style scoped>
.bg{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3) !important;
}
.active-list{
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
}
.listData{
    width: 100%;
    background: #f5f5f5;
}
.listData h2{
    text-align: center;
    font-size: 0.17rem;
    padding-top: 0.1rem;
    font-weight: bold;
}
.listData .close{
    position: absolute;
    right: 0.1rem;
    top: 0.1rem;
}
.ulbox{
    width: 100%;
    padding: 0 0.3rem 0.2rem;
    box-sizing: border-box;
}
.act-detail{
    font-size: 0.13rem;
    border-bottom: 0.2rem;
}
</style>