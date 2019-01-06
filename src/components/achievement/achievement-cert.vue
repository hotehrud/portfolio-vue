<template>
  <div class="achievement-cert">
    <card :waiting="waiting">
      <div slot="header" class="card-header">
        <h3>
          <img :src="imageURL">
          {{ title }}
        </h3>
      </div>

      <div slot="body">
        <ul class="timeline">
          <li v-for="(item, index) in cert" :key="index">
            <h4 class="title">{{ item.cert_title }}</h4>
            <div class="information">
              <span class="location">
                <img :src="mapImage" alt="Host">
                {{ item.cert_location }}
              </span>
              <span class="time">{{ item.cert_date }}</span>
            </div>
          </li>
        </ul>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: "achievemnet-cert",
  props: {
    waiting: {
      type: Boolean
    },
    title: {
      type: String
    },
    image: {
      type: String
    },
    cert: {
      type: Array
    }
  },
  computed: {
    imageURL() {
      return require("@/assets/img/" + this.image);
    },
    mapImage() {
      return require("@/assets/img/host.svg");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.achievement-cert {
  .timeline {
    position: relative;
    margin: 0 0 0 0.625rem;
    text-align: left;
    list-style: none;
    li {
      position: relative;
      padding: 0 0 1rem 1rem;
      @include respond-to($large-desktop) {
        padding: 0 0 1.5rem 2.5rem;
      }
      &:before {
        content: url(../../assets/img/check.svg);
        width: 1rem;
        height: 1rem;
        position: absolute;
        top: 2px;
        left: -8px;
      }
      .information {
        display: flex;
        color: rgba(0, 0, 0, 0.54);
        margin: 5px 0px;
        .location {
          font-size: 0.75rem;
          img {
            position: relative;
            top: 1px;
            opacity: 0.3;
            width: 0.75rem;
            height: 0.75rem;
          }
        }
        .time {
          margin-left: auto;
          font-size: 0.875rem;
        }
      }
    }
    li:last-child {
      padding-bottom: 0;
    }
  }
}
</style>
