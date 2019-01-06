<template>
  <div class="zoom-container">
    <div class="zoom-card">
      <p class="cancel cursor" @click="cancel">
        <v-icon name="times"/>
      </p>
      <img :class="{hide: largeImage}" class="small-img" :src="smallImage">
      <img :class="{loaded: largeImage}" :src="largeImage">
    </div>
  </div>
</template>

<script>
export default {
  name: "zoom",
  components: {},
  props: {
    image: {
      type: String
    }
  },
  data() {
    return {
      largeImage: null
    };
  },
  mounted() {
    let imgLarge = new Image();
    let path =
      "https://hotehrud.github.io/portfolio-vue/images/" +
      this.image.split(".")[0] +
      "_large.png";
    imgLarge.src = path;
    imgLarge.onload = () => {
      this.largeImage = path;
    };
  },
  methods: {
    cancel() {
      this.$emit("hide");
    }
  },
  computed: {
    smallImage() {
      return require("@/assets/img/" + this.image);
    }
  }
};
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
    margin-top: calc(#{$header-height} / 2);
    margin-left: calc(#{$sidebar-width} / 2);
  }
  .zoom-card {
    position: relative;
    width: 100%;
    height: 70%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
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
        &:hover {
          fill: red;
        }
      }
    }
  }
}
</style>