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
  height: px2rem(90);
  display: flex;
  flex: 1;
  text-align: center;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
  .tabIcon {
    text-align: center;
    font-size: px2rem(24);
  }
  .tabTitle {
    text-align: center;
    font-size: px2rem(14);
  }
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