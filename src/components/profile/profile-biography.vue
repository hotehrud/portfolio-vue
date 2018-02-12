<template>
  <div class="profile-bio">
    <div class="card-header">
      <h3>
        <img :src="imageURL"/>
        {{ title }}
      </h3>
    </div>
    <div class="card-body">
      <transition name="fade" mode="out-in">
        <loading v-if="waiting"/>
        <p v-else v-html="text"/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile-bio',
  props: {
    waiting: {
      type: Boolean
    },
    image: {
      type: String
    },
    title: {
      type: String
    },
    text: {
      type: String
    }
  },
  computed: {
    imageURL () {
      return require('@/assets/img/' + this.image)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
