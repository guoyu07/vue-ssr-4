import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Topics from '../views/Topics.vue'
import Counter from '../views/Counter.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Home
    },{
      path: '/about',
      component: About
    }, {
      path: '/topics',
      component: Topics
    }, {
      path: '/counter',
      component: Counter
    }
  ]
})

export default router