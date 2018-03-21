/*
 * @Author: lucm
 * @Date: 2018-03-21 09:21:27
 * @Last Modified by: lucm
 * @Last Modified time: 2018-03-21 09:28:26
 */
import he from 'he'
let util = {
  initIconFont() {
    /* eslint-disable */
        let domModule = weex.requireModule('dom')
        domModule.addRule('fontFace', {
            'fontFamily': "iconfont",
            'src': "url('http://at.alicdn.com/t/font_590372_taw14f7ymyzj8aor.ttf')"
        })
    },
    getFontName(_fontName) {
        return he.decode(_fontName)
    }
}
export default util