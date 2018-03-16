/*
 * @Author: lucm
 * @Date: 2017-11-02 17:17:58
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-03-16 14:48:05
 */

import fetch from 'fetch'
/* *******************设置API请求地址***************************/

let interfaceEnv = {
  'base': 'http://106.14.1.0:5555/auth-service',
  'test': 'http://106.14.1.0:5555/auth-service',
  'ljpx': 'http://106.14.1.0:5555/star-service',
  'ljxm': 'http://106.14.1.0:5555/projectinfo-service',
  'ljcp': 'http://106.14.1.0:5555/products-service',
  'greentechnologys': 'http://106.14.1.0:5555/greentechnology-service',
  'projectcase': 'http://106.14.1.0:5555/projectcase-service',
  // 验证Token
  'token': 'http://106.14.1.0:5555/products-service',
  'projectcircle': 'http://106.14.1.0:5555/projectcircle-service',
  // 工单、消息
  'workOrderlist': 'http://106.14.1.0:5555/msgwork-service'
}
let base = interfaceEnv.base
let ljpx = interfaceEnv.ljpx
// let ljxm = interfaceEnv.ljxm
let ljcp = interfaceEnv.ljcp
let greentechnologys = interfaceEnv.greentechnologys
let projectcase = interfaceEnv.projectcase
let projectcircle = interfaceEnv.projectcircle
// let token = interfaceEnv.token
let workOrderlist = interfaceEnv.workOrderlist

/* *******************设置API请求地址***************************/
// 登录
export const userlogin = (params, callball) => {
  fetch.httpGetRequest(`${base}/manager/login?accessToken=123`, { params: params }, (res) => {
    callball(res)
  })
}

// 获取用户
export const getUsers = (params, callball) => {
  fetch.httpGetRequest(`${base}/manager/userInfo?accessToken=123`, { params: params }, (res) => {
    callball(res)
  })
}

// 获取产品材料导航目录
export const getproDuctMaterials = (params, callball) => {
  fetch.httpGetRequest(`${ljcp}/products/getcates?accessToken=123`, { params: params }, (res) => {
    callball(res)
  })
}

// 绿建产品查询
export const getall = (params, callball) => {
  fetch.httpGetRequest(`${ljcp}/products/getall?accessToken=123`, { params: params }, (res) => {
    callball(res)
  })
}

// 用户获取可添加的分类列表
export const getAddSort = (params, callball) => {
  fetch.httpGetRequest(`${ljcp}/products/findcates?accessToken=123`, { params: params }, (res) => {
    callball(res)
  })
}
// 用户添加自定义分类
export const userAddPersonalSort = (params, callball) => {
  fetch.httpPostRequest(`${ljcp}/products/savecates?accessToken=123`, params, (res) => {
    callball(res)
  })
}
// 绿建产品详细查询
export const getone = (params, callball) => {
  fetch.httpGetRequest(`${ljcp}/products/getone?accessToken=123`, { params: params }, (res) => {
    callball(res)
  })
}

// 绿建产品详细增加评论
export const submitComment = (params, callball) => {
  fetch.httpPostRequest(`${ljcp}/products/savecomment?accessToken=123`, params, (res) => {
    callball(res)
  })
}

// 查询绿建产品详细评论
export const queryComments = (params, callball) => {
  fetch.httpGetRequest(`${ljcp}/products/findcomment?accessToken=123`, { params: params }, (res) => {
    callball(res)
  })
}

// 绿建技术
export const greentechnoList = (params, callball) => {
  fetch.httpGetRequest(`${greentechnologys}/greentechno/getlist?accessToken=123`, { params: params }, (res) => {
    callball(res)
  })
}
// 项目案例列表
export const getprojectcaseList = (params, callball) => {
  fetch.httpGetRequest(`${projectcase}/procase/getprojectcase?accessToken=123`, { params: params }, (res) => {
    callball(res)
  })
}

// 绿建所有会员查询
export const enquiriesnoaspnet = (params, callball) => {
  fetch.httpGetRequest(`${ljpx}/member/enquiriesnoaspnet?accessToken=123`, { params: params }, (res) => {
    callball(res)
  })
}
// 绿建单会员查询
export const enquiriesnoaspnetone = (params, callball) => {
  fetch.httpGetRequest(`${ljpx}/member/enquiriesnoaspnetone?accessToken=123`, { params: params }, (res) => {
    callball(res)
  })
}

// 绿建个人加入的项目圈
export const queryprojectcircle = (params, callball) => {
  fetch.httpGetRequest(`${projectcircle}/projectcircle/querybyuser?accessToken=123`, { params: params }, (res) => {
    callball(res)
  })
}
// 查规范
export const library = (params, callball) => {
  fetch.httpGetRequest(`${ljpx}/standard/library`, { params: params }, (res) => {
    callball(res)
  })
}

// 我的收藏夹
export const findfolders = (params, callball) => {
  fetch.httpGetRequest(`${ljpx}/file/findfolders?accessToken=123`, { params: params }, (res) => {
    callball(res)
  })
}
// 分页查询收藏数据
export const findcollectionlist = (params, callball) => {
  fetch.httpGetRequest(`${ljcp}/products/findcollectionlist?accessToken=123`, { params: params }, (res) => {
    callball(res)
  })
}
// 添加产品材料到收藏数据
export const addcollection = (params, callball) => {
  fetch.httpPostRequest(`${ljcp}/products/collection?accessToken=123`, params, (res) => {
    callball(res)
  })
}
// 关注产品
export const addfollow = (params, callball) => {
  fetch.httpPostRequest(`${ljcp}/products/follow?accessToken=123`, params, (res) => {
    callball(res)
  })
}
// 查询是否关注产品
export const isfollowPd = (params, callball) => {
  fetch.httpPostRequest(`${ljcp}/products/isfollow?accessToken=123`, params, (res) => {
    callball(res)
  })
}

// 获取工单列表
export const WorkOrderlist = (params, callball) => {
  fetch.httpGetRequest(`${workOrderlist}/work/getprocessedinformation?accessToken=123`, { params: params }, (res) => {
    callball(res)
  })
}
// 提交工单
export const SubmitOrder = (params, callball) => {
  fetch.httpPostRequest(`${workOrderlist}/work/addwork?accessToken=123`, params, (res) => {
    callball(res)
  })
}
// 获取工单详情
export const OrderDetails = (params, callball) => {
  fetch.httpGetRequest(`${workOrderlist}/work/getpageworklist?accessToken=123`, { params: params }, (res) => {
    callball(res)
  })
}