import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/Hi',
      component: Hi,
      children: [
        {path: '/',name:'hello',component: Hi1},
        {path: 'Hi1',name:'hi1',component: Hi1},
        { path: 'Hi2',name:'hi2',component: Hi2},
      ]
    }
  ]
})
