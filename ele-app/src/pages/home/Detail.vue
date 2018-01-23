<template>
    <sub-page pageId="detail">
        <shop-header></shop-header>
        <shop-tab></shop-tab>
        <shop-menu></shop-menu>
    </sub-page>
</template>

<script>
import SubPage from '../../common/SubPage.vue'
import ShopHeader from '../../components/home/sellerDetail/ShopHeader.vue'
import ShopTab from '../../components/home/sellerDetail/ShopTab.vue'
import ShopMenu from '../../components/home/sellerDetail/ShopMenu.vue'

export default {
    components: {
        [SubPage.name]: SubPage,
        [ShopHeader.name]: ShopHeader,
        [ShopTab.name]: ShopTab,
        [ShopMenu.name]: ShopMenu,
    }
}
</script>