import Vue from 'vue'
import ArrowUpIcon from './arrow_up.png'
import style from './index.module.css'

export default Vue.extend({
  data () {
    return {
      isOff: false
    }
  },

  methods: {
    toggleOff () {
      this.isOff = !this.isOff
    }
  },

  render () {
    return (
      <div class={[style.collapse, this.isOff && style.off]}>
        <div class={['inner', style['collapse-inner']]}>1</div>
        <div class={style['collapse-trigger']}>
          <a href="javascript:;" onClick={this.toggleOff}>
            <span>老兵指引</span>
            <img src={ArrowUpIcon} />
          </a>
        </div>
      </div>
    )
  }
})
