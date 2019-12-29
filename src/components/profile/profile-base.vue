<template>
  <div class="profile-base">
    <card :waiting="waiting">
      <div slot="body">
        <div v-if="!waiting" class="profile">
          <img class="profile-picture" :src="imageURL" />
          <h4 class="profile-name">{{ name }}</h4>
          <h6 class="profile-company">{{ company }}</h6>
          <div class="icon-group">
            <ul>
              <sns-group
                v-for="(item, index) in sns"
                :key="index"
                :name="item.social_name"
                :link="item.social_address"
              />
            </ul>
          </div>
          <div class="resume-box">
            <a href="#none">
              <span @click="openResume">
                <v-icon name="file-alt" />View Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import resumeIcon from "../../assets/img/admin.png";
export default {
  name: "profile-base",
  props: {
    waiting: {
      type: Boolean
    },
    name: {
      type: String
    },
    company: {
      type: String
    },
    picture: {
      type: String
    },
    sns: {
      type: Array
    }
  },
  data() {
    return {
      icon: resumeIcon
    };
  },
  computed: {
    imageURL() {
      return require("@/assets/img/" + this.picture);
    }
  },
  methods: {
    openResume() {
      window.open(
        "https://hotehrud.github.io/portfolio-vue/english_resume.pdf"
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.profile-base .profile {
  @include respond-to($large-desktop) {
    padding: 2rem;
  }
  .profile-picture {
    width: 125px;
    height: 125px;
    border-radius: 50%;
    border: 2px solid #ddd;
  }
  .profile-name {
    margin: 0.625rem 0 0;
    font-size: 1.125rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.87);
  }
  .profile-company {
    line-height: 0.75rem;
    margin-top: 5px;
    font-size: 0.8125rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.54);
  }
  .icon-group {
    position: relative;
    margin-top: 2.5rem;
  }
  ul {
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
  }
  .resume-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 40px;
    margin: 20px auto 0 auto;
    border-radius: 5px;
    background: $primary-color;
    svg {
      width: 18px;
      height: 18px;
      margin-right: 10px;
      fill: #fff;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;
      font-weight: 600;
      color: #fff;
      // line-height: 40px;
      text-decoration: none;
      -webkit-transition: color 0.2s ease-in-out;
      transition: color 0.2s ease-in-out;
      span {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
