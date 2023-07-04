# Hight Light Brush

高亮展示内容

## 安装

`npm i hight-light`

## 例子

---

```javascript
//在main.js中
import highlight from 'hight-light'
Vue.use(highlight)


// 在vue中
<template>
  <highlight
    text="从这个角度来看,
    了解清楚随机一段废话到底是一种怎么样的存在,
    是解决一切问题的关键.在这种困难的抉择下,
    本人思来想去, 寝食难安.达尔文说过一句著名的话,
    敢于浪费哪怕一个钟头时间的人，说明他还不懂得珍惜生命的全部价值。
    这句话看似简单，但其中的阴郁不禁让人深思. 一般来说, 这是不可避免的.
    随机一段废话似乎是一种巧合，但如果我们从一个更大的角度看待问题，
    这似乎是一种不可避免的事实. 那么"
    :keywords="['这个', '随机一段', '关键', '不禁让人深思']"
  >

  </highlight>
  <highlight
    text="Lorem ipsum dolor sit,
    amet consectetur adipisicing elit. Nam,
    rem quis laudantium assumenda laborum,
    ipsum totam, ab aut impedit quisquam ullam
    dicta facilis. Impedit dolore dicta labore
    rem. Eaque, dignissimos."
    :keywords="['impedit', 'elit', 'consectetur', 'labore']"
    light="#e74c2c"
    color="#fff"
  ></highlight>
</template>

<script>

export default {
  name: 'App',
};
</script>
```


![Imgur](https://i.imgur.com/9wEfv4h.png)

---

[备用图片地址](https://imgur.com/a/s5cZgL9)

## Props

| 参数        | 说明                               | 类型   | 默认值    | 是否必填 |
| :---------- | :--------------------------------- | :----- | :-------- | :------- |
| text        | 指定需要进行关键字高亮的文本内容。 | String | 无        | 是       |
| keywords    | 指定用于匹配的关键字数组。         | Array  | []        | 是       |
| light       | 指定高亮颜色的 CSS 颜色值。        | String | "#fbda32" | 否       |
| color       | 指定文本颜色的 CSS 颜色值.         | String | ""        | 否       |
| customStyle | 自定义样式                         | Object | ""        | 否       |
| highlightFirstOnly | 是否只高亮第一个关键字                         | Boolean | false        | 否       |
