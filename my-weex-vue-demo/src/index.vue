<template>
  <div class="wrapper">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
/* eslint-disable*/
let domModule = weex.requireModule('dom')
export default {
  created() {
    domModule.addRule('fontFace', {
      fontFamily: 'iconfont',
      src:
        "url('./static/icomoon/fonts/icomoon.ttf')"
    })
  }
}
</script>
