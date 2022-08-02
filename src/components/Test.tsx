// export default () => <div>test</div>

import { defineComponent, DirectiveBinding, ref, withModifiers } from 'vue'

// export default defineComponent({
//   render() {
//     return <div>ts</div>
//   }
// })

const a = '1'
// 摒弃 this, 对于 ts 支持最好
export default defineComponent({
  directives: {
    focus: {
      mounted(el: HTMLInputElement, binding: DirectiveBinding) {
        el.focus()
        console.log('binding.arg', binding.arg)
        console.log('binding.modifiers', binding.modifiers)
        console.log('binding.value', binding.value)
      }
    }
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const count = ref(0)

    const inc = () => {
      count.value++
      emit('click')
    }

    const list = ref<string[]>(['a', 'b', 'c'])

    return () => {
      // v-if
      const span = true ? <span>a</span> : <span>b</span>

      return (
        <div onClick={withModifiers(inc, ['self'])}>
          {count.value}
          <input
            type="text"
            v-focus={['val', 'arg', ['modifier']]}
            v-model={count.value}
          />
          <div>{span}</div>
          <ul>
            {list.value.map(string => (
              <li key={string}>{string}</li>
            ))}
          </ul>
          {/* 默认插槽内容 */}
          <div>{slots.default ? slots.default() : 'content'}</div>
          <div>{slots.title ? slots.title() : 'title'}</div>
        </div>
      )
    }
  }
})
