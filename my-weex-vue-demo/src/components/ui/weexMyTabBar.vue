<template>
  <div class="tabPageWrap">
    <div class="itemTab" v-for="(item,index) in configTt.tabTitles" :key="index">
      <text class="tabIcon iconfont" v-html="item.icon"></text>
      <text>{{item.title}}</text>
    </div>
  </div>
</template>

<style scoped lang='scss' type="text/scss">
.tabPageWrap {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 90px;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
  border-top-width: 1px;
  border-top-color: #d9d9d9;
  background-color: #fafafa;
  .tabIcon{
    text-align: center;
  }
}
</style>
<script>
import { Utils } from 'weex-ui'

export default {
  data: () => ({
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
  created() {
    console.log(Utils)
    // const tabPageHeight = Utils.env.getPageHeight()
    // 如果页面没有导航栏，可以用下面这个计算高度的方法
    // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
  },
  methods: {
    wxcTabBarCurrentTabSelected(e) {
      const index = e.page
      console.log(index)
    }
  }
}
</script>