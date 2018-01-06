<template>
  <div 
    class="sidebar"
    v-bind:class="{'sidebar-open': isShowing}"
    @click="propagationPrevent">

  </div>
</template>

<script>
import { EventBus } from '../js/event-bus.js'

export default {
  name: 'Sidebar',
  data () {
    return {
      show: false
    }
  },
  mounted () {
    EventBus.$on('open-sidebar', this.toggleShow)
  },
  methods: {
    propagationPrevent (e) {
      e.stopPropagation()
    },
    toggleShow () {
      console.log("!@#")
      this.isShowing = !this.isShowing
    }
  },
  computed: {
    isShowing: {
      get () {
        return this.show
      },
      set (newValue) {
        this.show = newValue
      }
    }
  }
}
</script>

<style lang="scss" scpoed>
  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 4;
    transition: all .5s cubic-bezier(.685, .0473, .346, 1);
    transform: translate3d(-100%, 0, 0);
    width: $sidebar-width;
    background-color: $primary-color;

    @include respond-to($tablet-landscape) {
      transform: translateZ(0);
    } 
    @include respond-to($large-desktop) {
      transform: translateZ(0);
    }
  }

  .sidebar-open {
    transform: translateZ(0);
  }
</style>