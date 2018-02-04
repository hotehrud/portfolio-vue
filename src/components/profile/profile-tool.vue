<template>
  <div class="profile-tool">
    <div class="card-header">
      <h3>
        <img :src="imageURL"/>
        {{ title }}
      </h3>
    </div>
    <div class="card-body">
      <p v-html="text">
      </p>
      <li v-for="item in tools">
      {{ item }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile-tool',
  data () {
    return {
      text: 'There are many skills other than language.</br>Here I have listed some of them:'
    }
  },
  props: {
    image: {
      type: String
    },
    title: {
      type: String
    },
    tools: {
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
  .profile-tool {
    font-size: .875rem;
    text-align: left;
    color: rgba(0, 0, 0, .65);
    p {
      margin: 0 0 1rem 0;
    }
    li {
      padding: .21rem 0;
    }
  }
</style>
