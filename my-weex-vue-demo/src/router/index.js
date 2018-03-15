import MyVue from 'vue'
import Router from 'vue-router'
import HomeVue from 'demoVue'
import demorRouter from './_include/demo'
import messegeRouter from './_include/messege'
import dataServicesRouter from './_include/dataServices'
import myProjectsRouter from './_include/myProjects'
import usersCenterRouter from './_include/usersCenter'
import workOrdersRouter from './_include/workOrders'
/* eslint-disable*/
if (WXEnvironment.platform == 'Web') {
    window.Vue = MyVue
}
Vue.use(Router)
let newArr = [{
    path: '/',
    name: 'HomeVue',
    component: HomeVue
}]
let newRouter = [
    ...newArr,
    ...demorRouter,
    ...messegeRouter,
    ...dataServicesRouter,
    ...myProjectsRouter,
    ...usersCenterRouter,
    ...workOrdersRouter,
]
module.exports = new Router({
    routes: newRouter
})