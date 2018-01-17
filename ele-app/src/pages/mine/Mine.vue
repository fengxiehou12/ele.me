<template>
    <div>
        <top>
            <p class="top-title">我的</p>
        </top>
        <page pageId="mine">

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