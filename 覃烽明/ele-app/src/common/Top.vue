<template>
    <div class="top-nav">
        <span class="left" @click="leftAction()">&lt;</span>
        <h1>{{title}}</h1>
    </div>
</template>

<script>

export default {
    name: 'header-top',
    props: {
        title: String
    },
    methods: {
        leftAction(){
            this.$emit('goBack');
        }
    }
}
</script>
<style>
.top-nav{
    width: 100%;
    height: 44px;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    line-height: 44px;
    text-align: center;
    position: relative;
}
.top-nav h1{
    width: 100%;
    height: 100%;
    line-height: 44px;
    text-align: center;
    color: #fff;
    font-size: 0.17rem;
    font-weight: bolder;
}
.left{
    position: absolute;
    width: 40px;
    height: 44px;
    top: 0;
    left: 5px;
    color: #fff;
    font-size: 30px;
    line-height: 44px;
    text-align: center;
}
</style>



