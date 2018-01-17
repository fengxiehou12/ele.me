<template>
<div>
    <top>
        <p class="top-title">订单</p>
    </top>
    <page pageId="order">

    </page>
</div>
</template>

<script>
import Page from '../../common/Page.vue'
import Top from '../../common/Top.vue'
export default {
    components: {
        [Page.name]: Page,
        [Top.name]: Top
    },
    data(){
        return {
            
        }
    }
}
</script>
<style>

</style>