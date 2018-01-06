<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import "./sass/main.scss";

  * {
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    height: 100%;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background-color: $bg-color;
  }

  #app {
    height: 100%;
  }

  svg {
    top: auto;
    width: 1.5rem;
    height: 1.5rem;
  }

  .cursor {
    cursor: pointer;
  }
</style>
