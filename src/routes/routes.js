import DashboardLayout from '../layout/DashboardLayout.vue'
import NotFound from '../pages/NotFoundPage.vue'
import Overview from 'src/pages/Overview.vue'
import Social from 'src/pages/Social.vue'
import Notifications from 'src/pages/Notifications.vue'
import Feedback from 'src/pages/Feedback'
import Task from 'src/pages/Task'
import Request from 'src/pages/Request'
import Withdraw from 'src/pages/Withdraw'
import Introduced from 'src/pages/Introduced'
import Policy from 'src/pages/Policy'
const routes = [

  {
    path: '/admin',
    component: DashboardLayout,
    name: 'admin',
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'social',
        name: 'Social',
        component: Social
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'feedback',
        name: 'feedback',
        component: Feedback
      },
      {
        path: 'task',
        name: 'task',
        component: Task
      },
      {
        path: 'request',
        name: 'request',
        component: Request
      },
      {
        path: 'withdraw',
        name: 'withdraw',
        component: Withdraw
      },
      {
        path: 'introduced',
        name: 'introduced',
        component: Introduced
      },
      {
        path: 'policy',
        name: 'policy',
        component: Policy
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
