import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Orders from '../components/Orders'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/orders/:id',
      props: true,
      name: 'order',
      component: () => import('../views/Order')
    }
  ],
  mode: 'history'
})
