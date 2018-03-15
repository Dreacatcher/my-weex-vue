/*
 * @Author: lucm
 * @Date: 2017-06-08 11:06:27
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-03-15 14:59:39
 */
import MyVue from 'vue'
import Vuex from 'vuex'
import demoStore from './_include/demo'
import dataServicesStore from './_include/dataServices'
import messegeStore from './_include/messege'
import myProjectsStore from './_include/myProjects'
import usersCenterStore from './_include/usersCenter'
import workOrdersStore from './_include/workOrders'
/* eslint-disable*/
if (WXEnvironment.platform !== 'Web') {
    Vue.use(Vuex)
} else {
    window.Vue = MyVue
}
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        demoStore,
        dataServicesStore,
        messegeStore,
        myProjectsStore,
        usersCenterStore,
        workOrdersStore
    }
})