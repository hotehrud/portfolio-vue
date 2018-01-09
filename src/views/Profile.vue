<template>
  <div class="main">
    <div class="row">
      <div class="row-1">
        <profile-bio 
          :image="bioitems.image"
          :title="bioitems.title"
          :text="bioitems.text">
        </profile-bio>
        <profile-bio 
          :image="bioitems.image"
          :title="bioitems.title"
          :text="bioitems.text">
        </profile-bio>
      </div>
      <div class="row-2">
        <profile-bio 
          :image="bioitems.image"
          :title="bioitems.title"
          :text="bioitems.text">
        </profile-bio>
        <div class="row">
          <profile-bio 
          class="row-3"
          :image="bioitems.image"
          :title="bioitems.title"
          :text="bioitems.text">
          </profile-bio>
          <profile-bio 
            class="row-4"
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
import profileBio from '@/components/profile//profile-bio'
export default {
  name: 'Profile',
  components: {
    profileBio
  },
  data () {
    return {
      profileitems: '',
      progressbars: '',
      bioitems: {
        title: 'Profile',
        image: '',
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

  .main .row .row-1 {
    flex: 0 0 33.33333333%;
  }

  .main .row .row-2 {
    flex: 0 0 66.66666666%;
  }

  .main .row .row-3 {
    flex: 0 0 50%;
  }

  .main .row .row-4 {
    flex: 0 0 50%;
  }
</style>
