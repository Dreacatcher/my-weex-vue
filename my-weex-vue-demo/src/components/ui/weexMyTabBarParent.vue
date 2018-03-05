<template>
  <div class="weexMyTabBarParentWp">
    <slot>
    </slot>
  </div>
</template>
<script>
// import common from 'common'
export default {
  name: 'weexMyTabBarParent',
  props: {
    upCallBack: {
      type: Function
    },
    downCallBack: {
      type: Function
    },
    upLoadingTip: {
      type: String
    },
    downLoadingTip: {
      type: String
    }
  },
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style type="text/scss" lang="scss">
@import '../../../src/style/_include/_all';
</style>
