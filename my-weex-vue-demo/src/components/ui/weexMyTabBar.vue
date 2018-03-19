<template>
  <div class="tabPageWrap">
    <div class="itemTab" v-for="(item,index) in configTt.tabTitles" :key="index" @click="toToPage(item.goToPath)">
      <text class="tabIcon iconfont" v-html="item.icon"></text>
      <text class="tabTt">{{item.title}}</text>
    </div>
  </div>
</template>

<style scoped lang='scss' type="text/scss">
@import '../../style/_include/_all';
.tabPageWrap {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: px2rem(50);
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  border-top-width: 1px;
  border-top-color: #d9d9d9;
  background-color: #fafafa;
  .tabIcon {
    text-align: center;
    font-size: px2rem(24);
  }
  .tabTt {
    font-size: px2rem(12);
  }
}
</style>
<script>
export default {
  data: () => ({
    configTt: {
      tabTitles: [
        {
          title: '首页',
          icon: '&#xe8e2;',
          activeIcon: '&#xe8e1;',
          goToPath: 'index'
        },
        {
          title: '消息',
          icon: '&#xe62f;',
          activeIcon: '&#xe8e1;',
          goToPath: 'messege'
        },
        {
          title: '工单',
          icon: '&#xe8df;',
          activeIcon: '&#xe8e1;',
          goToPath: 'workOrders'
        },
        {
          title: '推荐',
          icon: '&#xe8f4;',
          activeIcon: '&#xe8e1;',
          goToPath: 'recommend'
        },
        {
          title: '个人中心',
          icon: '&#xe903;',
          activeIcon: '&#xe903;',
          goToPath: 'usersCenter'
        }
      ],
      tabStyles: {
        bgColor: '#FFFFFF',
        titleColor: '#666666',
        activeTitleColor: '#3D3D3D',
        activeBgColor: '#FFFFFF',
        isActiveTitleBold: true,
        iconWidth: 70,
        iconHeight: 70,
        width: 160,
        height: 120,
        fontSize: 24,
        textPaddingLeft: 10,
        textPaddingRight: 10
      }
    },
    contentStyle: ''
  }),
  created() {},
  methods: {
    toToPage(goToPath) {
      this.$emit('toToPage', goToPath)
    }
  }
}
</script>