import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import starter from '@/components/starter'
import starter2 from '@/components/starter2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'starter',
      component: starter
    },
    {
      path: '/start2',
      name: 'starter2',
      component: starter2
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
