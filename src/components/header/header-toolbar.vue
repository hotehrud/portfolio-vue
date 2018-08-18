<template>
  <div class="toolbar">
    <button class="menu cursor" @click="open">
      <svg viewBox="0 0 24 24">
        <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
      </svg>
    </button>
    <div class="page-title">
      <h1>{{ pageName }}</h1>
    </div>
    <div class="fork" @click="pageMove">
      <span>updated: {{ date }}</span>
      <h4>
        <img :src="forkImage" alt="fork" /> Fork
      </h4>
    </div>

  </div>
</template>

<script>
import { EventBus } from '@/js/event-bus.js'

export default {
  name: 'toolbar',
  data () {
    return {
      date: '2018/1/1'
    }
  },
  computed: {
    pageName () {
      return this.$route.name
    },
    forkImage () {
      return require('@/assets/img/fork.svg')
    }
  },
  methods: {
    open (e) {
      e.stopPropagation()
      EventBus.$emit('open-sidebar')
    },
    pageMove () {
      window.location.href = 'https://github.com/hotehrud/portfolio-vue'
    }
  }
}
</script>

<style lang="scss" scoped>
.toolbar {
  position: absolute;
  top: 0;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  -moz-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 65px;
  padding: 0 1rem;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.21);
  @include respond-to($large-desktop) {
    width: calc(100% - #{$sidebar-width});
  }
  .menu {
    display: block;
    width: 40px;
    height: 40px;
    padding: 0.5rem;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 2px;
    @include respond-to($large-desktop) {
      display: none;
    }
  }

  .page-title h1 {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0 0 0 1rem;
  }

  .fork {
    height: 2.5rem;
    text-align: center;
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    @include respond-to($large-desktop) {
      margin-right: 2rem;
    }
    span {
      color: rgba(0, 0, 0, 0.75);
      font-size: 0.75rem;
      margin-right: 1rem;
    }
    h4 {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      background-color: #273238;
      padding: 0.5rem 1rem;
      cursor: pointer;
      img {
        margin-right: 0.5rem;
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>
