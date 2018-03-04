<template>
  <div class="zoom-container">
    <div class="zoom-card">
      <p class="cancel" @click="cancel">
        <svg x="0px" y="0px" width="24px" height="24px" viewBox="0 0 510 510" style="enable-background:new 0 0 24 24;" xml:space="preserve"><path d="M405.6,69.6C360.7,24.7,301.1,0,237.6,0s-123.1,24.7-168,69.6S0,174.1,0,237.6s24.7,123.1,69.6,168s104.5,69.6,168,69.6 s123.1-24.7,168-69.6s69.6-104.5,69.6-168S450.5,114.5,405.6,69.6z M386.5,386.5c-39.8,39.8-92.7,61.7-148.9,61.7 s-109.1-21.9-148.9-61.7c-82.1-82.1-82.1-215.7,0-297.8C128.5,48.9,181.4,27,237.6,27s109.1,21.9,148.9,61.7 C468.6,170.8,468.6,304.4,386.5,386.5z"/>
          <path d="M342.3,132.9c-5.3-5.3-13.8-5.3-19.1,0l-85.6,85.6L152,132.9c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1 l85.6,85.6l-85.6,85.6c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.6-85.6l85.6,85.6c2.6,2.6,6.1,4,9.5,4 c3.5,0,6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-85.4-85.6l85.6-85.6C347.6,146.7,347.6,138.2,342.3,132.9z"/>
        </svg>
      </p>
      <img :class="{hide: largeImage}" class="small-img" :src="smallImage"/>
      <img :class="{loaded: largeImage}" :src="largeImage"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zoom',
  components: {},
  props: {
    image: {
      type: String
    }
  },
  data () {
    return {
      largeImage: null
    }
  },
  mounted () {
    let imgLarge = new Image()
    let path = 'https://hotehrud.github.io/portfolio-vue/images/' + this.image.split('.')[0] + '_large.png'
    imgLarge.src = path
    imgLarge.onload = () => {
      this.largeImage = path
    }
  },
  methods: {
    cancel () {
      this.$parent.zoom(false)
    }
  },
  computed: {
    smallImage () {
      return require('@/assets/img/' + this.image)
    }
  }
}
</script>

<style lang="scss" scoped>
  .zoom-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    padding-left: 1rem;
    padding-right: 1rem;
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
    z-index: 9999;
    @include respond-to($large-desktop) {
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      margin-top: calc(#{ $header-height } / 2);
      margin-left: calc(#{ $sidebar-width } / 2);
    }
    .zoom-card {
      position: relative;
      width: 100%;
      height: 70%;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
      @include respond-to($large-desktop) {
        width: 500px;
      }
      img {
        padding: 0rem 2rem 2rem 2rem;
        width: 100%;
        height: 90%;
        opacity: 0;
        transition: opacity 1s linear;
      }
      .small-img {
        opacity: 1;
        filter: blur(10px);
      }
      .loaded {
        // position: absolute;
        // top: 40px;
        // left: 0;
        opacity: 1;
      }
      .hide {
        position: absolute;
        top: 40px;
        left: 0;
        opacity: 0;
      }
      .cancel {
        height: 2.5rem;
        svg {
          width: 100%;
          height: 100%;
          z-index: 9999;
        }
      }
      
    }
  }
</style>