import VueRouter from 'vue-router'

import Home from '@/views/Home'

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
