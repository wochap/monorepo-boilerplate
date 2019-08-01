import { shallowMount } from '@vue/test-utils'
import Icon from './Icon'

describe('Icon.vue', () => {
  it('add correct fontawesome icon class', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Icon, {
      slots: {
        default: msg,
      },
      propsData: {
        name: 'tree',
      },
    })
    expect(wrapper.classes('fa-tree')).toBe(true)
  })
})
