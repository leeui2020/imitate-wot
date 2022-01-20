import Vue from 'vue'
import style from './index.module.css'

export default Vue.extend({
  props: {
    type: Number
  },

  data () {
    return {
      types: [
        require('@/assets/banner_btn1.png'),
        require('@/assets/banner_btn2.png'),
        require('@/assets/banner_btn3.png'),
        require('@/assets/banner_btn4.png')
      ],

      texts: [
        '游戏下载',
        '数据继承',
        '老兵回归',
        '新手指南'
      ]
    }
  },

  render () {
    return (
      <a href="javascript:;" class={style.button} style={{ backgroundImage: `url(${this.types[this.type]})` }}>
        <span>{this.texts[this.type]}</span>
      </a>
    )
  }
})
