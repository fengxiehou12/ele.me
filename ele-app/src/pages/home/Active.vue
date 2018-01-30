<template>
    <sub-page pageId="active">
        <shop-actlist></shop-actlist>    
    </sub-page>
</template>

<script>
import SubPage from '../../common/SubPage.vue'
import ShopActiveList from '../../components/home/sellerDetail/ShopActiveList.vue'

export default {
    components: {
        [SubPage.name]: SubPage,
        [ShopActiveList.name]: ShopActiveList
    }
}
</script>