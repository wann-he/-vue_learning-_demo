import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hi1 from '@/components/Hi1'
import hi2 from '@/components/Hi2'
import Params from '@/components/Params'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      name: 'Hello',
      component: Params
    }
  ]
})
