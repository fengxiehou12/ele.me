import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import locationModule from './location'

//创建仓库对象
export default new Vuex.Store({
    modules: {
        //key值模块名字: 外部访问就直接使用这个名字(自定义)
        //value值模块对象
        location: locationModule
    }
})