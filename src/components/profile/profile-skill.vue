<template>
  <div class="profile-skill">
    <div class="card-header">
      <h3>
        <img :src="imageURL"/>
        {{ title }}
      </h3>
      <transition-group class="transition card-header" name="fade" mode="out-in" tag="div">
        <div key="0" class="point-area" v-show="isPoint">
          <span @click="showDetail" class="point point-c">50</span>
          <span @click="showDetail" class="point point-b">75</span>
          <span @click="showDetail" class="point point-a">100</span>
        </div>
        <div key="1" v-show="!isPoint" class="point-area">{{ detailText }}</div>
      </transition-group>
    </div>
    <div class="card-body">
      <progress-bar v-for="item in lang" :kind="item.name" :target="item.value">
        <div class="progress-value" slot-scope="props">
          <span>{{ item.name }}</span>
          <span :class="props.text">{{ item.value }} %</span>
        </div>
      </progress-bar>
    </div>
  </div>
</template>

<script>
import progressBar from '@/components/profile/progress-component'

export default {
  name: 'profile-skill',
  components: {
    progressBar
  },
  data () {
    return {
      value: 0,
      idx: 0,
      isPoint: true,
      detail: ['', 'A', 'B', 'C']
    }
  },
  props: {
    image: {
      type: String
    },
    title: {
      type: String
    },
    lang: {
      type: Array
    }
  },
  mounted () {
  },
  computed: {
    imageURL () {
      return require('@/assets/img/' + this.image)
    },
    level () {
      return 'level-' + this.value
    },
    detailText () {
      return this.detail[this.idx]
    }
  },
  methods: {
    showDetail (e) {
      this.isPoint = false
      let className = e.target.className

      if (className.indexOf('-a') > -1) {
        this.idx = 1
      } else if (className.indexOf('-b') > -1) {
        this.idx = 2
      } else {
        this.idx = 3
      }
      setTimeout(() => {
        this.isPoint = true
      }, 3000)
    },
    hideDetail () {
      this.isPoint = true
      this.idx = 0
    }
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .point-area {
    position: absolute;
    right: 10px;
    height: 24px;
    span {
      color: #fff;
      line-height: 24px;
      font-weight: bold;
      font-size: .75rem;
    }
    .point {
      display: inline-block;
      width: 24px;
      height: 24px;
      border-radius: 0.25rem;
    }
    .point-a {
      background-color: #273238;
    }
    .point-b {
      background-color: #273238;
    }
    .point-c {
      background-color: #273238;
    }
  }

  .progress-value {
    display: flex;
    font-size: .875rem;
    padding-bottom: .25rem;
    .level-100 {
      font-weight: bold;
      // color: #ff5258;
    }
    .level-75 {
      // color: #338ed0;
    }
    .level-50 {
      // color: #f8bb3a;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
