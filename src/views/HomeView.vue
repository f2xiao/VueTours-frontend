<template>
  <div class="home">
   <Header></Header>
   <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  </div>
</template>

<style lang="scss">
.home{
  height: 100vh;
  position: relative;
  padding: 3rem;
  background:$color-tertiary-dark;
   nav{
    position: fixed;
    right:6rem;
    bottom:6rem;
  }

}
</style>
<script>
// @ is an alias to /src
import Header from "@/components/Header.vue"

export default {
  name: 'HomeView',
  components: {
     Header,
  }
}
</script>
