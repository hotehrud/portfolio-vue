<template>
  <div class="drawer-list">
    <ul id="drawerMenu">
      <li>
        <router-link :to="{ name: 'Profile' }" >
          <span @click="toggleShow">
            <svg viewBox="0 0 24 24">
                <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
            </svg>
            Profile
          </span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Resume' }">
          <span @click="toggleShow">
            <svg viewBox="0 0 24 24">
                <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" />
            </svg>
            Resume
          </span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Achievement' }">
          <span @click="toggleShow">
            <svg viewBox="0 0 512 512">
              <path d="M384.524,0H255.991c-8.285,0-15,6.716-15,15v96.4v75.637L160.15,305.211h191.681l-80.84-118.174V126.4h113.533c8.283,0,15-6.717,15-15V15C399.524,6.716,392.807,0,384.524,0z"/>
              <path d="M476.837,487.945L372.353,335.211H139.628L34.743,488.531c-3.142,4.592-3.482,10.547-0.887,15.467C36.452,508.92,41.559,512,47.124,512h417.733c0.008,0,0.014,0,0.02,0c8.284,0,15-6.715,15-15C479.877,493.6,478.745,490.461,476.837,487.945z"/>
            </svg>
            Achievement
          </span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Projects' }">
          <span @click="toggleShow">
            <svg viewBox="0 0 24 24">
                <path d="M3,3H9V7H3V3M15,10H21V14H15V10M15,17H21V21H15V17M13,13H7V18H13V20H7L5,20V9H7V11H13V13Z" />
            </svg>
            Projects
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'menuList',
  components: {
  },
  data () {
    return {

    }
  },
  methods: {
    toggleShow () {
      this.$parent.$emit('toggleShow')
    }
  }
}
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
        -webkit-transition: color .2s ease-in-out;
        transition: color .2s ease-in-out;
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
