<template>
  <li>
    <a class="sns-link" :class="className" :href="link" :title="name" :aria-label="tooltipName">
      <component class="sns-icon" :is="iconSVG">
      </component>
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
    },
    iconSVG () {
      return require('@/components/svg/svg-' + this.name + '.vue').default
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
    .sns-link {
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      // fill: currentColor;
      color: #bbb;
      .sns-icon {
        fill: currentColor;
      }
    }
    .sns-link::before {
      content: '';
      bottom: calc(100% - 7px);
      border: solid 5px transparent;
      border-top-color: currentColor;
    }
    .sns-link::after {
      content: attr(aria-label);
      bottom: calc(100% + 3px);
      padding: .61em .93em;
      font-size: .875rem;
      color: white;
      border-radius: 3px;
    }
    .sns-link::before, 
    .sns-link::after {
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
    .sns-link:hover::before,
    .sns-link:hover::after {
      opacity: 1;
      transform: translate(-50%);
    }
  }
</style>
