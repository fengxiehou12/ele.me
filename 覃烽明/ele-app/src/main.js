import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import center from './util/center'

import './directive/color'

Vue.config.productionTip = false

Vue.prototype.center = center;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
