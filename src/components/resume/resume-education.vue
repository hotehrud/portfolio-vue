<template>
  <div class="resume-education">
    <div class="card-header">
      <h3>
        <img :src="imageURL"/>
        {{ title }}
      </h3>
    </div>
    <div class="card-body">
      <loading v-if="waiting"/>
      <transition name="fade">
        <transition name="fade">
        <ul v-if="!waiting" class="timeline">
          <li v-for="(item, index) in education">
            <h3 class="title">{{ item.education_title }}</h3>
            <div class="information">
              <span class="location">
                <img :src="mapImage" alt="Location"> {{  item.education_location}}
              </span>
              <span class="time">{{ item.education_date }}</span>
            </div>
            <p v-html="item.education_description"/>
          </li>
        </ul>
      </transition>
      </transition>
    </div>
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
  p {
    padding-right: 2.5rem;
  }
</style>
