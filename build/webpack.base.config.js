const path = require('path')

const config = {
  entry: {
    app: path.resolve(__dirname, '../src/client-entry.js')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /(\.js$)/,
        loader: 'eslint-loader',
        exclude: /node_moudles/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assests/js/[name].js'
  }
}

module.exports = config
