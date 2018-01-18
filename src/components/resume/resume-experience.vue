<template>
  <div class="resume-experience">
    <div class="card-header">
      <h3>
        <svg viewBox="0 0 24 24"><path fill="#000000" fill-opacity="0.87" d="M14,6H10V4H14M20,6H16V4L14,2H10L8,4V6H4C2.89,6 2,6.89 2,8V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V8C22,6.89 21.1,6 20,6Z"></path></svg>
        {{ title }}
      </h3>
    </div>
    <div class="card-body">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resume-experience',
  data () {
    return {
    }
  },
  props: {
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
  .resume-experience {
    @include respond-to($tablet-landscape) {
      margin-right: 2%;
    } 
    @include respond-to($large-desktop) {
      margin-right: 2%;
    }
  }
</style>
