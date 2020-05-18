import ButtonText from './ButtonText'
import { withKnobs, text, number, select } from '@storybook/addon-knobs'

export default {
  title: 'UI|ButtonText',
  component: ButtonText,
}

export const Default = () => ({
  components: {
    ButtonText,
  },
  template: '<ButtonText>Cancel</ButtonText>',
})

export const Disabled = () => ({
  components: {
    ButtonText,
  },
  template: '<ButtonText :disabled="true">Cancel</ButtonText>',
})
