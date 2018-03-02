<template>
  <div>
    <slot :text="className"></slot>
    <progress :value="value" max="100"/>
  </div>
</template>

<script>
export default {
  name: 'progress-bar',
  data () {
    return {
      value: 0,
      timer: null
    }
  },
  props: {
    target: {
      type: Number
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.value++
    }, 10)
  },
  computed: {
    percent () {
      return this.target + '%'
    },
    className () {
      return 'level-' + this.target
    }
  },
  watch: {
    value (v) {
      if (v === this.target) {
        clearInterval(this.timer)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .progress-value {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    font-size: .875rem;
    padding-bottom: .25rem;
  }
  progress {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: block;
    width: 100%;
    border-radius: 8px;
    margin-bottom: 0.75rem;
    color: #273238;
  }
 
  progress::-webkit-progress-bar {
    background-color: #eee;
    border-radius: 8px;
  }
  progress::-webkit-progress-value {
    background-color: #273238;
    border-radius: 8px;
  }
  progress::-moz-progress-bar {
    background-color: #eee;
    border-radius: 8px;
  }
</style>
