<template>
  <div class="achievement-award">
    <card :waiting="waiting">
      <div slot="header" class="card-header">
        <h3>
          <img :src="imageURL"/>
          {{ title }}
        </h3>
      </div>

      <div slot="body">
        <ul class="timeline">
          <li v-for="(item, index) in award">
            <h4 class="title">{{ item.award_title }}</h4>
            <div class="information">
              <span class="location">
                <img :src="mapImage" alt="Host"> {{ item.award_location }}
              </span>
              <span class="time">{{ item.award_date }}</span>
            </div>
          </li>
        </ul>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'achievement-award',
  components: {
  },
  props: {
    waiting: {
      type: Boolean
    },
    title: {
      type: String
    },
    image: {
      type: String
    },
    award: {
      type: Array
    }
  },
  computed: {
    imageURL () {
      return require('@/assets/img/' + this.image)
    },
    mapImage () {
      return require('@/assets/img/host.svg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .achievement-award {
    @include respond-to($large-desktop) {
      margin-right: 2%;
    }
    .timeline {
      position: relative;
      margin: 0 0 0 .625rem;
      text-align: left;
      list-style: none;
      li {
        position: relative;
        padding: 0 0 1rem 1rem;
        @include respond-to($large-desktop) {
          padding: 0 0 1.5rem 2.5rem;
        }
        &:before {
          content: url(../../assets/img/medal.svg);
          width: 1rem;
          height: 1rem;
          position: absolute;
          top: 2px;
          left: -8px;
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
      }
      li:last-child {
        padding-bottom: 0;
      }
    }
  }
</style>
