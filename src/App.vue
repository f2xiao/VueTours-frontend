<template>
  <Header></Header>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import "@/assets/styles/icon-font.css"; 
</style>
<script>
import Header from "@/components/Header.vue"
export default {
  components:{
    Header
  }
}
</script>