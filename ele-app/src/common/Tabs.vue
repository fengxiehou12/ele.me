<template>
    <nav class="tabs one-top-px">
        <router-link class="tab" v-for="(tabItem, index) in tabsData" :key="index" :to="tabItem.path">
            {{tabItem.title}}
        </router-link>

    </nav>
</template>

<script>
export default {
    name: 'tabs',
    data(){
        return {
            tabsData: [
                { title: '首页', path: '/home'},
                { title: '发现', path: '/discover'},
                { title: '订单', path: '/order'},
                { title: '我的', path: '/mine'}
            ]
        }
    }
}
</script>
<style scoped>
.tabs{
    position: absolute;
    left: 0;
    bottom: 0;
    height: 49px;
    display: flex;
    width: 100%;
    background: #fff;
}
.tabs .tab{
    flex: 1;
    line-height: 49px;
    text-align: center;
    color: #8e8e93;
}
.tabs .tab.router-link-active{
    color: #0089dc;
}
</style>