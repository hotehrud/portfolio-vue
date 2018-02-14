<template>
  <div class="card-container">
    <slot name="header"/>
    <div class="card-body">
      <loading v-if="waiting"/>
      <transition name="fade" mode="out-in">
        <slot name="body"/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  components: {
  },
  data () {
    return {
    }
  },
  props: {
    waiting: {
      type: Boolean
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
