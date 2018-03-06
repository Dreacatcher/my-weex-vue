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
    let domModule = weex.requireModule('dom')
    domModule.addRule('fontFace', {
      fontFamily: 'iconfont',
      src: "url('http://at.alicdn.com/t/font_404010_f29c7wlkludz33di.ttf')"
    })
  }
}
</script>
