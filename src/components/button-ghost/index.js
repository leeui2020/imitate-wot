import Vue from 'vue'
import style from './index.module.css'

export default Vue.extend({
  props: {
    text: String,
    color: String
  },

  render () {
    return (
      <a class={[style.button, style[`button-color-${this.color}`]]}>
        <span>{this.text}</span>
      </a>
    )
  }
})
