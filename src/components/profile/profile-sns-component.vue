<template>
  <li>
    <a class="sns-icon" :class="className" :href="link" :title="name" :aria-label="tooltipName">
      <object :data="imageURL" type="image/svg+xml"/>
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
    },
    tooltipName () {
      return this.name
    },
    className () {
      return 'c-link--' + this.name.toLowerCase()
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
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 40px;
    width: 40px;
    .sns-icon {
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      object {
        width: 24px;
        height: 24px;
      }
    }
    .sns-icon::before {
      content: '';
      bottom: calc(100% - 7px);
      border: solid 5px transparent;
      border-top-color: currentColor;
    }
    .sns-icon::after {
      content: attr(aria-label);
      bottom: calc(100% + 3px);
      padding: .61em .93em;
      font-size: .875rem;
      color: white;
      border-radius: 3px;
    }
    .sns-icon::before, 
    .sns-icon::after {
      display: block;
      position: absolute;
      left: 50%;
      -webkit-transform: translate(-50%, -10px);
      transform: translate(-50%, -10px);
      opacity: 0;
      -webkit-transition: .2s;
      transition: .2s;
      pointer-events: none;
    }
    .sns-icon:hover::before,
    .sns-icon:hover::after {
      opacity: 1;
      transform: translate(-50%);
    }
  }
</style>
