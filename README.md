# 甘俊鑫个人简历展示网站

这是按 `prd/个人简历展示网站PRD.md` 搭建的静态单页作品集网站。

## 文件

- `index.html`：页面结构与 SEO 元信息
- `styles.css`：高级黑白视觉系统、响应式布局和动效
- `script.js`：作品数据、OSS URL 编码、筛选、弹层、图片预览和复制邮箱交互

## 打开方式

直接在浏览器打开：

```text
/Users/didi/Downloads/Exusty/Agan/websit/index.html
```

## OSS 规则

网站使用固定域名：

```text
https://agan-xin.oss-cn-beijing.aliyuncs.com
```

素材 object key 从 `Agan/个人简历/...` 开始，并在 `script.js` 中通过 `encodeOssKey()` 按 UTF-8 percent encoding 转成可引用 URL。

