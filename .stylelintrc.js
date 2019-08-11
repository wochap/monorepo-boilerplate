module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-config-prettier',
  ],
  rules: {
    'scss/selector-no-redundant-nesting-selector': null,
    'scss/dollar-variable-pattern': null,
    'selector-class-pattern': null,
    'no-empty-source': null,
    'order/properties-alphabetical-order': null,
    'max-nesting-depth': 3,
  },
}
