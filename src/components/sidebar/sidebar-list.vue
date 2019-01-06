<template>
  <div class="drawer-list">
    <ul id="drawerMenu">
      <li>
        <router-link :to="{ name: 'Profile' }">
          <span @click="toggleShow">
            <v-icon name="user"/>Profile
          </span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Resume' }">
          <span @click="toggleShow">
            <v-icon name="file"/>Resume
          </span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Achievement' }">
          <span @click="toggleShow">
            <v-icon name="certificate"/>Achievement
          </span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Projects' }">
          <span @click="toggleShow">
            <v-icon name="project-diagram"/>Projects
          </span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Activities' }">
          <span @click="toggleShow">
            <v-icon name="share-alt"/>Activities
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "menuList",
  components: {},
  data() {
    return {};
  },
  methods: {
    toggleShow() {
      this.$parent.$emit("toggleShow");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.drawer-list {
  margin-top: 1.5rem;
  ul li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 40px;
    svg {
      position: relative;
      bottom: 1px;
      width: 1rem;
      height: 1rem;
      margin-right: 10px;
      fill: #546e7a;
    }
    a {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 0 2rem;
      font-weight: 400;
      color: #546e7a;
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

.drawer-list ul li a.router-link-exact-active {
  color: #fff;
  font-weight: 500;
}

.drawer-list ul li a.router-link-exact-active svg {
  fill: #fff;
}
</style>
