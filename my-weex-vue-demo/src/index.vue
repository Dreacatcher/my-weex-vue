<template>
  <div class="wrapper">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
/* eslint-disable*/
let domModule = weex.requireModule('dom')
export default {
  created() {
    let domModule = weex.requireModule('dom')
    let times = new Date().getTime()
    domModule.addRule('fontFace', {
      'fontFamily': "iconfont",
      'src': "url('http://at.alicdn.com/t/font_590372_taw14f7ymyzj8aor.ttf')"
    })
    // this.loadingFont()
  },
  mounted() {},
  methods: {
    loadingFont() {
      let domModule = weex.requireModule('dom')
      let times = new Date().getTime()
      let dom = weex.requireModule('dom')
      //通过获取platform判断加载字体文件的路径,(待完善,在手机的playground中,是无法加载本地文件的)
      let platform = weex.config.env.platform.toLowerCase()
      let url = ''
      if ('android' == platform) {
        //本地资源采用'local:// '的方式加载
        //第三个斜杠是代表当前目录,对于android来说,如果加载的是字体,那么就是assets目录,同理`/iconfont.ttf'`就是加载`assets`目录下的iconfont.ttf文件
        url = "url('local:///static/icomoon/iconfont.ttf')" //注意我这里是将字体文件放在'assets/font/''目录下的,所以
      } else if ('ios' == platform) {
        //todo 理论上同android未测试
        url = "url('local:///static/icomoon/iconfont.ttf')"
      } else {
        url =
          "url('http://at.alicdn.com/t/font_590372_taw14f7ymyzj8aor.ttf?" +
          times +
          "')"
      }
      dom.addRule('fontFace', {
        fontFamily: 'iconfont',
        src: url
      })
    }
  }
}
</script>
<style lang='scss' type="text/scss">
.iconfont {
  font-family: iconfont;
}
</style>