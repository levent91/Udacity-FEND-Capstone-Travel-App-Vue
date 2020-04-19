<template>
  <div class="navbar">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  color: #dff9fb;
  font-size: 2rem;
  height: 7vh;
  width: 100%;
  font-weight: 700;
  display: flex;
  justify-content: center;
}

h1 {
  margin: auto;
}
</style>