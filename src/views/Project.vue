<template>
  <div class="main">
    <div class="row project-container">
      <div class="row-5">
        <project-card 
          class="card" 
          :waiting="waiting"
          v-for="(item, index) in leftCards"
            :title="item.project_title"
            :subtitle="item.project_subtitle"
            :image="item.project_image"
            :link="item.project_link"
            :desc="item.project_description"
            :skill="item.project_skill"/>
      </div>
      <div class="row-5">
        <project-card 
          class="card" 
          :waiting="waiting"
          v-for="(item, index) in rightCards"
            :title="item.project_title"
            :subtitle="item.project_subtitle"
            :image="item.project_image"
            :link="item.project_link"
            :desc="item.project_description"
            :skill="item.project_skill"/>
      </div>
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
      waiting: true,
      projectItems: [
        {
          project_title: 'A',
          project_image: 'github.svg'
        },
        {
          project_title: 'B',
          project_image: 'twitter.svg'
        },
        {
          project_title: 'C',
          project_image: 'twitter.svg'
        },
        {
          project_title: 'D',
          project_image: 'twitter.svg'
        },
        {
          project_title: 'E',
          project_image: 'twitter.svg'
        }
      ]
    }
  },
  created () {
    // this.$http.get('https://mygumi.me:3000/project/1').then(res => {
    //   let datas = res.data

    //   setTimeout(() => {
    //     this.waiting = false
    //     this.projectItems.project = datas.project
    //   }, 1500)
    // })
  },
  computed: {
    leftCards () {
      let temp = []
      let len = this.projectItems.length

      for (let i = 0; i < len; i += 2) {
        temp.push(this.projectItems[i])
      }
      return temp
    },
    rightCards () {
      let temp = []
      let len = this.projectItems.length

      for (let i = 1; i < len; i += 2) {
        temp.push(this.projectItems[i])
      }
      return temp
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .project-container {
    flex-wrap: wrap;
  }
</style>
