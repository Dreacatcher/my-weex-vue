import Vue from 'vue'

import Router from 'vue-router'
import DemoVue from 'demoVue'
import demorRouter from './_include/demo'
/* eslint-disable*/
Vue.use(Router)
let newArr = [
  {
    path: '/',
    name: 'DemoVue',
    component: DemoVue
  }
]
let newRouter = [
  ...newArr,
  ...demorRouter
]
module.exports = new Router({
  routes: newRouter
})
