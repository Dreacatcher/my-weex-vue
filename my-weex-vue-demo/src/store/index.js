/*
 * @Author: lucm
 * @Date: 2017-06-08 11:06:27
 * @Last Modified by: lucm
 * @Last Modified time: 2018-03-01 15:42:25
 */
import Vuex from 'vuex'
import demoStore from './_include/demo'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    demoStore
  }
})
