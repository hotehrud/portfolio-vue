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
import Vue from 'vue'
import loading from '@/components/shared-components/loading'
Vue.component('loading', loading)

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
  @import "./sass/card.scss";

  @font-face { 
    font-family: 'BM DOHYEON';
    src: url('https://hotehrud.github.io/portfolio-vue/static/fonts/BMDOHYEON.ttf') format('truetype');
  }

  @font-face { 
    font-family: 'BM JUA';
    src: url('https://hotehrud.github.io/portfolio-vue/static/fonts/BMJUA.ttf') format('truetype');
  }

  *, :after, :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    height: 100%;
  }

  html {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 16px;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #273238;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background-color: $bg-color;
  }

  h1, h2, h3 {
    font-family: BM DOHYEON, Helvetica Neue, Helvetica, Arial, sans-serif;
  }

  h4, h5, h6, span, p, :after, :before {
    font-family: BM JUA, Helvetica Neue, Helvetica, Arial, sans-serif;
  }

  #app {
    height: 100%;
  }

  .layout {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
	  -moz-flex-direction: column;
	  -ms-flex-direction: column;	
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

  svg {
    top: auto;
    width: 1.5rem;
    height: 1.5rem;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
  }

  .transition {
    position: static !important;
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
      // transform: scale(0);
    } 
    @include respond-to($large-desktop) {
      // transform: scale(0);
    }
  }
  
  .c-link--tistory:hover  { color: #ed5306 !important }
  .c-link--github:hover   { color: #25292f !important }
  .c-link--codepen:hover    { color: #000000 !important }
  .c-link--baekjoon:hover { color: #0078c2 !important }

  .c-link--tistory:hover::after  { background: #ed5306 }
  .c-link--github:hover::after   { background: #25292f }
  .c-link--codepen:hover::after    { background: #000000 }
  .c-link--baekjoon:hover::after { background: #0078c2 }
</style>
