
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import jquery from 'jquery'
import '@fortawesome/fontawesome-free/css/all.min.css'
import axios from 'axios'
// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"
// router setup
import routes from './routes/routes'
Vue.prototype.$axios = axios
import './registerServiceWorker'
import Vuetify from 'vuetify';
import CKEditor from '@ckeditor/ckeditor5-vue';
Vue.use( CKEditor );
Vue.use(Vuetify);
Vue.prototype.$urlSever = 'http://192.168.100.211:3000'
Vue.prototype.$urlAPI = 'http://192.168.100.211:3000/api/';
  Vue.prototype.$header = {
    headers: {
      Authorization: localStorage.getItem('id') + ' ' + localStorage.getItem('token'),
    },
  };
Vue.prototype.CallAPI = function (method, url, data, callback, callError) {
  switch (method) {
    case "post":
      axios.post(this.$urlAPI + url, data, this.$header).then((result) => {
        let statusCode = result.data.statusCode;
        if (statusCode === 401) {
          localStorage.clear();
        }
        callback(result.data)
      }).catch((error) => callError(error))
      break;
    case "get":
      axios.get(this.$urlAPI + url, this.$header).then((result) => {
        let statusCode = result.data.statusCode;
        if (statusCode === 401) {
          localStorage.clear();
        }
        callback(result.data)
      });
      break;
    case "put": break;
    case "delete": break;
  }
}
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(LightBootstrap)
Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
});
const router = new VueRouter({
  mode: 'history',
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active',
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})
new Vue({
  el: '#app',
  jquery,
  axios,
  vuetify: new Vuetify(),
  render: h => h(App),
  router
})
