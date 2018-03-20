<template>
  <div class="headWp">
    <div class="scan">
      <text class="icon iconfont">&#xe917;</text>
      <text class="txt">扫一扫</text>
    </div>
    <div class="search">
      <text class="searchIcon iconfont">&#xe8e3;</text>
      <text class="searchTxt" @click="jumpWeb()"> 搜索商品，共8888款好物</text>
    </div>
    <div class="notice">
      <text class="icon iconfont">&#xe8ca;</text>
      <text class="txt">客服</text>
    </div>
  </div>
</template>
<style scoped lang='scss' type="text/scss">
@import '../../style/_include/_all';
.iconfont {
  font-family: iconfont;
}
.headWp {
  position: fixed;
  width: px2rem(375);
  top: 0;
  left: 0;
  right: 0;
  height: px2rem(50);
  padding-top: px2rem(10);
  padding-bottom: px2rem(10);
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: $whiteActive;
  opacity: 0.99;
  padding-left: px2rem(10);
  padding-right: px2rem(10);
  border-bottom-color: $listBorderColor;
  border-bottom-width: px2rem(2);
}
.scan,
.notice {
  width: px2rem(50);
  justify-content: center;
  align-items: center;
}
.icon {
  color: $gray;
  width: px2rem(30);
  text-align: center;
  font-size: px2rem(18);
}
.txt {
  color: $gray;
  font-size: px2rem(12);
}

.scan {
  margin-right: px2rem(6);
}
.notice {
  margin-left: px2rem(6);
}
.search {
  height: px2rem(30);
  width: px2rem(255);
  font-size: px2rem(12);
  align-items: center;
  flex-direction: row;
  background-color: $colorededed;
  border-radius: px2rem(8);
}
.searchIcon {
  font-size: px2rem(18);
  padding-right: px2rem(10);
  padding-left: px2rem(10);
  color: $fzActive;
}
.searchTxt {
  font-size: px2rem(12);
  color: $fzActive;
}
</style>
<script>
// var navigator = weex.requireModule('navigator')
// import util from '../util'
export default {
  data() {
    return {}
  },
  created() {},
  methods: {
    jumpWeb() {}
  }
}
</script>