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
  position: fixed;
  left: 0;
  bottom: 0;
  width: 750px;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #009ff0;
}
</style>
