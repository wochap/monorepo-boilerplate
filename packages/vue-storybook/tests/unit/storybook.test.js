import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'

// storybook running is required
initStoryshots({
  suite: 'Image storyshots',
  framework: 'vue',
  test: imageSnapshot(),
})
