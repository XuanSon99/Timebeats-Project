import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import bootstrap from 'bootstrap'
import axios from 'axios'
import vueHeadful from 'vue-headful';
import './assets/vendor/css/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import jquery from 'jquery'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import store from "./store/store";
import Paginate from 'vuejs-paginate'
<<<<<<< HEAD
import Toasted from 'vue-toasted';

=======
import faSolid from '@fortawesome/fontawesome-free-solid'
// register the plugin on vue
import Toasted from 'vue-toasted'
Vue.use(Toasted)
>>>>>>> 22b534d6378591cb835b654b7e579aa36b8761c1
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
  faSolid,
  render: h => h(App)
})

export default app