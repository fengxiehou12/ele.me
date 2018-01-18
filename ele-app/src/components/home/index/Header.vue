<template>
<header class="header">
    <div class="local-address">深圳宝安国际机场</div>
    <search-bar></search-bar>
</header>
</template>

<script>
import Search from './Search'
export default {
    name: 'home-header',
    components: {
        [Search.name]: Search
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