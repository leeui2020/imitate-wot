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
        <div class={['inner', style['collapse-inner']]}>
          <app-guide-item desc={0} text="注册360账号" />
          <span>$</span>
          <app-guide-item desc={1} text="游戏下载" />
          <span>$</span>
          <app-guide-item desc={2} text="申请数据继承" mark="找回空中网账号" />
          <span>$</span>
          <app-guide-item desc={3} text="开启战斗" />
        </div>
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
