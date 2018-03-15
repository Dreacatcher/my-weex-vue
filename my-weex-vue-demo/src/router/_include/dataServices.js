import DataServices from 'dataServices'
export default [{
    path: '/dataServices', // 数据服务
    name: 'DataServices',
    component: DataServices
        // meta: { keepAlive: true } // 缓存组件（true：缓存，false: 不缓存，默认为false）
}]