<template>
  <div class="main">
    <div class="row">
      <resume-experience
        class="row-4 card"
        :title="experienceItems.title"/>
      <resume-education
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
      experienceItems: {
        title: 'Experience'
      },
      educationItems: {
        title: 'Education'
      }
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../sass/card.scss";
</style>
