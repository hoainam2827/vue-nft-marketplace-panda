<template>
  <base-nav />
  <router-view></router-view>
</template>

<script>
import Nav from "./components/navbar/Nav.vue";
export default {
  components: {
    BaseNav: Nav,
  }
}
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
