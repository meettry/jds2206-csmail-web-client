import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView,
    children:[
      {
        path: '/a1',
        component: () => import( '../components/a1.vue')
      },
      {
        path: '/a2',
        component: () => import( '../components/a2.vue')
      }
    ]

  },
  {
    path: '/about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/login',
    component: () => import( '../views/LoginView.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
