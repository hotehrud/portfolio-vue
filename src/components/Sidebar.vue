<template>
  <div 
    class="sidebar"
    v-bind:class="{'sidebar-open': isShowing}"
    @click="propagationPrevent">
    <div class="logo">
      <a href="/">
        <div class="logo-img"></div>
      </a>
    </div>
    <div class="profile-picture">
      <div class="profile-img"></div>
      <p class="profile-name">Lee Jung Hyun</p>
      <p class="profile-position">Web developer</p>  
    </div>

    <menu-list></menu-list>

    <div class="made-with">
      <p>
        Made with
        <a href="https://vuejs.org">
          <div class="vue"></div>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/js/event-bus.js'
import MenuList from '@/components/MenuList'

export default {
  name: 'Sidebar',
  components: {
    MenuList
  },
  data () {
    return {
      show: false
    }
  },
  mounted () {
    this.$on('toggleShow', this.toggleShow)
    EventBus.$on('open-sidebar', this.toggleShow)
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
  },
  methods: {
    propagationPrevent (e) {
      e.stopPropagation()
    },
    toggleShow () {
      this.isShowing = !this.isShowing
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

  .logo {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 65px;
    -webkit-box-shadow: 0 2px 5px rgba(0,0,0,.26);
    box-shadow: 0 2px 5px rgba(0,0,0,.26);
  }

  .logo .logo-img {
    background: url(../assets/img/logo.png);
    width: 256px;
    height: 57px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }

  .profile-picture {
    padding: .9125rem;
    text-align: center;
    -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, .26);
    box-shadow: 0 2px 5px rgba(0, 0, 0, .26);
  }

  .profile-picture .profile-img {
    width: 100px;
    height: 100px;
    margin: 1px auto 8px;
    background: url(../assets/img/me.jpeg);
    background-size: 100% 100%;
    border-radius: 50%;
  }

  .profile-picture p {
    margin: 0;
    text-align: center;
    color: #b0bec5;
  }

  .profile-picture .profile-name {
    font-size: 1.25rem;
    font-weight: 400;
    margin: 0 0 .3125rem;
  }

  .profile-picture .profile-position {
    font-size: .8125rem;
    font-weight: 300;
  }

  .made-with {
    position: absolute;
    bottom: 0;
    width: inherit;
    color: #546e7a;
  }

  .made-with p {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0.4rem;
  }

  .vue {
    width: 1rem;
    height: 1rem;
    margin-left: 0.25rem;
    color: #546e7a;
    background: url(../assets/img/logo.png);
    background-size: 100% 100%;
  }
</style>