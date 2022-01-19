import Vue from 'vue'
import logoImage from '@/assets/logo.png'
import style from './index.module.css'

console.info(style)
export default Vue.extend({
  render () {
    return (
      <div class={style.header}>
        <div class={['inner', style.inner]}>
          <a class={style.logo} href="/">
            <img src={logoImage} />
          </a>

          <div class={style.right}></div>
        </div>
      </div>
    )
  }
})
