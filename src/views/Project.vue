<template>
  <div class="main project">
    <zoom v-if="isZoom" v-on:hide="zoomHide" :image="zoomImage"/>
    <video-view
      v-if="videoURL"
      :videoURL="videoURL"
      :posterURL="videoPosterURL"
      class="video-container"
    >
      <p class="cancel cursor" @click="videoHide">
        <v-icon name="times"/>
      </p>
    </video-view>
    <div v-if="waiting" class="center-loading">
      <loading :textStyle="textStyle" :spotStyle="spotStyle"/>
    </div>
    <div class="row project-container">
      <div class="row-5">
        <transition-group name="fade" mode="out-in">
          <project-card
            v-on:zoom="zoom"
            v-on:showVideo="showVideo"
            v-for="(item, index) in leftCards"
            :key="index"
            :waiting="waiting"
            :title="item.project_title"
            :subtitle="item.project_subtitle"
            :image="item.project_image"
            :link="item.project_link"
            :detail="item.project_detail"
            :desc="item.project_description"
            :skill="item.project_skill"
          />
        </transition-group>
      </div>
      <div class="row-5">
        <transition-group name="fade" mode="out-in">
          <project-card
            v-on:zoom="zoom"
            v-on:showVideo="showVideo"
            v-for="(item, index) in rightCards"
            :key="index"
            :waiting="waiting"
            :title="item.project_title"
            :subtitle="item.project_subtitle"
            :image="item.project_image"
            :link="item.project_link"
            :detail="item.project_detail"
            :desc="item.project_description"
            :skill="item.project_skill"
          />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import projectCard from "@/components/project/project-card-component";
import videoView from "@/components/shared-components/video";

import * as project from "../../docs/json/project";

export default {
  name: "Project",
  components: {
    projectCard,
    videoView
  },
  data() {
    return {
      waiting: true,
      isZoom: false,
      zoomImage: "",
      videoURL: "",
      videoPosterURL: "",
      projectItems: [],
      textStyle: {
        fontSize: "1.875rem"
      },
      spotStyle: {
        width: "8px",
        height: "8px"
      }
    };
  },
  created() {
    setTimeout(() => {
      this.waiting = false;
      this.projectItems = project.projects;
    }, 500);
  },
  computed: {
    leftCards() {
      let temp = [];
      let len = this.projectItems.length;

      for (let i = 0; i < len; i += 2) {
        temp.push(this.projectItems[i]);
      }
      return temp;
    },
    rightCards() {
      let temp = [];
      let len = this.projectItems.length;

      for (let i = 1; i < len; i += 2) {
        temp.push(this.projectItems[i]);
      }
      return temp;
    }
  },
  methods: {
    showVideo({ videoURL, videoPosterURL }) {
      this.videoURL = videoURL;
      this.videoPosterURL = videoPosterURL;
    },
    zoom(zoomImage) {
      if (typeof zoomImage !== "undefined") {
        this.isZoom = true;
        this.zoomImage = zoomImage;
      }
    },
    zoomHide() {
      this.isZoom = false;
    },
    videoHide() {
      this.videoURL = "";
    }
  }
};
</script>

<style lang="scss" scpoed>
.main {
  position: relative;
  .project-loading {
    position: fixed;
    top: 65px;
    left: 0;
    width: 100%;
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
      width: calc(100% - #{$sidebar-width});
      left: $sidebar-width;
    }
    height: calc(100% - #{$header-height});
    .loading-container {
      font-size: 1.875rem;
      span[class*="l-"] {
        height: 8px;
        width: 8px;
      }
    }
  }
  .project-container {
    flex-wrap: wrap;
  }
  .video-container {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
    height: 100%;
    z-index: 9999;
    @include respond-to($large-desktop) {
      width: calc(100% - #{$sidebar-width});
      height: 500px;
      transform: translate(-50%, -250px);
      top: 50%;
      left: 50%;
      margin-top: calc(65px / 2);
      margin-left: calc(256px / 2);
    }
    .cancel {
      svg {
        width: 48px;
        height: 48px;
        &:hover {
          fill: red;
        }
      }
      // position: absolute;
      // top: 0;
      // right: 0;
    }
  }
}
</style>
