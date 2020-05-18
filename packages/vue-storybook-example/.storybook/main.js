module.exports = {
  stories: ['../src/**/*.stories.(ts|js|mdx)'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-docs',
    '@storybook/addon-knobs/register',
    {
      name: '@storybook/addon-storysource'
      // TODO: use custom prettier config
    },
    '@storybook/addon-viewport/register',
    {
      name: '@storybook/preset-scss',
      options: {
        sassLoaderOptions: {
          // make functions and mixins accessible in every sass file
          prependData: `
            @import "~@/styles/_settings.global.scss";
            @import "~@/styles/_tools.global.scss";
          `,
        }
      }
    },
  ]
};
