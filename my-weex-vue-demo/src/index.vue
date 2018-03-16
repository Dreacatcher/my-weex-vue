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
      src: "url('//at.alicdn.com/t/font_590372_taw14f7ymyzj8aor.ttf')"
    })
  },
  methods: {}
}
</script>
<style lang='scss' type="text/scss">
.iconfont {
  font-family: 'iconfont';
}
</style>