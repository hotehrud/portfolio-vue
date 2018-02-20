<template>
  <div class="resume-education">
    <card :waiting="waiting">
      <div slot="header" class="card-header">
        <h3>
          <img :src="imageURL"/>
          {{ title }}
        </h3>
      </div>

      <div slot="body">
        <ul v-if="!waiting" class="timeline">
          <li v-for="(item, index) in education">
            <h3 class="title">{{ item.education_title }}</h3>
            <div class="information">
              <span class="location">
                <img :src="mapImage" alt="Location"> {{ item.education_location }}
              </span>
              <span class="time">{{ item.education_date }}</span>
            </div>
            <p v-html="item.education_description"/>
          </li>
        </ul>  
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'resume-education',
  data () {
    return {
    }
  },
  props: {
    waiting: {
      type: Boolean
    },
    image: {
      type: String
    },
    title: {
      type: String
    },
    education: {
      type: Array
    }
  },
  computed: {
    imageURL () {
      return require('@/assets/img/' + this.image)
    },
    mapImage () {
      return require('@/assets/img/map-marker.svg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .resume-education {
    .timeline {
      position: relative;
      margin: 0 0 0 .625rem;
      text-align: left;
      list-style: none;
      li {
        position: relative;
        padding: 0 0 1rem 1rem;
        @include respond-to($large-desktop) {
          padding: 0 0 2.5rem 2.5rem;
        }
        border-left: 2px solid rgba(0,0,0,.12);
        &:before {
          content: "";
          width: 1rem;
          height: 1rem;
          position: absolute;
          top: 0;
          left: -9px;
          border-radius: 50%;
          background-color: #fff;
          padding: 4px;
          padding: .25rem;
          border: 4px solid #546e7a;
          -webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,.21);
          box-shadow: 0 1px 3px 0 rgba(0,0,0,.21);
        }
        .information {
          display: flex;
          color: rgba(0,0,0,.54);
          margin: 5px 0px;
          .location {
            font-size: .75rem;
            img {
              position: relative;
              top: 1px;
              opacity: .3;
              width: .75rem;
              height: .75rem;
            }
          }
          .time {
            margin-left: auto;
            font-size: .875rem;
          }
        }
        h3 {
          font-family: BM JUA, Helvetica Neue, Helvetica, Arial, sans-serif;
        }
        p {
          padding-right: 2.5rem;
        }
      }
      li:last-child {
        padding-bottom: 0;
      }
    }
  }
</style>
