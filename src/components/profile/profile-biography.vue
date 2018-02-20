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
        <div v-else>
          <h4>Bio</h4>
          <p v-html="text"/>
        </div>
        
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
<style lang="scss" scoped>
  .card-body {
    text-align: left;
    h4 {
      margin: 0 0 .5rem 0;
    }
  }
</style>
