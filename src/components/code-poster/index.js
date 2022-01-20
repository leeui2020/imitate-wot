import Vue from 'vue'
import posterImg from '@/assets/code.png'
import style from './index.module.css'

export default Vue.extend({
  render () {
    return (
      <a href="javascript:;" class={style.poster}>
        <img src={posterImg} />
      </a>
    )
  }
})
