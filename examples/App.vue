<template>
  <div id="app">
    <div class="content">
      <div class="logo">
        <img src="./logo.png" alt="logo" />
      </div>
      <h2>Preview</h2>
      <div class="preview">
        <input
          type="text"
          v-model="preview"
          placeholder="Any thing..."
          class="input input-bordered input-sm max-w-xs"
        />
        -
        <input
          type="text"
          v-model="keywords[0]"
          placeholder="Key word"
          class="input input-bordered input-sm max-w-xs"
        />
    
        <highlight :text="preview" :keywords="keywords" color="#fff" light="#00a327"></highlight>
      </div>
      <h2>Example</h2>
     
      <highlight
        text="A random piece of nonsense may seem like a coincidence, but if we look at the problem from a larger perspective,"
        :keywords="['random', 'nonsense', 'seem', 'but']"
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

      <div>

      </div>
    </div>
    <div class="copy-right">
      © 2023 Made by <a href="https://github.com/Yer11214" target="_blank">Yer11214</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      preview:"Any thing...",
      keywords:['Any']
    };
  },
};
</script>

<style>
body {
  width: 100vw;
  background: url("./bg.png") no-repeat center center fixed;
  height: 100vh;
  margin: 0 !important;
  padding: 0 !important;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
    Segoe UI, Arial, Roboto, PingFang SC, miui, Hiragino Sans GB,
    Microsoft Yahei, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  height: 100vh;
  width: 500px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}
div {
  margin: 20px 0;
}
.logo {
  width: 300px;
  margin: 0 auto;
}
.logo img {
  width: 100%;
}
h2 {
  padding: 10px 0;
  font-size: 21px;
  font-weight: bold;
}
.preview {
  text-align: center;
}
.copy-right{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: #999;
  
}
a{
  /* color: #00a327; */
  text-decoration: underline;
  font-weight: 500;
}
</style>
