<template>
  <div class="profile-info">
    <div class="card-header">
      <h3>
        <img :src="imageURL"/>
        {{ title }}
      </h3>
    </div>
    <div class="card-body">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile-info',
  data () {
    return {
    }
  },
  props: {
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
  .profile-info {
    @include respond-to($tablet-landscape) {
      margin-right: 4%;
    } 
    @include respond-to($large-desktop) {
      margin-right: 4%;
    }
  }
</style>
