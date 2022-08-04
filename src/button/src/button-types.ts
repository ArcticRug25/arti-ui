import { ExtractPropTypes, PropType } from 'vue'

export type ATButtonType = 'primary' | 'secondary' | 'text'
export type ATButtonSize = 'small' | 'medium' | 'large'

export const buttonProps = {
  type: {
    type: String as PropType<ATButtonType>,
    default: 'secondary'
  },
  size: {
    type: String as PropType<ATButtonSize>,
    default: 'medium'
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const

export type ButtonType = ExtractPropTypes<typeof buttonProps>
