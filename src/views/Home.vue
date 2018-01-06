<template>
  <div 
    class="container"
    @click="toggleShow">

    <sidebar 
      slot="sidebar"
      ref="sidebar">
    </sidebar>
      
    <div class="layout">
      <div slot="header" class="header">
        <toolbar></toolbar>
      </div>

      <div slot="body" class="body">

      </div>
    </div>  
    
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'Home',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
</style>
