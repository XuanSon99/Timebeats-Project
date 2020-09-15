import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Profile from '@/components/Profile'

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
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name != 'Login' && !isAuthenticated) next({ name: 'Login' })
  next()
})
export default router
