import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import AHome from '@/components/pages/AHome'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/AHome',
    name: 'AHome',
    component: AHome
  }]
})
