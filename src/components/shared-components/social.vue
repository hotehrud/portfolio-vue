<template>
  <li>
    <a class="c-link" :class="className" :href="link" :title="name" :aria-label="tooltipName">
      <component class="c-icon" :is="iconSVG">
      </component>
    </a>
  </li>
</template>

<script>
export default {
  name: 'sns-group',
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
      return this.name.charAt(0).toUpperCase() + this.name.slice(1)
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
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -moz-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    height: 40px;
    width: 40px;
    list-style-type: none;
    .c-link {
      position: relative;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -moz-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      color: #bbb;
      .c-icon {
        fill: currentColor;
        transition: .2s;
      }
      &::before {
        content: '';
        bottom: calc(100% - 7px);
        border: solid 5px transparent;
        border-top-color: currentColor;
      }
      &::after {
        content: attr(aria-label);
        bottom: calc(100% + 3px);
        padding: .61em .93em;
        font-size: .875rem;
        color: white;
        border-radius: 3px;
      }
      &::before, 
      &::after {
        position: absolute;
        left: 50%;
        -webkit-transform: translate(-50%, -5px);
        transform: translate(-50%, -5px);
        opacity: 0;
        -webkit-transition: .2s;
        transition: .2s;
      }
      &:hover::before,
      &:hover::after {
        opacity: 1;
      }
    }
  }
</style>
