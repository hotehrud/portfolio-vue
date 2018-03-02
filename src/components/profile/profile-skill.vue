<template>
  <div class="profile-skill">
    <card :waiting="waiting">
      <div slot="header" class="card-header">
        <h3>
          <img :src="imageURL"/>
          {{ title }}
        </h3>
      </div>

      <div slot="body">
        <progress-bar :key="index" v-if="!waiting" v-for="(item, index) in lang" :target="item.skill_value">
          <div class="progress-value" slot-scope="props">
            <span class="lang">{{ item.skill_name }}</span>
            <span :class="props.text">{{ item.skill_value }} %</span>
          </div>
        </progress-bar>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'profile-skill',
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
</style>
