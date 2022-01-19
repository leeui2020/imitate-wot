import Vue from 'vue'
import logoImage from '@/assets/logo.png'
import old12Image from '@/assets/12old.png'
import style from './index.module.css'

export default Vue.extend({
  render () {
    return (
      <div class={style.header}>
        <div class={['inner', style.inner]}>
          <a class={style.logo} href="/">
            <img src={logoImage} />
          </a>

          <div class={style.right}>
            <app-button-ghost text="快速注册" color="primary" />
            <app-button-ghost text="官方商城" />
            <app-button-ghost text="进入官网" />
            <img class={style.old12} src={old12Image} />
          </div>
        </div>
      </div>
    )
  }
})
