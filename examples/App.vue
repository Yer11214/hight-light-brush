<template>
  <div id="app">
    <brush />
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
    ></highlight>
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
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 500px;
  margin: 0 auto;
}
div {
  margin: 20px 0;
}
</style>
