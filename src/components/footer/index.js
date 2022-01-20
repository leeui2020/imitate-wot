import Vue from 'vue'
import style from './index.module.css'

const footerImgs = [
  {
    img: require('@/assets/footer-img1.png')
  },
  {
    img: require('@/assets/footer-img2.png')
  },
  {
    img: require('@/assets/footer-img3.png')
  }
]

export default Vue.extend({
  render () {
    const imgs = footerImgs.map((item) => (
      <a class={style.item} href="javascript:;">
        <img src={item.img} />
      </a>
    ))

    return (
      <div class={style.footer}>
        <div class={['inner', style['footer-inner']]}>
          <div class={style.left}>{imgs}</div>

          <div class={style.text}>
            <p>© 2012 – 2021 Wargaming.net保留所有权利</p>
            <p>Copyright 2016 YouXi.com 版权所有 趣游时代(北京)科技有限公司 北京市朝阳区酒仙桥路甲10号3号楼15层17层1769</p>
            <p>
              <a href="javascript:;">京ICP证京B2-20170671</a>
              <span> | </span>
              <a href="javascript:;">京ICP备11029981号-10</a>
              <span> | </span>
              <a href="javascript:;">京网文【2019】0038-009号</a>
            </p>
            <p>公安备案号11010502035516 | ISBN-978-7-89989-132-2 | 新出审字【2011】186号</p>
            <p>抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活</p>
          </div>
        </div>
      </div>
    )
  }
})
