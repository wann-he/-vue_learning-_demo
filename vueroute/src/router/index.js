import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hi1 from '@/components/Hi1'
import hi2 from '@/components/Hi2'
import Params from '@/components/Params'
import Error from '@/components/error'

Vue.use(Router)

export default new Router({

  // mode:'history',

  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    }, {
      path: '/params/:newsId(\\d+)/:newsTitle',
      name: 'Hello',
      component: Params,
      // beforeEnter: (to, from, next) => {
      //   console.log(to);
      //   console.log(from);
      //   next();
      // },
    }, {
      path: '/goHome',
      redirect: '/'
    }, {
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    }, {
      path: '/hi1',
      component: hi1,
      alias: '/wann'
    }, {
      path: '*',
      component: Error,
    }
  ]
})
