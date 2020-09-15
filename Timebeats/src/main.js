import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import vueHeadful from 'vue-headful';
import './assets/vendor/css/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
Vue.component('vue-headful', vueHeadful);
Vue.config.productionTip = false
Vue.prototype.$axios = axios

const app = new Vue({
  el: '#app',
  axios,
  router,
  render: h => h(App)
})

export default app



// new Vue({
//   el: '#app',
//   router,
//   store,
//   axios,
//   components: { App },
//   template: '<App/>'
// })
