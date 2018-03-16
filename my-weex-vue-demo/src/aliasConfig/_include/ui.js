/*
 * @Author: lcm
 * @Date:   2017-04-17 18:01:21
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-03-16 17:10:18
 */

'use strict'
var path = require('path')
var srcDir = path.resolve(process.cwd(), 'src')
module.exports = {
    // ******************************************demo ******************************//
    actionSheet: srcDir + '/components/ui/actionSheet',
    weexMyTabBar: srcDir + '/components/ui/weexMyTabBar',
    weexMyTabBarParent: srcDir + '/components/ui/weexMyTabBarParent',
    imgBtn: srcDir + '/components/ui/imgBtn',
    mySlider: srcDir + '/components/ui/mySlider'
}