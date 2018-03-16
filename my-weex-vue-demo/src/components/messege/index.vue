<template>
  <wxc-tab-bar :tab-titles="tabBarConfig.tabTitles" :tab-styles="tabBarConfig.tabStyles" title-type="icon" @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <!-- 第一个页面内容-->
    <div class="item-container" :style="contentStyle">
      <text>首页</text>
      <text>首页iconfont</text>
      <text class="icon-browser iconfont"></text>
      <div class="i-box-l">
        <text class="i-box-icon adress iconfont i-c-blue">&#xe66a;</text>
        <text class="i-box-tlt">地址</text>
      </div>
    </div>

    <!-- 第二个页面内容-->
    <div class="item-container" :style="contentStyle">
      <text>特别推荐</text>
    </div>

    <!-- 第三个页面内容-->
    <div class="item-container" :style="contentStyle">
      <text>消息中心</text>
    </div>

    <!-- 第四个页面内容-->
    <div class="item-container" :style="contentStyle">
      <text>我的主页</text>
    </div>
  </wxc-tab-bar>
</template>

<style scoped lang='scss' type="text/scss">
.item-container {
  width: 750px;
  background-color: #f2f3f4;
  align-items: center;
  justify-content: center;
  .adress {
    color: red;
  }
}
.iconfont {
  font-family: 'iconfont';
}
</style>

<script>
import { WxcTabBar, Utils } from 'weex-ui'
export default {
  components: { WxcTabBar },
  data: () => ({
    contentStyle: '',
    tabBarConfig: {
      tabTitles: [
        {
          title: '首页tab',
          icon:
            'https://gw.alicdn.com/tfs/TB1MWXdSpXXXXcmXXXXXXXXXXXX-72-72.png',
          activeIcon:
            'https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png'
        },
        {
          title: '特别推荐tab',
          icon:
            'https://gw.alicdn.com/tfs/TB1ARoKSXXXXXc9XVXXXXXXXXXX-72-72.png',
          activeIcon:
            'https://gw.alicdn.com/tfs/TB19Z72SXXXXXamXFXXXXXXXXXX-72-72.png'
        },
        {
          title: '消息中心tab',
          icon:
            'https://gw.alicdn.com/tfs/TB1VKMISXXXXXbyaXXXXXXXXXXX-72-72.png',
          activeIcon:
            'https://gw.alicdn.com/tfs/TB1aTgZSXXXXXazXFXXXXXXXXXX-72-72.png',
          badge: 5
        },
        {
          title: '我的主页tab',
          icon:
            'https://gw.alicdn.com/tfs/TB1Do3tSXXXXXXMaFXXXXXXXXXX-72-72.png',
          activeIcon:
            'https://gw.alicdn.com/tfs/TB1LiNhSpXXXXaWXXXXXXXXXXXX-72-72.png',
          dot: true
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
    }
  }),
  created() {
    const _tabPageHeight = Utils.env.getPageHeight()
    // 如果页面没有导航栏，可以用下面这个计算高度的方法
    // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
    const _tabStyles = this.tabBarConfig.tabStyles
    this.contentStyle = { height: _tabPageHeight - _tabStyles.height + 'px' }
  },
  methods: {
    wxcTabBarCurrentTabSelected(e) {
      const index = e.page
      console.log(index)
    }
  }
}
</script>