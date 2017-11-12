import Vue from 'vue'
import Router from 'vue-router'
import crimeCourts from '@/components/crimeCourts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'crimeCourts',
      component: crimeCourts
    }
  ]
})
