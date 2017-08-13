# webpack

## 介绍

> webpack 为前端工程化工具

## 模块介绍

```js
// webpack.config.js配置如下
module.exports = {
  context: __dirname,
  entry: './main.js',
  output: {
    filename: './js/main.[hash:6].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://www.cdn.com/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new WebpackHtmlPlugin({
      template: './index.html',

    })
  ],
  devtool: "#inline-source-map",
  devServer: {
    conetntbase: path.join(__dirnam, 'dist'),
    compress: true,
    color: true,
    hot: true,
    host: '0.0.0.0',
    port: 9000,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
}
```