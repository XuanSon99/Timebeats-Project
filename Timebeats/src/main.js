import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vueHeadful from 'vue-headful';
import './assets/vendor/css/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import bootstrap from 'bootstrap'
import jquery from 'jquery'
import 'vue-multiselect/dist/vue-multiselect.min.css'
Vue.component('vue-headful', vueHeadful);
Vue.config.productionTip = false
Vue.prototype.$axios = axios

const app = new Vue({
  el: '#app',
  axios,
  router,
  jquery,
  bootstrap,
  render: h => h(App)
})

export default app