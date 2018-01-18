<template>
  <div class="profile-skill">
    <div class="card-header">
      <h3>
        <img :src="imageURL"/>
        {{ title }}
      </h3>
    </div>
    <div class="card-body">
      <progress-bar v-for="item in lang" :kind="item.name" :target="item.value">
        <div class="progress-value">
          <span>{{ item.name }}</span>
          <span>{{ item.value }} %</span>
        </div>
      </progress-bar>
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
      value: 0
    }
  },
  props: {
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
  mounted () {
    setInterval(() => {
      this.value++
    }, 500)
  },
  computed: {
    imageURL () {
      return require('@/assets/img/' + this.image)
    }
  },
  watch: {
    value (v) {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .progress-value {
    display: flex;
    justify-content: space-between;
    font-size: .875rem;
    padding-bottom: .25rem;
  }
</style>
