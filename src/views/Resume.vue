<template>
  <div class="main">
    <div class="row">
      <resume-experience
        :waiting="waiting"
        :title="experienceItems.title"
        :image="experienceItems.image"
        :experience="experienceItems.experience"
        class="row-4 card"/>
      <resume-education
        :waiting="waiting"
        :title="educationItems.title"
        :image="educationItems.image"
        :education="educationItems.education"
        class="row-4 card"/>
    </div>
  </div>
</template>

<script>
import resumeExperience from "@/components/resume/resume-experience";
import resumeEducation from "@/components/resume/resume-education";

import * as resume from "../../docs/json/resume";

export default {
  name: "Resume",
  components: {
    resumeExperience,
    resumeEducation
  },
  data() {
    return {
      waiting: true,
      experienceItems: {
        title: "Experience",
        image: "experience.svg",
        experience: []
      },
      educationItems: {
        title: "Education",
        image: "education.svg",
        education: []
      }
    };
  },
  created() {
    setTimeout(() => {
      this.waiting = false;
      this.experienceItems.experience = resume.experiences.reverse();
      this.educationItems.education = resume.educations.reverse();
    }, 500);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
