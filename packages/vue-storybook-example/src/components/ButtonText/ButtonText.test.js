import { shallowMount } from '@vue/test-utils'
import ButtonText from './ButtonText'

describe('ButtonText.vue', () => {
  it('renders default slot when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(ButtonText, {
      slots: {
        default: msg,
      },
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
