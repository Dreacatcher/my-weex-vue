<template>
  <div class="gBoxWp">

    <Head></Head>
    <scroller class="gBoxMain" offset-accuracy="300" loadmoreoffset="300" @loadmore="onloadmore">
      <div class="sliderWp">
        <MySlider></MySlider>
      </div>
      <div class="contItemWp">
        <ImgBtn></ImgBtn>
      </div>
      <div class="contRecmWp">
        <NewItem></NewItem>
      </div>
    </scroller>
  </div>
</template>
<style scoped lang='scss' type="text/scss">
@import '../../style/_include/_all';

.head {
  height: px2rem(50);
}
.gBoxMain {
  position: fixed;
  top: px2rem(50);
  bottom: px2rem(50);
  left: 0px;
  right: 0px;
  background-color: $mainBgc;
}
.sliderWp {
  background-color: $white;
}
.contItemWp {
  background-color: $white;
  padding-top: px2rem(10);
  padding-left: px2rem(10);
  padding-right: px2rem(10);
  border-bottom-color: #ececec;
  border-bottom-width: px2rem(1);
}
.contRecmWp {
  margin-top: px2rem(10);
  background-color: $white;
}
</style>

<script>
import ImgBtn from 'imgBtn'
import MySlider from 'mySlider'
import Head from 'header'
import NewItem from 'newItem'
export default {
  data() {
    return {}
  },
  components: {
    ImgBtn,
    MySlider,
    Head,
    NewItem
  },
  methods: {
    onloadmore() {
      console.log('lcm')
    }
  }
}
</script>