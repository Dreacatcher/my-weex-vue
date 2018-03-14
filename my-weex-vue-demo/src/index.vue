<template>
  <div class="wrapper">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <weexMyTabBar @onTabTo="onTabTo"></weexMyTabBar>
  </div>
</template>
<script>
import weexMyTabBar from 'weexMyTabBar'
/* eslint-disable*/
let domModule = weex.requireModule('dom')
export default {
  created() {
    let domModule = weex.requireModule('dom')
    domModule.addRule('fontFace', {
      fontFamily: 'iconfont',
      src: "url('//at.alicdn.com/t/font_590372_koxf55xragfa8aor.ttf')"
    })
  },
  components: {
    weexMyTabBar
  },
  methods: {
    onTabTo(_result) {
      let _key = _result.data.key || ''
      this.$router && this.$router.push('/' + _key)
    }
  }
}
</script>
<style lang='scss' type="text/scss">
.iconfont {
  font-family: 'iconfont';
}
</style>

