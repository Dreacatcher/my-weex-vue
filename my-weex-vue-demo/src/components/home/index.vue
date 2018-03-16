<template>
  <div>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
    <text>首页tab首页tab首页tab首页tab</text>
  </div>
</template>

<style scoped lang='scss' type="text/scss">

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
    console.log('sasasasassas')
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