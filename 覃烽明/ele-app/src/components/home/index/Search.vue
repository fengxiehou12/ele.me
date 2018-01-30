<template>
  <div class="search" :class="{active: isActive}">
        <a class="search-box">
           搜索商家 商品名称
        </a>
    </div>
</template>
<script>
export default {
   name: 'search-bar',
    props: {
        isActive: Boolean
    }
}
</script>
<style scoped>

.search{
    width: 100%;
    height: 0.48rem;
    text-align: center;
    background-image: linear-gradient(90deg,#0af,#0085ff)
}
.search.active{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
}
.search-box{
    background: #fff;
    width: 3.35rem;
    height: 0.34rem;
    line-height: 0.34rem;
    margin: 0 auto;
    display: block;
    font-size: 0.14rem;
    color: #999;
    margin-top: 0.06rem;

}
.search-con{
    font-size: 0.14rem;
    color: #999;
    font-size: 0.17rem;
}
</style>

