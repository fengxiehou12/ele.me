<template>
    <div>
        <!-- 首页面 -->
    <page pageId="home" :canLoadMore="true" ref="page"
     @load-more-action="handleLoadMore"
     @page-scroll="handlePageScroll">
   
        <home-header></home-header>
        <home-banner></home-banner>
        <home-list ref="list" @list-change="handleListChange"></home-list>
    </page>
    <!-- 上拉时，还需要展示搜索框 -->
    <search-bar v-show="showSearchBar" :isActive="showSearchBar"></search-bar>
    <!-- 子页面 -->
    <router-view></router-view>
    </div>
</template>

<script>
import Page from '../../common/Page.vue'
import Header from '../../components/home/index/Header.vue'
import Search from '../../components/home/index/Search.vue'
import Banner from '../../components/home/index/Banner.vue'
import List from '../../components/home/index/List.vue'
export default {
    components: {
        [Page.name]: Page,
        [Header.name]: Header,
        [Search.name]: Search,
        [Banner.name]: Banner,
        [List.name]: List
    },
    data(){
        return {
            showSearchBar: false
        }
    },
    methods: {
        handleListChange(){
            //刷新页面
            this.$refs.page.pageRefresh();
        },
        handleLoadMore(){
            //让list请求下一页数据
            this.$refs.list.requestData(()=>{
                //请求完成, 执行停止加载更多的动画
                this.$refs.page.endLoadMoreAni();
            })
        },
        //根据页面滚动的位置，控制是否展示search-bar
        handlePageScroll(y){
            if(y<-50){
                this.showSearchBar = true;
            }else{
                this.showSearchBar = false;
            }
        }
        
    }
}
</script>
<style>

</style>