import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import { HomeView, ReportView, UpgradeView, NoteView } from '@/views/home'
import NotFound from '@/views/NotFound.vue'
import { useAccountStore } from '@/stores/account'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Dashboard',
      component: DashboardView,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'report',
          name: 'Laporan',
          component: ReportView
        },
        {
          path: 'upgrade',
          name: 'Upgrade Account',
          component: UpgradeView
        },
        {
          path: 'notes',
          name: 'notes',
          component: NoteView
        },
        {
          path: '404',
          name: 'Page Not Found',
          component: NotFound
        },
        {
          path: ':pathMatch(.*)*',
          redirect: '/home/404'
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
      component: NotFound
    }
  ],

  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const account = useAccountStore()
  if (to.matched.length === 0) {
    next('/404')
  } else {
    if (account.isAuthenticated) {
      if (to.path === '/login' || to.path === '/') {
        next('/home')
      } else {
        next()
      }
    } else {
      if (to.path !== '/login') {
        next('/login')
      } else {
        next()
      }
    }
  }
})

export default router
