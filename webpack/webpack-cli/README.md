# webpack-cli

## 单文件打包

```
webpack test.js test.bundle.js
```

## 引入css文件，

- 需要提前安装 `style-loader` 及 `css-loader`

```sh
npm install style-loader css-loader --save-dev
# 或
npm i style-loader css-loader -D
```

- js文件中引入css文件，注意loader是从右向左执行的，即先执行`css-loader`，后执行`style-loader`

  - `css-loader` 用于处理将css文件转换成js模块
  - `style-loader` 用于将模块已 `style` 标签的形式插入到html中

```js
require('style-loader!css-loader!./main.css');
// ...
```