import Vue from 'vue'
import Router from 'vue-router'
import commonRoutesMap from './commonRoutes'

Vue.use(Router)


const routerInstance = new Router({
  routes: commonRoutesMap
})
routerInstance.beforeEach((to, from, next) => {
  next()
})


export default routerInstance
