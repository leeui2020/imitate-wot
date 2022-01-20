import Vue from 'vue'
import style from './index.module.css'

const icoList = {
  user: require('@/assets/ico-user.png'),
  download: require('@/assets/ico-download.png'),
  home: require('@/assets/ico-home.png')
}

export default Vue.extend({
  props: {
    ico: String,
    text: String
  },

  render () {
    return (
      <a href="javascript:;" class={style.button}>
        <img src={icoList[this.ico]}></img>
        <span>{this.text}</span>
      </a>
    )
  }
})
