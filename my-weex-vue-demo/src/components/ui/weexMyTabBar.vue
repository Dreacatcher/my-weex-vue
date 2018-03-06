<template>
  <weexMyTabBarParent>
    <div class="tabPageWrap" ref="tabPageWrap">
      <div class="tabContainerWp" ref="tabContainerWp">
        <slot></slot>
      </div>
    </div>
    <div class="tabTitleList">
      <div class="barItemContainer" v-for="(item,index) in tabBarConfig.tabTitles" :key="index">
        <image :src="item.icon"></image>
        <text class="textStyle">{{item.title}}</text>
      </div>
    </div>
  </weexMyTabBarParent>
</template>

<style scoped lang='scss' type="text/scss">
.tabPageWrap {
  width: 750px;
  flex: 1;
  overflow: hidden;
  .tabContainerWp {
    flex-direction: row;
    position: absolute;
    justify-content: flex-start;
  }
  .tabTitleList {
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    .barItemContainer {
      flex: 1;
      background-color: #f2f3f4;
      justify-content: center;
      align-items: center;
      border-bottom-style: solid;
      .textStyle {
        lines: 1;
      }
    }
  }
}
</style>
<script>
import { Utils } from 'weex-ui'
import weexMyTabBarParent from 'weexMyTabBarParent'
export default {
  components: { weexMyTabBarParent },
  props: {
    tabBarConfig: {
      type: Object
    }
  },
  data: () => ({
    configTt: {
      tabTitles: [
        {
          title: '首页',
          icon:
            'https://gw.alicdn.com/tfs/TB1MWXdSpXXXXcmXXXXXXXXXXXX-72-72.png',
          activeIcon:
            'https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png'
        },
        {
          title: '特别推荐',
          icon:
            'https://gw.alicdn.com/tfs/TB1ARoKSXXXXXc9XVXXXXXXXXXX-72-72.png',
          activeIcon:
            'https://gw.alicdn.com/tfs/TB19Z72SXXXXXamXFXXXXXXXXXX-72-72.png'
        },
        {
          title: '消息中心',
          icon:
            'https://gw.alicdn.com/tfs/TB1VKMISXXXXXbyaXXXXXXXXXXX-72-72.png',
          activeIcon:
            'https://gw.alicdn.com/tfs/TB1aTgZSXXXXXazXFXXXXXXXXXX-72-72.png',
          badge: 5
        },
        {
          title: '我的主页',
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
    },
    contentStyle: ''
  }),
  created() {
    console.log(Utils)
    // const tabPageHeight = Utils.env.getPageHeight()
    // 如果页面没有导航栏，可以用下面这个计算高度的方法
    // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
    const tabStyles = this.configTt.tabStyles
    console.log('tabStyles111111')
    console.log(tabStyles)
    console.log('tabStyles222222')
    this.contentStyle = { height: tabStyles.height + 'px' }
  },
  methods: {
    wxcTabBarCurrentTabSelected(e) {
      const index = e.page
      console.log(index)
    }
  }
}
</script>
