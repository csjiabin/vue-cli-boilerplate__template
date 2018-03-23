/*
* 通用路由配置，需要放在配置项数组的末端
*/
export default [
  {
    path: '/',
    name: 'home',
    component: resolve => require(['@components/Hello'], resolve)
  },
  {
    path: '*',
    name: '404',
    component: resolve => require(['@view/NotFound'], resolve)
  }
]
