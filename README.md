# IFU Web 2.0

## 框架

- [Nuxt.js](https://nuxtjs.org/), 一个基于 Vue.js 的支持服务器渲染的框架

## 目录结构

- assets: 所有图片资源，按照页面分了文件夹
- components：所有 Vue 组件文件
- lang：语言文件
- layouts：default.vue 是所有页面的模板文件
- pages：页面文件，每个文件会自动生成对应文件名的路由
  - 例如：index.vue 会显示在 [https://ifu-china.com/](https://ifu-china.com/), about.vue 会显示在 [https://ifu-china.com/about/](https://ifu-china.com/about/)
- plugins: 加载的 JS 插件，现在只有一个全局聊天框插件
- static：除图片资源外的静态文件，现在只有网站图标
- tabs：一些子页面，用来搭配 components/Tab.vue 这个组件实现 Tab 页面切换

## 页面结构

现在在 Figma 的设计稿里可以看到的版本有以下页面

- 主页 /
- 关于我们 /about
  - 故事
  - 文化
  - 历程
  - 团队
- 服务
  - 多多罗 /totoro
    - 美本衔接课
    - 学术同步辅导课
  - IFU 会员 /membership
    - 普通会员
    - ISIC 会员
  - 更多服务 /more
- 联系我们 /contact
  - 紧急联系
  - 其他
- 支持我们 /support

## 开发

第一次将仓库 clone 到本地后，切换到 dev 分支

`npm install` 安装所有 NPM 包

`npm run dev` 会在 [localhost:3000](http://localhost:3000/) 启动 Nuxt.js 的测试服务器，所有文件更改会热更新

## 用到的 NPM 包

- 样式 [SCSS](https://sass-lang.com/): 主要是用嵌套来整理 CSS
- 翻译 [Nuxt-i18n](https://nuxt-community.github.io/nuxt-i18n/)

## 部署

- 使用 [Vercel](https://vercel.com/)，一个自动部署 GitHub 仓库网页的平台
  - 所有 push 到 dev branch 的 commit 会更新 [https://test.ifu-china.com/](https://test.ifu-china.com/)
  - 所有 master branch 的 commit 会更新 [https://ifu-china.com/](https://ifu-china.com/) 和 [https://www.ifu-china.com/](https://www.ifu-china.com/)
    - 因为开发时默认使用 dev branch，所以需要更新主页时应该从 dev branch 提交 [Pull Request](https://github.com/YutaoMa/ifu-2/pulls) 到 master branch
