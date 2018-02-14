<template>
  <div class="main">
    <div class="row">
      <achievement-award
        class="row-4 card"
        :waiting="waiting"
        :title="awardItems.title"
        :image="awardItems.image"
        :award="awardItems.award"/>
      <achievement-cert
        class="row-4 card"
        :waiting="waiting"
        :title="certItems.title"
        :image="certItems.image"
        :cert="certItems.cert"/>
    </div>
  </div>
</template>

<script>
import achievementAward from '@/components/achievement/achievement-award'
import achievementCert from '@/components/achievement/achievement-cert'

export default {
  name: 'Achievement',
  components: {
    achievementAward,
    achievementCert
  },
  data () {
    return {
      waiting: true,
      awardItems: {
        title: 'Award',
        image: 'award.svg',
        award: [
          {
            award_title: 'ABCDCDC',
            award_kind: '2R',
            award_host: 'BBBBBB',
            award_date: 'Oct, 2017'
          },
          {
            award_title: 'BSBDCS',
            award_kind: '1R',
            award_host: 'CCCCC',
            award_date: 'May, 2015'
          }
        ]
      },
      certItems: {
        title: 'Certification',
        image: 'cert.svg',
        cert: []
      }
    }
  },
  created () {
    // this.$http.get('https://mygumi.me:3000/resume/1').then(res => {
    //   let datas = res.data

      setTimeout(() => {
        this.waiting = false
        // this.experienceItems.experience = datas.experiences.reverse()
      }, 1000)
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
