<template>
  <div>
    <div class="sliderWp">
      <slider class="slider" interval="3000" auto-play="true">
        <div class="frame" v-for="(img,index) in imageList" :key="index">
          <image :placeholder="img.info" class="image" resize="cover" :src="img.src" />
        </div>
      </slider>
    </div>
  </div>
</template>
<style lang='scss' type="text/scss">
.sliderWp {
  .image {
    width: 700px;
    height: 200px;
  }
  .slider {
    width: 700px;
    height: 200px;
    border-style: solid;
    border-color: #41b883;
  }
  .frame {
    width: 700px;
    height: 200px;
    position: relative;
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
  }
}
</script>