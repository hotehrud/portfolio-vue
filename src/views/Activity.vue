<template>
  <div class="main activity-container">
    <div v-show="waiting" class="center-loading">
      <loading :textStyle="textStyle" :spotStyle="spotStyle"/>
    </div>

    <activity-card
      v-for="(item, index) in activityItems"
      :key="index"
      :waiting="waiting"
      :title="item.activity_title"
      :kind="item.activity_kind"
      :description="item.activity_description"
      :imageURL="item.activity_imageURL"
      :date="item.activity_date"
      class="card"
    />
  </div>
</template>

<script>
import activityCard from "@/components/activity/activity-card";
import * as activity from "@/json/activity";

export default {
  name: "Activity",
  components: {
    activityCard
  },
  data() {
    return {
      waiting: true,
      activityItems: [],
      textStyle: {
        fontSize: "1.875rem"
      },
      spotStyle: {
        width: "8px",
        height: "8px"
      }
    };
  },
  created() {
    setTimeout(() => {
      this.waiting = false;
      this.activityItems = [...activity.activities];
    }, 500);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.activity-container {
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @include respond-to($large-desktop) {
    margin: -1rem auto;
  }
}
</style>
