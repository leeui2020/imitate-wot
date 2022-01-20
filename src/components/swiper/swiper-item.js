import Vue from 'vue'
import style from './index.module.css'

export default Vue.extend({
  name: 'app-swiper-item',

  props: {
    item: Object
  },

  render () {
    return (
      <div class={style['swiper-item']}>
        <video src={this.item.video} preload={true} autoplay={true} muted={true} loop={true}></video>
        <div class={style['swiper-text']}>
          <img src={this.item.text} />
        </div>
      </div>
    )
  }
})
