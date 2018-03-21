<template>
  <div class="wrapper">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
import util from 'util'
/* eslint-disable*/
let domModule = weex.requireModule('dom')
export default {
  created() {
    util.initIconFont()
  },
  mounted() {},
  methods: {}
}
</script>
<style lang='scss' type="text/scss">
.iconfont {
  font-family: iconfont;
}
</style>