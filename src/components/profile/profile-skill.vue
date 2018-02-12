<template>
  <div class="profile-skill">
    <div class="card-header">
      <h3>
        <img :src="imageURL"/>
        {{ title }}
      </h3>
    </div>
    <div class="card-body">
      <loading v-if="waiting"/>
      <transition-group name="fade" mode="out-in">
        <progress-bar :key="index" v-if="!waiting" v-for="(item, index) in lang" :target="item.skill_value">
          <div class="progress-value" slot-scope="props">
            <span class="lang">{{ item.skill_name }}</span>
            <span :class="props.text">{{ item.skill_value }} %</span>
          </div>
        </progress-bar>
      </transition-group>
    </div>
  </div>
</template>

<script>
import progressBar from '@/components/profile/progress-component'

export default {
  name: 'profile-skill',
  components: {
    progressBar
  },
  data () {
    return {
      value: 0,
      idx: 0
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
    lang: {
      type: Array
    }
  },
  computed: {
    imageURL () {
      return require('@/assets/img/' + this.image)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .progress-value {
    .lang {
      font-weight: bold;
    }
  }
</style>
