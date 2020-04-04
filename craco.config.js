const emotionBabelPreset = require('@emotion/babel-preset-css-prop').default(
  undefined,
  {
    autoLabel: true,
    labelFormat: '[local]',
  },
)

module.exports = function({ env, paths }) {
  return {
    babel: {
      plugins: [
        ['relay', { artifactDirectory: './src/__generated__' }],
        ...emotionBabelPreset.plugins,
      ],
    },
    webpack: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
  }
}
