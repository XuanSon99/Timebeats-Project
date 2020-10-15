import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import bootstrap from 'bootstrap'
import axios from 'axios'
import vueHeadful from 'vue-headful'
import './assets/vendor/css/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import jquery from 'jquery'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import store from "./store/store"
import Paginate from 'vuejs-paginate'
import Toasted from 'vue-toasted'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"
import VueClipboard from 'vue-clipboard2'
import './assets/vendor/css/reponsive.css'
import './assets/vendor/js/custom'
Vue.use(VueClipboard)

import GoogleAuth from '@/config/google_oAuth.js'
const gauthOption = {
  clientId: '54859907240-h5q8nl05vlo77j5pv6u1v663750v26mm.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption)

Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
});
Vue.component('paginate', Paginate)
Vue.component('vue-headful', vueHeadful);
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(Vuex);
Vue.use(Toasted);

const app = new Vue({
  el: '#app',
  axios,
  router,
  jquery,
  bootstrap,
  store,
  Paginate,
  render: h => h(App)
})
export default app