<template>
    <div class="button-box">
        <button class="btn">{{ButtonText}}</button>
    </div>
</template>

<script>
    export default {
        name: "Button",
        props: {
            ButtonText: String
        }
    }
</script>

<style lang="scss" scoped>
.button-box {
  display: flex;
  justify-content: center;
}
.btn {
  margin:1rem auto;
  background-color: transparent;
  border-radius: 1rem;
  border: 1px solid #1f2f47;
  display: inline-block;
  cursor: pointer;
  color: #dff9fb;
  font-size: 1rem;
  padding: 1rem 2.5rem;
  text-decoration: none;
  text-shadow: 1px 1px 0px #263666;
  &:hover {
    background-color: transparent;
    background-color: #34495e;
  }
  &:active {
    position: relative;
    top: 1px;
  }
}
</style>