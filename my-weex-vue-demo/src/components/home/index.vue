<template>
  <div>
    <div class="sliderWp">
      <MySlider></MySlider>
    </div>
    <div class="contItemWp">
      <ImgBtn></ImgBtn>
    </div>
  </div>
</template>
<style scoped lang='scss' type="text/scss">

</style>

<script>
import ImgBtn from 'imgBtn'
import MySlider from 'mySlider'
export default {
  data() {
    return {}
  },
  components: {
    ImgBtn,
    MySlider
  }
}
</script>