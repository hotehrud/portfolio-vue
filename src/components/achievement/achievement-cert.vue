<template>
  <div class="achievemnet-cert">
    <card :waiting="waiting">
      <div slot="header" class="card-header">
        <h3>
          <img :src="imageURL"/>
          {{ title }}
        </h3>
      </div>

      <div slot="body">
        
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'achievemnet-complete',
  components: {
  },
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
    complete: {
      type: Array
    }
  },
  computed: {
    imageURL () {
      return require('@/assets/img/' + this.image)
    },
    mapImage () {
      return require('@/assets/img/host.svg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .profile-base .profile {
    @include respond-to($tablet-landscape) {
      padding: 2rem;
    } 
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
      margin: .625rem 0 0;
      font-size: 1.125rem;
      font-weight: 500;
      color: rgba(0, 0, 0, .87);
    }
    .profile-company {
      line-height: .75rem;
      margin: 0;
      font-size: .8125rem;
      font-weight: 400;
      color: rgba(0, 0, 0, .54);
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
  }
</style>
