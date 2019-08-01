<script>
function getWeightClass({ weight }) {
  const types = ['fal', 'far', 'fas', 'regular', 'solid', 'light']
  if (!types.includes(weight)) {
    console.warn(`This weight is not in list: ${types.join(', ')}.`)
    return null
  }
  if (weight === 'regular') {
    return 'far'
  }
  if (weight === 'solid') {
    return 'fas'
  }
  if (weight === 'light') {
    return 'fal'
  }
  return weight
}

// https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers
// https://fontawesome.com/how-to-use/web-fonts-with-css
export default {
  functional: true,
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 16,
    },
    weight: {
      type: String,
      default: 'solid',
    },
  },
  render(h, context) {
    const { name, size, weight } = context.props
    const weightClass = getWeightClass({ weight })
    const sizeClass = size === 0 ? '' : `fa-${size}`
    return (
      <i
        class={[
          context.data.class,
          context.data.staticClass,
          weightClass,
          `fa-${name || 'question'}`,
          sizeClass,
          'Icon',
        ]}
      />
    )
  },
}
</script>

<style lang="scss" scoped>
$fa-font-path: '~@fortawesome/fontawesome-free/webfonts';
@import '~@fortawesome/fontawesome-free/scss/fontawesome.scss';
@import '~@fortawesome/fontawesome-free/scss/regular.scss';
@import '~@fortawesome/fontawesome-free/scss/solid.scss';

.Icon {
  user-select: none;
}
</style>
