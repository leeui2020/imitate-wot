import Vue from 'vue'
import style from './index.module.css'

export default Vue.extend({
  props: {
    desc: Number,
    text: String,
    mark: String
  },

  data () {
    return {
      descIcon: [
        require('@/assets/1.png'),
        require('@/assets/2.png'),
        require('@/assets/3.png'),
        require('@/assets/4.png')
      ]
    }
  },

  render () {
    const markNode = this.mark ? (
      <a href="javascript:;" class={style.mark}>
        <span>{this.mark}</span>
        <span class="icon-101"></span>
      </a>
    ) : null

    return (
      <div class={style.item}>
        <img class={style.desc} src={this.descIcon[this.desc]} />
        <div class={style.info}>
          <a href="javascript:;" class={style.text}>{this.text}</a>
          {markNode}
        </div>
      </div>
    )
  }
})
