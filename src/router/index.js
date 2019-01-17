import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Starter from '../components/Starter'
import Starter2 from '../components/Starter2'
import Login from '../components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Starter',
      component: Starter
    },
    {
      path: '/Start2',
      name: 'Starter2',
      component: Starter2
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
