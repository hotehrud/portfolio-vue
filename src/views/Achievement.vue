<template>
  <div class="main">
    <div class="row">
      <achievement-award
        class="row-4"
        :waiting="waiting"
        :title="awardItems.title"
        :image="awardItems.image"
        :award="awardItems.award"/>
      <achievement-cert
        class="row-4"
        :waiting="waiting"
        :title="certItems.title"
        :image="certItems.image"
        :cert="certItems.cert"/>
    </div>
  </div>
</template>

<script>
import achievementAward from "@/components/achievement/achievement-award";
import achievementCert from "@/components/achievement/achievement-cert";

import * as achievement from "../../docs/json/achievement";

export default {
  name: "Achievement",
  components: {
    achievementAward,
    achievementCert
  },
  data() {
    return {
      waiting: true,
      awardItems: {
        title: "Award",
        image: "award.svg",
        award: []
      },
      certItems: {
        title: "Certification",
        image: "cert.svg",
        cert: []
      }
    };
  },
  created() {
    setTimeout(() => {
      this.waiting = false;
      this.awardItems.award = achievement.awards;
      this.certItems.cert = achievement.certifications;
    }, 500);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
