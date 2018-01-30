<template>
    <div>
        <ul class="tab">
            <li><span class="order">点餐</span></li>
            <li><span>评价</span></li>
            <li><span>商家</span></li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'shop-tab'
}
</script>
<style scoped>
.tab{
    display: flex;
    text-align: center;
    padding-top: 0.13rem;
    background: #fff;
}
.tab li{
    float: left;
    flex: 1;
    font-size: 0.14rem;
    padding-bottom: 0.13rem;
    border-bottom: 1px solid #ddd;
    position: relative;
}
.tab li .order:after{
    content: '';
    position: absolute;
    width: 0.3rem;       
    left: 0.45rem;
    bottom: 0;
    height: 2px;
    background: #2395ff;
}
</style>