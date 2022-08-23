<template>
  <div class="box-header-public" id="header-public">
    <div class="box-left">
      <div class="title-header">
        <img src="./icons/logo.svg" alt="" />
      </div>
    </div>
    <div class="box-right">
      <nav class="nav">
        <router-link class="menu-item" :to="{name: 'home-route'}">Home</router-link>
        <router-link class="menu-item" :to="{name: 'marketplace-route'}">Marketplace</router-link>
        <a class="menu-item" href="https://pokemon-card-vue.netlify.app/" target="blank">Pokemon</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { iconsHeader } from './icons'
export default {

}
</script>

<style scoped lang="scss">
@import './style.scss'
</style>