var path = require('path')
module.exports = {
  entry: './index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }]
    }]
  }
}
