# 串串的喵生档案

一个根据 Excel 内容生成的静态宠物个人主页，适合直接上传到 GitHub 或部署到 GitHub Pages。

## 项目文件

- `index.html`：网页主文件
- `证件照 串.jpg`：大宝证件照
- `洗澡.jpg`：大宝私密照
- `个人简历.xlsx`：原始内容数据
- `.nojekyll`：让 GitHub Pages 按静态网页直接发布

## 本地预览

直接双击 `index.html`，或在浏览器中打开它即可。

## 上传到 GitHub

1. 在 GitHub 新建一个仓库
2. 把当前目录中的文件全部上传到仓库根目录
3. 确保首页文件名为 `index.html`

## 发布到 GitHub Pages

1. 打开仓库页面
2. 进入 `Settings`
3. 打开 `Pages`
4. 在 `Build and deployment` 中选择：
   - `Source`: `Deploy from a branch`
   - `Branch`: `main` / `/ (root)`
5. 保存后等待 GitHub 发布完成

发布成功后，页面会出现在：

`https://你的用户名.github.io/你的仓库名/`

## 说明

- 当前网页是纯静态页面，不依赖额外框架或构建工具
- 图片路径默认与 `index.html` 同目录
- 如果后续替换 Excel 内容，网页内容需要同步手动更新，或者再做一次自动生成
