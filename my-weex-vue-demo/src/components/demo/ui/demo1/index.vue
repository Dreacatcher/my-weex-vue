
<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="greeting">The environment is ready2222!</text>
    <text class="message">Now, let's use Vue.js to build your Weex app22222.</text>
  </div>
</template>

<script>
import indexJs from './controllers/index'
export default {
  ...indexJs,
  components: {}
}
</script>

<style scoped lang='scss'>
// @import '../../../../style/_include/_all';
@import './scss/index.scss';
</style>
