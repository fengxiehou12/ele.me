/*
首页轮播图接口
参数：
latitude：纬度     =22.54286           
longitude：经度    =114.059563
templates[] :....        =main_template   favourable_template   svip_template
*/

const IMAGE_HOST = 'http://fuss10.elemecdn.com/';
const BANNER_URL = '/restapi/shopping/openapi/entries';
const SELLER_URL = '/restapi/shopping/v3/restaurants';

const DISCOVERTOP_URL = '/restapi/member/v1/discover';
const RECOMMEND_URL = '/restapi/shopping/v1/find/recommendation'
const LIMIT_URL = '/restapi/member/gifts/suggest'
const LOCATION_URL = '/restapi/bgs/poi/reverse_geo_coding';
const SEARCH_ADDRESS_URL = '/restapi/bgs/poi/search_poi_nearby';

export default {
    IMAGE_HOST,
    BANNER_URL,
    SELLER_URL,
    DISCOVERTOP_URL,
    RECOMMEND_URL,
    LIMIT_URL,
    LOCATION_URL,
    SEARCH_ADDRESS_URL
}