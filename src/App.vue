<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  font-size: 16px;
}
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  margin: 1rem;
  padding: 0;
  border: 0;
  font-family: "Lato", "sans";
  background-image: linear-gradient(
      to right,
      rgba(22, 160, 133, 0.5),
      rgba(26, 188, 156, 0.4)
    ),
    url("../public/blue_ocean.jpg");
  background-color: black;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#app {
  width: 95vw;
  min-height: 100vh;
}
</style>
