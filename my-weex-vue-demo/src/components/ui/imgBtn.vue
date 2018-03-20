<template>
  <div class="imgBtnItemWp">
    <div class="imgBtnItem" v-for="(item,index) in configTt.tabTitles" :key="index">
      <text class="tabIcon iconfont" v-html="item.icon"></text>
      <text class="tabTitle">{{item.title}}</text>
    </div>
  </div>
</template>

<style scoped lang='scss' type="text/scss">
@import '../../style/_include/_all';
.imgBtnItemWp {
  flex-direction: row;
  flex-wrap: wrap;
}
.imgBtnItem {
  width: px2rem(88);
  align-items: center;
  justify-content: center;
  height: px2rem(70);
  text-align: center;
  margin-bottom: px2rem(10);
}
.tabIcon {
  text-align: center;
  width: px2rem(50);
  height: px2rem(50);
  padding-left: px2rem(10);
  padding-right: px2rem(10);
  padding-bottom: px2rem(10);
  padding-top: px2rem(10);
  font-size: px2rem(28);
  border-radius: px2rem(200);
  background-color: #deb887;
}
.tabTitle {
  text-align: center;
  font-size: px2rem(14);
}
</style>
<script>
export default {
  data() {
    return {
      configTt: {
        tabTitles: [
          {
            title: '首页',
            icon: '&#xe8e2;',
            activeIcon: '&#xe8e1;'
          },
          {
            title: '消息',
            icon: '&#xe62f;',
            activeIcon: '&#xe8e1;'
          },
          {
            title: '工单',
            icon: '&#xe8df;',
            activeIcon: '&#xe8e1;'
          },
          {
            title: '推荐',
            icon: '&#xe8f4;',
            activeIcon: '&#xe8e1;'
          },
          {
            title: '个人中心',
            icon: '&#xe903;',
            activeIcon: '&#xe903;'
          }
        ]
      }
    }
  },
  created() {},
  methods: {}
}
</script>