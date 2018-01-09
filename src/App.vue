<template>
  <div id="app">
    <div 
      class="container"
      @click="toggleShow">

      <sidebar ref="sidebar"></sidebar>
        
      <div class="layout">
        <div slot="header" class="header">
          <toolbar></toolbar>
        </div>

        <div slot="body" class="body">
          <router-view/>
        </div>
      </div>  
      
    </div>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'app',
  components: {
    Toolbar,
    Sidebar
  },
  data () {
    return {

    }
  },
  methods: {
    toggleShow () {
      if (this.$refs.sidebar.isShowing) {
        this.$refs.sidebar.toggleShow()
      }
    }
  }
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
    font-family: Roboto Draft,Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 16px;
  }

  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgba(0, 0, 0, .87);
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background-color: $bg-color;
  }

  #app {
    height: 100%;
  }

  .layout {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .header {
    width: 100%;
  }

  .container {
    padding-top: 65px;
    height: 100%;
    @include respond-to($tablet-landscape) {
      padding-left: $sidebar-width;
    } 
    @include respond-to($large-desktop) {
      padding-left: $sidebar-width;
    }
  }

  .layout .body .main {

  }
  
  svg {
    top: auto;
    width: 1.5rem;
    height: 1.5rem;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  .cursor {
    cursor: pointer;
  }
</style>
