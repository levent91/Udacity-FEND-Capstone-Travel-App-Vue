<template>
  <div class="section">
    <Form />
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
export default {
  name: "Section",
  props: {
    msg: String
  },
  components: {
    Form
  }
};
</script>

<style lang="scss" scoped>
section {
  display: block;
  margin: auto;
}
</style>
