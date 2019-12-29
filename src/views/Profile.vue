<template>
  <div class="main">
    <div class="row">
      <div class="row-1">
        <profile-base
          :waiting="waiting"
          :name="baseItems.name"
          :company="baseItems.company"
          :picture="baseItems.picture"
          :sns="baseItems.sns"
        />
        <profile-skill
          :waiting="waiting"
          :image="skillItems.image"
          :title="skillItems.title"
          :skills="skillItems.skills"
          :langages="skillItems.langages"
        />
      </div>
      <div class="row-2">
        <profile-bio
          :waiting="waiting"
          :image="bioItems.image"
          :title="bioItems.title"
          :text="bioItems.text"
        />
        <div class="row">
          <profile-info
            class="row-4"
            :waiting="waiting"
            :image="infoItems.image"
            :title="infoItems.title"
            :info="infoItems.info"
          />
          <profile-tool
            class="row-4"
            :waiting="waiting"
            :image="toolItems.image"
            :title="toolItems.title"
            :tools="toolItems.tool"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profileBase from "@/components/profile/profile-base";
import profileSkill from "@/components/profile/profile-skill";
import profileBio from "@/components/profile//profile-biography";
import profileInfo from "@/components/profile/profile-information";
import profileTool from "@/components/profile/profile-tool";

import * as profile from "../../docs/json/profile";

export default {
  name: "Profile",
  components: {
    profileBase,
    profileSkill,
    profileBio,
    profileInfo,
    profileTool
  },
  data() {
    return {
      waiting: true,
      baseItems: {
        name: "",
        company: "",
        picture: "",
        sns: []
      },
      skillItems: {
        title: "Skills",
        image: "plus-one.svg",
        lang: []
      },
      bioItems: {
        title: "Profile",
        image: "profile.svg",
        text: ""
      },
      infoItems: {
        title: "Information",
        image: "info.svg",
        info: {
          name: "",
          date_of_birth: "",
          tel: "",
          email: "",
          address: ""
        }
      },
      toolItems: {
        title: "Toolbox",
        image: "wrench.svg",
        tool: []
      }
    };
  },
  created() {
    let info = profile.informations;
    let toolbox = profile.toolboxes;

    setTimeout(() => {
      this.waiting = false;
      this.baseItems.name = profile.profile_name;
      this.baseItems.company = profile.profile_company;
      this.baseItems.picture = profile.profile_imageURL;
      this.baseItems.sns = profile.socials;
      this.bioItems.text = profile.profile_bio;
      this.skillItems.skills = profile.skills;
      this.skillItems.langages = profile.skill_langages;
      this.infoItems.info.name = info.info_name;
      this.infoItems.info.date_of_birth = info.info_date_of_birth;
      this.infoItems.info.tel = info.info_tel;
      this.infoItems.info.email = info.info_email;
      this.infoItems.info.address = info.info_address;
      this.toolItems.tool = toolbox.toolbox_kind.split(",");
    }, 500);
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
