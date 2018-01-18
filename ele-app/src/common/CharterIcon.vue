<template>
  <span class="icon" :style="{background: '#'+color}">{{name}}</span>
</template>
<script>
export default {
    name: 'charter-icon',
    props: {
        name: String,
        color: String
    }
}
</script>
<style scoped>
.icon{
    color: #fff;
    border-radius: 2px;
    font-size: 0.09rem;
    padding: 0 2px;
}
</style>
