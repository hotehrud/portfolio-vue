<template>
  <div class="project-card">
    <card :waiting="waiting">
      <div slot="header" class="project-header">
        <div class="project-image">
          <img :src="imageURL"/>
        </div>
        <div class="project-title">
          <h3>{{ title }}</h3>
          <h4>{{ subtitle }}</h4>
        </div>
        <div class="project-link">
          <a v-if="link" :href="link">
            <svg viewBox="0 0 24 24"><path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path></svg>
          </a>
          <span v-if="detail" @click="zoomDetail">
            <svg x="0px" y="0px" width="24px" height="24px" viewBox="0 0 510 510" style="enable-background:new 0 0 24 24;" xml:space="preserve"><path d="M280.5,153h-51v76.5H153v51h76.5V357h51v-76.5H357v-51h-76.5V153z M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255 s255-114.75,255-255S395.25,0,255,0z M255,459c-112.2,0-204-91.8-204-204S142.8,51,255,51s204,91.8,204,204S367.2,459,255,459z"/></svg>
          </span>
        </div>
      </div>

      <div slot="body">
        <p class="desc" v-html="desc"/>
        <p><br/></p>
        <span v-html="skill"/>
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
    detail: {
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
  },
  methods: {
    zoomDetail () {
      this.$parent.$parent.zoom(true, this.detail)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .project-card {
    padding: 1rem;
    .project-header {
     position: relative;
     display: flex;
     text-align: left;
     height: 45px;
      .project-image {
        img {
          width: 45px;
          height: 45px;
          margin-right: 10px;
          margin-right: .625rem;
          border: 2px solid #ddd;
          border-radius: 50%;
        }
      }
      .project-title {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .project-link {
        position: absolute;
        top: 0;
        right: 0;
        span {
          cursor: pointer;
        }
        svg {
          width: 1.25rem;
          height: 1.25rem;
          opacity: .5;
        }
      }
      h3, h4 {
        margin: 0;
      }
    }
    .desc {
      text-align: left;
    }
  }
</style>
