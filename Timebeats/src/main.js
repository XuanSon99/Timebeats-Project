import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import bootstrap from 'bootstrap'
import axios from 'axios'
import vueHeadful from 'vue-headful';
import './assets/vendor/css/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import  jquery from 'jquery'
import store from './store/store'
Vue.component('vue-headful', vueHeadful);
Vue.config.productionTip = false
Vue.prototype.$axios = axios

const app = new Vue({
  el: '#app',
  axios,
  router,
  jquery,
  bootstrap,
  Vuex,
  store,
  render: h => h(App)
})

export default app