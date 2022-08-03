import { ExtractPropTypes, PropType } from 'vue'

export type ATButtonType = 'primary' | 'secondary' | 'text'

export const buttonProps = {
  type: {
    type: String as PropType<ATButtonType>,
    default: 'secondary'
  }
} as const

export type ButtonType = ExtractPropTypes<typeof buttonProps>
