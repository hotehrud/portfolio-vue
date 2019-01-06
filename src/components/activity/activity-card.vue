<template>
  <div class="activity-card-container">
    <card :waiting="waiting">
      <div slot="body">
        <div v-if="!waiting" class="activity-card">
          <div class="activity-card-img" :aria-label="title">
            <v-icon v-if="!isLoadedImage" name="spinner" spin class="spinner"/>
            <img v-else :src="resourceURL">
          </div>

          <div class="activity-card-desc">
            <p class="desc-text">
              <v-icon name="quote-left" class="quote-left"/>
              {{description}}
              <v-icon name="quote-right" class="quote-right"/>
            </p>
          </div>

          <div class="activity-card-date">
            <div class="empty-box"></div>
            {{date}}
          </div>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  props: {
    waiting: {
      type: Boolean
    },
    title: {
      type: String
    },
    kind: {
      type: String
    },
    description: {
      type: String
    },
    imageURL: {
      type: String
    },
    date: {
      type: String
    }
  },
  data() {
    return {
      isLoadedImage: false
    };
  },
  mounted() {
    const img = new Image();
    img.onload = () => {
      this.isLoadedImage = true;
    };
    img.src = require("@/assets/img/" + this.imageURL);
  },
  computed: {
    resourceURL() {
      return require("@/assets/img/" + this.imageURL);
    }
  }
};
</script>

<style lang="scss" scoped>
$card-marign: 1rem;

.activity-card-container {
  position: relative;
  width: 100%;
  margin-bottom: 10px;
  // max-width: calc(25% - #{$card-marign});
  @include aspect-ratio(9, 12);
  @include respond-to($large-desktop) {
    max-width: calc(33% - #{$card-marign * 2});
    margin: $card-marign;
  }
  > div {
    position: absolute !important;
    height: 100%;
    width: 100%;
  }
  .activity-card {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    > div {
      width: 100%;
    }
    .activity-card-img {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 42.5%;
      border-bottom: 1px solid rgba(0,0,0,0.2);
      img {
        width: 100%;
        height: 100%;
        max-height: 100%;
      }
    }
    .activity-card-desc {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 42.5%;
      padding: 1rem;
      .desc-text {
        position: relative;
        margin: 2rem;
        line-height: 1.5;
        text-align: initial;
      }
      .quote-left {
        position: absolute;
        left: -2rem;
        top: -10px;
      }
      .quote-right {
        position: absolute;
        right: -2rem;
        bottom: 10px;
      }
      svg {
        width: 1rem;
        height: 1rem;
      }
    }
    .activity-card-date {
      width: 80%;
      margin: 0 auto;
      height: 15%;
      box-shadow: inset 0px 10px 10px -10px #ccc;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      color: rgba(0, 0, 0, 0.5);
      font-size: 0.875rem;
    }
  }
}
</style>