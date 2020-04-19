<template>
  <div class="all">
    <NavBar title="Travel App" />
    <Section />
    <Footer FooterTitle="Udacity FEND Capstone Project" />
  </div>
</template>

<script>

import Section from "@/components/Section.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Section,
    NavBar,
    Footer
  }
};
</script>

<style lang="scss">
</style>
