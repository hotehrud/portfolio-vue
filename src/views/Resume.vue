<template>
  <div class="main">
    <div class="row">
      <resume-experience
        class="row-4 card"
        :waiting="waiting"
        :title="experienceItems.title"
        :image="experienceItems.image"
        :experience="experienceItems.experience"/>
      <resume-education
        :waiting="waiting"
        class="row-4 card"
        :title="educationItems.title"/>
    </div>
  </div>
</template>

<script>
import resumeExperience from '@/components/resume/resume-experience'
import resumeEducation from '@/components/resume/resume-education'

export default {
  name: 'Resume',
  components: {
    resumeExperience,
    resumeEducation
  },
  data () {
    return {
      waiting: true,
      experienceItems: {
        title: 'Experience',
        image: 'experience.svg',
        experience: []
      },
      educationItems: {
        title: 'Education'
      }
    }
  },
  created () {
    this.$http.get('https://mygumi.me:3000/resume/1').then(res => {
      let datas = res.data

      setTimeout(() => {
        this.waiting = false
        this.experienceItems.experience = datas.experiences.reverse()
      }, 1000)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
