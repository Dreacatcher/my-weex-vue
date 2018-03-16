import Demo from 'demoVue'
import ActionSheet from 'actionSheet'
export default [{
  path: '/actionSheet',
  name: 'ActionSheet',
  component: ActionSheet
  // meta: { keepAlive: true } // 缓存组件（true：缓存，false: 不缓存，默认为false）
},
{
  path: '/demo',
  name: 'Demo',
  component: Demo
  // meta: { keepAlive: true } // 缓存组件（true：缓存，false: 不缓存，默认为false）
}
]