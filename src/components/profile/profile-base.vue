<template>
  <div class="profile-base">
    <div class="card-body">
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile-bio',
  data () {
    return {
    }
  },
  props: {
      name: {
          type: String
      },
      position: {
          type: String
      },
      picture: {
          type: String
      },
      sns: {
          type: Array
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
