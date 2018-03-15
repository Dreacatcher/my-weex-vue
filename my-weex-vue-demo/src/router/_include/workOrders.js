import WorkOrders from 'workOrders'
export default [{
    path: '/workOrders',
    name: 'WorkOrders',
    component: WorkOrders
        // meta: { keepAlive: true } // 缓存组件（true：缓存，false: 不缓存，默认为false）
}]