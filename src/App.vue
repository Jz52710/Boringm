<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #007d7e;
  /*margin-top: 60px;*/
}
*{
  margin: 0 auto;
  padding: 0;
}
body{
  width: 100%;
  height: 100vh;
}
</style>

