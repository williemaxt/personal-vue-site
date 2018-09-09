import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ToolsView from '@/components/ToolsView'
import Contact from '@/components/Contact'
import Portfolio from '@/components/Portfolio'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tools',
      name: 'Tools',
      component: ToolsView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    }
  ]
})
