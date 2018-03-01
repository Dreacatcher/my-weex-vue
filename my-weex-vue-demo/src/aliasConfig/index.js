/*
 * @Author: lcm
 * @Date:   2017-04-17 18:01:21
 * @Last Modified by: lucm
 * @Last Modified time: 2018-03-01 17:25:30
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

var newConfig = Object.assign(
  baseObj,
  demo,
  ui
)
module.exports = newConfig
