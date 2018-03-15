/*
 * @Author: lcm
 * @Date:   2017-04-17 18:01:21
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-03-15 11:06:15
 */

'use strict'
var path = require('path')
var srcDir = path.resolve(process.cwd(), 'src')
var baseObj = {
    // lib
    '@': srcDir,
    vue$: 'vue/dist/vue.esm',
    // tools
    fetch: srcDir + '/tools/fetch',
    storage: srcDir + '/tools/storage',
    // url: srcDir + '/tools/url', // url文件代码有问题
    common: srcDir + '/tools/common',
    base: srcDir + '/tools/base',
    base64: srcDir + '/tools/base64',

    // home.vue
    homeVue: srcDir + '/components/home/index'
}
var demo = require('./_include/demo')
var ui = require('./_include/ui')
var dataServices = require('./_include/dataServices')
var messege = require('./_include/messege')
var workOrders = require('./_include/workOrders')
var usersCenter = require('./_include/usersCenter')
var myProjects = require('./_include/myProjects')

var newConfig = Object.assign(
    baseObj,
    demo,
    ui,
    dataServices,
    messege,
    workOrders,
    usersCenter,
    myProjects
)
module.exports = newConfig