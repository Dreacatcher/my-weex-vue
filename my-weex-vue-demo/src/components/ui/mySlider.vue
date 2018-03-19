<template>
  <slider class="slider" interval="3000" auto-play="true">
    <div class="frame" v-for="(img,index) in imageList" :key="index">
      <image :placeholder="img.info" class="image" resize="cover" :src="img.src" />
    </div>
    <indicator class="indicator"></indicator>
  </slider>
</template>

<style scoped lang='scss' type="text/scss">
@import '../../style/_include/_all';
.slider {
  width: px2rem(375);
  height: px2rem(200);
  border-style: solid;
  border-color: #19201d;
  .image {
    width: px2rem(375);
    height: px2rem(200);
  }
  .frame {
    width: px2rem(375);
    height: px2rem(200);
    position: relative;
  }
  .indicator{
    width: px2rem(375);
    height: px2rem(20);
    item-color: white;
    item-selected-color: red;
    item-size: px2rem(8);
    position: absolute;
    bottom: px2rem(4);
    right: 0;
  }
}
</style>

<script>
export default {
  data() {
    return {
      imageList: [
        {
          src:
            'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
          info: '轮播1'
        },
        {
          src:
            'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg',
          info: '轮播1'
        },
        {
          src:
            'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg',
          info: '轮播1'
        }
      ]
    }
  },
  components: {}
}
</script>