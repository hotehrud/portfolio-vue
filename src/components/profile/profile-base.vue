<template>
  <div class="profile-base">
    <div class="card-body">
      <loading v-if="waiting"/>
      <transition name="fade">
        <div v-if="!waiting" class="profile">
          <img class="profile-picture" :src="imageURL"/>
          <h4 class="profile-name">{{ name }}</h4>
          <h6 class="profile-company">{{ company }}</h6>
          <div class="icon-group">
            <ul>
              <sns-group 
                v-for="item in sns" 
                :name="item.social_name" 
                :image="item.social_imageURL" 
                :link="item.social_address" />
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import snsGroup from '@/components/profile/profile-sns-component'

export default {
  name: 'profile-base',
  components: {
    snsGroup
  },
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
  computed: {
    imageURL () {
      return require('@/assets/img/' + this.picture)
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
