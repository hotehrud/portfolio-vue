<template>
  <div class="main">
    <div class="row ignore">
      <project-card class="row-5 card" v-for="(item, index) in projectItems" :title="item.title" :image="item.image"/>
    </div>
  </div>
</template>

<script>
import projectCard from '@/components/project/project-card-component'

export default {
  name: 'Project',
  components: {
    projectCard
  },
  data () {
    return {
      projectItems: [
        {
          title: 'A',
          image: 'github.svg'
        },
        {
          title: 'B',
          image: 'twitter.svg'
        },
        {
          title: 'C',
          image: 'twitter.svg'
        },
        {
          title: 'D',
          image: 'twitter.svg'
        },
        {
          title: 'E',
          image: 'twitter.svg'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
