/*
* @Author: lcm
* @Date:   2017-04-17 18:01:21
 * @Last Modified by: lucm
 * @Last Modified time: 2018-03-05 10:53:12
*/

'use strict'
var path = require('path')
var srcDir = path.resolve(process.cwd(), 'src')
module.exports = {
  // ******************************************demo ******************************//
  actionSheet: srcDir + '/components/ui/actionSheet',
  weexMyTabBar: srcDir + '/components/ui/weexMyTabBar',
  weexMyTabBarParent: srcDir + '/components/ui/weexMyTabBarParent'
}
