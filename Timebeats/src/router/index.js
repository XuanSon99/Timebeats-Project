import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Register from '@/components/Register'
import FA from '@/components/FA'
import Kyc from '@/components/Kyc'
Vue.use(Router)

var isAuthenticated = false;
if (localStorage.getItem('LoggedUser')) isAuthenticated = true;
else isAuthenticated = false;

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (to.name == 'Login' && isAuthenticated) next({ name: 'Home' })
        next()
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/2fa',
      name: 'FA',
      component: FA
    },
    {
      path: '/kyc',
      name: 'Kyc',
      component: Kyc
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   if (to.name != 'Login' && !isAuthenticated) next({ name: 'Login' })
//   next()
// })
export default router
