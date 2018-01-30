<template>
<div>
    
    <page pageId="discover">
        <header-top title="发现" class="discover">
            <!-- <p class="top-title">发现</p> -->
        </header-top>  
        <discover-welfare></discover-welfare>
        <advertise></advertise>
        <recommend></recommend>
        <limit-active></limit-active>
        <!-- <daily></daily> -->
    </page>
</div>
</template>

<script>
import Page from '../../common/Page.vue'
import Top from '../../common/Top.vue'
import Welfare from '../../components/discover/Welfare.vue'
import Advertise from '../../components/discover/Advertise.vue'
import Recommend from '../../components/discover/Recommend.vue'
import LimitActive from '../../components/discover/Limit-active.vue'
import Daily from '../../components/discover/Daily.vue'
export default {
    components: {
        [Page.name]: Page,
        [Top.name]: Top,
        [Welfare.name]: Welfare,
        [Advertise.name]: Advertise,
        [Recommend.name]: Recommend,
        [LimitActive.name]: LimitActive,
        [Daily.name]: Daily
    },
    data(){
        return {
            
        }
    }
}
</script>
<style>
.discover{
    font-size: 0.17rem;
    font-weight: bolder;
}
</style>