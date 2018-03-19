<template>
  <div class="subWrapper">
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
  data() {
    return {}
  },
  created() {},
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
