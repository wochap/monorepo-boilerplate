module.exports = {
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: false,
      },
    ],
  ],
  plugins: ['macros', '@babel/plugin-proposal-export-default-from'],
}
