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
.weexMyTabBarParentWp {
  display: block;
  position: absolute;
  top: 90px;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: column;
  min-height: 100%;
}
</style>
