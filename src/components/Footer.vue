<template>
  <div class="footer">
    <div class="footer-title">{{FooterTitle}}</div>
    <div class="footer-share"></div> //add share buttons with flex spacebetween if needed
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    FooterTitle: String
  }
};
</script>

<style lang="scss" scoped>
.footer {
  color: #dff9fb;
  font-size: 1.2rem;
  height: 7vh;
  width: 100%;
  font-weight: 700;
  display: flex;
  justify-content: center;
}

.footer-title {
  margin: auto;
}
</style>
