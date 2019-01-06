<template>
  <div class="profile-bio">
    <card :waiting="waiting">
      <div slot="header" class="card-header">
        <h3>
          <img :src="imageURL"/>
          {{ title }}
        </h3>
      </div>

      <div slot="body" class="bio-body">
        <div v-if="!waiting">
          <h4>Bio</h4>
          <p v-html="text"/>
        </div>
      </div>
    </card>
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
  .bio-body {
    text-align: left;
    h4 {
      margin: 0 0 .5rem 0;
    }
    p {
      font-size: 0.875rem;
    }
  }
</style>
