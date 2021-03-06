/*
 * @Author: lcm
 * @Date:   2017-04-17 18:01:21
 * @Last Modified by: lucm
 * @Last Modified time: 2018-03-21 09:26:03
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
  util: srcDir + '/tools/util',

  // home.vue
  homeVue: srcDir + '/components/home/index',
  // *************************api********************** //
  usersCenterApi: srcDir + '/usersCenter/usersCenter'
}
var subView = require('./_include/subView')
var ui = require('./_include/ui')
var dataServices = require('./_include/dataServices')
var messege = require('./_include/messege')
var workOrders = require('./_include/workOrders')
var usersCenter = require('./_include/usersCenter')
var recommend = require('./_include/recommend')

var newConfig = Object.assign(
  baseObj,
  subView,
  ui,
  dataServices,
  messege,
  workOrders,
  usersCenter,
  recommend
)
module.exports = newConfig