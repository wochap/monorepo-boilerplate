// in case storybook is failing, you can prototype here
import Vue from 'vue'
import { Icon } from './main'

const Sandbox = {
  functional: true,
  render() {
    return <Icon name="tree" />
  },
}

Vue.config.productionTip = false

new Vue({
  render: h => h(Sandbox),
}).$mount('#app')
