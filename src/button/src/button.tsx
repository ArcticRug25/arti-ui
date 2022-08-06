import { defineComponent, toRefs } from 'vue'
import { buttonProps, ButtonType } from './button-types'

export default defineComponent({
  name: 'ATButton',
  props: buttonProps,
  setup(props: ButtonType, { slots }) {
    const { type, size, disabled, block } = toRefs(props)
    return () => {
      const defaultSlot = slots.default ? slots.default() : '按钮'
      // block
      const blockCls = block.value ? 'at-btn--block' : ''
      return (
        <button
          class={`at-btn at-btn--${type.value} at-btn--${size.value} ${blockCls}`}
          disabled={disabled.value}
        >
          {defaultSlot}
        </button>
      )
    }
  }
})
