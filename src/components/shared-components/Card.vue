<template>
  <div class="card">
    <slot name="card-header"></slot>
    <slot name="card-body"></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
