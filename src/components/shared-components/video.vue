<template>
  <div class="video-container">
    <slot/>
    <video :poster="imageURL" ref="video" id="video" controls>
      <source :src="resourceURL" type="video/mp4">Sorry. Your browser doesn't support video.
    </video>
  </div>
</template>

<script>
export default {
  props: {
    posterURL: {
      type: String
    },
    videoURL: {
      type: String
    },
    play: {
      type: Boolean
    }
  },
  data() {
    return {
      url: this.path
      // currentTime: 0,
      // duration: 0
    };
  },
  mounted() {
    // const video = this.$refs.video;
    // video.onloadedmetadata = e => {
    // video.play();
    // this.duration = Math.floor(video.duration);
    // this.interval = setInterval(() => {
    //   this.currentTime = Math.floor(video.currentTime);
    // }, 100);
    // };
    // video.onended = e => {
    //   video.play();
    // };
  },
  computed: {
    // volume() {
    //   return this.$store.getters.volume("video") / 100;
    // },
    // isMuted() {
    //   return this.$store.getters.isMuted("video");
    // },
    resourceURL() {
      return `https://hotehrud.github.io/portfolio-vue/videos/${this.videoURL}`;
    },
    imageURL() {
      if (this.posterURL) {
        return require("@/assets/img/" + this.posterURL);
      }
    }
  }
  // destroyed() {
  //   clearInterval(this.interval);
  // },
  // watch: {
  //   currentTime(v) {
  //     this.$emit("updateTime", {
  //       currentTime: v,
  //       duration: this.duration
  //     });
  //   },
  //   play(lock) {
  //     if (!lock) {
  //       this.$refs.video.currentTime = 0;
  //       this.$refs.video.play();
  //     }
  //   },
  //   path(v) {
  //     if (this.url !== v) {
  //       this.url = v;
  //       this.$refs.video.load();
  //       this.$refs.video.play();
  //       this.$refs.video.muted = this.isMuted;
  //       this.$refs.video.volume = this.volume;
  //     }
  //   },
  //   volume(v) {
  //     if (this.$refs.video) {
  //       this.$refs.video.volume = v;
  //     }
  //   },
  //   isMuted(v) {
  //     if (this.$refs.video) {
  //       if (v) {
  //         this.$refs.video.muted = true;
  //       } else {
  //         this.$refs.video.muted = false;
  //         this.$refs.video.volume = this.volume;
  //       }
  //     }
  //   }
  // }
};
</script>

<style lang="scss" scoped>
.video-container {
  video {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>