import { storiesOf } from '@storybook/vue'
import Icon from './Icon'

storiesOf('UI|Icon', module).add('Default', () => {
  return {
    components: {
      Icon,
    },
    template: '<Icon/>',
  }
})
