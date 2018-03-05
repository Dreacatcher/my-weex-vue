<template>
  <div class="container" :style="{ height: height }">
    <div class="demo">
      <wxc-minibar title="标题" background-color="#009ff0" text-color="#FFFFFF" right-text="更多" @wxcMinibarLeftButtonClicked="minibarLeftButtonClick" @wxcMinibarRightButtonClicked="minibarRightButtonClick"></wxc-minibar>
      <WeexMyTabBar></WeexMyTabBar>
    </div>
  </div>
</template>

<script>
import { WxcMinibar } from 'weex-ui'
import WeexMyTabBar from 'weexMyTabBar'
console.log('WeexMyTabBar1111')
console.log(WeexMyTabBar)
console.log('WeexMyTabBar2222')
/* eslint-disable*/
const modal = weex.requireModule('modal')
export default {
  data: function() {
    return {
      height: '30px'
    }
  },
  components: { WxcMinibar, WeexMyTabBar },
  methods: {
    minibarLeftButtonClick() {},
    minibarRightButtonClick() {
      modal.toast({ message: 'click rightButton!', duration: 1 })
    }
  }
}
</script>
