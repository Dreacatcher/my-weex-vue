<template>
  <div class="tabPageWrap">
    <div class="itemTab" v-for="(item,index) in configTt.tabTitles" :key="index" @click="toToPage(item.goToPath)">
      <text :class="[selectedClass==item.goToPath?'selectItemTab':'','tabIcon iconfont']">{{getFontName(item.icon)}}</text>
      <!-- <text :class="[selectedClass==item.goToPath?'selectItemTab':'','tabIcon iconfont']" v-html="item.icon">&nbsp; </text> -->
      <text :class="[selectedClass==item.goToPath?'selectItemTab':'','tabTt']">{{item.title}}</text>
    </div>
  </div>
</template>

<style scoped lang='scss' type="text/scss">
@import '../../style/_include/_all';
.iconfont {
  font-family: iconfont;
}
.tabPageWrap {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: px2rem(50);
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top-width: 1px;
  border-top-color: #d9d9d9;
  background-color: #fafafa;
}
.itemTab {
  flex: 1;
  justify-content: center;
  align-items: center;
}
.tabIcon,
.tabTt {
  text-align: center;
}
.tabIcon {
  font-size: px2rem(24);
}
.tabTt {
  font-size: px2rem(12);
}
.selectItemTab {
  color: #ff0000;
}
</style>
<script>
import util from 'util'
export default {
  data: () => ({
    configTt: {
      tabTitles: [
        {
          title: '首页',
          icon: '&#xe8e2;',
          goToPath: 'index'
        },
        {
          title: '消息',
          icon: '&#xe62f;',
          goToPath: 'messege'
        },
        {
          title: '工单',
          icon: '&#xe8df;',
          goToPath: 'workOrders'
        },
        {
          title: '推荐',
          icon: '&#xe8f4;',
          goToPath: 'recommend'
        },
        {
          title: '个人中心',
          icon: '&#xe903;',
          goToPath: 'usersCenter'
        }
      ]
    },
    selectedClass: 'index'
  }),
  created() {},
  methods: {
    toToPage(goToPath) {
      this.$emit('toToPage', goToPath)
      console.log(this.selectedClass)
      this.selectedClass = goToPath
    },
    getFontName(_fontName) {
      return util.getFontName(_fontName)
    }
  }
}
</script>