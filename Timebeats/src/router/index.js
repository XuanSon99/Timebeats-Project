import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Register from '@/components/Register'
import Profile from '@/components/Profile'
import Task from '@/components/Task'
import MakeCamp from '@/components/Make-camp'
import Wallet from '@/components/Wallet'
import Resource from '@/components/Resource'
import Faq from '@/components/Faq'
import Statistical from '@/components/Statistical'
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
        if (to.name == 'Login' && isAuthenticated) next({ name: 'Dashboard' })
        next()
      }
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
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
    },
    {
      path: '/task',
      name: 'Task',
      component: Task
    },
    {
      path: '/make-camp',
      name: 'MakeCamp',
      component: MakeCamp
    },
    {
      path: '/wallet',
      name: 'Wallet',
      component: Wallet
    },
    {
      path: '/resource',
      name: 'Resource',
      component: Resource
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/Statistical',
      name: 'Statistical',
      component: Statistical
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name != 'Login' && to.name != 'Register' && !isAuthenticated) next({ name: 'Login' })
  next()
})
export default router
