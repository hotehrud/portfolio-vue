<template>
  <div class="toolbar">
    <button
      class="menu cursor"
      @click="open">
      <svg viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path></svg>
    </button>
    <div class="page-title">
      <h1>{{ pageName }}</h1>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/js/event-bus.js'

export default {
  name: 'toolbar',
  data () {
    return {
    }
  },
  mounted () {

  },
  computed: {
    pageName () {
      return this.$route.name
    }
  },
  methods: {
    open (e) {
      e.stopPropagation()
      EventBus.$emit('open-sidebar')
    }
  }
}
</script>

<style lang="scss" scoped>
  .toolbar {
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: calc(100% - #{ $sidebar-width });
    min-height: 65px;
    padding: 0 1rem;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .21);
  }

  .toolbar {
    @include respond-to($tablet-portrait) {
      width: 100%;
    }
  }

  .menu {
    display: none;
    width: 40px;
    height: 40px;
    padding: .5rem;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 2px;
    @include respond-to($tablet-portrait) {
      display: block;
    }
  }

  .page-title h1 {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0 0 0 1rem;
  }
</style>
