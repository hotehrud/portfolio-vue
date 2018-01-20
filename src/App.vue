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
          <transition appear
            name="slide-fade"
            mode="out-in">>
            <router-view/>
          </transition>
        </div>
      </div>  
      
    </div>
  </div>
</template>

<script>
import toolbar from '@/components/header/header-toolbar'
import sidebar from '@/components/sidebar/sidebar'

export default {
  name: 'app',
  components: {
    toolbar,
    sidebar
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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .header {
    width: 100%;
  }

  .body {
    padding: 1rem;
    @include respond-to($tablet-landscape) {
      padding: 2rem 1rem;
    } 
    @include respond-to($large-desktop) {
      padding: 2rem 1rem;
    }
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

  .layout .body .main .row .card {
    .card-header {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: 48px;
      padding-left: 1rem;
      border-bottom: 1px solid rgba(0, 0, 0, .12);
      h3 {
        margin: 0;
        display: flex;
        img, svg {
          margin-right: 0.5rem;
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
    .card-body {
      padding: 1rem;
    }
    
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

  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    opacity: 0;
    @include respond-to($tablet-landscape) {
      transform: scale(0);
    } 
    @include respond-to($large-desktop) {
      transform: scale(0);
    }
  }
  
  .c-link--tistory:hover  { color: #ed5306 }
  .c-link--github:hover   { color: #25292f }
  .c-link--codepen:hover    { color: #000000 }
  .c-link--baekjoon:hover { color: #0078c2 }

  .c-link--tistory:hover::after  { background: #ed5306 }
  .c-link--github:hover::after   { background: #25292f }
  .c-link--codepen:hover::after    { background: #000000 }
  .c-link--baekjoon:hover::after { background: #0078c2 }
</style>
