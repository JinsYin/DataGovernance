# CONTRIBUTING

## Git 脚本

使用 Git 管理代码和内容时，因为操作系统、编辑器和网络共享等原因，可能导致文件的权限前后不一、文件的内容不规范（比如文件末尾没有空白行），所以建议 `git add` 之前先执行以下脚本。

```sh
# 统一文件权限
find . -type f -not -path "./.git/*" -exec chmod 644 {} \;
find . -type d -not -path "./.git/*" -exec chmod 755 {} \;

# 文件末尾添加空白行
find . -type f -name "*.md" -not -path "./.git/*" -exec sed -i '' -e '$a\' {} \; # macOS
find . -type f -name "*.md" -not -path "./.git/*" -exec sed -i -e '$a\' {} \;    # Linux

# 删除 .DS_Store 文件或者将其添加到 .gitignore （MacOS）
find . -type f -not -path .git -name ".DS_Store" -exec rm {} \;
```

## Page

### 自定义变量

| 自定义变量                | 可选值         | 描述                             |
| ------------------------- | -------------- | -------------------------------- |
| `page.lang`               | N/A            | 文章的语言，默认值是 `site.lang` |
| `page.title`              | N/A            | 文章的标题                       |
| `page.subtitle`           | N/A            | 文章的子标题                     |
| `page.author`             | N/A            | 文章的作者                       |
| `page.author-site`        | N/A            | 文章作者的网站                   |
| `page.description`        | N/A            | 文章的描述                       |
| `page.excerpt`            | N/A            | 文章的 HTML 描述（长度限制 200） |
| `page.date`               | N/A            | 文章的发布时间                   |
| `page.layout`             | N/A            | 页面的布局                       |
| `page.tags`               | N/A            | 页面的 TAGs                      |
| `page.mathjax`            | `true`/`false` | 是否使用数学支持                 |
| `page.catalog`            | `true`/`false` | 是否开启右侧的 CATALOG           |
| `page.multilingual`       | `true`/`false` | 是否开启多语言支持               |
| `page.banner`             | N/A            | 页面的 Banner                    |
| `page.nobanner`           | `true`         | 页面无 Banner，即纯文本          |
| `page.header-mask`        |                |                                  |
| `page.banner-credit`      |                |                                  |
| `page.banner-credit-href` |                |                                  |
| `page.iframe`             |                |                                  |
| `page.nav-black-on-white` | `true`         | 导航样式为白底黑字               |
| `page.id`                 |                |                                  |

### 我的 TAG

* `云原生`
* `工具`
* `Kubernetes`
* `读书`（CS）

### Permalink

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

## 功能支持

### Mathjax

```mardown
---
mathjax: true
---

$$x_1 = {-b + \sqrt{b^2-4ac} \over 2c}$$
```

### Mermaid

Todo
(see: <https://tianqi.name/jekyll-TeXt-theme/post/2017/06/06/mermaid.html>)

### Chart

Todo
(see: <https://tianqi.name/jekyll-TeXt-theme/post/2017/05/05/chart.html>)
