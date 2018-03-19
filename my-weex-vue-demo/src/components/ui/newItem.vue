<template>
  <div class="newItemWp">
    <div class="newItem" v-for="(item,index) in rcDatas" :key="index">
      <image class="newItemImg" :src=item.img />
      <text class="newItemTitle">{{item.title}}</text>
    </div>
  </div>
</template>

<style scoped lang='scss' type="text/scss">
@import '../../style/_include/_all';
.newItemWp {
  padding-left: px2rem(10);
  padding-right: px2rem(10);
}
.newItem {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  padding-top: px2rem(6);
  padding-bottom: px2rem(4);
  box-sizing: border-box;
  border-bottom-color: $listBorderColor;
  border-bottom-width: px2rem(2);
  .newItemImg {
    width: px2rem(60);
    height: px2rem(60);
    margin-right: px2rem(6);
  }
  .newItemTitle {
    width: px2rem(285);
    display: inline-block;
    font-size: px2rem(12);
  }
}
</style>
<script>
export default {
  data() {
    return {
      rcDatas: [
        {
          title:
            '年中扫一扫，下半年运势好，年中扫一扫，下半年运势好，年中扫一扫，下半年运势好，年中扫一扫，下半年运势好，年中扫一扫，下半年运势好',
          img: 'https://vuejs.org/images/logo.png'
        },
        {
          title:
            '年中扫一扫，下半年运势好，年中扫一扫，下半年运势好，年中扫一扫，下半年运势好，年中扫一扫，下半年运势好，年中扫一扫，下半年运势好',
          img: 'https://vuejs.org/images/logo.png'
        },
        {
          title:
            '年中扫一扫，下半年运势好，年中扫一扫，下半年运势好，年中扫一扫，下半年运势好，年中扫一扫，下半年运势好，年中扫一扫，下半年运势好',
          img: 'https://vuejs.org/images/logo.png'
        },
        {
          title:
            '年中扫一扫，下半年运势好，年中扫一扫，下半年运势好，年中扫一扫，下半年运势好，年中扫一扫，下半年运势好，年中扫一扫，下半年运势好',
          img: 'https://vuejs.org/images/logo.png'
        },
        {
          title:
            '年中扫一扫，下半年运势好，年中扫一扫，下半年运势好，年中扫一扫，下半年运势好，年中扫一扫，下半年运势好，年中扫一扫，下半年运势好',
          img: 'https://vuejs.org/images/logo.png'
        },
        {
          title:
            '年中扫一扫，下半年运势好，年中扫一扫，下半年运势好，年中扫一扫，下半年运势好，年中扫一扫，下半年运势好，年中扫一扫，下半年运势好',
          img: 'https://vuejs.org/images/logo.png'
        },
        {
          title:
            '年中扫一扫，下半年运势好，年中扫一扫，下半年运势好，年中扫一扫，下半年运势好，年中扫一扫，下半年运势好，年中扫一扫，下半年运势好',
          img: 'https://vuejs.org/images/logo.png'
        }
      ]
    }
  },
  created() {},
  methods: {}
}
</script>