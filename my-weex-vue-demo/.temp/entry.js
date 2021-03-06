import Vue from 'vue'
import weex from 'weex-vue-render'
/* global Vue */

weex.init(Vue)
/* weex initialized here, please do not move this line */
import router from '@/router/index'
import store from '@/store/index'
const App = require('@/index.vue')
/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router, store }, App))
router.push('/')