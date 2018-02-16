<template>
  <div class="main project">
    <div v-if="waiting" class="project-loading">
      <loading/>
    </div>
    <div class="row project-container">
      <div class="row-5">
        <transition-group name="fade" mode="out-in">
          <project-card 
            class="card" 
            :waiting="waiting"
            :key="index"
            v-for="(item, index) in leftCards"
              :title="item.project_title"
              :subtitle="item.project_subtitle"
              :image="item.project_image"
              :link="item.project_link"
              :desc="item.project_description"
              :skill="item.project_skill"/>
        </transition-group>
      </div>
      <div class="row-5">
        <transition-group name="fade" mode="out-in">
          <project-card 
            class="card" 
            :waiting="waiting"
            :key="index"
            v-for="(item, index) in rightCards"
              :title="item.project_title"
              :subtitle="item.project_subtitle"
              :image="item.project_image"
              :link="item.project_link"
              :desc="item.project_description"
              :skill="item.project_skill"/>
        </transition-group>
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
      projectItems: []
    }
  },
  created () {
    this.$http.get('https://mygumi.me:3000/project/1').then(res => {
      let datas = res.data

      setTimeout(() => {
        this.waiting = false
        this.projectItems = datas.projects
      }, 1500)
    })
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

<style lang="scss">
  .main {
    .project-loading {
      position: absolute;
      top: 65px;
      left: 0;
      width: 100%;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -moz-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -moz-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      @include respond-to($large-desktop) {
        width: calc(100% - #{ $sidebar-width });
        left: $sidebar-width;
      }
      height: calc(100% - #{ $header-height });
      .loading-container {
        font-size: 1.875rem;
        span[class*="l-"] {
          height: 8px; width: 8px;
        }   
      }
    }
    .project-container {
      flex-wrap: wrap;
    }
  }
</style>
