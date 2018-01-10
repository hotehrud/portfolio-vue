<template>
  <div class="main">
    <div class="row">
      <div class="row-1">
        <profile-base
          class="card" 
          :name="profileitems.name"
          :position="profileitems.position"
          :picture="profileitems.picture"
          :sns="profileitems.sns">
        </profile-base>
        <profile-bio 
          class="card" 
          :image="bioitems.image"
          :title="bioitems.title"
          :text="bioitems.text">
        </profile-bio>
      </div>
      <div class="row-2">
        <profile-bio 
          class="card" 
          :image="bioitems.image"
          :title="bioitems.title"
          :text="bioitems.text">
        </profile-bio>
        <div class="row">
          <profile-bio 
            class="row-3 card"
            :image="bioitems.image"
            :title="bioitems.title"
            :text="bioitems.text">
          </profile-bio>
          <profile-bio 
            class="row-4 card"
            :image="bioitems.image"
            :title="bioitems.title"
            :text="bioitems.text">
          </profile-bio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profileBase from '@/components/profile//profile-base'
import profileBio from '@/components/profile//profile-bio'
export default {
  name: 'Profile',
  components: {
    profileBase,
    profileBio
  },
  data () {
    return {
      profileitems: {
        name: 'Lee Jung Hyun',
        position: 'Web developer',
        picture: 'me.jpeg',
        sns: ['github', 'codepen', 'tistory']
      },
      progressbars: '',
      bioitems: {
        title: 'Profile',
        image: 'profile.svg',
        text: 'abc'
      },
      informationitems: '',
      contactitems: '',
      socialicons: '',
      toolitems: ''
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .main .row {
    @include respond-to($tablet-landscape) {
      display: -webkit-flex;
      -webkit-flex-wrap: wrap;
      display: flex;   
      flex-wrap: wrap;
    } 
    @include respond-to($large-desktop) {
      display: -webkit-flex;
      -webkit-flex-wrap: wrap;
      display: flex;   
      flex-wrap: wrap;
    }
  }

  .main .row > div {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .main .row .card {
    background-color: #fff;
  }

  .main .row .row-1 {
    @include respond-to($tablet-landscape) {
      flex: 0 0 33.33333333%;
    } 
    @include respond-to($large-desktop) {
      flex: 0 0 33.33333333%;
    }
  }

  .main .row .row-2 {
    @include respond-to($tablet-landscape) {
      flex: 0 0 66.66666666%;
    } 
    @include respond-to($large-desktop) {
      flex: 0 0 66.66666666%;
    }
  }

  .main .row .row-3 {
    @include respond-to($tablet-landscape) {
      margin-right: 4%;
      flex: 0 0 48%;
    } 
    @include respond-to($large-desktop) {
      margin-right: 4%;
      flex: 0 0 48%;
    }
  }

  .main .row .row-4 {
    @include respond-to($tablet-landscape) {
      flex: 0 0 48%;
    } 
    @include respond-to($large-desktop) {
      flex: 0 0 48%;
    }
  }
</style>
