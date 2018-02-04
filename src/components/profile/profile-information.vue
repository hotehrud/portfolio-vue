<template>
  <div class="profile-info">
    <div class="card-header">
      <h3>
        <img :src="imageURL"/>
        {{ title }}
      </h3>
    </div>
    <div class="card-body">
      <loading v-if="waiting"/>
      <transition-group name="fade" mode="out-in">
        <div v-if="!waiting" :key="index" class="column" v-for="(value, key, index) in info">
          <span class="key">{{ propertyInfo(key) }}</span>
          <span class="value">{{ value }}</span>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import loading from '@/components/shared-components/loading'

export default {
  name: 'profile-info',
  data () {
    return {
    }
  },
  components: {
    loading
  },
  props: {
    waiting: {
      type: Boolean
    },
    image: {
      type: String
    },
    title: {
      type: String
    },
    info: {
      type: Object
    }
  },
  methods: {
    propertyInfo (key) {
      let str = key.replace(/_/gi, ' ')
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  computed: {
    imageURL () {
      return require('@/assets/img/' + this.image)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .profile-info {
    @include respond-to($tablet-landscape) {
      margin-right: 4%;
    } 
    @include respond-to($large-desktop) {
      margin-right: 4%;
    }
    
    .column {
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
      margin: 1rem 0 0;
      border-bottom: 1px groove rgba(0, 0, 0, .12);
      .key {
        font-size: 1rem;
        font-weight: 500;
      }
      .value {
        font-size: .8125rem;
        color: rgba(0,0,0,.65);
      }
    }
  }
</style>
