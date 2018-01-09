<template>
  <div class="profile-bio">
    <div class="card-header">
      <h3>
        {{ title }}
        <img :src="image"/>
      </h3>
    </div>
    <div class="card-body">
      <p>{{ text }}</p>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
