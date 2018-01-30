<template>
<div>   
    <sub-page pageId="detail">
        <shop-header></shop-header>
        <shop-tab></shop-tab>
        <shop-leftmenu></shop-leftmenu>
        <shop-detailmenu></shop-detailmenu>
    </sub-page>
    <shop-actlist v-if="isShow"></shop-actlist>
</div>
</template>

<script>
import SubPage from '../../common/SubPage.vue'
import ShopHeader from '../../components/home/sellerDetail/ShopHeader.vue'
import ShopTab from '../../components/home/sellerDetail/ShopTab.vue'
import ShopLeftTab from '../../components/home/sellerDetail/ShopLeftTab.vue'
import ShopDetailMenu from '../../components/home/sellerDetail/ShopDetailMenu.vue'
import ShopActiveList from '../../components/home/sellerDetail/ShopActiveList.vue'

export default {
    components: {
        [SubPage.name]: SubPage,
        [ShopHeader.name]: ShopHeader,
        [ShopTab.name]: ShopTab,
        [ShopDetailMenu.name]: ShopDetailMenu,
        [ShopLeftTab.name]: ShopLeftTab,
        [ShopActiveList.name]: ShopActiveList
    },
    data(){
        return{
            isShow:false
        }
    },
    mounted(){
        this.center.$on("getshow",()=>{
            this.isShow = true;
        });
        this.center.$on("handleClose",()=>{
            this.isShow = false;
        });
        
    }

}
</script>