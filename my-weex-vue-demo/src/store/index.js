/*
 * @Author: lucm
 * @Date: 2017-06-08 11:06:27
 * @Last Modified by: lucm
 * @Last Modified time: 2018-03-01 16:43:54
 */
import MyVue from 'vue'
import Vuex from 'vuex'
import demoStore from './_include/demo'
/* eslint-disable*/
if (WXEnvironment.platform !== 'Web') {
  Vue.use(Vuex)
} else {
  window.Vue = MyVue
}
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    demoStore
  }
})
