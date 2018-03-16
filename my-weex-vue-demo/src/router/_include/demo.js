import HomeVue from 'homeVue'
import SubViewVue from 'subViewVue'
export default {
  path: '/home',
  component: SubViewVue,
  redirect: '/home/index',
  children: [{
    path: 'index',
    name: 'HomeVue',
    component: HomeVue
    // meta: { keepAlive: true } // 缓存组件（true：缓存，false: 不缓存，默认为false）
  }]
}