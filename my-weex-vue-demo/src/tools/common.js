/*
 * @Author: lcm
 * @Date:   2017-05-23 15:41:16
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-03-20 23:45:50
 */
import he from 'he'
class Tool {
  /**
     * 判斷是否是数组
     * @param {any} oNum
     * @returns
     * @memberof Tool
     */
  isNumber(oNum) {
    if (!oNum) {
      return false
    }
    var strP = /^\d+(\.\d+)?$/
    if (!strP.test(oNum)) {
      return false
    }
    try {
      if (parseInt(oNum) !== oNum || parseInt(oNum) === 0) {
        return false
      }
    } catch (ex) {
      return false
    }
    return true
  }
  /**
         * 数组去重
         * @param arr 要去重的数组
         * @returns {Array} 去重后的数组
         */
  unique(arr) {
    var ret = []
    var hash = {}

    for (var i = 0; i < arr.length; i++) {
      var item = arr[i]
      var key = typeof item + item
      if (hash[key] !== 1) {
        ret.push(item)
        hash[key] = 1
      }
    }
    return ret
  }
  /**
         * 去两端空格
         * @return 字符串
         */
  trim() {
    return this.replace(/(^\s*)|(\s*$)/g, '')
  }
  /**
         * 获取url中的字符串，支持中文
         * @return 字符串
         */
  getQueryString(key) {
    var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)')
    var result = window.location.search.substr(1).match(reg)
    return result ? decodeURIComponent(result[2]) : null
  }
  /**
         * 获取url中的字符串，支持中文
         * @return 字符串
         */
  queryString(str, key) {
    if (str && str !== '') {
      var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)')
      var result = str.substr(1).match(reg)
      return result ? decodeURIComponent(result[2]) : null
    }
  }
  /**
         * 获取滚动区域高度
         * @param {any} element
         * @returns
         * @memberof Tool
         */
  getScrollHeight(element) {
    if (element) {
      return element.scrollHeight
    } else {
      return document.documentElement.scrollHeight
    }
  }
  addClass(elem, cls) {
    if (!this.hasClass(elem, cls)) {
      elem.className += ' ' + cls
    }
  }
  hasClass(elem, cls) {
    cls = cls || ''
    if (cls.replace(/\s/g, '').length === 0) return false
    return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ')
  }
  removeClass(elem, cls) {
    if (this.hasClass(elem, cls)) {
      var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' '
      while (newClass.indexOf(' ' + cls + ' ') >= 0) {
        newClass = newClass.replace(' ' + cls + ' ', ' ')
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, '')
    }
  }
  getFontName(_fontName) {
    return he.decode(_fontName)
  }
}
export default new Tool()