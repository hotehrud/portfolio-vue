<template>
  <div class="project-card">
    <card :waiting="waiting">
      <div slot="header" class="card-header">
        <h3>
          <img :src="imageURL"/>
          {{ title }}
        </h3>
      </div>

      <div slot="body">
        
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'project-card',
  data () {
    return {
    }
  },
  props: {
    waiting: {
      type: Boolean
    },
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    image: {
      type: String
    },
    link: {
      type: String
    },
    desc: {
      type: String
    },
    skill: {
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
