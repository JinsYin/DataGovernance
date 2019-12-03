---
---
# Jekyll 环境

## Permalink

已知情况：

* `permalink: /about`  => `/about.html`
* `permalink: /about/` => `/about/index.html`

开发环境：

* 当链接到 `/about` 时，浏览器会自动在末尾添加 `/`，最终访问的 URL 是 `/about/`，不过开发环境依然可以访问到 `/about.html`
* 访问结果：正常

GitHub Page 环境：

* 当链接到 `/about` 时，浏览器会自动在末尾添加 `/`，最终访问的 URL 是 `/about/`，不过 GP 环境只能访问 `/about/index.html`
* 访问结果：404

处理方法：严格按上述的已知情况定义 `permalink`，或者添加文件扩展名，如：`permalink: /404.html`
