import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DashboardView '@/views/DashboardView.vue'
import { useAccountStore } from '@/stores/account'
import HomeView from '@/views/home/Home.vue'
import ReportView from '@/views/home/Report.vue'
import UpgradeView from '@/views/home/Upgrade.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'Dashboard',
      component: DashboardView,
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView
        },
        {
          path: '/home/report',
          name: 'report',
          component: ReportView
        },
        {
          path: '/home/upgrade',
          name: 'upgrade',
          component: UpgradeView
        },
        {
          path: 'notes',
          name: 'notes',
          component: HomeView
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/404',
      name: 'not-found',
      component: HomeView
    },
    // {
    //   path: '/home/report',
    //   name: 'report',
    //   component: ReportHomeView
    // },
    // {
    //   path: '/home/upgrade',
    //   name: 'upgrade',
    //   component: UpgradeHomeView
    // },
  ]
})

// router.beforeEach((to, from, next) => {
//   const account = useAccountStore()
//   if (to.matched.length === 0) {
//     next('/404')
//   } else {
//     if (account.isAuthenticated) {
//       if (to.path === '/login' || to.path === '/') {
//         next('/home')
//       } else {
//         next()
//       }
//     } else {
//       if (to.path !== '/404' && to.path !== '/home') {
//         next('/login')
//       } else {
//         next()
//       }
//     }
//   }
// })

export default router
