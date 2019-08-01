import { storiesOf } from '@storybook/vue'
import ButtonText from './ButtonText'

storiesOf('UI|ButtonText', module)
  .add('Default', () => {
    return {
      components: {
        ButtonText,
      },
      template: '<ButtonText>Cancel</ButtonText>',
    }
  })
  .add('Disabled', () => {
    return {
      components: {
        ButtonText,
      },
      template: '<ButtonText :disabled="true">Cancel</ButtonText>',
    }
  })
