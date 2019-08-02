import requireContext from 'require-context.macro'
import { configure } from '@storybook/vue'
import '@storybook/addon-console'
import 'core-js' // add polyfills
import '@/styles/main.scss'

// automatically import all files ending in *.stories.js
const req = requireContext('../src', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
