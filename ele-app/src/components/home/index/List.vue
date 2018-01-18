<template>
<ul class="seller-list">
    <li class="seller-item one-bottom-px" v-for="(seller, index) in listData" :key="index">
        <div class="logo">
            <img :src="seller.img"/>
        </div>
        <div class="info">
            <h2>{{seller.name}}</h2>
            <p class="sup" v-if="seller.supports.length>0">{{seller.supports[0].icon_name}}</p>
            <span>评分: {{seller.rating}}</span>
            <span>月售{{seller.recent_order_num}}单</span><br/>
            <p class="delivery" v-if="seller.delivery_mode">{{seller.delivery_mode.text}}</p>
            <div class="info-msg">
                <div class="info-left">
                    <span>¥{{seller.float_minimum_order_amount}}起送 | </span>
                    <span>{{seller.piecewise_agent_fee.tips}}</span>
                </div>
                <div class="info-right">
                    <span>{{seller.distance}}m | </span>
                    <span>{{seller.order_lead_time}}分钟</span>
                </div>
            </div>
            <p class="recommend" v-if="seller.recommend.color">
                <!-- <img :src="seller.recommend.image_hash"/> -->
                <i>{{seller.recommend.reason}}</i>
            </p>
            <div class="activities">
                <ul class="act-list">
                    <li v-for="(act, index) in seller.activities" :key="index"
                        v-if="index<2 || seller.isShow">
                            <charter-icon :name="act.icon_name" :color="act.icon_color"></charter-icon>
                            {{act.description}}
                    </li>
                </ul>
                <span class="btn" @click="showActAction(index)">{{seller.activities.length}}个活动</span>
            </div>
        </div>
    </li>
</ul>
</template>

<script>
import {getHomeSeller} from '../../../service/HomeService'
import CharterIcon from '../../../common/CharterIcon.vue'
export default {
    name: 'home-list',
    components: {
        [CharterIcon.name]: CharterIcon
    },
    data(){
        //list数据,分页请求  一次请求12条数据
        return {
            listData: [],
            limit: 12
        }
    },
    computed: {
        offset(){
            return this.listData.length;
        }
    },
    methods: {
        requestData(callback){
            getHomeSeller(22.54286, 114.059563, this.offset, this.limit)
            .then((result)=>{
                //第一次进入需要加载第一页数据
                //触发滚动视图的加载更多, 加载下一页数据
                this.listData=this.listData.concat(result);
                this.$nextTick(()=>{
                    if(callback){
                        callback();
                    }
                });
            });
        },
        //列表展开查看活动的事件
        showActAction(index){
            this.listData[index].isShow = !this.listData[index].isShow;
            //更新滚动视图
            this.$nextTick(()=>{
                //告诉home组件更新滚动
                this.$emit('list-change');
            })
        }
    },
    mounted(){
        this.requestData();
    }
}
</script scoped>
<style>
.seller-list{
    width: 100%;
    background: #fff;
}
.seller-list>li {
    width: 100%;
    padding: 0.14rem 0.1rem;
    box-sizing: border-box;
    display: flex;
}
.logo{
    width: 0.6rem;
    height: 0.61rem;
    border: 0.01rem solid #ececec;
   
}
.logo img{
    width: 0.6rem;
    height: 0.61rem;
}
.info{
    flex: 1;
    margin-left: 0.1rem;
    position: relative;
}
.sup{
    position: absolute;
    right: 0;
    top: 0;
    color: #999;
    font-size: 0.05rem;

    padding: 0.01rem;
}
.delivery{
    position: absolute;
    right: 0;
    top: 0.26rem;
    color: #fff;
    font-size: 0.09rem;
    background: #2395FF;
    padding: 0 0.01rem;
}
.info h2{
    font-size: 0.15rem;
    font-weight: 500;

}
.info span{
    font-size: 0.1rem;
    color: #666;
}
.info-left{
    float: left;
    display: inline-block;
}
.info-right{
    float: right;
    display: inline-block;
}
.info-right span{
    color: #999;
}
.info-msg{
    display: block;
    overflow: hidden;
}
.recommend{
    font-size: 0.08rem;
    color: #e8470b;
    margin-top: 0.07rem;
    margin-bottom: 0.07rem;
}

.activities{
    position: relative;
}
.activities .btn{
    position: absolute;
    top: 4px; 
    right: 4px;
    font-size: 12px;
    color: #999;
    padding-right: 0.1rem;
}
.activities .btn::after{
    position: absolute;
    top: 0.05rem;
    right: 0;
    content: '';
    display: block;
    width: 0;
    height: 0;
    border: 5px solid #999;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
}
.act-list{
    border-top: 1px dotted #ddd;
    padding-top: 0.07rem;
}
.act-list li{
    font-size: 12px;
    color: #666;
    padding: 0.03rem 0;
}
</style>