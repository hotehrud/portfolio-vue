<template>
  <div id="app">
    <div class="container" @click="toggleShow">
      <sidebar ref="sidebar"></sidebar>

      <div class="layout">
        <div slot="header" class="header">
          <toolbar></toolbar>
        </div>

        <div slot="body" class="body">
          <transition appear name="slide-fade" mode="out-in">
            >
            <router-view />
          </transition>
        </div>
      </div>
    </div>
    <svg-collection v-show="false" />
  </div>
</template>

<script>
import toolbar from "@/components/header/header-toolbar";
import sidebar from "@/components/sidebar/sidebar";

import Vue from "vue";
import card from "@/components/shared-components/card";
import loading from "@/components/shared-components/loading";
import zoom from "@/components/shared-components/zoom";
import progressbar from "@/components/shared-components/progressbar";
import social from "@/components/shared-components/social";
import svgCollection from "@/components/svg-collection";

Vue.component("card", card);
Vue.component("loading", loading);
Vue.component("zoom", zoom);
Vue.component("progressBar", progressbar);
Vue.component("snsGroup", social);

export default {
  name: "app",
  components: {
    toolbar,
    sidebar,
    svgCollection
  },
  data() {
    return {};
  },
  methods: {
    toggleShow() {
      if (this.$refs.sidebar.isShowing) {
        this.$refs.sidebar.toggleShow();
      }
    }
  }
};
</script>

<style lang="scss">
@import "./sass/main.scss";
@import "./sass/card.scss";

*,
:after,
:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body,
html {
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

h1,
h2,
h3 {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  margin: 0;
}

h4,
h5,
h6,
span,
p,
:after,
:before {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  margin: 0;
}

p {
  color: rgba(0, 0, 0, 0.65);
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
  @include respond-to($large-desktop) {
    padding: 2rem 1rem;
  }
}

.container {
  padding-top: 65px;
  height: 100%;
  @include respond-to($large-desktop) {
    padding-left: $sidebar-width;
  }
  .card-container {
    background-color: #fff;
  }
}

svg {
  top: auto;
  width: 1.5rem;
  height: 1.5rem;
  &:hover {
    fill: blue;
  }
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

.score {
  font-size: 0.75rem;
  text-align: right;
}

.center-loading {
  position: fixed;
  top: 65px;
  left: 0;
  width: 100%;
  height: calc(100% - #{$header-height});
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  @include respond-to($large-desktop) {
    width: calc(100% - #{$sidebar-width});
    left: $sidebar-width;
  }
  .loading-container {
    font-size: 1.875rem;
    span[class*="l-"] {
      height: 8px;
      width: 8px;
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}

.c-link--tistory:hover {
  color: #ed5306 !important;
}
.c-link--github:hover {
  color: #25292f !important;
}
.c-link--codepen:hover {
  color: #000000 !important;
}
.c-link--baekjoon:hover {
  color: #0078c2 !important;
}
.c-link--codesandbox:hover {
  color: #25292f !important;
}

.c-link--tistory:hover::after {
  background: #ed5306;
}
.c-link--github:hover::after {
  background: #25292f;
}
.c-link--codepen:hover::after {
  background: #000000;
}
.c-link--baekjoon:hover::after {
  background: #0078c2;
}
.c-link--codesandbox:hover::after {
  background: #25292f;
}
</style>
