<template>
    <div class="top-nav">
        <slot></slot>
    </div>
</template>

<script>


export default {
    name: 'top'
}
</script>
<style>
.top-nav{
    width: 100%;
    height: 0.43rem;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    line-height: 0.42rem;
    text-align: center;
}
</style>



