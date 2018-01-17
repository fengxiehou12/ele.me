<template>
<header class="header">
    <div class="local-address">深圳宝安国际机场</div>
    <div class="search">
        <a class="search-box">
           搜索商家 商品名称
        </a>
    </div>
</header>
</template>

<script>

export default {
    name: 'home-header'
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
    height: 0.48rem;
    padding-top: .1rem;
    padding-left: 0.1rem;
    color: #fff;
    font-size: 0.17rem;
    font-weight: bolder;
     box-sizing: border-box;
}
.search{
    width: 100%;
    height: 0.42rem;
    text-align: center;

}
.search-box{
    background: #fff;
    width: 3.35rem;
    height: 0.35rem;
    line-height: 0.35rem;
    margin: 0 auto;
    display: block;
    font-size: 0.17rem;
    color: #999;
}
.search-con{
    font-size: 0.17rem;
    color: #999;
    font-size: 0.17rem;
}
</style>