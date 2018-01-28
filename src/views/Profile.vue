<template>
  <div class="main">
    <div class="row">
      <div class="row-1">
        <profile-base
          class="card" 
          :name="baseItems.name"
          :company="baseItems.company"
          :picture="baseItems.picture"
          :sns="baseItems.sns"/>
        <profile-skill 
          class="card" 
          :image="skillItems.image"
          :title="skillItems.title"
          :lang="skillItems.lang"/>
      </div>
      <div class="row-2">
        <profile-bio 
          class="card" 
          :image="bioItems.image"
          :title="bioItems.title"
          :text="bioItems.text"/>
        <div class="row">
          <profile-info 
            class="row-3 card"
            :image="infoItems.image"
            :title="infoItems.title"
            :info="infoItems.info"/>
          <profile-tool 
            class="row-4 card"
            :image="toolItems.image"
            :title="toolItems.title"
            :text="toolItems.text"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profileBase from '@/components/profile/profile-base'
import profileSkill from '@/components/profile/profile-skill'
import profileBio from '@/components/profile//profile-biography'
import profileInfo from '@/components/profile/profile-information'
import profileTool from '@/components/profile/profile-tool'

export default {
  name: 'Profile',
  components: {
    profileBase,
    profileSkill,
    profileBio,
    profileInfo,
    profileTool
  },
  data () {
    return {
      baseItems: {
        name: 'Lee Jung Hyun',
        company: 'Software Developer at Vtouch',
        picture: 'me.jpeg',
        sns: [
          {
            name: 'tistory',
            image: 'tistory.svg',
            link: 'https://mygumi.tistory.com/'
          },
          {
            name: 'github',
            image: 'github.svg',
            link: 'https://github.com/hotehrud/'
          },
          {
            name: 'codepen',
            image: 'codepen.svg',
            link: 'https://codepen.io/mygumi/'
          },
          {
            name: 'baekjoon',
            image: 'baekjoon.svg',
            link: 'https://acmicpc.net/user/hotehrud'
          }
        ]
      },
      skillItems: {
        title: 'Skills',
        image: 'plus-one.svg',
        lang: [
          {
            name: 'HTML/CSS',
            value: 100
          },
          {
            name: 'JS(ES6/Vue/Node.js)',
            value: 100
          },
          {
            name: 'JAVA',
            value: 75
          },
          {
            name: 'PHP',
            value: 50
          }
        ]
      },
      bioItems: {
        title: 'Profile',
        image: 'profile.svg',
        text: 'abc'
      },
      infoItems: {
        title: 'Information',
        image: 'info.svg',
        info: {
          name: 'Lee JungHyun',
          date_of_birth: '1992.11.24',
          sex: 'male',
          email: 'hotehrud@naver.com',
          address: 'Seoul'
        }
      },
      toolItems: {
        title: 'Toolbox',
        image: 'wrench.svg'
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
