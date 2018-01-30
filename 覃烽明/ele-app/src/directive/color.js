import Vue from 'vue'

Vue.directive('color', (el, info)=>{
    el.style.background = '#'+info.value;
})