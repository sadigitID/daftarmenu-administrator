import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import { useAccountStore } from '@/stores/account'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'Dashboard',
      component: HomeView,
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomeView
        },
        {
          path: 'report',
          name: 'report',
          component: HomeView
        },
        {
          path: 'upgrade',
          name: 'upgrade',
          component: HomeView
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
    }
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
