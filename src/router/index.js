import Vue from 'vue'
import Router from 'vue-router'
import TailwindComponent from '@/components/TailwindComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'TailwindPage',    
      component: TailwindComponent
    }
  ]
})
