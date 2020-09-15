import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
<<<<<<< HEAD
import bootstrap from 'bootstrap'
=======
>>>>>>> a0ae5168c4a213cc57f8fcde89b06dbec8744269
import axios from 'axios'
import vueHeadful from 'vue-headful';
import './assets/vendor/css/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
<<<<<<< HEAD
import  jquery from 'jquery'
import store from './store/store'
=======
import bootstrap from 'bootstrap'
import jquery from 'jquery'
import 'vue-multiselect/dist/vue-multiselect.min.css'
>>>>>>> a0ae5168c4a213cc57f8fcde89b06dbec8744269
Vue.component('vue-headful', vueHeadful);
Vue.config.productionTip = false
Vue.prototype.$axios = axios

const app = new Vue({
  el: '#app',
  axios,
  router,
  jquery,
  bootstrap,
<<<<<<< HEAD
  Vuex,
  store,
=======
>>>>>>> a0ae5168c4a213cc57f8fcde89b06dbec8744269
  render: h => h(App)
})

export default app