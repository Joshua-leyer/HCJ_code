- 默认样式的父元素 会自动被图片资源大小撑开
- text-align: center;
- [content 属性 ](https://developer.mozilla.org/zh-CN/docs/Web/CSS/content)
- [使用 CSS 计数器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)

### 方法1

核心父元素设置
```css
column-count: 4;
column-gap: 0;
```
### 方法2

使用flex 布局，但是我在使用的时候发现和教程显示不一样的布局情况。

当flex 的容器方向为 column 的时候，其项目会平均的分布一行的宽度。
且，会造成父元素坍塌； row 方向则不会。
