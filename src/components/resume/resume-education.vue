<template>
  <div class="resume-education">
    <div class="card-header">
      <h3>
        <svg viewBox="0 0 24 24"><path fill="#000000" fill-opacity="0.87" d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"></path></svg>
        {{ title }}
      </h3>
    </div>
    <div class="card-body">
      <loading v-if="waiting"/>
      <transition name="fade">
        <p v-if="!waiting">{{ text }}</p>
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
    text: {
      type: String
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
  p {
    padding-right: 2.5rem;
  }
</style>
