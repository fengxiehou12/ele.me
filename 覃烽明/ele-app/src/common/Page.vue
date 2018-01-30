<template>
    <div class="page" :id="pageId" ref="page">
        <div class="wrapper">
            <slot></slot>
            <!-- 显示上拉加载更多 -->
            <div v-if="canLoadMore" class="load-more" :class="{down: isDown==1}">
                <img :src="imgPath"/>
                <span>{{downInfo}}...</span>
            </div>

        </div>
    </div>
</template>

<script>
const NO_TRIGGER = 0;
const TRIGGER = 1;
const ACTIVE = 2;

export default {
    name: 'page',
    props: {
        pageId: String,
        canLoadMore: Boolean //是否需要加载更多的功能
    },
    data(){
        return {
            isDown: NO_TRIGGER,
            downInfo: '上拉可以加载更多',
            imgPath: '/static/img/arrow.png'
        }
    },
    methods: {
         //需要让页面刷新滚动
        pageRefresh(){
            this.pageScroll.refresh();
        },
        endLoadMoreAni(){
            this.isDown = NO_TRIGGER;
            this.downInfo = '上拉可以加载更多';
            this.imgPath = '/static/img/arrow.png';
        }
    },
    mounted(){
        //创建页面的滚动视图
        this.pageScroll = new IScroll(this.$refs.page, {
            probeType: 3
        });
        this.pageScroll.on('scrollStart',this.pageRefresh);
        
        if(this.canLoadMore){
            //上拉加载更多, 判断距离为40
            this.pageScroll.on('scroll',()=>{
                if(this.isDown != ACTIVE){
                    let maxScrollY = this.pageScroll.maxScrollY;
                    let y = this.pageScroll.y;
                    //显示上拉可以加载更多条件 maxScrollY< y <maxScrollY+40
                    if(y>maxScrollY){
                        this.downInfo = '上拉可以加载更多';
                        this.isDown = NO_TRIGGER;
                    }
                    //显示: 释放立即加载更多
                    else if(y<=maxScrollY){
                        this.downInfo = '释放立即加载更多';
                        this.isDown = TRIGGER;
                    }
                }
            });
            
            this.pageScroll.on('scrollEnd',()=>{
                if(this.isDown != ACTIVE){
                    let maxScrollY = this.pageScroll.maxScrollY;
                    let y = this.pageScroll.y;
                    //判断是否到达加载更多的条件
                    //maxScrollY<y<maxScrollY+40 没有达到刷新条件
                    if(y>maxScrollY && y<maxScrollY+40){
                        this.pageScroll.scrollTo(0, maxScrollY+40, 200)
                    }
                    //达到了加载更多的条件,请求下一页列表数据
                    else if(y <= maxScrollY){
                        this.imgPath = '/static/img/ajax-loader.gif';
                        this.downInfo = '正在加载更多';
                        this.isDown = ACTIVE;

                        this.$emit('load-more-action');
                    }
                }
            })
        }
        //home组件需要监听滚动的位置
        this.pageScroll.on('scroll',()=>{
            this.$emit('page-scroll', this.pageScroll.y);
        })
    }
}
</script>
<style>
.page{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 49px;
    overflow: hidden;
    background: #f5f5f5;
}

.page .load-more{
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    background: palegreen;

}
.page .load-more img{
    width: 0.15rem;
    height: 0.15rem;
    display: inline-block;
    transition: 200ms transform;
}
.page .load-more.down img{
    transform: rotate(180deg);
}
.page .load-more span{
    font-size: 0.15rem;
    color: #666;
}


</style>



