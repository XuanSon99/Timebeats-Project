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
import Payment from '@/components/Payment'
import Notify from '@/components/Notify'

Vue.use(Router)

var isAuthenticated = false;
if (localStorage.getItem('LoggedUser') || localStorage.getItem('user')) isAuthenticated = true;
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
      },
      meta: {
        header: false,
        footer: false
      }
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        header: true,
        footer: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        header: false,
        footer: false
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        header: true,
        footer: true
      }
    },
    {
      path: '/task',
      name: 'Task',
      component: Task,
      meta: {
        header: true,
        footer: true
      }
    },
    {
      path: '/make-camp',
      name: 'MakeCamp',
      component: MakeCamp,
      meta: {
        header: true,
        footer: true
      }
    },
    {
      path: '/wallet',
      name: 'Wallet',
      component: Wallet,
      meta: {
        header: true,
        footer: true
      }
    },
    {
      path: '/resource',
      name: 'Resource',
      component: Resource,
      meta: {
        header: true,
        footer: true
      }
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq,
      meta: {
        header: true,
        footer: true
      }
    },
    {
      path: '/Statistical',
      name: 'Statistical',
      component: Statistical,
      meta: {
        header: true,
        footer: true
      }
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment,
      meta: {
        header: true,
        footer: true
      }
    },
    {
      path: '/notify',
      name: 'Notify',
      component: Notify,
      meta: {
        header: true,
        footer: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name != 'Login' && to.name != 'Register' && !isAuthenticated) next({ name: 'Login' })
  next()
})
export default router
