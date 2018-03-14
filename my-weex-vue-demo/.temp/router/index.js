import Vue from 'vue'
import MyVue from 'vue'
import Router from 'vue-router'
import HomeVue from 'demoVue'
import demorRouter from './_include/demo'
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
    ...demorRouter
]
module.exports = new Router({
    routes: newRouter
})