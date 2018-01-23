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
    margin-top: 0.13rem;
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
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: #2395ff;
}
</style>