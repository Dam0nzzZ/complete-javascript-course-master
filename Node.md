## npm

- 包管理
  - 项目初始化 `>>npm init`
    - 将会生成 package.json 文件，将会记录项目名称、作者、描述、包含第三方包版本等信息
  - 安装包 `>>npm install(i) package`
  - 安装 package.json 包含的包 `>>npm install(i)`

## parcel

- parcel 运行：`>>parcel index.html`，即可将该 html 包括涉及到的 js 文件一同打包。或者在 package.json 中`"script.js"`加入`"start:"parcel index.html"`，在输入`>>npm run start`时会自动运行 start 中的代码
- 热模块替换：每次页面刷新时将会保留状态
  - ```js
    if (Module.hot()) {
      Module.hot.accept();
    }
    ```
- parcel 打包：`>>parcel build index.html`，将会生成压缩后的项目文件

- Babel:一个工具链，主要用于在当前和旧的浏览器或环境中，将 ECMAScript 2015+ 代码转换为 JavaScript 向后兼容版本的代码
- core-js:js 标准库的 polyfill（垫片/补丁）, 新功能的 es'api'转换为大部分现代浏览器都可以支持运行的一个'api' 补丁包集合。
- regenerator-runtime
