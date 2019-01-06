<template>
  <div class="project-card">
    <card :waiting="waiting">
      <div slot="header" class="project-header">
        <div class="project-image">
          <img :src="imageURL">
        </div>
        <div class="project-title">
          <h3>{{ title }}</h3>
          <h4>{{ subtitle }}</h4>
        </div>
        <div class="project-link">
          <a v-if="link" :href="link">
            <v-icon name="link"/>
          </a>
          <span v-if="detail && detail.type" @click="zoomDetail">
            <v-icon :name="detail.type"/>
          </span>
        </div>
      </div>

      <div slot="body">
        <p class="desc" v-html="desc"/>
        <p>
          <br>
        </p>
        <span v-html="skill"/>
      </div>
    </card>
  </div>
</template>

<script>
import { isEmpty } from "@/js/helper";
export default {
  name: "project-card",
  props: {
    waiting: {
      type: Boolean
    },
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    image: {
      type: String
    },
    link: {
      type: String
    },
    detail: {
      type: Object
    },
    desc: {
      type: String
    },
    skill: {
      type: String
    }
  },
  created() {
    if (!isEmpty(this.detail)) {
      this.detailType = this.detail.type;
      this.detailURL = this.detail.resourceURL;
      this.detailThumbnailURL = this.detail.thumbnailURL;
    }
  },
  computed: {
    imageURL() {
      return require("@/assets/img/" + this.image);
    }
  },
  methods: {
    zoomDetail() {
      if (!this.detailType) {
        return;
      }
      if (this.detailType === "image") {
        this.$emit("zoom", this.detailURL);
      } else {
        this.$emit("showVideo", {
          videoURL: this.detailURL,
          videoPosterURL: this.detailThumbnailURL
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.project-card {
  .project-header {
    position: relative;
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding: 1rem;
    .project-image {
      img {
        width: 45px;
        height: 45px;
        margin-right: 10px;
        margin-right: 0.625rem;
        border: 2px solid #ddd;
        border-radius: 50%;
      }
    }
    .project-title {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
      h4 {
        color: rgba(0, 0, 0, 0.65);
      }
    }
    .project-link {
      span {
        cursor: pointer;
      }
      svg {
        width: 1.25rem;
        height: 1.25rem;
        opacity: 0.5;
        margin: 0 2.5px;
      }
    }
    h3,
    h4 {
      margin: 0;
    }
  }
  .desc {
    text-align: left;
  }
}
</style>
