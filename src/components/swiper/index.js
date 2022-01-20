import Vue from 'vue'
import SwiperItem from './swiper-item'
import style from './index.module.css'

export default Vue.extend({
  data () {
    return {
      list: [
        {
          video: require('@/assets/swiper-video-1.mp4'),
          text: require('@/assets/swiper-text-1.png')
        },
        {
          video: require('@/assets/swiper-video-2.mp4'),
          text: require('@/assets/swiper-text-2.png')
        },
        {
          video: require('@/assets/swiper-video-3.mp4'),
          text: require('@/assets/swiper-text-3.png')
        },
        {
          video: require('@/assets/swiper-video-4.mp4'),
          text: require('@/assets/swiper-text-4.png')
        }
      ],

      currentIndex: 0,
      opacity: 1
    }
  },

  render () {
    const items = this.list.map((item, index) => (
      <SwiperItem
        class={index === this.currentIndex ? '' : style.hidden}
        style={{ opacity: index === this.currentIndex ? this.opacity : 0 }}
        item={item}
      />
    ))

    const dots = this.list.map((item, index) => (
      <div class={[style['swiper-dot'], index === this.currentIndex && style.active]}>
        <a href="javascript:;" onClick={() => this.setCurrentIndex(index)} />
      </div>
    ))

    return (
      <div class={style.swiper}>
        <div class={style['swiper-wrapper']}>{items}</div>
        <div class={style['swiper-dots']}>{dots}</div>
      </div>
    )
  },

  methods: {
    renderOpacity () {
      if (this.timeId) {
        clearInterval(this.timeId)
      }

      this.opacity = 0.1
      this.timeId = setInterval(() => {
        if (this.opacity === 1) {
          clearInterval(this.timeId)
          this.timeId = null
          return
        }

        this.opacity = Math.min(1, this.opacity + 0.1)
      }, 20)
    },

    setCurrentIndex (index) {
      this.currentIndex = index
    }
  },

  watch: {
    currentIndex () {
      this.renderOpacity()
    }
  }
})
