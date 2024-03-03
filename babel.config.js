module.exports = {
  presets: [
    [
      'module:@react-native/babel-preset',
      {useTransfromReactJSXExperimental: true},
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
  ],
};
