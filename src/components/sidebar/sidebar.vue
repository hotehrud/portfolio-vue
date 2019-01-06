<template>
  <div 
    class="sidebar"
    v-bind:class="{'sidebar-open': isShowing}"
    @click="propagationPrevent">
    <div class="logo">
      <img class="logo-img" :src="logoImage"/>
    </div>
    <div class="profile-picture">
      <img class="profile-img" :src="meImage"/>
      <p class="profile-name">Lee Jung Hyun</p>
      <p class="profile-position">Web developer</p>  
    </div>

    <menu-list></menu-list>

    <div class="made-with">
      <h4>
        Made with
        <a href="https://vuejs.org">
          <div class="vue"></div>
        </a>
      </h4>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/js/event-bus.js'
import menuList from '@/components/sidebar/sidebar-list'
import logo from '@/assets/img/logo.png'
import me from '@/assets/img/me.jpg'

export default {
  name: 'Sidebar',
  components: {
    menuList
  },
  data () {
    return {
      show: false,
      meImage: me,
      logoImage: logo
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

    @include respond-to($large-desktop) {
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
      height: 64px;
      -webkit-box-shadow: 0 2px 5px rgba(0,0,0,.26);
      box-shadow: 0 2px 5px rgba(0,0,0,.26);
      .logo-img {
        width: 64px;
        height: 64px;
        padding: .3125rem 0;
      }
    }
    .profile-picture {
      padding: .9125rem;
      text-align: center;
      -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, .26);
      box-shadow: 0 2px 5px rgba(0, 0, 0, .26);
      .profile-img {
        width: 100px;
        height: 100px;
        margin: 1px auto 8px;
        border-radius: 50%;
      }
      p {
        margin: 0;
        text-align: center;
        color: #fff;
      }
      .profile-name {
        font-size: 1.25rem;
        font-weight: 400;
        margin: 0 0 .3125rem;
      }
      .profile-position {
        font-size: .8125rem;
        font-weight: 300;
      }
    }
    .made-with {
      position: absolute;
      bottom: 0;
      width: inherit;
      color: #546e7a;
      h4 {
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
        .vue {
          width: 1rem;
          height: 1rem;
          margin-left: 0.25rem;
          color: #546e7a;
          background: url(../../assets/img/vue-logo.svg);
          background-size: 100% 100%;
        }
      }
    }
  }

  .sidebar-open {
    transform: translateZ(0);
  }
</style>