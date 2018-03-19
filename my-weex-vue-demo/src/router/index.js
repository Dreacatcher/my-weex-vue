import MyVue from 'vue'
import Router from 'vue-router'
import HomeVue from 'homeVue'
import SubViewVue from 'subViewVue'
import messegeRouter from './_include/messege'
import dataServicesRouter from './_include/dataServices'
import recommendRouter from './_include/recommend'
import usersCenterRouter from './_include/usersCenter'
import workOrdersRouter from './_include/workOrders'
/* eslint-disable*/
if (WXEnvironment.platform == 'Web') {
    window.Vue = MyVue
}
Vue.use(Router)
let newArr = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    component: SubViewVue,
    redirect: '/home/index',
    children: [{
        path: 'index',
        name: 'HomeVue',
        component: HomeVue
            // meta: { keepAlive: true } // 缓存组件（true：缓存，false: 不缓存，默认为false）
    }]
}]
let newRouter = [
    ...newArr,
    ...messegeRouter,
    ...dataServicesRouter,
    ...recommendRouter,
    ...usersCenterRouter,
    ...workOrdersRouter
]
module.exports = new Router({
    routes: newRouter
})