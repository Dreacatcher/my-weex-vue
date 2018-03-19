<template>
  <div class="subWrapper">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <weexMyTabBar @toToPage="onTabTo"></weexMyTabBar>
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
    onTabTo(_key) {
      console.log(_key)
      // let _key = _result.data.key || ''
      this.$router && this.$router.push('/home/' + _key)
    }
  }
}
</script>
