<template>
  <li>
    <a :href="link" :title="name">
      <img :alt="name" :src="imageURL" />
    </a>
  </li>
</template>

<script>
export default {
  name: 'sns-group',
  data () {
    return {
    }
  },
  props: {
    name: {
      type: String
    },
    image: {
      type: String
    },
    link: {
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
  li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 40px;
    width: 40px;
  }

  li a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  li a img {
    width: 24px;
    height: 24px;
  }
</style>
